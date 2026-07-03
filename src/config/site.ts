import type { NavLink } from "@/types";

/**
 * Canonical site configuration. Facts sourced from BRAND_CONTEXT.md §0.
 * NOTE: 260 acres / 8 rooms are "Medium" confidence — confirm before launch.
 */
export const SITE = {
  name: "The Hallery",
  subName: "Coorg",
  title: "The Hallery — Heritage Coffee Estate in Coorg",
  description:
    "A 260-acre working coffee and spice estate in the hills of Coorg, near Madikeri. An intimate heritage retreat of eight rooms, on the slopes where Coorg's coffee story began in 1863.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://the-hallery-coorg.vercel.app",
  ogImage: "/images/estate-aerial-dusk.jpg",
  locale: "en_IN",
  since: 1863,
  promise: "Somewhere the hills fall quiet.",
  location: {
    street: "Hallery Estate, Makkandur Post",
    locality: "Madikeri",
    region: "Kodagu (Coorg), Karnataka",
    postalCode: "571201",
    country: "IN",
  },
  contact: {
    phones: ["+91 99000 18733", "+91 97898 96454"],
    email: "reservations@halleryestates.com",
  },
  keywords: [
    "The Hallery",
    "Coorg resort",
    "coffee estate stay",
    "heritage homestay Coorg",
    "Madikeri luxury stay",
    "plantation stay Coorg",
    "Kodagu",
  ],
} as const;

/** External booking page (the estate's live booking system). */
export const BOOK_NOW_URL = "https://www.hallerycoorg.com/book-now/";

/** Primary in-page navigation (matches the homepage section ids). */
export const NAV_LINKS: readonly NavLink[] = [
  { label: "Stays", href: "#stays" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
];

/** The cinematic scroll journey (WEBSITE_BLUEPRINT.md), in order. */
export const SECTIONS = [
  "loading",
  "hero",
  "introduction",
  "estate-story",
  "heritage-timeline",
  "coffee-journey",
  "accommodation",
  "experiences",
  "gallery",
  "testimonials",
  "booking",
  "footer",
] as const;

export type SectionId = (typeof SECTIONS)[number];
