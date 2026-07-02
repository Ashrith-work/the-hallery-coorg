import type { Stay } from "@/types";

/**
 * Section content, sourced from BRAND_CONTEXT.md. Copy follows the brand voice
 * (understated, literary, no banned lexicon). Facts are canonical.
 * NOTE: credibility quotes and experience copy are SAMPLE — replace before launch.
 */

/** About — headline figures. */
export const ESTATE_STATS = [
  { value: "260", label: "Acres of Estate" },
  { value: "1863", label: "Coffee Heritage" },
  { value: "8", label: "Private Rooms" },
] as const;

/** Accommodation — the three named stays. Images resolved via roomImages(). */
export const STAYS: readonly Stay[] = [
  {
    slug: "mangles-bungalow",
    name: "Mangles Bungalow",
    description:
      "Four interconnected suites in seasonal hues, with antique furnishings and four-poster beds — named for the planter who first grew coffee here.",
    image: "/images/mangles-bungalow-dusk.jpg",
    details: ["Four Suites", "Four-Poster Beds", "Plantation Views"],
  },
  {
    slug: "rosarium-cottage",
    name: "Rosarium Cottage",
    description:
      "A former manager's cottage of rustic elegance, with vaulted wood ceilings and a quiet garden aspect toward the roses.",
    image: "/images/rosarium-courtyard.jpg",
    details: ["Private Cottage", "Vaulted Ceilings", "Garden Aspect"],
  },
  {
    slug: "cinnamon-cottage",
    name: "Cinnamon Cottage",
    description:
      "A former manager's cottage of rustic elegance, with vaulted wood ceilings, set among the spice trees of the estate.",
    image: "/images/cinnamon-cottage-lounge.jpg",
    details: ["Private Cottage", "Vaulted Ceilings", "Spice Garden"],
  },
];

/** Five images per room, resolved from /public/rooms/[slug]/1..5.jpg. */
export function roomImages(slug: string, name: string) {
  return Array.from({ length: 5 }, (_, i) => ({
    src: `/rooms/${slug}/${i + 1}.jpg`,
    alt: `${name} — photo ${i + 1}`,
  }));
}

/** Credibility slider (SAMPLE ratings/quotes — replace with real, consented ones). */
export const CREDIBILITY: { source: string; rating?: string; quote: string; author: string }[] = [
  {
    source: "Google",
    rating: "4.7",
    quote:
      "Waking to mist over the coffee and a silence you can actually hear — we didn't want to leave.",
    author: "Verified guest",
  },
  {
    source: "MakeMyTrip",
    rating: "4.5",
    quote:
      "A genuine heritage estate, not a themed resort. The hosting felt personal from the first hour.",
    author: "Verified guest",
  },
  {
    source: "TripAdvisor",
    rating: "4.6",
    quote: "The Rosarium dinner under the stars was the most romantic evening of our trip.",
    author: "Verified guest",
  },
  {
    source: "Guest note",
    quote:
      "Our children fed the calves and chased the waterfall while we simply watched the hills.",
    author: "The Fernandes family",
  },
];

export interface Experience {
  title: string;
  text: string;
  image: string;
}

/** Experiences "Beyond The Hallery" (off-property). SAMPLE copy — edit freely.
 *  Images reuse estate photos for now; swap for real experience photos. */
export const EXPERIENCES_BEYOND: Experience[] = [
  { title: "Abbey Falls", text: "A short drive to one of Coorg's most-loved waterfalls.", image: "/images/rosarium-aerial.jpg" },
  { title: "Raja's Seat", text: "Sunset over the valleys from the old royal garden.", image: "/images/estate-aerial-dusk.jpg" },
  { title: "Dubare Elephant Camp", text: "Meet the elephants by the Kaveri, a morning away.", image: "/images/coffee-plantation-trail.jpg" },
  { title: "Madikeri Town", text: "The fort, the market, and Kodava culture, minutes away.", image: "/images/bungalow-entrance-dusk.jpg" },
];

/** Experiences "Within The Hallery" (on-property). SAMPLE copy — edit freely. */
export const EXPERIENCES_WITHIN: Experience[] = [
  { title: "Coffee & Spice Walk", text: "Guided through the estate, from crop to cup.", image: "/images/coffee-plantation-trail.jpg" },
  { title: "Coffee Tasting", text: "Cup the estate's own beans with our team.", image: "/images/balcony-coffee.jpg" },
  { title: "Dining at the Rosarium", text: "Coorgi & South Indian, among the roses.", image: "/images/rosarium-fountain.jpg" },
  { title: "Bonfire Evenings", text: "Warm gatherings under the trees after dark.", image: "/images/bonfire-picnic.jpg" },
];
