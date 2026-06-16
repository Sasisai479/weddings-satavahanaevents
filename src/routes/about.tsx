import { Link, createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-wedding.jpg";
import { whatsappLink, defaultWAMessage } from "@/lib/contact";

export default function About() {
  return (
    <div>
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="container-luxe relative z-10 flex h-full flex-col justify-end pb-20 pt-32">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">About Satavahana</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-tight md:text-7xl">
            A house built on <em className="text-gradient-gold not-italic">craft & emotion</em>.
          </h1>
        </div>
      </section>

      <section className="border-t border-border/60 py-20 md:py-28">
        <div className="container-luxe grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl">Our Philosophy</h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Satavahana Events is a premium Telugu wedding & event house based in Hyderabad. We design
              cinematic, emotional celebrations — from sacred temple weddings to grand luxury affairs and
              destination ceremonies across India and abroad.
            </p>
            <p>
              We treat each wedding as a film. Every mandap is a set, every dish is a frame, every reel a
              cut from the larger story. That obsession with craft is what separates a generic event from
              a Satavahana celebration.
            </p>
            <p>
              Through our sister brand, <a href="https://ammapallitempleweddings.com" target="_blank" rel="noreferrer" className="text-primary hover:underline">ammapallitempleweddings.com</a>, we
              are among the most-booked planners at Sri Ammapalli Sita Ramachandra Swamy Temple — bringing
              the same craft to sacred ceremonies.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/30 py-20">
        <div className="container-luxe grid gap-8 md:grid-cols-4">
          {[
            { k: "500+", v: "Celebrations crafted" },
            { k: "12+", v: "Years in the industry" },
            { k: "25+", v: "Destinations covered" },
            { k: "100%", v: "Couple satisfaction" },
          ].map((s) => (
            <div key={s.k} className="text-center">
              <p className="text-5xl text-gradient-gold">{s.k}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 py-20 text-center">
        <div className="container-luxe">
          <h2 className="text-4xl md:text-5xl">Let's plan something timeless.</h2>
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

export const Route = createFileRoute("/about")({
  component: About,
});
