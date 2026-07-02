"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

import { DURATION, EASE, VIEWPORT } from "@/config/animations";

interface RevealProps extends HTMLMotionProps<"div"> {
  /** Stagger/entrance delay in seconds. */
  delay?: number;
  /** Vertical travel distance (px). */
  y?: number;
}

/**
 * Scroll-reveal wrapper — a slow fade + rise as it enters view, fired once.
 * Honors reduced motion automatically via the global MotionConfig
 * (`reducedMotion="user"` in MotionProvider).
 */
export function Reveal({ children, delay = 0, y = 28, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION.slow, ease: EASE, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
