"use client";
import { Hero } from "@/components/sections/home/Hero";
import { MissionMarquee } from "@/components/sections/home/MissionMarquee";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <MissionMarquee />
      <Footer />
    </div>
  );
};

export default page;
