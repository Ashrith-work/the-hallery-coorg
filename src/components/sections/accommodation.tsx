import Image from "next/image";

import { Container } from "@/components/common/container";
import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";
import { STAYS } from "@/config/content";
import { cn } from "@/lib/utils";

/**
 * Section 7 — Luxury Accommodation (WEBSITE_BLUEPRINT §7). Three named homes as
 * alternating cinematic panels — desire first, no room-rate grid, no prices.
 */
export function Accommodation() {
  return (
    <section id="stays" className="bg-charcoal py-[clamp(5rem,10vw,9rem)] text-cream">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="dark">Stays</Eyebrow>
          <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">Eight Rooms, Each With a History</h2>
          <p className="mt-5 text-cream/70">
            Every room opens to coffee and spice plantations — antiques, four-poster beds, and
            complete quiet.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-16 tablet:gap-24">
          {STAYS.map((stay, i) => (
            <div
              key={stay.slug}
              className="grid gap-8 tablet:grid-cols-2 tablet:items-center tablet:gap-14"
            >
              <Reveal
                className={cn(
                  "group relative aspect-[4/3] overflow-hidden",
                  i % 2 === 1 && "tablet:order-2",
                )}
              >
                <Image
                  src={stay.image}
                  alt={stay.name}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-hallery group-hover:scale-105"
                />
              </Reveal>

              <Reveal delay={0.1}>
                <h3 className="text-[clamp(1.8rem,3vw,2.6rem)]">{stay.name}</h3>
                <p className="mt-4 max-w-md text-cream/75">{stay.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {stay.details.map((detail) => (
                    <span
                      key={detail}
                      className="border border-line px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.1em] text-gold"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-6">
                  <span className="text-[0.72rem] uppercase tracking-[0.16em] text-cream/50">
                    Rates on request
                  </span>
                  <Button asChild variant="ghost" size="sm">
                    <a href="#booking">Enquire</a>
                  </Button>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
