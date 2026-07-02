import { SITE } from "@/config/site";

/**
 * Route-level loading UI — the foundation of the "Loading Experience"
 * (WEBSITE_BLUEPRINT §1): a lantern-lit monogram on a dark field. The full
 * mist-clearing reveal is layered on during the section build.
 */
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] grid place-items-center bg-charcoal text-cream">
      <div className="flex flex-col items-center">
        <span className="grid size-14 animate-pulse place-items-center border border-gold font-serif text-lg tracking-wide text-gold">
          TH
        </span>
        <p className="mt-4 text-[0.6rem] uppercase tracking-[0.4em] text-gold">
          {SITE.name} · {SITE.subName}
        </p>
      </div>
    </div>
  );
}
