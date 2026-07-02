"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
  /** Tailwind aspect class for the frame, e.g. "aspect-[4/3]". */
  aspect?: string;
  /** Autoplay interval (ms). Disabled automatically under reduced motion. */
  autoplayMs?: number;
  className?: string;
  ariaLabel?: string;
}

/**
 * Lightweight embla carousel: one image at a time, loop, drag/swipe on mobile,
 * arrows on desktop, dots. Autoplay is opt-in and disabled under reduced motion.
 */
export function ImageCarousel({
  images,
  aspect = "aspect-[4/3]",
  autoplayMs,
  className,
  ariaLabel = "Image carousel",
}: ImageCarouselProps) {
  const prefersReducedMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    autoplayMs && !prefersReducedMotion
      ? [Autoplay({ delay: autoplayMs, stopOnInteraction: false, stopOnMouseEnter: true })]
      : [],
  );
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div
      className={cn("group relative overflow-hidden", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((img, i) => (
            <div
              key={img.src}
              className={cn("relative min-w-0 flex-[0_0_100%]", aspect)}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${images.length}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-ink/50 p-2 text-cream opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 md:block"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Next image"
        className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-ink/50 p-2 text-cream opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 md:block"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
        {snaps.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={`Go to image ${i + 1}`}
            aria-current={i === selected}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === selected ? "w-5 bg-gold" : "w-1.5 bg-cream/60",
            )}
          />
        ))}
      </div>
    </div>
  );
}
