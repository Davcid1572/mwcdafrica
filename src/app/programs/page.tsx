import type { Metadata } from "next";
import { PageBanner } from "@/components/ui/PageBanner";
import { ProgramsList } from "@/components/sections/programs/ProgramsList";
import { Join } from "@/components/sections/home/Join";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "From single workshops to multi-month fellowships, find the program that fits.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageBanner
        breadcrumbLabel="Programs"
        eyebrow="Programs"
        heading={
          <>
            Practical paths to{" "}
            <span className="italic text-primary">wellbeing</span> and growth.
          </>
        }
        description="From single workshops to multi-month fellowships, find the program that fits."
      />
      <ProgramsList />
      <Join />
    </>
  );
}
