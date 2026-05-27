import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";
import { whatsappLink, defaultWAMessage } from "@/lib/contact";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Wedding Planning Services | Satavahana Events Hyderabad" },
      {
        name: "description",
        content:
          "Complete wedding planning & decoration services in Hyderabad by Satavahana Events. Luxury weddings, temple weddings, destination weddings, haldi, mehendi, sangeet, reception & engagement planning.",
      },
      {
        name: "keywords",
        content:
          "wedding planning services, wedding decoration services, complete wedding planning, Hyderabad wedding services, Satavahana Events services",
      },
      { property: "og:title", content: "Wedding Planning Services | Satavahana Events" },
      {
        property: "og:description",
        content:
          "Complete wedding planning & decoration services. Luxury weddings, temple weddings, destination weddings & more by Satavahana Events.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Satavahana Events" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="pt-32">
      <section className="container-luxe py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Services</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-tight md:text-6xl">
          Every occasion, <em className="text-gradient-gold not-italic">crafted</em> with cinematic care.
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Tap any service to explore inclusions, signature design moves and start a conversation.
        </p>
      </section>
      <section className="container-luxe pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
      <section className="border-t border-border/60 py-20 text-center">
        <div className="container-luxe">
          <h2 className="text-4xl md:text-5xl">Ready to start planning?</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="rounded-full bg-primary px-8 py-3.5 text-sm uppercase tracking-[0.22em] text-primary-foreground hover:opacity-90">
              Plan With Us
            </Link>
            <a href={whatsappLink(defaultWAMessage())} target="_blank" rel="noreferrer" className="rounded-full border border-primary/50 px-8 py-3.5 text-sm uppercase tracking-[0.22em] text-primary hover:bg-primary hover:text-primary-foreground transition">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
