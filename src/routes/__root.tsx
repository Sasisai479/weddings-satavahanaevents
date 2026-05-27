import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

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
          <Link to="/" className="inline-flex rounded-md bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl text-foreground">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try refreshing the page.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
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

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  ssr: false,
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Satavahana Events — Luxury Telugu Weddings & Celebrations" },
      {
        name: "description",
        content:
          "Premium Telugu wedding planners in Hyderabad. Luxury weddings, temple weddings, destination weddings, sangeet, reception & private events — cinematically crafted.",
      },
      { property: "og:title", content: "Satavahana Events — Luxury Telugu Weddings & Celebrations" },
      { property: "og:description", content: "Luxury Telugu wedding planners creating timeless celebrations, temple weddings, destination weddings & premium wedding experiences in Hyderabad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content: "luxury wedding planners Hyderabad, Telugu wedding planner, temple wedding Ammapalli, destination wedding India, Satavahana Events",
      },
      { name: "twitter:title", content: "Satavahana Events — Luxury Telugu Weddings & Celebrations" },
      { name: "description", content: "Luxury Telugu wedding planners creating timeless celebrations, temple weddings, destination weddings & premium wedding experiences in Hyderabad." },
      { name: "twitter:description", content: "Luxury Telugu wedding planners creating timeless celebrations, temple weddings, destination weddings & premium wedding experiences in Hyderabad." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/ldnDeVy9L6Zo7KuGXUuWpteNaQC3/social-images/social-1779463697914-satavahana_events_logo.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/ldnDeVy9L6Zo7KuGXUuWpteNaQC3/social-images/social-1779463697914-satavahana_events_logo.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
      { rel: "canonical", href: "https://weddings.satavahanaevents.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Satavahana Events",
          alternateName: "Satavahana Events Hyderabad",
          url: "https://weddings.satavahanaevents.com",
          logo: "https://weddings.satavahanaevents.com/satavahana-logo.png",
          description: "Best wedding planners in Hyderabad. Luxury wedding decorations, Telugu weddings, destination weddings, Ammapalli Temple weddings, Haldi Mehendi Sangeet, royal wedding stage decoration, affordable wedding packages & celebrity style wedding planning services.",
          telephone: "+918885552388",
          email: "info@satavahanaeventshyderabad.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 17.3850,
            longitude: 78.4867,
          },
          areaServed: [
            "Hyderabad",
            "Telangana",
            "India",
          ],
          sameAs: [
            "https://instagram.com/satavahanaevents",
          ],
          priceRange: "$$$",
          makesOffer: {
            "@type": "Offer",
            itemOffered: [
              {
                "@type": "Service",
                name: "Luxury Wedding Planning",
                description: "Premium luxury wedding decorations in Hyderabad for grand celebrations",
              },
              {
                "@type": "Service",
                name: "Telugu Wedding Planning",
                description: "Telugu wedding planners in Hyderabad for traditional weddings",
              },
              {
                "@type": "Service",
                name: "Destination Wedding Planning",
                description: "Destination wedding planning services in Hyderabad",
              },
              {
                "@type": "Service",
                name: "Ammapalli Temple Wedding Planning",
                description: "Ammapalli Temple wedding planners in Hyderabad",
              },
              {
                "@type": "Service",
                name: "Haldi, Mehendi & Sangeet Planning",
                description: "Haldi, Mehendi & Sangeet event planners in Hyderabad",
              },
              {
                "@type": "Service",
                name: "Wedding Reception Planning",
                description: "Wedding reception decoration ideas & planning in Hyderabad",
              },
              {
                "@type": "Service",
                name: "Engagement Planning",
                description: "Engagement event planners in Hyderabad for memorable celebrations",
              },
              {
                "@type": "Service",
                name: "Wedding Mandap Decoration",
                description: "Wedding mandap decorators in Hyderabad for traditional and luxury mandaps",
              },
              {
                "@type": "Service",
                name: "Wedding Stage Decoration",
                description: "Wedding stage decorators in Hyderabad for royal and elegant stages",
              },
              {
                "@type": "Service",
                name: "Wedding Decoration Packages",
                description: "Affordable wedding decoration packages in Hyderabad",
              },
              {
                "@type": "Service",
                name: "Low Budget Wedding Planning",
                description: "Low budget wedding planners in Hyderabad for affordable celebrations",
              },
              {
                "@type": "Service",
                name: "Grand Wedding Planning",
                description: "Grand wedding planners in Hyderabad for luxurious celebrations",
              },
              {
                "@type": "Service",
                name: "Wedding Coordination Services",
                description: "Wedding coordination services in Hyderabad for seamless execution",
              },
              {
                "@type": "Service",
                name: "Wedding Consulting",
                description: "Wedding consultants in Hyderabad for expert guidance",
              },
            ],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Satavahana Events",
          image: "https://weddings.satavahanaevents.com/satavahana-logo.png",
          "@id": "",
          url: "https://weddings.satavahanaevents.com",
          telephone: "+918885552388",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 17.3850,
            longitude: 78.4867,
          },
          priceRange: "$$$",
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "09:00",
            closes: "21:00",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  // Scroll to top on route change for a smoother navigation feel
  useEffect(() => {
    const unsub = router.subscribe("onResolved", () => {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    });
    return unsub;
  }, [router]);

  // Global reveal-on-scroll: any element with class "reveal" fades up when in view
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    const observe = () => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
    };
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-h-screen pt-0">
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
    </QueryClientProvider>
  );
}
