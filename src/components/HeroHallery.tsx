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

      {/* Logo — centered horizontally, upper third of the hero */}
      <div className="absolute left-1/2 top-[8%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.18)_45%,transparent_72%)] px-8 py-4 md:top-[12%] md:px-12 md:py-6">
        <motion.div
          // With reduced motion, `initial={false}` renders straight at the final state (no animation).
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 1.1, ease: "easeOut", delay: 0.2 }
          }
        >
          <Image
            src="/hero/hallery-logo.png"
            alt="The Hallery by Old Kent"
            width={360}
            height={254}
            quality={90}
            priority
            // Real crest (cream, transparent). Space reserved via width/height (no layout shift);
            // the drop-shadow keeps it legible over the photographic background.
            className="h-auto w-[220px] object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] md:w-[360px]"
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
