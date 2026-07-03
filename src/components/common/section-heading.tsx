import { Eyebrow } from "@/components/common/eyebrow";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Wide-tracked label above the title. */
  eyebrow?: string;
  /** H2 display title (existing Cormorant serif). */
  title: string;
  /** Optional supporting line. */
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

/**
 * The ONE section-header type scale, applied uniformly across sections (Step 5).
 * Extends the existing display serif — eyebrow → H2 → subtitle — with a fixed,
 * responsive scale (clamp) and generous display letter-spacing. No new font.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-2xl text-center", className)}>
      {eyebrow ? <Eyebrow tone={tone === "dark" ? "dark" : "light"}>{eyebrow}</Eyebrow> : null}

      <h2
        className={cn(
          "mt-4 font-serif font-medium leading-[1.08] tracking-[0.03em] text-[clamp(2.1rem,4.6vw,3.4rem)]",
          tone === "dark" ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>

      {subtitle ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-[clamp(0.95rem,1.4vw,1.05rem)] leading-relaxed",
            align === "center" && "mx-auto",
            tone === "dark" ? "text-cream/70" : "text-ink-soft",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
