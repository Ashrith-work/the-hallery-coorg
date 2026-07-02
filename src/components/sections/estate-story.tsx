import Image from "next/image";

import { Container } from "@/components/common/container";
import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { ESTATE_FEATURES, ESTATE_STATS } from "@/config/content";

/**
 * Section 4 — The Estate Story (WEBSITE_BLUEPRINT §4). Scale, authenticity, place:
 * a real 260-acre working estate, its figures, and life across the land.
 */
export function EstateStory() {
  return (
    <section id="estate" className="bg-paper py-[clamp(5rem,10vw,9rem)]">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>The Estate</Eyebrow>
          <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">Life Across the Land</h2>
          <p className="mt-5 text-ink-soft">
            260 acres of plantation, forest, and water — a real working coffee and spice estate to
            wander at your own pace.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-y border-line py-8">
          {ESTATE_STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-[clamp(2rem,4vw,2.8rem)] leading-none text-gold-ink">
                {stat.value}
              </div>
              <div className="mt-2 text-[0.72rem] uppercase tracking-[0.14em] text-stone">
                {stat.label}
              </div>
            </div>
          ))}
        </Reveal>
      </Container>

      <Reveal className="relative mt-14 aspect-[21/9] w-full overflow-hidden">
        <Image
          src="/images/coffee-plantation-trail.jpg"
          alt="A forest trail lined with coffee bushes on the estate"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </Reveal>

      <Container className="mt-16">
        <div className="grid gap-x-10 gap-y-12 tablet:grid-cols-3">
          {ESTATE_FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 0.08} className="border-t border-line pt-5">
              <h3 className="text-2xl">{feature.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{feature.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
