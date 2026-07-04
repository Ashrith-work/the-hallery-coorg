"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { HeroActionBar } from "@/components/hero/HeroActionBar";
import { HeroAvailability } from "@/components/hero/HeroAvailability";

/**
 * Full-screen hero for "The Hallery by Old Kent".
 *
 * Layout (top → bottom, a centered flex column so nothing overlaps and there is
 * no layout shift): white crest logo → availability widget → contact row. The
 * logo stays fully visible above the widget; content sits on z-10 over the image.
 *
 * Assets (drop into /public/hero/):
 *   /hero/hallery-bg.jpg    — full-bleed misty mountain background
 */
export function HeroHallery() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[88svh] w-full flex-col items-center justify-center overflow-hidden px-4 py-24 md:min-h-[100svh] md:px-6 md:py-28"
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

      {/* Legibility overlay so the white crest logo reads over the image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/55"
      />

      {/* Content column: logo → availability widget → contact row */}
      <div className="relative z-10 flex w-full flex-col items-center gap-7 md:gap-9">
        {/* White crest logo — kept fully visible above the widget. Transparent
            container only (no bg/border); drop-shadow lifts it off the image. */}
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
            className="h-auto w-[190px] object-contain drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] md:w-[380px]"
          />
        </motion.div>

        {/* Availability search widget */}
        <HeroAvailability />

        {/* Contact shortcuts (Call / WhatsApp / Directions) */}
        <HeroActionBar />
      </div>
    </section>
  );
}

export default HeroHallery;
