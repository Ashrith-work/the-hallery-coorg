"use client";

import type { ReactNode } from "react";

import { SmoothScrollProvider } from "@/context/smooth-scroll-context";
import { MotionProvider } from "./motion-provider";

/**
 * Single composition point for all client providers, mounted once in the root
 * layout. Add future providers (theme, analytics, audio) here.
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <MotionProvider>
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </MotionProvider>
  );
}
