"use client";

import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

const SmoothScrollContext = createContext<Lenis | null>(null);

/** Access the shared Lenis instance (null under reduced motion or during SSR). */
export function useLenis(): Lenis | null {
  return useContext(SmoothScrollContext);
}

/**
 * Drives buttery smooth scrolling with Lenis and keeps GSAP ScrollTrigger in sync,
 * both fed by a single GSAP ticker RAF loop. Disabled entirely under
 * `prefers-reduced-motion` (PROJECT_RULES §6/§10) — native scroll takes over.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const instance = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    setLenis(instance);

    instance.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      instance.destroy();
      setLenis(null);
    };
  }, [prefersReducedMotion]);

  return <SmoothScrollContext.Provider value={lenis}>{children}</SmoothScrollContext.Provider>;
}
