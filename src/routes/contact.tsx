import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PHONE, telLink, whatsappLink, defaultWAMessage } from "@/lib/contact";

export default function Contact() {
  return (
    <div className="pt-32">
      <section className="container-luxe py-12 md:py-16">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Plan With Us</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-tight md:text-6xl">
          Let's design your <em className="text-gradient-gold not-italic">celebration</em>.
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Share your event details and we'll respond within a few hours with a curated consultation.
        </p>
      </section>

      <section className="container-luxe grid gap-10 pb-24 md:grid-cols-12">
        <aside className="md:col-span-4 space-y-5">
          <a href={telLink} className="block rounded-xl border border-border/60 bg-card p-6 transition hover:border-primary/60">
            <Phone className="h-5 w-5 text-primary" />
            <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">Call</p>
            <p className="mt-1 text-2xl text-foreground">{PHONE}</p>
          </a>
          <a href={whatsappLink(defaultWAMessage())} target="_blank" rel="noreferrer" className="block rounded-xl border border-border/60 bg-card p-6 transition hover:border-primary/60">
            <MessageCircle className="h-5 w-5 text-primary" />
            <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">WhatsApp</p>
            <p className="mt-1 text-2xl text-foreground">Chat with us</p>
          </a>
          <div className="rounded-xl border border-border/60 bg-card p-6">
            <MapPin className="h-5 w-5 text-primary" />
            <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">Based In</p>
            <p className="mt-1 text-base text-foreground">Hyderabad, India</p>
            <p className="text-sm text-muted-foreground">Serving pan-India & international destinations</p>
          </div>
        </aside>
        <div className="md:col-span-8">
          <div className="rounded-2xl border border-border/60 bg-card p-7 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export const Route = createFileRoute("/contact")({
  component: Contact,
});
