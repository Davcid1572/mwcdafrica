import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { OurStory } from "@/components/sections/about/OurStory";
import { VisionMission } from "@/components/sections/about/VisionMission";

export const metadata: Metadata = {
  title: "About",
  description:
    "MWCDAFRICA is the parent foundation behind a growing ecosystem of mental-wellbeing and community-development work across Africa.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <VisionMission />
    </>
  );
}
