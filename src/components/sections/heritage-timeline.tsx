"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";

import { Container } from "@/components/common/container";
import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { TIMELINE } from "@/config/content";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Section 5 — Heritage Timeline (WEBSITE_BLUEPRINT §5). A gold spine draws itself
 * down with scroll (static under reduced motion), each era rising as it's reached.
 */
export function HeritageTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section id="heritage" className="bg-charcoal py-[clamp(5rem,10vw,9rem)] text-cream">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="dark">Heritage</Eyebrow>
          <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">
            A Living Legacy in the Hills of Haleri
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-16">
          <div className="absolute left-1.5 top-0 h-full w-px bg-line" aria-hidden>
            <motion.div
              style={{ scaleY: prefersReducedMotion ? 1 : scaleY }}
              className="block h-full w-full origin-top bg-gold"
            />
          </div>

          <div className="flex flex-col gap-16 pl-10 tablet:gap-24">
            {TIMELINE.map((milestone, i) => (
              <div
                key={milestone.era}
                className="grid gap-6 tablet:grid-cols-[0.85fr_1fr] tablet:items-center tablet:gap-12"
              >
                <Reveal>
                  <div className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-none text-gold">
                    {milestone.year}
                  </div>
                  <div className="mt-3 text-[0.72rem] uppercase tracking-[0.25em] text-cream/60">
                    {milestone.era}
                  </div>
                  <p className="mt-3 max-w-md text-cream/80">{milestone.text}</p>
                </Reveal>
                <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={milestone.image}
                    alt={milestone.era}
                    fill
                    sizes="(max-width: 900px) 100vw, 45vw"
                    className="object-cover"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
