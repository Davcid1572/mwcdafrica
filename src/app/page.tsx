"use client";
import { Hero } from "@/components/sections/home/Hero";
import { MissionMarquee } from "@/components/sections/home/MissionMarquee";
import { WhatWeDo } from "@/components/sections/home/WhatWeDo";
import { WhyWeExist } from "@/components/sections/home/WhyWeExist";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <MissionMarquee />
      <WhyWeExist />
      <WhatWeDo />
      <Footer />
    </div>
  );
};

export default page;
