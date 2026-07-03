"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { RoomReelCard } from "@/components/hero/RoomReelCard";

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

      {/* Soft light scrim at the top so the dark header nav stays legible over the sky */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream/55 via-transparent to-transparent"
      />

      {/* Brand logo — centered in the hero (nudged up on mobile so it clears the reel card).
          The source asset is white-on-transparent, so we darken it to an ink silhouette
          (brightness-0) to read on the light hero.
          TODO(logo): replace with a native dark/gold logo asset for full fidelity. */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 pb-[28svh] md:pb-0">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 1.1, ease: "easeOut", delay: 0.2 }
          }
        >
          <Image
            src="/logo/hallery-logo-clean.png"
            alt="The Hallery by Old Kent"
            width={400}
            height={282}
            quality={90}
            priority
            className="h-auto w-[190px] object-contain brightness-0 md:w-[380px]"
          />
        </motion.div>
      </div>

      {/* Room-availability reel card (Step 2a): bottom-center on mobile, bottom-right on desktop */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0">
        <RoomReelCard />
      </div>

      {/* Minimal scroll cue — hidden on mobile (the reel card occupies the lower area) */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 opacity-60 md:block"
      >
        {prefersReducedMotion ? (
          <span className="block h-10 w-px bg-white/80" />
        ) : (
          <motion.span
            className="block h-10 w-px bg-white/80"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
          />
        )}
      </div>
    </section>
  );
}

export default HeroHallery;
