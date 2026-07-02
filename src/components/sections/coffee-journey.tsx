import Image from "next/image";

import { Container } from "@/components/common/container";
import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { COFFEE_STAGES } from "@/config/content";

/**
 * Section 6 — Coffee Journey (WEBSITE_BLUEPRINT §6). A sticky plantation visual
 * holds while the crop-to-cup stages scroll past — CSS-only, so it's smooth and
 * reduced-motion safe.
 */
export function CoffeeJourney() {
  return (
    <section id="coffee" className="bg-cream py-[clamp(5rem,10vw,9rem)]">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>The Plantation</Eyebrow>
          <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">From Crop to Cup</h2>
          <p className="mt-5 text-ink-soft">
            Ours is a real working coffee and spice estate. Follow the bean from blossom to harvest
            to the cup in your hand — on the very slopes where Coorg&apos;s coffee story began.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 tablet:grid-cols-2 tablet:gap-16">
          <div className="tablet:sticky tablet:top-24 tablet:h-[70vh]">
            <div className="relative h-[50vh] overflow-hidden tablet:h-full">
              <Image
                src="/images/coffee-plantation-trail.jpg"
                alt="Coffee growing in the shade of the estate canopy"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col">
            {COFFEE_STAGES.map((stage) => (
              <Reveal key={stage.step} className="border-t border-line py-8 last:border-b">
                <span className="font-serif text-sm text-gold-ink">{stage.step}</span>
                <h3 className="mt-2 text-3xl">{stage.title}</h3>
                <p className="mt-2 max-w-sm text-ink-soft">{stage.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
