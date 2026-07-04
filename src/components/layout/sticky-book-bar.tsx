import { BOOKING_URL } from "@/content/sections";

/**
 * Sticky bottom "BOOK HALLERY" bar — a full-width gold band fixed to the bottom
 * of the viewport on every page, sitting above page content. Opens the booking
 * engine in a new tab, reusing the single shared BOOKING_URL (content/sections.ts)
 * so it never diverges from the hero "Book Now".
 *
 * The <body> carries pb-[64px] (see app/layout.tsx) so this bar never covers the
 * footer or the last section's content. If a floating WhatsApp/contact button is
 * ever added, give it a bottom offset > 64px so it clears this bar.
 */
export function StickyBookBar() {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      role="button"
      aria-label="Book The Hallery"
      className="fixed inset-x-0 bottom-0 z-40 flex h-[54px] items-center justify-center bg-gold text-center font-serif text-sm uppercase tracking-[0.28em] text-ink shadow-[0_-4px_20px_rgba(0,0,0,0.18)] transition-colors duration-300 ease-hallery hover:bg-gold-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ink"
    >
      Book Hallery
    </a>
  );
}
