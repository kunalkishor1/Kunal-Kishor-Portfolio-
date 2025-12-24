import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";

// Get the base path from Vite's BASE_URL
const basePath = import.meta.env.BASE_URL;

function Router() {
  const [location, setLocation] = useLocation();

  // Handle GitHub Pages 404 redirect and normalize path
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect');
    
    if (redirect) {
      // Remove base path if present and normalize
      let newPath = redirect;
      if (basePath && basePath !== '/' && newPath.startsWith(basePath)) {
        newPath = newPath.slice(basePath.length) || '/';
      }
      // Remove leading/trailing slashes except for root
      newPath = newPath === '' ? '/' : newPath.replace(/^\/+|\/+$/g, '') || '/';
      if (!newPath.startsWith('/')) newPath = '/' + newPath;
      setLocation(newPath);
      return;
    }

    // Normalize current location - remove base path
    let currentPath = location;
    if (basePath && basePath !== '/' && currentPath.startsWith(basePath)) {
      currentPath = currentPath.slice(basePath.length) || '/';
    }
    // Ensure path starts with /
    if (!currentPath.startsWith('/')) {
      currentPath = '/' + currentPath;
    }
    
    // Update location if it doesn't match
    if (currentPath !== location) {
      setLocation(currentPath);
    }
  }, [location, setLocation]);

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
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
