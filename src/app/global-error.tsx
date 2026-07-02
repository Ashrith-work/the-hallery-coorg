"use client";

import { useEffect } from "react";

/**
 * Global error boundary — catches errors in the root layout itself, so it must
 * render its own <html>/<body>.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100dvh",
          display: "grid",
          placeItems: "center",
          background: "#fbf9f4",
          color: "#1a1712",
          fontFamily: "Georgia, serif",
          textAlign: "center",
          padding: "1.5rem",
        }}
      >
        <div>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Something went wrong.</h1>
          <button
            onClick={reset}
            style={{
              border: "1px solid #c6a15b",
              color: "#8a6a2c",
              padding: "0.75rem 1.5rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontSize: "0.75rem",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
