import Image from "next/image";

import { Container } from "@/components/common/container";
import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";
import { EXPERIENCES } from "@/config/content";
import { BOOK_NOW_URL } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Section 8 — Signature Experiences (WEBSITE_BLUEPRINT §8). An editorial mosaic
 * of curated moments; the bonfire is the full-width anchor.
 */
export function Experiences() {
  return (
    <section id="experiences" className="bg-cream py-[clamp(5rem,10vw,9rem)]">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Experiences</Eyebrow>
          <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">Days Shaped Around You</h2>
          <p className="mt-5 text-ink-soft">
            Our hosts arrange the estate around your pace — quiet mornings, curated afternoons,
            unhurried evenings under the stars.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 tablet:grid-cols-3">
          {EXPERIENCES.map((exp, i) => (
            <Reveal
              key={exp.title}
              delay={(i % 3) * 0.08}
              className={cn(
                "group relative aspect-[3/4] overflow-hidden",
                exp.hero && "col-span-2 aspect-[16/10] tablet:col-span-3",
              )}
            >
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                sizes="(max-width: 900px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-hallery group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-cream">
                <h3 className="text-xl">{exp.title}</h3>
                <p className="mt-1 text-sm text-cream/75">{exp.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Button asChild variant="outline">
            <a href={BOOK_NOW_URL} target="_blank" rel="noopener noreferrer">
              Plan Your Days
            </a>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
