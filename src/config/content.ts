import type { Stay } from "@/types";

/**
 * Section content, sourced from BRAND_CONTEXT.md. Copy follows the brand voice
 * (understated, literary, no banned lexicon). Facts are canonical.
 * NOTE: credibility quotes and experience copy are SAMPLE — replace before launch.
 */

/** About — the homepage intro paragraph (shown above the Gallery). */
export const ABOUT_COPY =
  "The Hallery is a heritage resort in Coorg that reflects the legacy of the Haleri (Paleri) dynasty and the cultural richness of Coorg. Blending historic charm with refined plantation living, it offers an immersive luxury stay set amid lush gardens, untouched woodlands, and lovingly nurtured coffee plantations. The resort's architecture and serene outdoor spaces preserve stories of the past while providing a peaceful setting for rest and renewal. Ideal for travellers seeking boutique resort experiences or romantic cottages in Coorg, The Hallery is designed to deliver comfort, beauty, and quiet sophistication.";

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
