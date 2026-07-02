import { cn } from "@/lib/utils";

/**
 * The signature wide-tracked uppercase label (PROJECT_RULES §4). On light
 * surfaces use the AA-safe `gold-ink`; on dark surfaces use `gold`.
 */
export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[0.72rem] font-normal uppercase tracking-[0.35em]",
        tone === "dark" ? "text-gold" : "text-gold-ink",
        className,
      )}
    >
      {children}
    </p>
  );
}
