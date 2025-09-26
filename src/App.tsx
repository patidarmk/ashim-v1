import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet 
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import Layout from './components/Layout';
import PlanetsPage from './pages/Planets';
import StarsPage from './pages/Stars';
import GalaxiesPage from './pages/Galaxies';
import NebulaePage from './pages/Nebulae';
import AboutPage from './pages/About';
import CelestialBodyPage from './pages/celestial/Body';

const queryClient = new QueryClient();

// Create root route
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Layout>
          <Toaster />
          <Sonner />
          <Outlet />
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  ),
})

// Create routes
const indexRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/', component: Index });
const planetsRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/planets', component: PlanetsPage });
const starsRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/stars', component: StarsPage });
const galaxiesRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/galaxies', component: GalaxiesPage });
const nebulaeRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/nebulae', component: NebulaePage });
const aboutRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/about', component: AboutPage });
const celestialBodyRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/celestial/$bodyId', component: CelestialBodyPage });


// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  planetsRoute,
  starsRoute,
  galaxiesRoute,
  nebulaeRoute,
  aboutRoute,
  celestialBodyRoute,
]);

// Create router
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;