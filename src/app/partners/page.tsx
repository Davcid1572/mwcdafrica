import type { Metadata } from "next";
import { PageBanner } from "@/components/ui/PageBanner";
import { CurrentPartners } from "@/components/sections/partners/CurrentPartners";
import { PartnershipOpportunities } from "@/components/sections/partners/PartnershipOpportunities";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Our work is built on partnership, with institutions, funders, and organisations who share our belief in dignity.",
};

export default function PartnersPage() {
  return (
    <>
      <PageBanner
        breadcrumbLabel="Partners"
        eyebrow="Partners"
        heading={
          <>
            We go <span className="italic text-primary-hover">further</span>,
            together.
          </>
        }
        description="Our work is built on partnership, with institutions, funders, and organisations who share our belief in dignity."
      />
      <CurrentPartners />
      <PartnershipOpportunities />
    </>
  );
}
