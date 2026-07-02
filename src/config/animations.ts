/**
 * Motion tokens (PROJECT_RULES §6). Slow, filmic, purposeful.
 * Signature easing: cubic-bezier(0.16, 1, 0.3, 1). Shared across GSAP + Framer + CSS.
 */

/** Framer Motion easing (cubic-bezier control points). */
export const EASE = [0.16, 1, 0.3, 1] as const;

/** CSS / GSAP string form of the signature easing. */
export const EASE_CSS = "cubic-bezier(0.16, 1, 0.3, 1)";

/** Durations in seconds. Entrances are slow; UI feedback is quick but never snappy. */
export const DURATION = {
  fast: 0.3,
  base: 0.6,
  slow: 0.9,
  slower: 1.2,
} as const;

/** Reusable Framer Motion variants. */
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE },
  },
} as const;

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.slow, ease: EASE } },
} as const;

/** Container that staggers its children's reveal. */
export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) =>
  ({
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
  }) as const;

/** Sensible defaults for GSAP tweens to match the house motion language. */
export const GSAP_DEFAULTS = {
  ease: "power3.out",
  duration: DURATION.slow,
} as const;

/** Standard viewport trigger for scroll-reveal (Framer `whileInView`). */
export const VIEWPORT = { once: true, amount: 0.2 } as const;
