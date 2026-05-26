import { useMemo, useState } from "react";
import { z } from "zod";
import { services } from "@/lib/services";
import { whatsappLink, BRAND } from "@/lib/contact";

const BUDGETS = [
  "₹1–5 Lakhs",
  "₹5–10 Lakhs",
  "₹10–25 Lakhs",
  "₹25–50 Lakhs",
  "₹50 Lakhs+",
] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(10, "Enter a valid phone number")
    .max(15)
    .regex(/^[0-9+\-\s]+$/, "Invalid phone number"),
  email: z.string().trim().email("Enter a valid email").max(120).optional().or(z.literal("")),
  eventDate: z.string().max(40).optional().or(z.literal("")),
  services: z.array(z.string()).min(1, "Select at least one service"),
  budget: z.enum(BUDGETS, { message: "Choose a budget range" }),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export function ContactForm({ preselectService }: { preselectService?: string }) {
  const [selected, setSelected] = useState<string[]>(
    preselectService ? [preselectService] : []
  );
  const [budget, setBudget] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const toggle = (title: string) =>
    setSelected((s) => (s.includes(title) ? s.filter((x) => x !== title) : [...s, title]));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      eventDate: String(fd.get("eventDate") ?? ""),
      services: selected,
      budget,
      message: String(fd.get("message") ?? ""),
    };
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    const lines = [
      `Hi ${BRAND}, I'd like to plan an event.`,
      ``,
      `Name: ${r.data.name}`,
      `Phone: ${r.data.phone}`,
      r.data.email ? `Email: ${r.data.email}` : null,
      r.data.eventDate ? `Event Date: ${r.data.eventDate}` : null,
      `Services: ${r.data.services.join(", ")}`,
      `Budget: ${r.data.budget}`,
      r.data.message ? `\nDetails: ${r.data.message}` : null,
    ].filter(Boolean).join("\n");
    window.open(whatsappLink(lines), "_blank");
    setTimeout(() => setSending(false), 800);
  };

  const inputCls =
    "w-full rounded-md border border-input bg-input/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition";

  const serviceList = useMemo(() => services, []);

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">Your Name *</label>
          <input name="name" className={inputCls} placeholder="Full name" />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">Phone *</label>
          <input name="phone" className={inputCls} placeholder="+91 ..." />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</label>
          <input name="email" className={inputCls} placeholder="you@example.com" />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">Event Date</label>
          <input name="eventDate" className={inputCls} placeholder="e.g. December 2026" />
        </div>
      </div>

      <div>
        <label className="mb-3 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Services (select all that apply) *
        </label>
        <div className="flex flex-wrap gap-2">
          {serviceList.map((s) => {
            const active = selected.includes(s.title);
            return (
              <button
                key={s.slug}
                type="button"
                onClick={() => toggle(s.title)}
                className={`rounded-full border px-4 py-2 text-xs tracking-wide transition ${
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"
                }`}
              >
                {s.title}
              </button>
            );
          })}
        </div>
        {errors.services && <p className="mt-2 text-xs text-destructive">{errors.services}</p>}
      </div>

      <div>
        <label className="mb-3 block text-xs uppercase tracking-[0.18em] text-muted-foreground">Budget *</label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {BUDGETS.map((b) => {
            const active = budget === b;
            return (
              <button
                key={b}
                type="button"
                onClick={() => setBudget(b)}
                className={`rounded-md border px-3 py-3 text-xs tracking-wide transition ${
                  active
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/60"
                }`}
              >
                {b}
              </button>
            );
          })}
        </div>
        {errors.budget && <p className="mt-2 text-xs text-destructive">{errors.budget}</p>}
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">Tell us more</label>
        <textarea
          name="message"
          rows={4}
          className={inputCls}
          placeholder="Venue ideas, guest count, themes, references…"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="group relative w-full overflow-hidden rounded-md bg-primary px-6 py-4 text-sm font-medium uppercase tracking-[0.22em] text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
      >
        {sending ? "Opening WhatsApp…" : "Send via WhatsApp"}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Submitting opens WhatsApp with your details pre-filled. Our team responds within a few hours.
      </p>
    </form>
  );
}
