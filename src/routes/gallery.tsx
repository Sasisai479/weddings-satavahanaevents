import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ImageIcon, Play, X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { services } from "@/lib/services";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Satavahana Events" },
      { name: "description", content: "Cinematic frames and reels from luxury weddings, temple ceremonies and destination celebrations." },
      { property: "og:title", content: "Gallery — Satavahana Events" },
      { property: "og:description", content: "Wedding photography & cinematic reels." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

// Reels — replace with real Instagram reel URLs anytime
const reels = [
  { id: "1", thumb: g1, url: "https://instagram.com/satavahanaevents" },
  { id: "2", thumb: g3, url: "https://instagram.com/satavahanaevents" },
  { id: "3", thumb: g4, url: "https://instagram.com/satavahanaevents" },
  { id: "4", thumb: g5, url: "https://instagram.com/satavahanaevents" },
];

function Gallery() {
  const [tab, setTab] = useState<"images" | "videos">("images");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const images = [g1, g2, g3, g4, g5, g6, ...services.map((s) => s.image)];

  return (
    <div className="pt-32">
      <section className="container-luxe py-12 md:py-16">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Gallery</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-tight md:text-6xl">
          A film in <em className="text-gradient-gold not-italic">stills</em> & reels.
        </h1>

        {/* Toggle CTAs */}
        <div className="mt-10 inline-flex rounded-full border border-border/60 bg-card p-1.5">
          <button
            onClick={() => setTab("images")}
            className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs uppercase tracking-[0.22em] transition ${
              tab === "images" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <ImageIcon className="h-3.5 w-3.5" /> Images
          </button>
          <button
            onClick={() => setTab("videos")}
            className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs uppercase tracking-[0.22em] transition ${
              tab === "videos" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Play className="h-3.5 w-3.5" /> Videos
          </button>
        </div>
      </section>

      <section className="container-luxe pb-24">
        {tab === "images" ? (
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {images.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightbox(src)}
                className="block w-full break-inside-avoid overflow-hidden rounded-xl"
              >
                <img src={src} alt={`Wedding ${i + 1}`} loading="lazy" className="w-full transition-transform duration-1000 hover:scale-105" />
              </button>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {reels.map((r) => (
              <a
                key={r.id}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-[9/16] overflow-hidden rounded-xl"
              >
                <img src={r.thumb} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/60 bg-background/40 backdrop-blur transition group-hover:scale-110">
                    <Play className="h-6 w-6 fill-primary text-primary" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute right-6 top-6 rounded-full border border-border/60 bg-card p-3 text-foreground hover:text-primary" onClick={() => setLightbox(null)}>
            <X className="h-5 w-5" />
          </button>
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain" />
        </div>
      )}
    </div>
  );
}
