export const PHONE = "8885552388";
export const PHONE_INTL = "918885552388";
export const BRAND = "Satavahana Events";
export const SITE_URL = "https://weddings.satavahanaevents.com";

const sourceLine = () => {
  const page =
    typeof window !== "undefined" && window.location
      ? `${window.location.origin}${window.location.pathname}`
      : SITE_URL;
  return `\n\n— Sent from: ${page}`;
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(message + sourceLine())}`;

export const telLink = `tel:+91${PHONE}`;

export const defaultWAMessage = (context?: string) =>
  `Hi ${BRAND}, I'd like to plan ${context ?? "an event"} with you. Could we schedule a consultation?`;

