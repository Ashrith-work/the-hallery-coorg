"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { Card } from "@/components/ui/card";
import { STAYS } from "@/config/content";
import { BOOK_NOW_URL } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Section 7 — Luxury Accommodation (WEBSITE_BLUEPRINT §7). The three named homes
 * as a single-card carousel: one room shown at a time, auto-advancing every 1.8s
 * (looping), with arrows + dots. Each slide is a unified hotel <Card>. Autoplay is
 * disabled under prefers-reduced-motion and pauses on hover.
 */
export function Accommodation() {
  const prefersReducedMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    prefersReducedMotion
      ? []
      : [Autoplay({ delay: 1800, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const [selected, setSelected] = useState(0);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="stays" className="bg-charcoal py-12 text-cream tablet:py-20">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="dark">Stays</Eyebrow>
          <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">Three Homes, Each With a History</h2>
          <p className="mt-5 text-cream/70">
            Every room opens to coffee and spice plantations — antiques, four-poster beds, and
            complete quiet.
          </p>
        </Reveal>

        <div
          className="relative mx-auto mt-10 max-w-md tablet:mt-14"
          role="region"
          aria-roledescription="carousel"
          aria-label="Room stays"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {STAYS.map((stay, i) => (
                <div
                  key={stay.slug}
                  className="min-w-0 flex-[0_0_100%]"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${STAYS.length}: ${stay.name}`}
                >
                  <Card
                    tone="dark"
                    image={stay.image}
                    imageAlt={`${stay.name} — heritage accommodation at The Hallery`}
                    title={stay.name}
                    description={stay.description}
                    tags={stay.details}
                    cta={{ label: "Book Now", href: BOOK_NOW_URL, external: true }}
                    sizes="(max-width: 560px) 100vw, 28rem"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous room"
            className="absolute -left-3 top-[28%] hidden -translate-y-1/2 rounded-full bg-ink/50 p-2 text-cream backdrop-blur transition-colors hover:text-gold tablet:-left-12 tablet:block"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next room"
            className="absolute -right-3 top-[28%] hidden -translate-y-1/2 rounded-full bg-ink/50 p-2 text-cream backdrop-blur transition-colors hover:text-gold tablet:-right-12 tablet:block"
          >
            <ChevronRight className="size-6" />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {STAYS.map((stay, i) => (
              <button
                key={stay.slug}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Go to ${stay.name}`}
                aria-current={i === selected}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === selected ? "w-5 bg-gold" : "w-1.5 bg-cream/40",
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
