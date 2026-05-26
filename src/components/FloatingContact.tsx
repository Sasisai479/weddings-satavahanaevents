import { Phone } from "lucide-react";
import { telLink, whatsappLink, defaultWAMessage } from "@/lib/contact";
import whatsappLogo from "@/assets/whatsapp.svg";

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={whatsappLink(defaultWAMessage())}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-transform hover:scale-110"
      >
        <img src={whatsappLogo} alt="WhatsApp" className="h-14 w-14" />
      </a>
      <a
        href={telLink}
        aria-label="Call us"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
