import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="grid min-h-dvh place-items-center bg-paper px-6 text-center">
      <div className="max-w-md">
        <p className="mb-4 text-[0.7rem] uppercase tracking-[0.35em] text-gold-ink">404</p>
        <h1 className="mb-4 text-4xl">This path leads nowhere.</h1>
        <p className="mb-8 text-sm text-muted-foreground">
          The page you were looking for isn&apos;t part of the estate.
        </p>
        <Button asChild variant="outline">
          <Link href="/">Return to the estate</Link>
        </Button>
      </div>
    </div>
  );
}
