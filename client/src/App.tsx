import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";

function Router() {
  // Handle GitHub Pages 404 redirect
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect');
    if (redirect) {
      // Remove base path if present
      const basePath = '/Kunal-Kishor-Portfolio-';
      let newPath = redirect;
      if (newPath.startsWith(basePath)) {
        newPath = newPath.slice(basePath.length) || '/';
      }
      // Update URL without base path
      window.history.replaceState({}, '', import.meta.env.BASE_URL + newPath);
    }
  }, []);

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
