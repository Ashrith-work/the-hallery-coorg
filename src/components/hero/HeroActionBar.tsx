import { CalendarCheck, MapPin, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import { BOOKING_URL } from "@/content/sections";

/** Google Maps directions to the estate, built from the address in config/site.ts. */
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `The Hallery, ${SITE.location.street}, ${SITE.location.locality}, ${SITE.location.region} ${SITE.location.postalCode}`,
)}`;

/**
 * Hero action bar — a single horizontal row of icon + label actions. "Book Now"
 * is the gold primary (opens the booking engine in a new tab, URL from
 * content/sections.ts → BOOKING_URL); Call / WhatsApp / Directions are lighter
 * outline actions. Pinned bottom-center on desktop, a clean full-width row on mobile.
 */
const SECONDARY = [
  {
    label: "Call",
    aria: "Call The Hallery",
    icon: Phone,
    href: "tel:+919900018733",
    external: false,
  },
  {
    label: "WhatsApp",
    aria: "Message The Hallery on WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/919900018733",
    external: true,
  },
  {
    label: "Directions",
    aria: "Get directions to The Hallery",
    icon: MapPin,
    href: DIRECTIONS_URL,
    external: true,
  },
] as const;

export function HeroActionBar() {
  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-1.5 rounded-2xl border border-white/15 bg-ink/35 p-1.5 shadow-xl backdrop-blur-md md:w-auto md:max-w-none md:justify-center md:gap-2">
      <Button asChild variant="gold" size="sm" className="shadow-md">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book Now — opens the booking engine in a new tab"
        >
          <CalendarCheck aria-hidden="true" />
          <span>Book Now</span>
        </a>
      </Button>

      {SECONDARY.map(({ label, aria, icon: Icon, href, external }) => (
        <Button key={label} asChild variant="ghost" size="sm">
          <a
            href={href}
            aria-label={aria}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <Icon aria-hidden="true" />
            <span className="hidden phone:inline">{label}</span>
          </a>
        </Button>
      ))}
    </div>
  );
}
