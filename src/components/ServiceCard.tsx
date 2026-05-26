import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group relative block overflow-hidden rounded-xl border border-border/60 bg-card transition-all hover:border-primary/60"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          width={1280}
          height={720}
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-background/60 backdrop-blur opacity-0 transition-opacity group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4 text-primary" />
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl text-foreground group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{service.tagline}</p>
      </div>
    </Link>
  );
}
