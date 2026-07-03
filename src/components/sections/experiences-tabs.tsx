"use client";

import { useState } from "react";

import { Container } from "@/components/common/container";
import { Eyebrow } from "@/components/common/eyebrow";
import { Reveal } from "@/components/common/reveal";
import { Card } from "@/components/ui/card";
import { EXPERIENCES_BEYOND, EXPERIENCES_WITHIN, type Experience } from "@/config/content";
import { cn } from "@/lib/utils";

/**
 * Step 7 — Experiences split into two groups. Tabs on desktop, stacked
 * sub-headings on mobile. Each experience is a unified hotel card (see <Card>).
 */
const GROUPS = [
  { key: "within", label: "Within The Hallery", items: EXPERIENCES_WITHIN },
  { key: "beyond", label: "Beyond The Hallery", items: EXPERIENCES_BEYOND },
] as const;

function Grid({ items }: { items: Experience[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 phone:grid-cols-2 tablet:grid-cols-4 tablet:gap-8">
      {items.map((exp, i) => (
        <Reveal key={exp.title} delay={(i % 4) * 0.06} className="h-full">
          <Card
            image={exp.image}
            imageAlt={exp.title}
            title={exp.title}
            description={exp.text}
            sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw"
          />
        </Reveal>
      ))}
    </div>
  );
}

export function ExperiencesTabs() {
  const [active, setActive] = useState(0);

  return (
    <section id="experiences" aria-label="Experiences" className="bg-cream py-12 tablet:py-20">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Experiences</Eyebrow>
          <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">Things to Do</h2>
          <p className="mt-5 text-ink-soft">
            On the estate and across Coorg — days shaped around your own pace.
          </p>
        </Reveal>

        {/* Desktop: tabs */}
        <div className="mt-10 hidden tablet:block">
          <div role="tablist" aria-label="Experience groups" className="flex gap-8 border-b border-line">
            {GROUPS.map((g, i) => (
              <button
                key={g.key}
                type="button"
                role="tab"
                id={`tab-${g.key}`}
                aria-selected={active === i}
                aria-controls={`panel-${g.key}`}
                onClick={() => setActive(i)}
                className={cn(
                  "relative -mb-px border-b-2 pb-3 text-[0.8rem] uppercase tracking-[0.16em] transition-colors",
                  active === i ? "border-gold text-ink" : "border-transparent text-stone hover:text-ink",
                )}
              >
                {g.label}
              </button>
            ))}
          </div>
          <div className="mt-10">
            {GROUPS.map((g, i) => (
              <div key={g.key} role="tabpanel" id={`panel-${g.key}`} aria-labelledby={`tab-${g.key}`} hidden={active !== i}>
                {active === i && <Grid items={g.items} />}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: stacked with sub-headings */}
        <div className="mt-10 space-y-12 tablet:hidden">
          {GROUPS.map((g) => (
            <div key={g.key}>
              <h3 className="mb-6 text-[0.8rem] uppercase tracking-[0.18em] text-gold-ink">{g.label}</h3>
              <Grid items={g.items} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
