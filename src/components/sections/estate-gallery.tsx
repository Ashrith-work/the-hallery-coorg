"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { Container } from "@/components/common/container";
import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { cn } from "@/lib/utils";

/**
 * Step 5 — "A Glimpse of the Estate": responsive masonry grid from
 * /public/estate/estate-1..8.jpg (lazy-loaded), with a quiet lightbox.
 * ASSETS: replace the 8 placeholder photos in /public/estate/ with the real set.
 */
const IMAGES = Array.from({ length: 8 }, (_, i) => ({
  src: `/estate/estate-${i + 1}.jpg`,
  alt: `The Hallery estate — photo ${i + 1}`,
}));

const SPAN: Array<"tall" | "wide" | ""> = ["tall", "", "", "wide", "", "tall", "", ""];

export function EstateGallery() {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : IMAGES[active];

  return (
    <section
      id="gallery"
      aria-label="A Glimpse of the Estate"
      className="bg-charcoal py-[clamp(5rem,10vw,9rem)] text-cream"
    >
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow tone="dark">Gallery</Eyebrow>
          <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">A Glimpse of the Estate</h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-3 tablet:grid-cols-4">
          {IMAGES.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) * 0.05}
              className={cn(
                "group relative overflow-hidden",
                SPAN[i] === "tall" && "row-span-2",
                SPAN[i] === "wide" && "col-span-2",
              )}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`View ${img.alt}`}
                className="absolute inset-0 h-full w-full"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 900px) 50vw, 25vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-hallery group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[200] grid place-items-center bg-ink/95 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              className="absolute right-6 top-6 text-cream transition-colors hover:text-gold"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X className="size-7" />
            </button>
            <motion.div
              className="relative h-[80vh] w-full max-w-5xl"
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
            >
              <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
