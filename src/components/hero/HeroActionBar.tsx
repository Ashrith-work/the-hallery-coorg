import { MapPin, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";

/** Google Maps directions to the estate, built from the address in config/site.ts. */
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `The Hallery, ${SITE.location.street}, ${SITE.location.locality}, ${SITE.location.region} ${SITE.location.postalCode}`,
)}`;

/**
 * Hero contact row — Call / WhatsApp / Directions as light outline actions.
 * Booking lives in the HeroAvailability widget (and the sticky BOOK HALLERY bar),
 * so this row carries only the contact shortcuts. Sits under the widget in the hero.
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
    <div className="flex w-full max-w-sm items-center justify-center gap-1.5 rounded-2xl border border-white/15 bg-ink/35 p-1.5 shadow-xl backdrop-blur-md md:w-auto md:max-w-none md:gap-2">
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
