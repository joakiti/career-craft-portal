// Build-time prerender of all routes into static HTML with per-route head tags
// and JSON-LD, so crawlers that do not execute JS (most AI crawlers) see the
// full content. Runs after `vite build`; Netlify serves the emitted files
// before the SPA fallback, so client-side routing is untouched.
//
// Routes come from src/routes.tsx (the same table the browser router renders
// from), never from a separate list. Sitemap <lastmod> comes from the git
// commit date of each route's content: the transitive module graph of the
// route's page component plus the shared shell, never the build timestamp.
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

const git = (...args) =>
  execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();

const escapeAttr = (s) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

// </script> and HTML comments must not appear literally inside inline JSON-LD.
const jsonLdScript = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replaceAll("<", "\\u003c")}</script>`;

const buildHead = (route, SITE_URL) => {
  const url = `${SITE_URL}${route.path === "/" ? "/" : route.path}`;
  const image = `${SITE_URL}/img/social-preview.jpg`;
  const locale = route.lang === "da" ? "da_DK" : "en_US";
  const lines = [
    `<title>${escapeAttr(route.title)}</title>`,
    `<meta name="title" content="${escapeAttr(route.title)}" />`,
    `<meta name="description" content="${escapeAttr(route.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
  ];
  for (const alt of route.alternates ?? []) {
    lines.push(
      `<link rel="alternate" hreflang="${alt.hreflang}" href="${SITE_URL}${alt.path}" />`
    );
  }
  lines.push(
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${escapeAttr(route.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(route.description)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:locale" content="${locale}" />`,
    `<meta property="twitter:card" content="summary_large_image" />`,
    `<meta property="twitter:url" content="${url}" />`,
    `<meta property="twitter:title" content="${escapeAttr(route.title)}" />`,
    `<meta property="twitter:description" content="${escapeAttr(route.description)}" />`,
    `<meta property="twitter:image" content="${image}" />`,
    jsonLdScript(route.jsonLd)
  );
  return lines.join("\n    ");
};

const buildSitemap = (routes, SITE_URL, lastmodByPath) => {
  const entries = routes
    .map((route) => {
      const url = `${SITE_URL}${route.path === "/" ? "/" : route.path}`;
      const lastmod = lastmodByPath.get(route.path);
      const alternates = (route.alternates ?? [])
        .map(
          (alt) =>
            `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${SITE_URL}${alt.path}" />`
        )
        .join("\n");
      return [
        "  <url>",
        `    <loc>${url}</loc>`,
        lastmod ? `    <lastmod>${lastmod}</lastmod>` : "",
        alternates,
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`;
};

// Transitively collect the source files (under root, outside node_modules)
// that `startFile` pulls in, according to Vite's module graph. `skipFiles`
// subtrees are not entered.
const collectDeps = (moduleGraph, startFile, skipFiles = new Set()) => {
  const files = new Set();
  const visited = new Set();
  const queue = [...(moduleGraph.getModulesByFile(startFile) ?? [])];
  if (queue.length === 0) {
    throw new Error(`Module graph has no entry for ${startFile}; cannot compute lastmod`);
  }
  while (queue.length > 0) {
    const mod = queue.pop();
    if (!mod || visited.has(mod)) continue;
    visited.add(mod);
    if (mod.file) {
      if (mod.file.includes("node_modules") || skipFiles.has(mod.file)) continue;
      if (mod.file.startsWith(root)) files.add(mod.file);
    }
    for (const dep of [...mod.importedModules, ...(mod.ssrImportedModules ?? [])]) {
      queue.push(dep);
    }
  }
  return files;
};

const vite = await createServer({
  mode: "production",
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

try {
  const { render, APP_ROUTES, SITE_URL } = await vite.ssrLoadModule(
    "/src/prerender-entry.tsx"
  );

  const template = readFileSync(join(dist, "index.html"), "utf8");
  if (!template.includes("<!-- meta:start -->")) {
    throw new Error("dist/index.html is missing the meta:start/meta:end markers");
  }

  for (const route of APP_ROUTES) {
    const appHtml = render(route.path);
    const page = template
      .replace(/<html lang="[^"]*"/, `<html lang="${route.lang}"`)
      .replace(
        /<!-- meta:start -->[\s\S]*?<!-- meta:end -->/,
        buildHead(route, SITE_URL)
      )
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    const outDir =
      route.path === "/" ? dist : join(dist, route.path.replace(/^\//, ""));
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "index.html"), page);
    console.log(`prerendered ${route.path} -> ${join(outDir, "index.html")}`);
  }

  // Per-route <lastmod>: last commit touching the route's page module graph,
  // the shared shell (App.tsx minus the route table's page subtree), or the
  // files every rendered page depends on (route table, profile data, HTML
  // template). A shallow clone cannot answer "when did this last change", so
  // there we omit lastmod entirely rather than publish a wrong date.
  const routesFile = join(root, "src/routes.tsx");
  const shellDeps = collectDeps(
    vite.moduleGraph,
    join(root, "src/App.tsx"),
    new Set([routesFile])
  );
  const baseDeps = new Set([
    ...shellDeps,
    routesFile,
    join(root, "src/data/profile.ts"),
    join(root, "index.html"),
  ]);

  const isShallow = git("rev-parse", "--is-shallow-repository") === "true";
  const lastmodByPath = new Map();
  const allDeps = new Set();
  if (isShallow) {
    console.warn(
      "WARNING: shallow git clone; omitting sitemap <lastmod> instead of guessing. " +
        "Fetch full history in CI to restore per-route lastmod."
    );
  } else {
    for (const route of APP_ROUTES) {
      const pageFile = join(root, "src", route.module.replace(/^\.\//, ""));
      const deps = new Set([...collectDeps(vite.moduleGraph, pageFile), ...baseDeps]);
      for (const f of deps) allDeps.add(f);
      const files = [...deps].map((f) => relative(root, f));
      const date = git("log", "-1", "--format=%cs", "--", ...files);
      if (!date) {
        throw new Error(
          `No git history for any content file of ${route.path}; commit the route's files before building`
        );
      }
      lastmodByPath.set(route.path, date);
      console.log(`lastmod ${route.path} = ${date} (${files.length} content files)`);
    }
    const dirty = git("status", "--porcelain", "--", ...[...allDeps].map((f) => relative(root, f)));
    if (dirty) {
      console.warn(
        "WARNING: uncommitted changes in content files; sitemap <lastmod> reflects the last commit, not the working tree:\n" +
          dirty
      );
    }
  }

  writeFileSync(join(dist, "sitemap.xml"), buildSitemap(APP_ROUTES, SITE_URL, lastmodByPath));
  console.log("wrote dist/sitemap.xml");

  // Fill the generated section of _redirects from the same route table.
  const redirectsPath = join(dist, "_redirects");
  const redirects = readFileSync(redirectsPath, "utf8");
  if (!redirects.includes("# routes:start")) {
    throw new Error("public/_redirects is missing the routes:start/routes:end markers");
  }
  const routeRules = APP_ROUTES.filter((r) => r.path !== "/")
    .map((r) => `${r.path}  ${r.path}/index.html  200`)
    .join("\n");
  writeFileSync(
    redirectsPath,
    redirects.replace(
      /# routes:start[\s\S]*?# routes:end/,
      `# routes:start (generated by scripts/prerender.mjs from src/routes.tsx)\n${routeRules}\n# routes:end`
    )
  );
  console.log("wrote dist/_redirects");

  // Hand the route expectations to scripts/seo-check.mjs, which validates the
  // built output. Generated from the router table, never hand-kept.
  const manifest = {
    siteUrl: SITE_URL,
    lastmodOmitted: isShallow,
    routes: APP_ROUTES.map((route) => ({
      path: route.path,
      lang: route.lang,
      url: `${SITE_URL}${route.path === "/" ? "/" : route.path}`,
      file: route.path === "/" ? "index.html" : `${route.path.replace(/^\//, "")}/index.html`,
    })),
  };
  writeFileSync(join(root, ".prerender-manifest.json"), JSON.stringify(manifest, null, 2));
  console.log("wrote .prerender-manifest.json");
} finally {
  await vite.close();
}
