import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { PhotoGrid } from "@/components/gallery/photo-grid";
import { SECTIONS } from "@/content/sections";
import { readImageFolder } from "@/lib/gallery";

/**
 * "A Glimpse of the Estate" — ONE combined masonry grid, folder-driven.
 *
 * Server Component: reads /public/gallery/estate at build time (readImageFolder)
 * and passes the resolved list to the client <PhotoGrid> (masonry + zoom lightbox).
 * Drop new photos into that folder and they appear on the next build — no code edits.
 * Titles/subtitle come from content/sections.ts.
 */
export function EstateGallery() {
  const { eyebrow, title, subtitle, folder } = SECTIONS.gallery;
  const images = readImageFolder(folder ?? "gallery/estate");

  return (
    <section id="gallery" aria-label={title} className="bg-cream py-12 tablet:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        </Reveal>

        <div className="mt-10 tablet:mt-14">
          <PhotoGrid images={images} hover="flip" />
        </div>
      </Container>
    </section>
  );
}
