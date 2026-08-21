import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppShell } from "./App";

export { ROUTES, SITE_URL } from "./data/profile";

export function render(path: string): string {
  return renderToString(
    <StaticRouter location={path}>
      <AppShell />
    </StaticRouter>
  );
}
