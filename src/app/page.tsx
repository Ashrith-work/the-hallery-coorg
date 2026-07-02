import { LoadingExperience } from "@/components/sections/loading-experience";
import { HeroHallery } from "@/components/HeroHallery";
import { Introduction } from "@/components/sections/introduction";
import { EstateStory } from "@/components/sections/estate-story";
import { HeritageTimeline } from "@/components/sections/heritage-timeline";
import { CoffeeJourney } from "@/components/sections/coffee-journey";
import { Accommodation } from "@/components/sections/accommodation";
import { Experiences } from "@/components/sections/experiences";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";

/** The cinematic scroll journey (WEBSITE_BLUEPRINT.md). Footer lives in the layout. */
export default function Home() {
  return (
    <>
      <LoadingExperience />
      <HeroHallery />
      <Introduction />
      <EstateStory />
      <HeritageTimeline />
      <CoffeeJourney />
      <Accommodation />
      <Experiences />
      <Gallery />
      <Testimonials />
    </>
  );
}
