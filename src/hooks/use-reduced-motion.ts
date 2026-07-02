"use client";

import { useMediaQuery } from "./use-media-query";

/**
 * True when the visitor prefers reduced motion. Motion is a first-class
 * accessibility concern (PROJECT_RULES §10) — gate every animation on this.
 */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
