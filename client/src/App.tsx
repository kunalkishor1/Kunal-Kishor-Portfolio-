import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";

// Get base path from import.meta.env or default to '/'
const getBasePath = () => {
  // Check if we're on GitHub Pages
  if (import.meta.env.BASE_URL && import.meta.env.BASE_URL !== '/') {
    return import.meta.env.BASE_URL;
  }
  // Check if pathname starts with repository name
  if (window.location.pathname.startsWith('/Kunal-Kishor-Portfolio-')) {
    return '/Kunal-Kishor-Portfolio-';
  }
  return '';
};

function Router() {
  const basePath = getBasePath();
  const [location, setLocation] = useLocation();

  // Handle GitHub Pages 404 redirect
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect');
    if (redirect) {
      urlParams.delete('redirect');
      const newPath = redirect.replace(basePath, '') || '/';
      setLocation(newPath);
    }
    
    // Normalize the current path
    const currentPath = location.replace(basePath, '') || '/';
    if (location !== basePath + currentPath && currentPath !== location) {
      setLocation(currentPath);
    }
  }, [basePath, location, setLocation]);

  return (
    <Switch>
      <Route path={basePath + "/" || "/"} component={Home} />
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
