// @ts-nocheck
import { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  createRoute,
  createRouter,
  Outlet,
  Link,
  useRouteError,
  useRouter,
  useLoaderData,
  notFound,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingContact } from "./components/FloatingContact";
import Index from "./routes/index";
import About from "./routes/about";
import Gallery from "./routes/gallery";
import Contact from "./routes/contact";
import ServicesIndex from "./routes/services.index";
import ServiceSlug from "./routes/services.$slug";
import { services, getService } from "./lib/services";
import "./styles.css";

// Create root route with context
const rootRoute = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = rootRoute.useRouteContext();
  const router = useRouter();

  useEffect(() => {
    const unsub = router.subscribe("onResolved", () => {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    });
    return unsub;
  }, [router]);

  useEffect(() => {
    const observe = () => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
        const io = new IntersectionObserver(
          (entries) => {
            for (const e of entries) {
              if (e.isIntersecting) {
                e.target.classList.add("is-visible");
                io.unobserve(e.target);
              }
            }
          },
          { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );
        io.observe(el);
      });
    };
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      mo.disconnect();
    };
  }, []);

  return (
    <div>
      <Header />
      <main className="min-h-screen pt-0">
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient-gold">404</h1>
        <h2 className="mt-4 text-xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex rounded-md bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent() {
  const error = useRouteError() as Error;
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl text-foreground">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error?.message || "Please try refreshing the page."}</p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); }}
            className="rounded-md bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90"
          >
            Try again
          </button>
          <a href="/" className="rounded-md border border-border px-5 py-2.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

// Create index route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

// About route
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

// Gallery route
const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: Gallery,
});

// Contact route
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

// Services index route
const servicesIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesIndex,
});

// Services slug route
const servicesSlugRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/$slug",
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  component: function ServiceSlugWrapper() {
    const { service } = useLoaderData<typeof servicesSlugRoute.loader>();
    return <ServiceSlug service={service} />;
  },
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  galleryRoute,
  contactRoute,
  servicesIndexRoute,
  servicesSlugRoute,
]);

// Create router
export const createAppRouter = (queryClient: QueryClient) => {
  return createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
};

// Register types (commented out to avoid duplicate declaration with src/main.tsx)
// declare module "@tanstack/react-router" {
//   interface Register {
//     router: ReturnType<typeof createAppRouter>;
//   }
// }
