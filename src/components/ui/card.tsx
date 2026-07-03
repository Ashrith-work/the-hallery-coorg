"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** A gold call-to-action rendered in the card body. Either a link or a click handler. */
export interface CardCta {
  label: string;
  href?: string;
  /** Opens in a new tab with safe rel attributes (for external booking pages). */
  external?: boolean;
  onClick?: () => void;
}

export interface CardProps {
  /** Top image (rendered with next/image `fill` inside a reserved aspect box — no layout shift). */
  image: string;
  imageAlt: string;
  title: string;
  /** Optional 1–2 line supporting copy. */
  description?: string;
  /** Optional wide-tracked label above the title. */
  eyebrow?: string;
  /** Optional chip row (e.g. room details). */
  tags?: string[];
  /** Optional gold CTA button in the body. */
  cta?: CardCta;
  /** Makes the whole image area a button (e.g. open a lightbox). Ignored when `cta` is set. */
  onClick?: () => void;
  /** Frame ratio for the image. Defaults to the hotel-listing 4:3. */
  aspect?: string;
  /** next/image `sizes` — defaults to a 3-col responsive grid. */
  sizes?: string;
  priority?: boolean;
  /** Surface tone. `dark` for cards on charcoal sections. */
  tone?: "light" | "dark";
  className?: string;
}

const DEFAULT_SIZES = "(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw";

/**
 * The single, reusable "hotel card" used across the site (rooms, experiences,
 * estate gallery). One consistent shell — rounded-2xl, soft border + shadow,
 * image on top at a fixed aspect ratio, serif title, optional description /
 * tags / gold CTA. Hover lift + image zoom are gated behind prefers-reduced-motion
 * via `motion-safe:`.
 */
export function Card({
  image,
  imageAlt,
  title,
  description,
  eyebrow,
  tags,
  cta,
  onClick,
  aspect = "aspect-[4/3]",
  sizes = DEFAULT_SIZES,
  priority = false,
  tone = "light",
  className,
}: CardProps) {
  const dark = tone === "dark";
  const imageIsButton = !cta && typeof onClick === "function";

  const img = (
    <Image
      src={image}
      alt={imageAlt}
      fill
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-hallery motion-safe:group-hover:scale-105"
    />
  );

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm transition-[transform,box-shadow] duration-500 ease-hallery motion-safe:hover:-translate-y-1 hover:shadow-md",
        dark ? "border-line bg-surface-dark text-cream" : "border-line bg-card text-ink",
        className,
      )}
    >
      <div className={cn("relative w-full overflow-hidden", aspect)}>
        {imageIsButton ? (
          <button
            type="button"
            onClick={onClick}
            aria-label={`View ${title}`}
            className="absolute inset-0 h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            {img}
          </button>
        ) : (
          img
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        {eyebrow ? (
          <p
            className={cn(
              "mb-2 text-[0.66rem] uppercase tracking-[0.22em]",
              dark ? "text-gold" : "text-gold-ink",
            )}
          >
            {eyebrow}
          </p>
        ) : null}

        <h3 className={cn("font-serif text-xl leading-snug", dark ? "text-cream" : "text-ink")}>
          {title}
        </h3>

        {description ? (
          <p className={cn("mt-2 text-sm", dark ? "text-cream/70" : "text-ink-soft")}>
            {description}
          </p>
        ) : null}

        {tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  "border px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.1em]",
                  dark ? "border-line text-gold" : "border-line text-gold-ink",
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {cta ? (
          <div className="mt-auto pt-5">
            {cta.href ? (
              <Button asChild variant="gold" size="sm">
                <a
                  href={cta.href}
                  {...(cta.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {cta.label}
                </a>
              </Button>
            ) : (
              <Button variant="gold" size="sm" onClick={cta.onClick}>
                {cta.label}
              </Button>
            )}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default Card;
