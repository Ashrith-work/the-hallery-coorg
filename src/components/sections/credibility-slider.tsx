"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import { Container } from "@/components/common/container";
import { Eyebrow } from "@/components/common/eyebrow";
import { CREDIBILITY } from "@/config/content";
import { cn } from "@/lib/utils";

/**
 * Step 3 — "Why Guests Trust The Hallery": auto-advancing credibility slider
 * (5s), dots, arrows on desktop, swipe on mobile. Autoplay off under reduced motion.
 */
export function CredibilitySlider() {
  const prefersReducedMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    prefersReducedMotion
      ? []
      : [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })],
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
    <section
      aria-label="Why guests trust The Hallery"
      className="bg-paper py-12 tablet:py-20"
    >
      <Container className="max-w-3xl text-center">
        <Eyebrow>Why Guests Trust The Hallery</Eyebrow>

        <div className="relative mt-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {CREDIBILITY.map((c) => (
                <div
                  key={c.source + c.author}
                  className="min-w-0 flex-[0_0_100%] px-6"
                  role="group"
                  aria-roledescription="slide"
                >
                  <div className="flex items-center justify-center gap-2">
                    {c.rating ? (
                      <>
                        <Star className="size-4 fill-gold text-gold" />
                        <span className="font-serif text-xl text-gold-ink">{c.rating}</span>
                      </>
                    ) : null}
                    <span className="text-[0.72rem] uppercase tracking-[0.22em] text-gold-ink">
                      {c.rating ? `on ${c.source}` : c.source}
                    </span>
                  </div>
                  <blockquote className="mt-6">
                    <p className="font-serif text-[clamp(1.4rem,3vw,2.1rem)] italic leading-[1.35] text-ink">
                      &ldquo;{c.quote}&rdquo;
                    </p>
                    <footer className="mt-5 text-[0.72rem] uppercase tracking-[0.2em] text-stone">
                      {c.author}
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous"
            className="absolute -left-2 top-1/2 hidden -translate-y-1/2 text-gold-ink transition-colors hover:text-gold md:block"
          >
            <ChevronLeft className="size-7" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next"
            className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-gold-ink transition-colors hover:text-gold md:block"
          >
            <ChevronRight className="size-7" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {CREDIBILITY.map((c, i) => (
            <button
              key={c.source + c.author}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === selected}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === selected ? "w-5 bg-gold-ink" : "w-1.5 bg-line",
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
