import { PageBanner } from "@/components/ui/PageBanner";
import { DonationForm } from "@/components/sections/donate/DonationForm";
import { FundingPriorities } from "@/components/sections/donate/FundingPriorities";

export default function DonatePage() {
  return (
    <>
      <PageBanner
        breadcrumbLabel="Donate"
        eyebrow="Support our mission"
        heading={
          <>
            Your gift becomes{" "}
            <span className="italic text-primary-hover">care</span>, reaching
            someone who needs it.
          </>
        }
        description="Every contribution funds counselling, community programs, and the technology that brings support within reach across Africa."
      />

      <section className="max-w-[1240px] mx-auto px-5 sm:px-10 py-12 sm:py-20 flex flex-wrap gap-8 sm:gap-14">
        <DonationForm />
        <FundingPriorities />
      </section>
    </>
  );
}
