import type { Metadata } from "next";
import { WorkHero } from "@/components/sections/work/WorkHero";
import { Areas } from "@/components/sections/work/Areas";
import { Join } from "@/components/sections/home/Join";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Five areas, one mission. Care, community, creativity, technology, and advocacy working as one interconnected system.",
};

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <Areas />
      <Join />
    </>
  );
}
