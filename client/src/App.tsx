import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";

// Get the base path from Vite's BASE_URL
const basePath = import.meta.env.BASE_URL || '/';

function Router() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    // Get the actual pathname from the browser
    const actualPath = window.location.pathname;
    
    // Remove base path to get the route path
    let routePath = actualPath;
    if (basePath && basePath !== '/' && actualPath.startsWith(basePath)) {
      routePath = actualPath.slice(basePath.length) || '/';
    }
    
    // Normalize: ensure it starts with /
    if (!routePath.startsWith('/')) {
      routePath = '/' + routePath;
    }
    
    // Handle 404 redirect from GitHub Pages
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect');
    if (redirect) {
      let newPath = redirect;
      if (basePath && basePath !== '/' && newPath.startsWith(basePath)) {
        newPath = newPath.slice(basePath.length) || '/';
      }
      if (!newPath.startsWith('/')) newPath = '/' + newPath;
      setLocation(newPath);
      // Clean up URL
      window.history.replaceState({}, '', basePath + newPath);
      return;
    }
    
    // Update location if it doesn't match the route path
    if (location !== routePath) {
      setLocation(routePath);
    }
  }, []); // Only run once on mount

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
