// SEO gate over the built output in dist/. Runs after scripts/prerender.mjs
// and FAILS THE BUILD (exit 1) when a page that would be published is broken:
// missing/empty title, canonical, meta description, Open Graph tags, JSON-LD,
// wrong h1 count, or a route/page mismatch between the router and dist/.
// Checks parse the emitted HTML, not the source, so whatever broke upstream
// still cannot ship. Warnings (length budgets) do not fail the build.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

const failures = [];
const warnings = [];
const fail = (page, msg) => failures.push(`${page}: ${msg}`);
const warn = (page, msg) => warnings.push(`${page}: ${msg}`);

let manifest;
try {
  manifest = JSON.parse(readFileSync(join(root, ".prerender-manifest.json"), "utf8"));
} catch {
  console.error("seo-check: .prerender-manifest.json missing or unreadable; run scripts/prerender.mjs first");
  process.exit(1);
}

// --- route/page coverage: every router route has a built page, every built
// page belongs to a router route -----------------------------------------
const findPages = (dir) => {
  const found = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      if (entry !== "assets" && entry !== "img") found.push(...findPages(path));
    } else if (entry === "index.html") {
      found.push(relative(dist, path));
    }
  }
  return found;
};

const builtPages = new Set(findPages(dist));
const expectedPages = new Set(manifest.routes.map((r) => r.file));
for (const route of manifest.routes) {
  if (!builtPages.has(route.file)) {
    fail(route.path, `route is in the router but ${route.file} was not prerendered`);
  }
}
for (const page of builtPages) {
  if (!expectedPages.has(page)) {
    fail(`/${page}`, "prerendered page has no corresponding route in src/routes.tsx");
  }
}

// --- per-page checks ------------------------------------------------------
const unescapeHtml = (s) =>
  s
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&amp;", "&");
const tagAttrs = (tag) =>
  Object.fromEntries(
    [...tag.matchAll(/([a-zA-Z0-9:-]+)\s*=\s*"([^"]*)"/g)].map((m) => [m[1], m[2]])
  );
const metaContent = (html, kind, name) => {
  const tags = [...html.matchAll(new RegExp(`<meta[^>]*\\b${kind}="${name}"[^>]*>`, "g"))];
  return { count: tags.length, content: tags[0] ? tagAttrs(tags[0][0]).content : undefined };
};

