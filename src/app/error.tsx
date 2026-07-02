"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

/** Route-level error boundary. */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface to your monitoring here (Sentry, etc.) when configured.
    console.error(error);
  }, [error]);

  return (
    <div className="grid min-h-dvh place-items-center bg-paper px-6 text-center">
      <div className="max-w-md">
        <p className="mb-4 text-[0.7rem] uppercase tracking-[0.35em] text-gold-ink">The Hallery</p>
        <h1 className="mb-4 text-4xl">Something interrupted the quiet.</h1>
        <p className="mb-8 text-sm text-muted-foreground">
          An unexpected error occurred. Please try again.
        </p>
        <Button variant="outline" onClick={reset}>
          Try again
        </Button>
      </div>
    </div>
  );
}
