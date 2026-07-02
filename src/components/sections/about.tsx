import Image from "next/image";

import { Container } from "@/components/common/container";
import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { ESTATE_STATS } from "@/config/content";

/**
 * Step 4 — the single, consolidated "About" block (heritage, property, location,
 * distinctiveness). The copy lives ONLY here; it is reused on the homepage and on
 * the dedicated /about route (app/about/page.tsx). Do not duplicate this copy.
 */
const DISTINCT = [
  { title: "A working estate", text: "Real coffee and spice, not a themed resort — 260 acres to wander." },
  { title: "Intimate by design", text: "Just eight rooms, so a stay feels private and personal." },
  { title: "Heritage kept alive", text: "Restored planter bungalows, antiques, and a century of story." },
  { title: "Coorg on the doorstep", text: "Minutes from Madikeri — waterfalls, forest, and Kodava culture." },
] as const;

export function About() {
  return (
    <section id="about" aria-label="About The Hallery" className="bg-paper py-[clamp(5rem,10vw,9rem)]">
      <Container>
        <div className="grid items-start gap-[clamp(2rem,6vw,5rem)] tablet:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Eyebrow>About</Eyebrow>
            <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">About The Hallery</h2>
            <div className="mt-6 space-y-4 text-ink-soft">
              <p>
                The Hallery is a heritage coffee and spice estate in the hills of Coorg, near
                Madikeri — set in Haleri, once the seat of Coorg&apos;s last sovereigns, the Haleri
                kings.
              </p>
              <p>
                In 1863 the English planter Frank Mangles brought coffee to these slopes. The
                planter bungalows were restored by our family from the 1960s and kept as a living,
                working estate — a place that has been tended, not built.
              </p>
              <p>
                Today it is 260 acres of coffee, spice, forest, and water, with an intimate retreat
                of eight rooms. Ours is a quiet kind of luxury: understated, personal, unhurried.
              </p>
            </div>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6">
              {ESTATE_STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-[clamp(1.8rem,3.6vw,2.6rem)] leading-none text-gold-ink">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[0.68rem] uppercase tracking-[0.14em] text-stone">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid gap-4">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/heritage-bungalow-garden.jpg"
                alt="The heritage bungalow across the estate garden"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="/images/coffee-plantation-trail.jpg"
                alt="A trail through the coffee plantation"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-10 tablet:grid-cols-4">
          {DISTINCT.map((d, i) => (
            <Reveal key={d.title} delay={(i % 4) * 0.06} className="border-t border-line pt-5">
              <h3 className="text-xl">{d.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{d.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
