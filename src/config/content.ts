import type { Stay } from "@/types";

/**
 * Section content, sourced from BRAND_CONTEXT.md. Copy follows the brand voice
 * (understated, literary, no banned lexicon). Facts are canonical.
 * NOTE: testimonials are sample voices — replace with real, consented quotes.
 */

/** Section 4 — The Estate Story: figures. */
export const ESTATE_STATS = [
  { value: "260", label: "Acres of Estate" },
  { value: "1863", label: "Coffee Heritage" },
  { value: "8", label: "Private Rooms" },
] as const;

/** Section 4 — estate features / nature. */
export const ESTATE_FEATURES = [
  { title: "Private Waterfall", text: "A waterfall of your own within the estate, reached through the trees." },
  { title: "Forest & Plantation Trails", text: "Walks through coffee, spice, and shade forest, alive with birdsong." },
  { title: "The Dairy Farm", text: "A working dairy farm on the estate, and fresh produce at the table." },
  { title: "The Petting Zoo", text: "Gentle estate animals to meet and feed — a favourite with families." },
  { title: "The Apiary", text: "Beehives kept across the estate, and honey drawn from the plantation." },
  { title: "Outdoor Yoga", text: "Quiet morning practice in the open air, with the hills for company." },
] as const;

/** Section 5 — Heritage Timeline. */
export const TIMELINE = [
  {
    year: "Origins",
    era: "The Haleri Kings",
    text: "Haleri is the seat of Coorg's last sovereigns, the Haleri (Paleri) dynasty.",
    image: "/images/heritage-interior-chandelier.jpg",
  },
  {
    year: "1863",
    era: "Coffee Arrives",
    text: "The English planter Frank Mangles brings coffee cultivation to these slopes — part of the story that made Coorg one of India's great coffee regions.",
    image: "/images/bungalow-entrance-dusk.jpg",
  },
  {
    year: "1960s",
    era: "The Restoration",
    text: "The family restores the planter bungalows, keeping the estate a living, working place.",
    image: "/images/heritage-bungalow-garden.jpg",
  },
  {
    year: "Today",
    era: "A Living Legacy",
    text: "A 260-acre working coffee & spice estate, and an intimate heritage retreat of eight rooms.",
    image: "/images/verandah-lattice-detail.jpg",
  },
] as const;

/** Section 6 — Coffee Journey stages (crop to cup). */
export const COFFEE_STAGES = [
  { step: "01", title: "Blossom", text: "White flowers scent the hills after the first rains." },
  { step: "02", title: "Cherry", text: "Fruit ripens red in the shade of the canopy." },
  { step: "03", title: "Harvest", text: "Picked by hand, basket by basket, across the slopes." },
  { step: "04", title: "Roast", text: "Dried, rested, and roasted to draw out the estate's character." },
  { step: "05", title: "The Cup", text: "Poured on a misted verandah — crop to cup, in your hands." },
] as const;

/** Section 7 — Luxury Accommodation (the three named stays). */
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

/** Section 8 — Signature Experiences. */
export const EXPERIENCES: { title: string; text: string; image: string; hero?: boolean }[] = [
  { title: "Coffee & Spice Walks", text: "Guided, from crop to cup.", image: "/images/coffee-plantation-trail.jpg" },
  { title: "Candlelight Dinners", text: "Private, beneath the stars.", image: "/images/rosarium-fountain.jpg" },
  { title: "Bonfire Evenings", text: "Warm gatherings after dark.", image: "/images/bonfire-picnic.jpg", hero: true },
  { title: "Plantation Picnics", text: "Curated among the coffee.", image: "/images/balcony-coffee.jpg" },
  { title: "At the Rosarium", text: "Coorgi & South Indian, estate-grown.", image: "/images/chef-plating.jpg" },
  { title: "Waterfall Visits", text: "To the estate's own falls.", image: "/images/rosarium-aerial.jpg" },
];

/** Section 9 — Estate Gallery. `span` drives the masonry layout. */
export const GALLERY: { src: string; alt: string; span?: "tall" | "wide" }[] = [
  { src: "/images/rosarium-aerial.jpg", alt: "The English Rosarium courtyard seen from above", span: "tall" },
  { src: "/images/balcony-coffee.jpg", alt: "Morning coffee on a bungalow balcony over the greenery" },
  { src: "/images/chef-plating.jpg", alt: "A chef plating a dish in the estate kitchen" },
  { src: "/images/bungalow-entrance-dusk.jpg", alt: "The pillared bungalow entrance beneath a pink dusk sky", span: "wide" },
  { src: "/images/antique-desk-detail.jpg", alt: "An antique writing desk with a green banker's lamp" },
  { src: "/images/heritage-interior-chandelier.jpg", alt: "A chandelier and framed prints in a heritage room" },
];

/** Section 10 — Testimonials (SAMPLE voices — replace with real, consented quotes). */
export const TESTIMONIALS = [
  {
    quote:
      "We came for a weekend and forgot the world. By the second morning, neither of us had touched a phone.",
    name: "Ananya & Rohan",
    context: "Honeymoon",
  },
  {
    quote:
      "The mist, the coffee at dawn, the silence after dark — The Hallery gives you back your own attention.",
    name: "Meera",
    context: "A quiet retreat",
  },
  {
    quote:
      "Our children fed the calves and chased the waterfall while we simply sat and watched the hills.",
    name: "The Fernandes Family",
    context: "Family holiday",
  },
] as const;

/** Booking form select options. */
export const OCCASIONS = ["Honeymoon", "Anniversary", "Family holiday", "Quiet getaway"] as const;

/** Step 3 — credibility slider (SAMPLE ratings/quotes — replace with real, consented ones). */
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

/** Step 6 — five images per room, resolved from /public/rooms/[slug]/1..5.jpg. */
export function roomImages(slug: string, name: string) {
  return Array.from({ length: 5 }, (_, i) => ({
    src: `/rooms/${slug}/${i + 1}.jpg`,
    alt: `${name} — photo ${i + 1}`,
  }));
}

export interface Experience {
  title: string;
  text: string;
  image: string;
}

/** Step 7 — Experiences "Beyond The Hallery" (off-property). SAMPLE copy — edit freely.
 *  Images reuse estate photos for now; swap for real experience photos. */
export const EXPERIENCES_BEYOND: Experience[] = [
  { title: "Abbey Falls", text: "A short drive to one of Coorg's most-loved waterfalls.", image: "/images/rosarium-aerial.jpg" },
  { title: "Raja's Seat", text: "Sunset over the valleys from the old royal garden.", image: "/images/estate-aerial-dusk.jpg" },
  { title: "Dubare Elephant Camp", text: "Meet the elephants by the Kaveri, a morning away.", image: "/images/coffee-plantation-trail.jpg" },
  { title: "Madikeri Town", text: "The fort, the market, and Kodava culture, minutes away.", image: "/images/bungalow-entrance-dusk.jpg" },
];

/** Step 7 — Experiences "Within The Hallery" (on-property). SAMPLE copy — edit freely. */
export const EXPERIENCES_WITHIN: Experience[] = [
  { title: "Coffee & Spice Walk", text: "Guided through the estate, from crop to cup.", image: "/images/coffee-plantation-trail.jpg" },
  { title: "Coffee Tasting", text: "Cup the estate's own beans with our team.", image: "/images/balcony-coffee.jpg" },
  { title: "Dining at the Rosarium", text: "Coorgi & South Indian, among the roses.", image: "/images/rosarium-fountain.jpg" },
  { title: "Bonfire Evenings", text: "Warm gatherings under the trees after dark.", image: "/images/bonfire-picnic.jpg" },
];
