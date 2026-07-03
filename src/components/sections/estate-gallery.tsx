"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { Container } from "@/components/common/container";
import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { Card } from "@/components/ui/card";
import { ESTATE_GALLERY } from "@/config/content";

/**
 * Step 5 — "A Glimpse of the Estate": a uniform grid of hotel cards (see <Card>),
 * each opening a quiet lightbox. Images are the real estate set from /public/images/
 * (curated in ESTATE_GALLERY). One consistent card shell, matching the rest of the page.
 */
export function EstateGallery() {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : ESTATE_GALLERY[active];

  return (
    <section
      id="gallery"
      aria-label="A Glimpse of the Estate"
      className="bg-cream py-12 tablet:py-20"
    >
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Gallery</Eyebrow>
          <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">A Glimpse of the Estate</h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 phone:grid-cols-2 tablet:mt-14 tablet:grid-cols-4 tablet:gap-8">
          {ESTATE_GALLERY.map((img, i) => (
            <Reveal key={img.src} delay={(i % 4) * 0.05} className="h-full">
              <Card
                image={img.src}
                imageAlt={img.alt}
                title={img.caption}
                onClick={() => setActive(i)}
                sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw"
              />
            </Reveal>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[200] grid place-items-center bg-cream/95 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              className="absolute right-6 top-6 text-ink transition-colors hover:text-gold-ink"
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
