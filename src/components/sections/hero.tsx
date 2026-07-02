"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/common/container";
import { Eyebrow } from "@/components/common/eyebrow";
import { Button } from "@/components/ui/button";
import { DURATION, EASE } from "@/config/animations";
import { BOOK_NOW_URL, SITE } from "@/config/site";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
};

const child = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.slow, ease: EASE } },
};

/**
 * Section 2 — Hero (WEBSITE_BLUEPRINT §2). The establishing shot: an aerial of
 * the estate at dusk, a confident statement, two calm CTAs. LCP image is priority.
 */
export function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden text-cream">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      >
        <Image
          src="/images/estate-aerial-dusk.jpg"
          alt="Aerial view of The Hallery estate among misty forested hills at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/25 to-ink/80" />

      <Container className="relative z-10">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-2xl">
          <motion.div variants={child}>
            <Eyebrow tone="dark">
              Haleri · Coorg · Since {SITE.since}
            </Eyebrow>
          </motion.div>
          <motion.h1
            variants={child}
            className="mt-5 text-[clamp(2.8rem,7vw,5.2rem)] leading-[1.05]"
          >
            An Estate Where the
            <br />
            <em className="text-gold">Hills Fall Quiet</em>
          </motion.h1>
          <motion.p variants={child} className="mt-6 max-w-lg text-lg text-cream/85">
            A 260-acre working coffee and spice estate in the mountains of Coorg — once the seat of
            the Haleri kings, kept as an intimate heritage retreat of eight rooms.
          </motion.p>
          <motion.div variants={child} className="mt-9 flex flex-col gap-3 phone:flex-row">
            <Button asChild variant="gold">
              <a href={BOOK_NOW_URL} target="_blank" rel="noopener noreferrer">
                Book Your Stay
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href="#estate">Explore the Estate</a>
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <a
        href="#introduction"
        aria-label="Scroll to introduction"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <span className="block h-9 w-6 rounded-full border border-cream/60" />
      </a>
    </section>
  );
}
