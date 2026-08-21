// Build-time prerender of all routes into static HTML with per-route head tags
// and JSON-LD, so crawlers that do not execute JS (most AI crawlers) see the
// full content. Runs after `vite build`; Netlify serves the emitted files
// before the SPA fallback, so client-side routing is untouched.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

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

const buildSitemap = (routes, SITE_URL, lastmod) => {
  const entries = routes
    .map((route) => {
      const url = `${SITE_URL}${route.path === "/" ? "/" : route.path}`;
      const alternates = (route.alternates ?? [])
        .map(
          (alt) =>
            `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${SITE_URL}${alt.path}" />`
        )
        .join("\n");
      return [
        "  <url>",
        `    <loc>${url}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
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

const vite = await createServer({
  mode: "production",
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

try {
  const { render, ROUTES, SITE_URL } = await vite.ssrLoadModule(
    "/src/prerender-entry.tsx"
  );

  const template = readFileSync(join(dist, "index.html"), "utf8");
  if (!template.includes("<!-- meta:start -->")) {
    throw new Error("dist/index.html is missing the meta:start/meta:end markers");
  }

  for (const route of ROUTES) {
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

  const lastmod = new Date().toISOString().slice(0, 10);
  writeFileSync(join(dist, "sitemap.xml"), buildSitemap(ROUTES, SITE_URL, lastmod));
  console.log("wrote dist/sitemap.xml");
} finally {
  await vite.close();
}
