import { cn } from "@/lib/utils";
import type { SectionProps } from "@/types";

interface SectionPlaceholderProps extends SectionProps {
  title: string;
  eyebrow?: string;
}

/**
 * Foundation-only scaffold used until real sections are composed
 * (see WEBSITE_BLUEPRINT.md). Keeps the page rendering and anchors resolvable.
 */
export function SectionPlaceholder({
  id,
  title,
  eyebrow = "The Hallery",
  className,
}: SectionPlaceholderProps) {
  return (
    <section
      id={id}
      className={cn(
        "flex min-h-[60svh] flex-col items-center justify-center border-b border-border px-6 py-24 text-center",
        className,
      )}
    >
      <p className="mb-4 text-[0.7rem] uppercase tracking-[0.35em] text-gold-ink">{eyebrow}</p>
      <h2 className="text-4xl">{title}</h2>
      <p className="mt-3 max-w-sm text-sm text-muted-foreground">
        Section scaffold — to be composed per WEBSITE_BLUEPRINT.md.
      </p>
    </section>
  );
}
