import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { Route, Router, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";

// Get the base path from Vite's BASE_URL
const basePath = import.meta.env.BASE_URL || '/';

// Custom hook to get location without base path
function useBaseLocation() {
  const pathname = window.location.pathname;
  
  // Remove base path if present
  if (basePath && basePath !== '/' && pathname.startsWith(basePath)) {
    return pathname.slice(basePath.length) || '/';
  }
  
  return pathname || '/';
}

function AppRouter() {
  const location = useBaseLocation();

  // Handle GitHub Pages 404 redirect
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect');
    
    if (redirect) {
      // Remove base path if present
      let newPath = redirect;
      if (basePath && basePath !== '/' && newPath.startsWith(basePath)) {
        newPath = newPath.slice(basePath.length) || '/';
      }
      // Normalize path
      if (!newPath.startsWith('/')) newPath = '/' + newPath;
      // Update URL
      window.history.replaceState({}, '', basePath + newPath);
      window.location.reload();
      return;
    }
  }, []);

  return (
    <Router base={basePath}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
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
