import { CCHero } from "@/components/sections/creative-connect/CCHero";
import { AboutCC } from "@/components/sections/creative-connect/AboutCC";
import { CommunityGallery } from "@/components/sections/creative-connect/CommunityGallery";
import { Pillars } from "@/components/sections/creative-connect/Pillars";
import { Events } from "@/components/sections/creative-connect/Events";
import { Partnerships } from "@/components/sections/creative-connect/Partnerships";
import { JoinCC } from "@/components/sections/creative-connect/JoinCC";

export default function CreativeConnectPage() {
  return (
    <>
      <CCHero />
      <AboutCC />
      <CommunityGallery />
      <Pillars />
      <Events />
      <Partnerships />
      <JoinCC />
    </>
  );
}
