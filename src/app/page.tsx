import { Hero } from "@/components/sections/home/Hero";
import { Impact } from "@/components/sections/home/Impact";
import { MissionMarquee } from "@/components/sections/home/MissionMarquee";
import { CreativeConnectShowcase } from "@/components/sections/home/CreativeConnectShowcase";
import { MicaShowcase } from "@/components/sections/home/MicaShowcase";
import { WhatWeDo } from "@/components/sections/home/WhatWeDo";
import { WhyWeExist } from "@/components/sections/home/WhyWeExist";
import { Join } from "@/components/sections/home/Join";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionMarquee />
      <WhyWeExist />
      <WhatWeDo />
      <CreativeConnectShowcase />
      <MicaShowcase />
      <Impact />
      <Join />
    </>
  );
}
