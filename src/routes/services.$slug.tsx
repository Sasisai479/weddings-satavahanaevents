import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ArrowLeft, Phone } from "lucide-react";
import { getService, services, type Service } from "@/lib/services";
import { ContactForm } from "@/components/ContactForm";
import { whatsappLink, defaultWAMessage, PHONE } from "@/lib/contact";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import luxury1 from "@/assets/luxury-1.jpg";
import luxury2 from "@/assets/luxury-2.jpg";
import luxury3 from "@/assets/luxury-3.jpg";
import luxury4 from "@/assets/luxury-4.jpg";
import luxury5 from "@/assets/luxury-5.jpg";
import luxury6 from "@/assets/luxury-6.jpg";
import luxury7 from "@/assets/luxury-7.jpg";
import luxury8 from "@/assets/luxury-8.jpg";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    
    const getPageTitle = (service: any) => {
      switch (service.slug) {
        case "luxury-weddings":
          return "Luxury Wedding Decorations in Hyderabad | Satavahana Events";
        case "temple-weddings":
          return "Ammapalli Temple Wedding Planners | Telugu Wedding Planners Hyderabad";
        case "destination-weddings":
          return "Destination Wedding Planning Services in Hyderabad | Satavahana Events";
        case "engagements":
          return "Engagement Event Planners in Hyderabad | Memorable Celebrations";
        case "haldi":
          return "Haldi & Mehendi Event Planners in Hyderabad | Satavahana Events";
        case "sangeet":
          return "Sangeet Event Planners in Hyderabad | Entertainment & Choreography";
        case "reception":
          return "Wedding Reception Decoration Ideas & Planning in Hyderabad";
        default:
          return `${service.title} in Hyderabad | Satavahana Events`;
      }
    };
    
    const getMetaDescription = (service: any) => {
      switch (service.slug) {
        case "luxury-weddings":
          return "Premium luxury wedding decorations in Hyderabad for grand celebrations. Elegant wedding decor, mandap decoration & royal wedding stage decoration services by Satavahana Events. Call 8885552388.";
        case "temple-weddings":
          return "Ammapalli Temple wedding planners in Hyderabad. Traditional Telugu wedding organizers for South Indian temple weddings. Pandit coordination, traditional decor & complete wedding management. Call 8885552388.";
        case "destination-weddings":
          return "Destination wedding planning services in Hyderabad. Pan-India & international destination weddings - Goa, Jaipur, Udaipur, Bali. Complete travel, stay & decor management. Call 8885552388.";
        case "engagements":
          return "Engagement event planners in Hyderabad for memorable celebrations. Custom backdrops, floral decor & cinematic photography for your ring ceremony. Call 8885552388.";
        case "haldi":
          return "Haldi, Mehendi & Sangeet event planners in Hyderabad. Vibrant haldi ceremonies with marigold decor, poolside setups & candid photography. Call 8885552388.";
        case "sangeet":
          return "Sangeet event planners in Hyderabad with choreography, concert-grade sound & lighting, artist management & complete production. Make your sangeet unforgettable. Call 8885552388.";
        case "reception":
          return "Wedding reception decoration ideas & planning in Hyderabad. Designer stages, five-star catering, signature welcome rituals & entertainment. Call 8885552388.";
        default:
          return `${service.tagline} Professional ${service.title.toLowerCase()} services in Hyderabad by Satavahana Events. Call 8885552388 for a consultation.`;
      }
    };
    
    const getKeywords = (service: any) => {
      const baseKeywords = "Satavahana Events, Hyderabad, wedding planners, event management, wedding organisers, marriage planners";
      switch (service.slug) {
        case "luxury-weddings":
          return `${baseKeywords}, luxury weddings, luxury wedding decorations, best wedding decorators in Hyderabad, premium wedding decorators, royal wedding stage decoration, luxury mandap decoration, wedding mandap decorators Hyderabad, wedding stage decorators Hyderabad, elegant weddings, grand celebrations, grand wedding planners Hyderabad, wedding decoration packages Hyderabad`;
        case "temple-weddings":
          return `${baseKeywords}, temple weddings, Ammapalli temple wedding planners, Telugu wedding planners, Telugu wedding organisers Hyderabad, traditional South Indian weddings, temple wedding organizers, pandit coordination, wedding planners in Hyderabad for Telugu weddings`;
        case "destination-weddings":
          return `${baseKeywords}, destination weddings, destination wedding planning, Goa weddings, Jaipur weddings, Udaipur weddings, Bali weddings, wedding travel management, complete wedding planning services`;
        case "engagements":
          return `${baseKeywords}, engagement planners, engagement events, ring ceremony, engagement decor, memorable celebrations, engagement event planners in Hyderabad`;
        case "haldi":
          return `${baseKeywords}, haldi ceremony, mehendi, haldi planners, mehendi planners, haldi decor, marigold decor, Haldi Mehendi Sangeet event planners, wedding function organisers Hyderabad`;
        case "sangeet":
          return `${baseKeywords}, sangeet, sangeet planners, choreography, DJ nights, artist management, sangeet production, wedding event organisers Hyderabad`;
        case "reception":
          return `${baseKeywords}, wedding reception, reception decor, reception ideas, wedding reception planning, five-star reception, wedding reception decoration ideas, wedding decoration services Hyderabad`;
        default:
          return `${baseKeywords}, ${service.title.toLowerCase()}`;
      }
    };
    
    return {
      meta: [
        { title: getPageTitle(s) },
        { name: "description", content: getMetaDescription(s) },
        { name: "keywords", content: getKeywords(s) },
        { property: "og:title", content: getPageTitle(s) },
        { property: "og:description", content: getMetaDescription(s) },
        { property: "og:image", content: s?.image ?? "" },
        { property: "og:type", content: "article" },
        { property: "og:site_name", content: "Satavahana Events" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: getPageTitle(s) },
        { name: "twitter:description", content: getMetaDescription(s) },
      ],
      links: [{ rel: "canonical", href: `/services/${s?.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="container-luxe pt-40 pb-24 text-center">
      <h1 className="text-4xl">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-primary">← Back to services</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-luxe pt-40 pb-24 text-center">
      <h1 className="text-4xl">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
        <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover" width={1280} height={720} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
        <div className="container-luxe relative z-10 flex h-full flex-col justify-end pb-20 pt-32">
          <Link to="/services" className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary hover:opacity-80">
            <ArrowLeft className="h-3.5 w-3.5" /> All services
          </Link>
          <h1 className="max-w-4xl text-5xl leading-[1.05] md:text-7xl">{service.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{service.tagline}</p>
        </div>
      </section>

      {/* Content */}
      <section className="border-t border-border/60 py-20 md:py-28">
        <div className="container-luxe grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">The Experience</p>
            <p className="mt-5 text-lg leading-relaxed text-foreground/90">{service.description}</p>

            {service.ammapalliNote && (
              <div className="mt-10 rounded-xl border border-primary/30 bg-primary/5 p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-primary">Specialty</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">{service.ammapalliNote}</p>
                <a
                  href="https://ammapallitempleweddings.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm text-primary hover:underline"
                >
                  Visit ammapallitempleweddings.com →
                </a>
              </div>
            )}

            <div className="mt-12">
              <h2 className="text-2xl">Signature highlights</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl">What's included</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.inclusions.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <a
                href={whatsappLink(defaultWAMessage(service.title))}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-7 py-3.5 text-sm uppercase tracking-[0.22em] text-primary-foreground hover:opacity-90"
              >
                WhatsApp About {service.title}
              </a>
            </div>
          </div>

          {/* Inline form */}
          <aside className="md:col-span-5">
            <div className="sticky top-28 rounded-2xl border border-border/60 bg-card p-7">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">Enquire</p>
              <h3 className="mt-2 text-2xl">Tell us about your event</h3>
              <div className="mt-6">
                <ContactForm preselectService={service.title} />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Moments gallery */}
      <section className="border-t border-border/60 py-20 md:py-24">
        <div className="container-luxe">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Moments</p>
            <h2 className="mt-3 text-3xl md:text-4xl">{service.title} — Cinematic Frames</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {(() => {
              if (service.slug === "luxury-weddings") {
                return [];
              }
              return [service.image, g1, g2, g3, g4, g5, g6].map((src, i) => (
                <div key={i} className={`group overflow-hidden rounded-lg ${i === 0 ? "col-span-2 md:col-span-2 md:row-span-2" : ""} aspect-square`}>
                  <img src={src} alt={`${service.title} ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-border/60 py-24 md:py-32">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 50% 0%, oklch(0.82 0.13 75 / 0.4), transparent 60%)" }} />
        <div className="container-luxe relative text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Let's Begin</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">
            Plan Your <em className="text-gradient-gold not-italic">{service.title}</em> With Us
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Share your vision — we'll respond within a few hours with a curated consultation.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={whatsappLink(defaultWAMessage(service.title))} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-10 py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground hover:opacity-90">
              WhatsApp Us
            </a>
            <a href={`tel:+91${PHONE}`} className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-10 py-4 text-sm uppercase tracking-[0.22em] text-primary hover:bg-primary hover:text-primary-foreground transition">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-border/60 py-20">
        <div className="container-luxe">
          <h2 className="mb-10 text-3xl md:text-4xl">Explore more</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group block overflow-hidden rounded-xl border border-border/60 bg-card transition hover:border-primary/60"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl group-hover:text-primary transition">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{s.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
