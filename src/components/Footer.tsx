import { Link } from "@tanstack/react-router";
import { PHONE, telLink, whatsappLink, defaultWAMessage } from "@/lib/contact";
import { services } from "@/lib/services";
import logo from "@/assets/satavahana-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container-luxe grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="Satavahana Events" className="h-12 w-auto" />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            A premium Telugu wedding & event house crafting cinematic, emotional celebrations.
            Luxury weddings, temple ceremonies and destination events — designed with care, executed with precision.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={telLink}
              className="rounded-full border border-primary/40 px-5 py-2.5 text-sm tracking-wide text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Call {PHONE}
            </a>
            <a
              href={whatsappLink(defaultWAMessage())}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-5 py-2.5 text-sm tracking-wide text-primary-foreground hover:opacity-90"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-primary">Services</h4>
          <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-foreground">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-primary">Brand</h4>
          <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/gallery" className="hover:text-foreground">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Plan With Us</Link></li>
            <li>
              <a href="https://ammapallitempleweddings.com" target="_blank" rel="noreferrer" className="hover:text-foreground">
                Ammapalli Temple Weddings
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-luxe flex flex-col md:flex-row items-center justify-between gap-3 py-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Satavahana Events. All rights reserved.</p>
          <p>Hyderabad · Pan-India · International</p>
        </div>
      </div>
    </footer>
  );
}
