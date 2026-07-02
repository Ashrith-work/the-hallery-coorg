"use client";

import { useState } from "react";
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect";

/** Document scroll progress as a 0–1 value. Useful for progress rails and timelines. */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const el = document.documentElement;
    const update = () => {
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? el.scrollTop / max : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
}
