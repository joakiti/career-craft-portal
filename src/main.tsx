import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root")!;

// Production pages are prerendered (scripts/prerender.mjs), so hydrate to keep
// the already-painted DOM. Dev serves an empty root, where hydration is invalid.
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
