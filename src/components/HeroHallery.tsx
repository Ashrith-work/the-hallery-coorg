"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { HeroActionBar } from "@/components/hero/HeroActionBar";

/**
 * Full-screen hero for "The Hallery by Old Kent".
 *
 * Assets (drop into /public/hero/):
 *   /hero/hallery-bg.jpg    — full-bleed misty mountain background
 *   /hero/hallery-logo.svg  — crest + building line-art + "by OLD KENT" lockup
 *                             (falls back to /hero/hallery-logo.png if the SVG is missing)
 */
export function HeroHallery() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-label="Hero"
      // Step 1: 75svh on mobile, unchanged (100svh) on desktop.
      className="relative min-h-[75svh] w-full overflow-hidden md:min-h-[100svh]"
    >
      {/* Background image — decorative, sits behind all content */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/hero/hallery-bg.jpg"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Legibility overlay so the white crest logo + header read over the image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/45"
      />

      {/* White crest logo — centered in the hero (nudged up on mobile so it clears the
          action bar). Transparent container only: no bg, border, shadow, or filter. */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 pb-[16svh] md:pb-0">
        <motion.div
          // "Pop up" entrance: springs up small → overshoots slightly larger →
          // settles back to its original (scale 1) resting position.
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.4 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: [0.4, 1.15, 1] }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 1, ease: "easeOut", times: [0, 0.65, 1], delay: 0.2 }
          }
        >
          <Image
            src="/logo/hallery-logo-clean.png"
            alt="The Hallery by Old Kent"
            width={400}
            height={282}
            quality={90}
            priority
            className="h-auto w-[190px] object-contain md:w-[380px]"
          />
        </motion.div>
      </div>

      {/* Hero action bar: full-width row near the bottom on mobile, pinned bottom-center on desktop */}
      <div className="absolute inset-x-4 bottom-8 flex justify-center md:inset-x-0">
        <HeroActionBar />
      </div>
    </section>
  );
}

export default HeroHallery;
