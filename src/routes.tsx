import { createElement, type ComponentType, type ReactElement } from "react";
import { ROUTES, type RouteMeta } from "@/data/profile";

// Single route table: the browser router (App.tsx), the prerender script
// (scripts/prerender.mjs) and the SEO gate (scripts/seo-check.mjs) all
// enumerate APP_ROUTES, so a route cannot exist in one place and silently be
// missing from another. The assertions below throw at module load, which
// breaks the dev server, the prerender step and therefore the build.

type PageModule = { default: ComponentType<Record<string, unknown>> };

// The glob key doubles as the page's source path, so the component that
// renders and the module whose git history feeds the sitemap <lastmod>
// (see scripts/prerender.mjs) can never point at different files.
const pages = import.meta.glob<PageModule>("./pages/*.tsx", { eager: true });

const BINDINGS: Record<string, { module: string; props?: Record<string, unknown> }> = {
  "/": { module: "./pages/Index.tsx" },
  "/profile": { module: "./pages/Profile.tsx" },
  "/om-mig": { module: "./pages/AnchorPage.tsx", props: { lang: "da" } },
  "/about": { module: "./pages/AnchorPage.tsx", props: { lang: "en" } },
  "/agentisk-ingenioer": { module: "./pages/AgentiskIngenioer.tsx" },
  "/ai-guide": { module: "./pages/AiGuide.tsx" },
};

export interface AppRoute extends RouteMeta {
  /** Page source path relative to src/, as a glob key (e.g. "./pages/Index.tsx"). */
  module: string;
  element: ReactElement;
}

const metaPaths = ROUTES.map((r) => r.path);
if (new Set(metaPaths).size !== metaPaths.length) {
  throw new Error(`Duplicate paths in ROUTES (src/data/profile.ts): ${metaPaths.join(", ")}`);
}
for (const path of metaPaths) {
  if (!BINDINGS[path]) {
    throw new Error(
      `Route ${path} has metadata in ROUTES (src/data/profile.ts) but no page binding in src/routes.tsx`
    );
  }
}
for (const path of Object.keys(BINDINGS)) {
  if (!metaPaths.includes(path)) {
    throw new Error(
      `Route ${path} is bound in src/routes.tsx but has no metadata in ROUTES (src/data/profile.ts)`
    );
  }
}
const boundModules = new Set(Object.values(BINDINGS).map((b) => b.module));
for (const key of Object.keys(pages)) {
  if (!boundModules.has(key)) {
    throw new Error(
      `Page module ${key} is not bound to any route in src/routes.tsx; every file in src/pages must be routed (or deleted)`
    );
  }
}

export const APP_ROUTES: AppRoute[] = ROUTES.map((meta) => {
  const { module, props } = BINDINGS[meta.path];
  const page = pages[module];
  if (!page?.default) {
    throw new Error(`Route ${meta.path} binds to ${module}, which does not exist or has no default export`);
  }
  return { ...meta, module, element: createElement(page.default, props) };
});
