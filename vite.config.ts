import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig(async () => {
  const plugins = [
    react(),
    runtimeErrorOverlay(),
  ];

  // Only add Replit plugin in development and if REPL_ID is set
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    plugins.push(cartographer());
  }

  return {
    base: process.env.GITHUB_PAGES === 'true' ? '/Kunal-Kishor-Portfolio-/' : '/',
    plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'ui-vendor': ['@radix-ui/react-toast', '@radix-ui/react-tooltip', '@radix-ui/react-progress'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: [],
  },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
