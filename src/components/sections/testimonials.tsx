"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/common/container";
import { Eyebrow } from "@/components/common/eyebrow";
import { EASE } from "@/config/animations";
import { TESTIMONIALS } from "@/config/content";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Section 10 — Testimonials (WEBSITE_BLUEPRINT §10). One voice at a time, given
 * room like a line of poetry. Auto-advances (paused under reduced motion).
 */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const current = TESTIMONIALS[index]!;

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => setIndex((v) => (v + 1) % TESTIMONIALS.length), 6500);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <section className="bg-paper py-[clamp(5rem,10vw,9rem)]">
      <Container className="max-w-3xl text-center">
        <Eyebrow>Guest Voices</Eyebrow>

        <div className="relative mt-8 min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <p className="font-serif text-[clamp(1.5rem,3.2vw,2.4rem)] italic leading-[1.3] text-ink">
                &ldquo;{current.quote}&rdquo;
              </p>
              <footer className="mt-6 text-[0.72rem] uppercase tracking-[0.2em] text-stone">
                {current.name} · {current.context}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setIndex(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className={cn(
                "h-1.5 w-6 rounded-full transition-colors",
                idx === index ? "bg-gold-ink" : "bg-line",
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
