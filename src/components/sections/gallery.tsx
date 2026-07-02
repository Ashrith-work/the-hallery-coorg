"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { Container } from "@/components/common/container";
import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { GALLERY } from "@/config/content";
import { cn } from "@/lib/utils";

/**
 * Section 9 — Estate Gallery (WEBSITE_BLUEPRINT §9). A wordless, asymmetric grid
 * on a dark field, with a quiet full-screen lightbox.
 */
export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const activeImg = active === null ? null : GALLERY[active];

  return (
    <section id="gallery" className="bg-charcoal py-[clamp(5rem,10vw,9rem)] text-cream">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow tone="dark">Gallery</Eyebrow>
          <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">A Glimpse of the Estate</h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 tablet:grid-cols-4">
          {GALLERY.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) * 0.06}
              className={cn(
                "group relative overflow-hidden",
                img.span === "tall" && "row-span-2",
                img.span === "wide" && "col-span-2",
              )}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                className="absolute inset-0 h-full w-full"
                aria-label={`View: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 900px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-hallery group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {activeImg && (
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
              <Image src={activeImg.src} alt={activeImg.alt} fill sizes="100vw" className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
