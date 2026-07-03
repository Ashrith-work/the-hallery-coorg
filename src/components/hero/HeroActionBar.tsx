import { CalendarCheck, MapPin, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/content/sections";

/**
 * Hero action bar — a single horizontal row of icon + label actions. "Book Now"
 * is the gold primary (opens the booking engine in a new tab, URL from
 * content/sections.ts → BOOKING_URL); Call / WhatsApp / Directions are lighter
 * outline actions. Pinned bottom-center on desktop, a clean full-width row on mobile.
 *
 * TODO: replace the placeholder tel: / wa.me / maps hrefs below with real values.
 */
const SECONDARY = [
  {
    label: "Call",
    aria: "Call The Hallery",
    icon: Phone,
    href: "tel:+910000000000", // TODO: real reservations phone number
    external: false,
  },
  {
    label: "WhatsApp",
    aria: "Message The Hallery on WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/910000000000", // TODO: real WhatsApp number (international format, no +)
    external: true,
  },
  {
    label: "Directions",
    aria: "Get directions to The Hallery",
    icon: MapPin,
    href: "https://www.google.com/maps/search/?api=1&query=The+Hallery+Coorg", // TODO: real place / coordinates
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
