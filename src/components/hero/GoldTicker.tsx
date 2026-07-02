/**
 * Gold credibility ticker (Step 2b) — a seamless marquee scrolling toward the RIGHT.
 * The track is duplicated so there's no gap; the animation (`animate-marquee`, defined
 * in globals.css) is neutralized under prefers-reduced-motion by the global rule.
 * Pauses on hover. Reuses the existing gold + line tokens.
 */

const ITEMS = [
  "4.7 / 5 on Google",
  "Luxury Heritage Stay",
  "4.5 / 5 on MakeMyTrip",
  "Near Madikeri, Coorg",
] as const;

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="whitespace-nowrap px-6 text-[0.72rem] uppercase tracking-[0.25em] text-gold">
            {item}
          </span>
          <span className="text-gold" aria-hidden="true">
            •
          </span>
        </span>
      ))}
    </div>
  );
}

export function GoldTicker() {
  return (
    <div
      className="group overflow-hidden border-y border-line bg-charcoal py-3"
      aria-label="Guest ratings and highlights"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <Track />
        <Track hidden />
      </div>
    </div>
  );
}
