import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { PhotoGrid } from "@/components/gallery/photo-grid";
import { SECTIONS } from "@/content/sections";
import { readImageFolder } from "@/lib/gallery";

/**
 * Experiences — two folder-driven combined grids stacked in one section:
 * "Within The Hallery" (/public/experiences/within) and "Beyond The Hallery"
 * (/public/experiences/beyond). Each is ONE combined grid with the same masonry +
 * zoom lightbox as the estate gallery. Server Component: folders are read at build
 * time; drop images into either folder and they appear next build with no code edits.
 */
export function ExperiencesTabs() {
  const within = SECTIONS.experiencesWithin;
  const beyond = SECTIONS.experiencesBeyond;
  const withinImages = readImageFolder(within.folder ?? "experiences/within");
  const beyondImages = readImageFolder(beyond.folder ?? "experiences/beyond");

  return (
    <section id="experiences" aria-label="Experiences" className="bg-cream py-12 tablet:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={within.eyebrow} title={within.title} subtitle={within.subtitle} />
        </Reveal>
        <div className="mt-10 tablet:mt-14">
          <PhotoGrid images={withinImages} />
        </div>

        <div className="mt-16 tablet:mt-24">
          <Reveal>
            <SectionHeading
              eyebrow={beyond.eyebrow}
              title={beyond.title}
              subtitle={beyond.subtitle}
            />
          </Reveal>
          <div className="mt-10 tablet:mt-14">
            <PhotoGrid images={beyondImages} />
          </div>
        </div>
      </Container>
    </section>
  );
}
