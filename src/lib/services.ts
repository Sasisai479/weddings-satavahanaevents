import temple from "@/assets/cat-temple.jpg";
import luxury from "@/assets/cat-luxury.jpg";
import destination from "@/assets/cat-destination.jpg";
import intimate from "@/assets/cat-intimate.jpg";
import engagement from "@/assets/cat-engagement.jpg";
import haldi from "@/assets/cat-haldi.jpg";
import sangeet from "@/assets/cat-sangeet.jpg";
import reception from "@/assets/cat-reception.jpg";
import birthday from "@/assets/cat-birthday.jpg";
import babyshower from "@/assets/cat-babyshower.jpg";
import privateEvent from "@/assets/cat-private.jpg";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  ammapalliNote?: string;
};

export const services: Service[] = [
  {
    slug: "luxury-weddings",
    title: "Luxury Weddings",
    tagline: "Cinematic celebrations crafted for a lifetime",
    image: luxury,
    description:
      "From grand mandap installations to bespoke hospitality, our luxury weddings are designed as living films — every frame intentional, every detail couture. We work with a curated network of designers, florists, lighting artists and chefs to build a celebration that feels unmistakably yours.",
    highlights: [
      "Designer mandap & stage architecture",
      "Bespoke floral installations",
      "Cinematic lighting & production",
      "VIP guest hospitality concierge",
    ],
    inclusions: [
      "Creative direction & moodboards",
      "Venue scouting & negotiation",
      "End-to-end day-of management",
      "Photography, cinematography & reels",
      "Catering & live food experiences",
      "Entertainment & artist management",
    ],
  },
  {
    slug: "temple-weddings",
    title: "Temple Weddings",
    tagline: "Sacred ceremonies in India's most revered temples",
    image: temple,
    description:
      "Telugu temple weddings carry centuries of tradition. We specialise in Ammapalli, Tirumala, Yadagirigutta, Chilkur and other revered temples — handling priests, muhurtham coordination, guest logistics and on-site decor with quiet, respectful precision.",
    highlights: [
      "Ammapalli, Tirumala & Yadagirigutta specialists",
      "Pandit & muhurtham coordination",
      "Traditional floral & lamp decor",
      "Discreet guest & VIP management",
    ],
    inclusions: [
      "Temple booking & permissions",
      "Priest & rituals coordination",
      "Mangalsutra, garlands & pooja samagri",
      "On-site photography & videography",
      "Transport & guest hospitality",
      "Post-ceremony reception planning",
    ],
    ammapalliNote:
      "Through our sister brand ammapallitempleweddings.com, we are among the most-booked planners at Sri Ammapalli Sita Ramachandra Swamy Temple — handling muhurtham, decor, pandit and guest logistics end-to-end.",
  },
  {
    slug: "destination-weddings",
    title: "Destination Weddings",
    tagline: "Goa, Jaipur, Udaipur, Bali — wherever love calls",
    image: destination,
    description:
      "Destination celebrations across India and abroad. Beachfront mandaps in Goa, palace weddings in Rajasthan, vineyard ceremonies in Nashik, or international affairs in Bali and Dubai — we manage travel, stay, decor and rituals as a single seamless experience.",
    highlights: [
      "Pan-India & international venues",
      "Guest travel & stay management",
      "Local vendor curation",
      "Multi-day event choreography",
    ],
    inclusions: [
      "Venue scouting across destinations",
      "Group travel & accommodation",
      "Decor, catering & entertainment",
      "Cultural & ritual coordination",
      "Photography & content creation",
      "On-ground guest concierge",
    ],
  },
  {
    slug: "engagements",
    title: "Engagements",
    tagline: "The first chapter, beautifully staged",
    image: engagement,
    description:
      "Intimate ring ceremonies designed with the same cinematic care as the wedding itself. Custom backdrops, signature florals, curated menus and cinematography that captures the very first 'yes'.",
    highlights: [
      "Custom backdrop & stage design",
      "Signature floral palette",
      "Curated menus & live counters",
      "Cinematic photo & reel coverage",
    ],
    inclusions: [
      "Venue styling & decor",
      "Photography & videography",
      "Catering & beverages",
      "Entertainment & emcee",
    ],
  },
  {
    slug: "haldi",
    title: "Haldi",
    tagline: "Sunlit joy, marigolds and laughter",
    image: haldi,
    description:
      "Vibrant Haldi mornings styled in marigold, mango leaves, and brass — a celebration of family, blessings and that pre-wedding glow. Outdoor lawns, terraces or poolside setups handled end-to-end.",
    highlights: [
      "Marigold & brass styling",
      "Outdoor & poolside setups",
      "Live counters & welcome drinks",
      "Candid photo & reel coverage",
    ],
    inclusions: [
      "Theme decor & seating",
      "Haldi station setup",
      "Catering & live snacks",
      "Sound, music & emcee",
    ],
  },
  {
    slug: "sangeet",
    title: "Sangeet",
    tagline: "A night of music, choreography and spectacle",
    image: sangeet,
    description:
      "From choreographed family performances to celebrity artists and DJ nights — Sangeet evenings produced with concert-grade sound, lighting and stage design. We handle artists, rehearsals, run-of-show and surprise reveals.",
    highlights: [
      "Concert-grade sound & lighting",
      "Choreographers & artist booking",
      "Stage & set design",
      "Run-of-show production",
    ],
    inclusions: [
      "Stage, LED & lighting",
      "Choreography & rehearsals",
      "Artist & DJ management",
      "Bar, catering & after-party",
    ],
  },
  {
    slug: "reception",
    title: "Reception",
    tagline: "Where the celebration meets the world",
    image: reception,
    description:
      "Grand receptions in five-star ballrooms, palace lawns and convention centres. Designer stages, signature welcome rituals, curated food experiences and entertainment built around the couple's story.",
    highlights: [
      "Designer stage architecture",
      "Five-star catering partners",
      "Signature welcome rituals",
      "Live entertainment & music",
    ],
    inclusions: [
      "Stage, backdrop & lounge zones",
      "Floral & lighting design",
      "Catering & live counters",
      "Cinematography & reels",
    ],
  },
  {
    slug: "birthday-celebrations",
    title: "Birthday Celebrations",
    tagline: "Milestone moments, cinematically produced",
    image: birthday,
    description:
      "1st birthdays, milestone 50ths, surprise parties and themed nights — designed with the same craft we bring to weddings. Themes, custom cakes, entertainers and content creators included.",
    highlights: [
      "Themed concept & decor",
      "Custom cake & dessert tables",
      "Entertainers & activities",
      "Photo, reel & live edit",
    ],
    inclusions: [
      "Concept & theme design",
      "Decor & entertainment",
      "Catering & beverages",
      "Photo & video coverage",
    ],
  },
  {
    slug: "baby-showers",
    title: "Baby Showers",
    tagline: "Soft, joyful & beautifully personal",
    image: babyshower,
    description:
      "Seemantham and modern baby showers styled in pastels, florals and soft golds. Traditional rituals coordinated with elegant decor and curated keepsakes for guests.",
    highlights: [
      "Traditional & modern styling",
      "Floral & pastel palettes",
      "Curated guest favours",
      "Ritual coordination",
    ],
    inclusions: [
      "Decor & seating",
      "Ritual & pandit coordination",
      "Catering & sweets",
      "Photography & reels",
    ],
  },
  {
    slug: "private-events",
    title: "Private Events",
    tagline: "Discreet, refined, fully bespoke",
    image: privateEvent,
    description:
      "Private dinners, anniversaries, corporate retreats, milestone celebrations and brand events handled with discretion. Bespoke venues, curated menus, security and end-to-end production.",
    highlights: [
      "Discreet planning & NDAs",
      "Bespoke venues & menus",
      "Security & access control",
      "Premium production",
    ],
    inclusions: [
      "Venue & vendor curation",
      "Custom decor & menu design",
      "Entertainment & hospitality",
      "Photo & video (optional)",
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
