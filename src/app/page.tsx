import { FlagshipInitiatives } from "@/components/sections/home/FlagShipInitiatives";
import { Hero } from "@/components/sections/home/Hero";
import { Impact } from "@/components/sections/home/Impact";
import { MissionMarquee } from "@/components/sections/home/MissionMarquee";
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
      <FlagshipInitiatives />
      <Impact />
      <Join />
    </>
  );
}
