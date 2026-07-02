import type { Metadata } from "next";
import Image from "next/image";

import { About } from "@/components/sections/about";
import { Container } from "@/components/common/container";
import { Eyebrow } from "@/components/common/eyebrow";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of The Hallery — a heritage coffee and spice estate in the hills of Coorg, near Madikeri.",
};

/**
 * Dedicated /about route. Reuses the shared <About> component so the story copy
 * lives in ONE place (src/components/sections/about.tsx). The dark banner gives
 * the fixed header a legible backdrop on this standalone page.
 */
export default function AboutPage() {
  return (
    <>
      <section aria-label="About banner" className="relative flex min-h-[42svh] items-end overflow-hidden bg-charcoal">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/estate-aerial-dusk.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/80"
        />
        <Container className="relative z-10 pb-12 pt-28 text-cream">
          <Eyebrow tone="dark">The Hallery · Coorg</Eyebrow>
          <h1 className="mt-3 text-[clamp(2.4rem,6vw,4rem)]">Our Story</h1>
        </Container>
      </section>

      <About />
    </>
  );
}
