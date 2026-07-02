"use client";

import { Canvas } from "@react-three/fiber";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

interface CanvasSceneProps {
  children?: ReactNode;
  className?: string;
}

/**
 * Reusable React Three Fiber canvas wrapper — the foundation for any 3D / WebGL
 * moment (e.g. a coffee-bean particle field or drifting mist). Renders on demand
 * under reduced motion to avoid a constantly-animating frame loop.
 */
export function CanvasScene({ children, className }: CanvasSceneProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className={cn("pointer-events-none absolute inset-0", className)} aria-hidden="true">
      <Canvas
        dpr={[1, 2]}
        frameloop={prefersReducedMotion ? "demand" : "always"}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        {children}
      </Canvas>
    </div>
  );
}
