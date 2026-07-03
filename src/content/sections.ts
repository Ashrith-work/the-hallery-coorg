/**
 * Booking engine URL — opens in a new tab from the hero "Book Now" action.
 * Change it here in one place; the component reads from this constant.
 */
export const BOOKING_URL =
  "https://www.secure-booking-engine.com/accounts/11Hrh9MP4Prs3tVwhWqnLA/properties/sr6YRfa8sRkXz4oyRiQSxA/booking-engine/web/source/4wsctBw6Oq6j-g9XuxeRzQ/cart/WhtCTpIS9vCfV8h3h66Zcg/#!/rooms";

/**
 * Section headers in ONE place. Rename or repoint any section title/subtitle here
 * without touching the components. `folder` is the /public-relative image folder
 * that drives that section's grid (see src/lib/gallery.ts).
 */
export interface SectionHeader {
  /** Wide-tracked label above the title. */
  eyebrow: string;
  /** H2 display title. */
  title: string;
  /** Optional supporting line under the title. */
  subtitle?: string;
  /** Image folder under /public that populates this section (grids only). */
  folder?: string;
}

export const SECTIONS = {
  about: {
    eyebrow: "About",
    title: "About The Hallery",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "A Glimpse of the Estate",
    subtitle: "Mornings, interiors, and quiet corners — the estate as we live it.",
    folder: "gallery/estate",
  },
  stays: {
    eyebrow: "Stays",
    title: "Three Homes, Each With a History",
    subtitle:
      "Every room opens to coffee and spice plantations — antiques, four-poster beds, and complete quiet.",
  },
  experiencesWithin: {
    eyebrow: "Experiences",
    title: "Within The Hallery",
    subtitle: "Days shaped around the estate, at your own pace.",
    folder: "experiences/within",
  },
  experiencesBeyond: {
    eyebrow: "Experiences",
    title: "Beyond The Hallery",
    subtitle: "Coorg's waterfalls, forests, and Kodava culture, minutes away.",
    folder: "experiences/beyond",
  },
} satisfies Record<string, SectionHeader>;