for (const route of manifest.routes) {
  if (!builtPages.has(route.file)) continue;
  const page = route.path;
  const html = readFileSync(join(dist, route.file), "utf8");

  // title
  const titles = [...html.matchAll(/<title>([\s\S]*?)<\/title>/g)];
  if (titles.length !== 1) fail(page, `expected exactly one <title>, found ${titles.length}`);
  const title = unescapeHtml(titles[0]?.[1].trim() ?? "");
  if (titles.length === 1 && title === "") fail(page, "<title> is empty");
  if (title.length > 68) warn(page, `<title> is ${title.length} chars (budget 68): "${title}"`);

  // canonical
  const canonicals = [...html.matchAll(/<link[^>]*\brel="canonical"[^>]*>/g)];
  let canonical;
  if (canonicals.length !== 1) {
    fail(page, `expected exactly one canonical link, found ${canonicals.length}`);
  } else {
    canonical = tagAttrs(canonicals[0][0]).href;
    if (canonical !== route.url) fail(page, `canonical is "${canonical}", expected "${route.url}"`);
  }

  // meta description
  const desc = metaContent(html, "name", "description");
  const descText = unescapeHtml(desc.content ?? "").trim();
  if (desc.count !== 1) fail(page, `expected exactly one meta description, found ${desc.count}`);
  else if (!descText) fail(page, "meta description is empty");
  else if (descText.length > 160)
    warn(page, `meta description is ${descText.length} chars (budget 160)`);
  else if (descText.length < 50)
    warn(page, `meta description is only ${descText.length} chars`);

  // exactly one h1, and it must be rendered content (inside #root), not shell
  const h1Count = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1Count !== 1) fail(page, `expected exactly one <h1>, found ${h1Count}`);
  const rootIdx = html.indexOf('<div id="root">');
  if (rootIdx === -1) fail(page, 'missing <div id="root">');
  else if (h1Count === 1 && html.indexOf("<h1") < rootIdx)
    fail(page, "<h1> appears outside the prerendered app root");

  // real content without JavaScript: visible text in the prerendered body
  if (rootIdx !== -1) {
    const text = html
      .slice(rootIdx)
      .replace(/<script[\s\S]*?<\/script>/g, " ")
      .replace(/<style[\s\S]*?<\/style>/g, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (text.length < 400)
      fail(page, `prerendered body has only ${text.length} chars of visible text (minimum 400)`);
  }

  // Open Graph
  for (const prop of ["og:type", "og:title", "og:description", "og:url", "og:image"]) {
    const og = metaContent(html, "property", prop);
    if (og.count !== 1) fail(page, `expected exactly one ${prop}, found ${og.count}`);
    else if (!og.content?.trim()) fail(page, `${prop} is empty`);
  }
  const ogUrl = metaContent(html, "property", "og:url").content;
  if (canonical && ogUrl && ogUrl !== canonical)
    fail(page, `og:url "${ogUrl}" does not match canonical "${canonical}"`);

  // JSON-LD: at least one block that parses and declares a schema.org context
  const jsonLdBlocks = [
    ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
  ];
  if (jsonLdBlocks.length === 0) fail(page, "no JSON-LD block");
  for (const block of jsonLdBlocks) {
    try {
      const parsed = JSON.parse(block[1]);
      if (!JSON.stringify(parsed).includes("schema.org"))
        fail(page, "JSON-LD block does not reference schema.org");
    } catch {
      fail(page, "JSON-LD block is not valid JSON");
    }
  }

  // html lang matches the route's declared language
  const lang = html.match(/<html[^>]*\blang="([^"]*)"/)?.[1];
  if (lang !== route.lang) fail(page, `<html lang> is "${lang}", expected "${route.lang}"`);
}

// --- sitemap --------------------------------------------------------------
let sitemap = "";
try {
  sitemap = readFileSync(join(dist, "sitemap.xml"), "utf8");
} catch {
  fail("sitemap.xml", "missing from dist/");
}
if (sitemap) {
  const locs = [...sitemap.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map((m) => m[1].trim());
  const expectedUrls = new Set(manifest.routes.map((r) => r.url));
  for (const url of expectedUrls) {
    if (!locs.includes(url)) fail("sitemap.xml", `missing <loc> for ${url}`);
  }
  for (const loc of locs) {
    if (!expectedUrls.has(loc)) fail("sitemap.xml", `<loc> ${loc} is not a router route`);
  }
  if (manifest.lastmodOmitted) {
    warn("sitemap.xml", "lastmod omitted (shallow git clone at build time)");
  } else {
    const urlBlocks = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)];
    for (const block of urlBlocks) {
      const loc = block[1].match(/<loc>([\s\S]*?)<\/loc>/)?.[1].trim();
      const lastmod = block[1].match(/<lastmod>([\s\S]*?)<\/lastmod>/)?.[1].trim();
      if (!lastmod || !/^\d{4}-\d{2}-\d{2}$/.test(lastmod)) {
        fail("sitemap.xml", `${loc}: lastmod "${lastmod}" missing or not an ISO date`);
      } else if (lastmod > new Date().toISOString().slice(0, 10)) {
        fail("sitemap.xml", `${loc}: lastmod "${lastmod}" is in the future`);
      }
    }
  }
}

// --- report ---------------------------------------------------------------
for (const w of warnings) console.warn(`seo-check WARN  ${w}`);
for (const f of failures) console.error(`seo-check FAIL  ${f}`);
console.log(
  `seo-check: ${manifest.routes.length} routes, ${builtPages.size} built pages, ` +
    `${failures.length} failures, ${warnings.length} warnings`
);
if (failures.length > 0) process.exit(1);
