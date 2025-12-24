import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Performance optimizations
if (typeof window !== 'undefined') {
  document.documentElement.style.setProperty('--animation-duration', '0.25s');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.documentElement.style.setProperty('--animation-duration', '0.05s');
  }
}

createRoot(document.getElementById("root")!).render(<App />);
