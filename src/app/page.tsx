import { LoadingExperience } from "@/components/sections/loading-experience";
import { HeroHallery } from "@/components/HeroHallery";
import { GoldTicker } from "@/components/hero/GoldTicker";
import { About } from "@/components/sections/about";
import { Accommodation } from "@/components/sections/accommodation";
import { ExperiencesTabs } from "@/components/sections/experiences-tabs";
import { EstateGallery } from "@/components/sections/estate-gallery";
import { CredibilitySlider } from "@/components/sections/credibility-slider";

/**
 * Homepage composition. The earlier Introduction/EstateStory/HeritageTimeline/
 * CoffeeJourney are consolidated into <About> (Step 4); the old Gallery/Experiences/
 * Testimonials are replaced by EstateGallery/ExperiencesTabs/CredibilitySlider.
 * Footer lives in the root layout.
 */
export default function Home() {
  return (
    <>
      <LoadingExperience />
      <HeroHallery />
      <GoldTicker />
      <About />
      <Accommodation />
      <ExperiencesTabs />
      <EstateGallery />
      <CredibilitySlider />
    </>
  );
}
