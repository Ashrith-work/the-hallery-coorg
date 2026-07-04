import { BOOKING_URL } from "@/content/sections";

/**
 * Sticky bottom "BOOK HALLERY" bar — a full-width gold band fixed to the bottom
 * of the viewport on every page, sitting above page content. Opens the booking
 * engine in a new tab, reusing the single shared BOOKING_URL (content/sections.ts)
 * so it never diverges from the hero "Book Now".
 *
 * z-30 sits above page content but below the header (z-50) and the mobile nav
 * panel (z-40), so an open mobile menu cleanly covers the bar.
 *
 * The <body> carries pb of 64px + env(safe-area-inset-bottom) (see app/layout.tsx)
 * so this bar never covers the footer or the last section's content. If a floating
 * WhatsApp/contact button is ever added, give it a bottom offset clear of this bar.
 *
 * iOS: the gold extends into the home-indicator safe area (h = 54px + inset) with
 * pb-[env(safe-area-inset-bottom)] keeping the label above the indicator. Requires
 * viewport-fit=cover (set in layout.tsx) for the inset to be non-zero.
 */
export function StickyBookBar() {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      role="button"
      aria-label="Book The Hallery"
      className="fixed inset-x-0 bottom-0 z-30 flex h-[calc(54px+env(safe-area-inset-bottom))] items-center justify-center bg-gold pb-[env(safe-area-inset-bottom)] text-center font-serif text-sm uppercase tracking-[0.28em] text-ink shadow-[0_-4px_20px_rgba(0,0,0,0.18)] transition-colors duration-300 ease-hallery hover:bg-gold-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ink"
    >
      Book Hallery
    </a>
  );
}
