import type { Metadata } from "next";
import { MicaHero } from "@/components/sections/mica/MicaHero";
import { WhatIsMica } from "@/components/sections/mica/WhatIsMica";
import { Features } from "@/components/sections/mica/Features";
import { ScreenByScreen } from "@/components/sections/mica/ScreenByScreen";
import { WaitlistCTA } from "@/components/sections/mica/WaitlistCTA";

export const metadata: Metadata = {
  title: "MICA",
  description:
    "MICA, the Mental Health Innovation & Care Access platform. Track, reflect, learn, and find support, wherever you are.",
};

export default function MicaPage() {
  return (
    <>
      <MicaHero />
      <WhatIsMica />
      <Features />
      <ScreenByScreen />
      <WaitlistCTA />
    </>
  );
}
