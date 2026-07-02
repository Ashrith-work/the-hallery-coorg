"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

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
  const [logoSrc, setLogoSrc] = useState("/hero/hallery-logo.svg");

  return (
    <section id="home" aria-label="Hero" className="relative min-h-[100svh] w-full overflow-hidden">
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
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/40"
      />

      {/* Logo — centered horizontally, upper third of the hero */}
      <div className="absolute left-1/2 top-[10%] -translate-x-1/2 md:top-[14%]">
        <motion.div
          // With reduced motion, `initial={false}` renders straight at the final state (no animation).
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 1.1, ease: "easeOut", delay: 0.2 }
          }
        >
          <Image
            src={logoSrc}
            onError={() => setLogoSrc("/hero/hallery-logo.png")}
            alt="The Hallery by Old Kent"
            width={360}
            height={260}
            quality={90}
            priority
            // Space is reserved via width/height (no layout shift); object-contain keeps the
            // aspect ratio intact. Adjust width/height to your asset's true ratio for a tight fit.
            className="h-auto w-[220px] object-contain md:w-[360px]"
          />
        </motion.div>
      </div>

      {/* Minimal scroll cue — static under reduced motion, gently bouncing otherwise */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-60"
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
