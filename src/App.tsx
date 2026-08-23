import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { APP_ROUTES } from "./routes";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

// Router-agnostic shell so the prerender script can render routes through a
// StaticRouter while the browser uses BrowserRouter (see scripts/prerender.mjs).
export const AppShell = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-accent focus:text-primary focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium"
      >
        Spring til indhold
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Routes>
          {APP_ROUTES.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
    </TooltipProvider>
  </QueryClientProvider>
);

const App = () => (
  <BrowserRouter>
    <AppShell />
  </BrowserRouter>
);

export default App;
