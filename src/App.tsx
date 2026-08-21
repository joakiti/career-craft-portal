import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import AiGuide from "./pages/AiGuide";
import AnchorPage from "./pages/AnchorPage";
import AgenticMand from "./pages/AgenticMand";
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
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ai-guide" element={<AiGuide />} />
          <Route path="/om-mig" element={<AnchorPage lang="da" />} />
          <Route path="/about" element={<AnchorPage lang="en" />} />
          <Route path="/danmarks-mest-agentiske-mand" element={<AgenticMand />} />
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
