import { LoadingExperience } from "@/components/sections/loading-experience";
import { HeroHallery } from "@/components/HeroHallery";
import { GoldTicker } from "@/components/hero/GoldTicker";
import { Accommodation } from "@/components/sections/accommodation";
import { ExperiencesTabs } from "@/components/sections/experiences-tabs";
import { EstateGallery } from "@/components/sections/estate-gallery";
import { CredibilitySlider } from "@/components/sections/credibility-slider";

/**
 * Homepage composition. The About/story block now lives only on the dedicated
 * /about route (the header "About" link points there); the homepage flows
 * Hero → Gallery → Stays → Experiences → Credibility. Footer lives in the root layout.
 */
export default function Home() {
  return (
    <>
      <LoadingExperience />
      <HeroHallery />
      <GoldTicker />
      <EstateGallery />
      <Accommodation />
      <ExperiencesTabs />
      <CredibilitySlider />
    </>
  );
}
