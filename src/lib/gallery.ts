import fs from "node:fs";
import path from "node:path";

import { imageSize } from "image-size";

/**
 * A single folder-driven image, resolved at BUILD TIME. `width`/`height` are the
 * intrinsic pixel dimensions (read from the file header) so next/image can reserve
 * space and the masonry grid has zero layout shift.
 */
export interface FolderImage {
  /** Public URL, e.g. "/gallery/estate/rosarium-fountain.jpg". */
  src: string;
  /** Alt text derived from the filename. */
  alt: string;
  width: number;
  height: number;
}

const IMAGE_RE = /\.(jpe?g|png|webp)$/i;

/** "rosarium-fountain.jpg" -> "Rosarium fountain" (used as alt text). */
function filenameToAlt(file: string): string {
  const base = file
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!base) return "The Hallery";
  return base.charAt(0).toUpperCase() + base.slice(1);
}

/**
 * Read an image folder under /public at build time.
 *
 * `publicDir` is relative to /public (e.g. "gallery/estate"). Returns every
 * .jpg/.jpeg/.png/.webp in the folder, sorted by filename. Drop new images into
 * the folder — or swap the whole folder — and they appear on the next build with
 * NO code changes. A missing/empty folder returns an empty array (never throws).
 *
 * Server-only: uses node:fs, so call it from a Server Component.
 */
export function readImageFolder(publicDir: string): FolderImage[] {
  const dir = path.join(process.cwd(), "public", publicDir);

  let files: string[];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }

  return files
    .filter((file) => IMAGE_RE.test(file))
    .sort((a, b) => a.localeCompare(b, "en"))
    .map((file) => {
      const { width, height } = imageSize(fs.readFileSync(path.join(dir, file)));
      return {
        src: `/${publicDir}/${file}`,
        alt: filenameToAlt(file),
        width: width ?? 1600,
        height: height ?? 1200,
      };
    });
}
