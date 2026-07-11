import type { Metadata } from "next";
import { PageBanner } from "@/components/ui/PageBanner";
import { Opportunities } from "@/components/sections/volunteer/Opportunities";
import { VolunteerForm } from "@/components/sections/volunteer/VolunteerForm";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Whatever your skills, there is a place for you. Tell us where you would like to help.",
};

export default function VolunteerPage() {
  return (
    <>
      <PageBanner
        breadcrumbLabel="Volunteer"
        eyebrow="Volunteer with us"
        heading={
          <>
            Give your time.{" "}
            <span className="italic text-primary-hover">Change</span> a story.
          </>
        }
        description="Whatever your skills, there is a place for you. Tell us where you would like to help."
      />
      <Opportunities />
      <section className="bg-muted">
        <div className="px-5 sm:px-10 py-12 sm:py-20">
          <VolunteerForm />
        </div>
      </section>
    </>
  );
}
