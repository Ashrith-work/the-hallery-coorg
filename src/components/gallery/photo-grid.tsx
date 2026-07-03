"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import { Reveal } from "@/components/common/reveal";
import { EASE } from "@/config/animations";
import { useMediaQuery } from "@/hooks/use-media-query";
import type { FolderImage } from "@/lib/gallery";
import { cn } from "@/lib/utils";

interface PhotoGridProps {
  /** Folder-driven images (resolved at build time by readImageFolder). */
  images: FolderImage[];
  /** next/image `sizes` for the thumbnails. */
  sizes?: string;
  /**
   * Hover effect. "zoom" (default) gently scales the image; "flip" spins it a full
   * turn on its vertical axis (rotateY 360°). On touch devices (no hover) the flip
   * plays once as each photo scrolls into view. Both are gated behind reduced motion.
   */
  hover?: "zoom" | "flip";
  className?: string;
}

const DEFAULT_SIZES = "(max-width: 560px) 50vw, (max-width: 900px) 33vw, 25vw";

/**
 * One combined responsive masonry grid (CSS columns) with a full-featured lightbox:
 * pinch-zoom on mobile, wheel / double-click zoom on desktop, swipe between images,
 * a close button, and keyboard support (Esc closes, arrows navigate). Thumbnails are
 * lazy-loaded and carry intrinsic width/height, so there is no layout shift.
 *
 * Reused by every folder-driven gallery (estate, experiences within/beyond).
 */
export function PhotoGrid({ images, sizes = DEFAULT_SIZES, hover = "zoom", className }: PhotoGridProps) {
  const [index, setIndex] = useState(-1);
  // Touch devices have no :hover, so trigger the flip on scroll-into-view instead.
  const noHover = useMediaQuery("(hover: none)");
  const reduceMotion = useReducedMotion();

  if (images.length === 0) {
    return <p className="text-sm text-ink-soft">Photos coming soon.</p>;
  }

  const flip = hover === "flip";
  const spin = flip && !reduceMotion ? { rotateY: 360 } : undefined;

  return (
    <>
      <div className={cn("columns-2 gap-4 tablet:columns-3 xl:columns-4", className)}>
        {images.map((img, i) => (
          <Reveal key={img.src} delay={(i % 4) * 0.05} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`View photo: ${img.alt}`}
              className={cn(
                "group block w-full overflow-hidden rounded-2xl border border-line focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
                flip && "[perspective:1000px]",
              )}
            >
              {flip ? (
                <motion.div
                  className="[transform-style:preserve-3d]"
                  initial={{ rotateY: 0 }}
                  whileHover={noHover ? undefined : spin}
                  whileInView={noHover ? spin : undefined}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.9, ease: EASE }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    sizes={sizes}
                    loading="lazy"
                    className="h-auto w-full object-cover"
                  />
                </motion.div>
              ) : (
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes={sizes}
                  loading="lazy"
                  className="h-auto w-full object-cover transition-transform duration-700 ease-hallery motion-safe:group-hover:scale-105"
                />
              )}
            </button>
          </Reveal>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index < 0 ? 0 : index}
        slides={images.map((img) => ({
          src: img.src,
          alt: img.alt,
          width: img.width,
          height: img.height,
        }))}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true, doubleTapDelay: 250 }}
        carousel={{ finite: false }}
        controller={{ closeOnBackdropClick: true }}
        styles={{ container: { backgroundColor: "rgba(26, 23, 18, 0.94)" } }}
      />
    </>
  );
}
