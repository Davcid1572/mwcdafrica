import type { Metadata } from "next";
import { PageBanner } from "@/components/ui/PageBanner";
import { MetricsGrid } from "@/components/sections/impact/MetricsGrid";
import { Stories } from "@/components/sections/impact/Stories";
import { ReportsCaseStudies } from "@/components/sections/impact/ReportsCaseStudies";
import { Join } from "@/components/sections/home/Join";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Behind every number is a person, a family, a community moving toward wellbeing.",
};

export default function ImpactPage() {
  return (
    <>
      <PageBanner
        breadcrumbLabel="Impact"
        eyebrow="Our impact"
        heading={
          <>
            Change you can <span className="italic text-primary">measure</span>,
            and feel.
          </>
        }
        description="Behind every number is a person, a family, a community moving toward wellbeing."
      />
      <MetricsGrid />
      <Stories />
      <ReportsCaseStudies />
      <Join />
    </>
  );
}
