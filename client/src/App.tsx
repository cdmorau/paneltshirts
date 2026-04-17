import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/home";
import DesignerPage from "./pages/DesignerPage";
import BibliotecaPage from "./pages/BibliotecaPage";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

function Router() {
  return (
    <WouterRouter base={base}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/designer"} component={DesignerPage} />
        <Route path={"/biblioteca"} component={BibliotecaPage} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

// NOTE: About Theme
// - Design: Minimalist Urban Contemporary - Light theme (white background, black text)
// - Color palette: Pure black and white with gray accents
// - Typography: Montserrat for headings (bold, urban), Inter for body (clean, readable)

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
