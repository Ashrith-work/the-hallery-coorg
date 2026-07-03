import Image from "next/image";

import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { SECTIONS } from "@/content/sections";
import { ABOUT_COPY } from "@/config/content";

/**
 * "About The Hallery" — the homepage intro, placed above the Gallery. Heading +
 * one paragraph (ABOUT_COPY) alongside a single estate image. Copy lives in
 * config/content.ts; the header in content/sections.ts.
 */
export function About() {
  const { title } = SECTIONS.about;

  return (
    <section id="about" aria-label={title} className="bg-paper py-12 tablet:py-20">
      <Container>
        <div className="grid items-center gap-8 tablet:grid-cols-2 tablet:gap-14">
          <Reveal>
            <SectionHeading title={title} />
            <p className="mt-6 max-w-xl text-ink-soft leading-relaxed">{ABOUT_COPY}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
              <Image
                src="/images/heritage-bungalow-garden.jpg"
                alt="The heritage bungalow and gardens at The Hallery, Coorg"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
