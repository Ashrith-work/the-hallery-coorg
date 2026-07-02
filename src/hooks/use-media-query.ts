"use client";

import { useEffect, useState } from "react";

/** Reactively track a CSS media query. SSR-safe (defaults to false). */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/** Design breakpoints per PROJECT_RULES §13. */
export const useIsPhone = () => useMediaQuery("(max-width: 560px)");
export const useIsTablet = () => useMediaQuery("(max-width: 900px)");
