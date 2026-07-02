import Image from "next/image";

import { Container } from "@/components/common/container";
import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";

/**
 * Section 3 — Introduction (WEBSITE_BLUEPRINT §3). The soft landing after the
 * hero: a quiet, first-person welcome with vast negative space.
 */
export function Introduction() {
  return (
    <section id="introduction" className="bg-paper py-[clamp(5rem,10vw,9rem)]">
      <Container>
        <div className="grid items-center gap-[clamp(2rem,6vw,5rem)] tablet:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <Eyebrow>Welcome</Eyebrow>
            <p className="mt-6 font-serif text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.35] text-ink">
              The Hallery is a place that has been <em className="text-gold-ink">kept</em>, not
              built — a working coffee estate where time slows, and everything has been considered
              on your behalf.
            </p>
            <p className="mt-6 max-w-md text-ink-soft">
              Ours is a quiet kind of luxury: understated, personal, unhurried.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/heritage-bungalow-garden.jpg"
              alt="The heritage bungalow lit at dusk, seen across the estate garden"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
