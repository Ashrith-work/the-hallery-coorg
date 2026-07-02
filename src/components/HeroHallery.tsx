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

      {/* Legibility overlay for future nav / headings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/45"
      />

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
