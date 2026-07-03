"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { BOOK_NOW_URL } from "@/config/site";

/**
 * Room-availability "reel" card (Step 2a) — Instagram-reel styling (9:16, rounded-2xl).
 *
 * ASSETS NEEDED (drop into /public/hero/):
 *   /hero/rooms-reel.mp4  — short muted looping reel of the rooms (optional)
 *   /hero/rooms-reel.jpg  — poster / fallback still (required)
 *
 * Under reduced motion we render the still image instead of autoplaying the video.
 */
export function RoomReelCard() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-[150px] max-w-[46vw] overflow-hidden rounded-2xl bg-charcoal/90 shadow-xl ring-1 ring-white/10 backdrop-blur md:w-[200px]">
      <div className="relative aspect-[9/16]">
        {prefersReducedMotion ? (
          <Image
            src="/hero/rooms-reel.jpg"
            alt="A suite at The Hallery"
            fill
            sizes="200px"
            className="object-cover"
          />
        ) : (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/hero/rooms-reel.jpg"
            aria-label="Rooms at The Hallery"
          >
            <source src="/hero/rooms-reel.mp4" type="video/mp4" />
          </video>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-3">
          <p className="font-serif text-lg leading-tight text-cream">Rooms Available</p>
          <p className="mt-0.5 text-[0.7rem] leading-snug text-cream/70">
            A few suites open this season.
          </p>
          <Button asChild variant="gold" size="sm" className="mt-2.5 w-full">
            <a href={BOOK_NOW_URL} target="_blank" rel="noopener noreferrer">
              Check Availability
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
