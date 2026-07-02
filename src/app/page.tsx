import { SectionPlaceholder } from "@/components/common/section-placeholder";

/**
 * Home route. The foundation renders a single placeholder to prove the pipeline
 * (layout → providers → page → loading/error) is wired. The cinematic sections
 * from WEBSITE_BLUEPRINT.md are composed here during the section-build phase.
 */
export default function Home() {
  return <SectionPlaceholder id="home" title="The Hallery" />;
}
