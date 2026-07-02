"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

import { DURATION, EASE } from "@/config/animations";

/**
 * Global Framer Motion configuration. `reducedMotion="user"` makes every
 * animation honor the OS setting automatically (PROJECT_RULES §10).
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: DURATION.base, ease: EASE }}>
      {children}
    </MotionConfig>
  );
}
