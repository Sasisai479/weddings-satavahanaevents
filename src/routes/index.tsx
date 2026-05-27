import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Sparkles, Instagram } from "lucide-react";
import hero from "@/assets/hero-wedding.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";
import { whatsappLink, defaultWAMessage } from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Wedding Planners in Hyderabad | Satavahana Events | Call 8885552388" },
      {
        name: "description",
        content:
          "Satavahana Events – Top wedding planners in Hyderabad. Best wedding decorators, Telugu wedding organisers, wedding mandap decor, wedding stage decoration, affordable packages, low budget & grand weddings. Call 8885552388.",
      },
      {
        name: "keywords",
        content:
          "best wedding planners in Hyderabad, wedding planners near me Hyderabad, luxury wedding decorations Hyderabad, best wedding decorators in Hyderabad, Telugu wedding planners, Telugu wedding organisers Hyderabad, destination wedding planning Hyderabad, Ammapalli temple wedding planners, wedding event management company Hyderabad, wedding event organisers Hyderabad, wedding management companies in Hyderabad, premium wedding decorators, wedding mandap decorators Hyderabad, wedding stage decorators Hyderabad, Haldi Mehendi Sangeet event planners, royal wedding stage decoration, affordable wedding packages Hyderabad, wedding decoration packages Hyderabad, celebrity style wedding planning, traditional South Indian wedding organizers, outdoor wedding decoration services, wedding reception decoration ideas, engagement event planners, luxury mandap decoration, complete wedding planning services, wedding decoration services Hyderabad, wedding photography Hyderabad, wedding coordination services Hyderabad, wedding consultants in Hyderabad, wedding designers Hyderabad, marriage planners Hyderabad, wedding function organisers Hyderabad, wedding planners in Hyderabad with price, low budget wedding planners Hyderabad, best wedding organisers in Hyderabad, top wedding planners in Hyderabad, grand wedding planners Hyderabad, Satavahana Events",
      },
      { property: "og:title", content: "Best Wedding Planners in Hyderabad | Satavahana Events" },
      {
        property: "og:description",
        content:
          "Top wedding planners in Hyderabad. Best wedding decorators, Telugu weddings, destination celebrations & Ammapalli Temple weddings. Call 8885552388.",
      },
      { property: "og:image", content: "/og-home.jpg" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Satavahana Events" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Best Wedding Planners in Hyderabad | Satavahana Events" },
      {
        name: "twitter:description",
        content:
          "Top wedding planners & decorators in Hyderabad. Luxury weddings, Telugu weddings, destination celebrations & more. Call 8885552388.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const categories = ["temple-weddings", "luxury-weddings", "destination-weddings", "engagements"]
  .map((slug) => services.find((s) => s.slug === slug)!)
  .filter(Boolean);

const signatureExperiences = [
  { title: "Decor", desc: "Bespoke florals, mandap & stage architecture." },
  { title: "Photography", desc: "Cinematic film & editorial coverage." },
  { title: "Artist Management", desc: "DJs, dancers, classical & celebrity artists." },
  { title: "Hospitality", desc: "VIP concierge, travel & guest stay." },
  { title: "Entertainment", desc: "Sangeet production, live shows & after-parties." },
  { title: "Catering", desc: "Multi-cuisine live counters with five-star partners." },
];

const testimonials = [
  {
    name: "Sruthi & Karthik",
    event: "Ammapalli Temple Wedding",
    quote:
      "From the muhurtham coordination to the floral mandap, every detail felt curated. Our families still talk about how peaceful and beautiful the morning was.",
  },
  {
    name: "Riya & Aditya",
    event: "Destination Wedding, Goa",
    quote:
      "Three days, 250 guests, zero stress. Satavahana handled travel, decor, sangeet — everything. The reels alone gave us goosebumps.",
  },
  {
    name: "Sneha & Vikram",
    event: "Luxury Reception, Hyderabad",
    quote:
      "Cinematic is the right word. The stage, lighting, food, music — it looked and felt like a film set, not a wedding hall.",
  },
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <img
          src={hero}
          alt="Cinematic Telugu temple wedding"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.08_0.005_60/0.7)_100%)]" />

        <div className="container-luxe relative z-10 flex min-h-screen flex-col items-center justify-center pt-24 text-center">
          <div className="animate-fade-up">
            <p className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Satavahana Events
            </p>
            <h1 className="mx-auto max-w-4xl text-5xl leading-[1.05] text-foreground md:text-7xl lg:text-8xl">
              Crafting <em className="text-gradient-gold not-italic">Timeless</em> Wedding Experiences
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              Luxury Weddings · Temple Weddings · Destination Celebrations
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/services"
                className="rounded-full bg-primary px-8 py-3.5 text-sm uppercase tracking-[0.22em] text-primary-foreground transition hover:opacity-90"
              >
                View Weddings
              </Link>
              <a
                href={whatsappLink(defaultWAMessage("a wedding consultation"))}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary/50 px-8 py-3.5 text-sm uppercase tracking-[0.22em] text-primary hover:bg-primary hover:text-primary-foreground transition"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32">
        <div className="container-luxe grid gap-12 md:grid-cols-12 reveal">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">The House</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
              A premium Telugu wedding house, designed like cinema.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-3">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Satavahana Events is built on a single belief — that a wedding should feel like a film of its
              own. Every mandap, every frame, every dish and every reel is composed with intention. We work
              with a curated network of designers, florists, chefs and cinematographers across India to
              produce celebrations that feel deeply Telugu, deeply personal and unmistakably luxurious.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="border-t border-border/60 py-24 md:py-32">
        <div className="container-luxe reveal">
          <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Featured</p>
              <h2 className="mt-3 text-4xl md:text-5xl">Wedding Categories</h2>
            </div>
            <Link to="/services" className="text-sm uppercase tracking-[0.22em] text-primary hover:opacity-80">
              View all services →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ALL SERVICES */}
      <section className="border-t border-border/60 py-24 md:py-32">
        <div className="container-luxe reveal">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Every Occasion</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Services We Craft</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From temple muhurthams to grand receptions and milestone celebrations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE EXPERIENCES */}
      <section className="border-t border-border/60 bg-card/30 py-24 md:py-32">
        <div className="container-luxe reveal">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Signature</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Experiences Under One Roof</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 md:grid-cols-2 lg:grid-cols-3">
            {signatureExperiences.map((x) => (
              <div key={x.title} className="bg-card p-8 transition hover:bg-card/80">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 text-primary">
                  <Sparkles className="h-4 w-4" />
                </div>
                <h3 className="text-2xl">{x.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="border-t border-border/60 py-24 md:py-32">
        <div className="container-luxe reveal">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Wedding Gallery</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Cinematic Frames</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {[g1, g2, g3, g4, g5, g6].map((src, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-lg ${
                  i === 0 || i === 5 ? "md:row-span-2 md:aspect-[3/4]" : "aspect-square"
                }`}
              >
                <img
                  src={src}
                  alt={`Wedding moment ${i + 1}`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-border/60 bg-card/30 py-24 md:py-32">
        <div className="container-luxe reveal">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Couples Who Trusted Us</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Stories, In Their Words</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-xl border border-border/60 bg-card p-8">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-sm text-primary">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{t.event}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM REELS */}
      <section className="border-t border-border/60 py-24 md:py-32">
        <div className="container-luxe reveal">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
                <Instagram className="h-3.5 w-3.5" /> @satavahanaevents
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl">Latest Reels</h2>
            </div>
            <a
              href="https://instagram.com/satavahanaevents"
              target="_blank"
              rel="noreferrer"
              className="text-sm uppercase tracking-[0.22em] text-primary hover:opacity-80"
            >
              Follow on Instagram →
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[g3, g1, g4, g5].map((src, i) => (
              <a
                key={i}
                href="https://instagram.com/satavahanaevents"
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-[9/16] overflow-hidden rounded-xl"
              >
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <Instagram className="absolute bottom-3 right-3 h-5 w-5 text-primary" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border/60 py-28 md:py-40">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, oklch(0.82 0.13 75 / 0.4), transparent 60%)",
          }}
        />
        <div className="container-luxe relative text-center reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Begin Your Story</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-5xl leading-tight md:text-6xl">
            Plan Your <em className="text-gradient-gold not-italic">Dream Wedding</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Share your vision and we'll respond within a few hours with a curated consultation.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-10 py-4 text-sm uppercase tracking-[0.22em] text-primary-foreground hover:opacity-90"
            >
              Start Planning
            </Link>
            <a
              href={whatsappLink(defaultWAMessage("my wedding"))}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-primary/50 px-10 py-4 text-sm uppercase tracking-[0.22em] text-primary hover:bg-primary hover:text-primary-foreground transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
