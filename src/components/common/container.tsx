import { cn } from "@/lib/utils";
import type { WithChildren } from "@/types";

/** Centered content column (max 1200px) with brand gutters. */
export function Container({
  children,
  className,
}: WithChildren & { className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-[75rem] px-5 tablet:px-7", className)}>{children}</div>
  );
}
