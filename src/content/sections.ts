/**
 * Booking engine URL — opens in a new tab from the hero "Book Now" action.
 * Change it here in one place; the component reads from this constant.
 */
export const BOOKING_URL =
  "https://www.secure-booking-engine.com/accounts/11Hrh9MP4Prs3tVwhWqnLA/properties/sr6YRfa8sRkXz4oyRiQSxA/booking-engine/web/source/4wsctBw6Oq6j-g9XuxeRzQ/cart/WhtCTpIS9vCfV8h3h66Zcg/#!/rooms";

/**
 * Verified query-param names this engine reads to pre-fill a room search.
 * Confirmed by live testing (2026-07): dates are ISO `YYYY-MM-DD`, and the
 * query string must sit BEFORE the URL's `#` fragment — params after `#` are
 * ignored. Change a name here if the engine's contract ever changes.
 */
export const BOOKING_PARAMS = {
  arrival: "arrival",
  departure: "departure",
  adults: "adults",
  children: "children",
} as const;

export interface BookingQuery {
  /** ISO date, e.g. "2026-07-10". */
  arrival?: string;
  /** ISO date, e.g. "2026-07-12". */
  departure?: string;
  adults?: number;
  children?: number;
}

/**
 * Build a booking-engine URL pre-filled with dates/guests. Query params are
 * inserted before the `#!/rooms` fragment (see BOOKING_PARAMS). Called with no
 * args — or with an empty query — it returns BOOKING_URL unchanged, so the
 * engine just opens on its default date picker.
 */
export function buildBookingUrl(query: BookingQuery = {}): string {
  const params = new URLSearchParams();
  if (query.arrival) params.set(BOOKING_PARAMS.arrival, query.arrival);
  if (query.departure) params.set(BOOKING_PARAMS.departure, query.departure);
  if (query.adults != null) params.set(BOOKING_PARAMS.adults, String(query.adults));
  if (query.children != null) params.set(BOOKING_PARAMS.children, String(query.children));

  const qs = params.toString();
  if (!qs) return BOOKING_URL;

  const hashIndex = BOOKING_URL.indexOf("#");
  const base = hashIndex === -1 ? BOOKING_URL : BOOKING_URL.slice(0, hashIndex);
  const hash = hashIndex === -1 ? "" : BOOKING_URL.slice(hashIndex);
  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}${qs}${hash}`;
}

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
