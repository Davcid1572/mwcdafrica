import type { Metadata } from "next";
import { PageBanner } from "@/components/ui/PageBanner";
import { ResourceCategories } from "@/components/sections/resources/ResourceCategories";
import { ResourceCards } from "@/components/sections/resources/ResourceCards";
import { Join } from "@/components/sections/home/Join";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Articles, toolkits, guides, downloads, videos and podcasts, for everyone.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageBanner
        breadcrumbLabel="Resources"
        eyebrow="Resources"
        heading={
          <>
            Tools for{" "}
            <span className="italic text-primary-hover">wellbeing</span>, free
            and open.
          </>
        }
        description="Articles, toolkits, guides, downloads, videos and podcasts, for everyone."
      />

      <section className="max-w-[1240px] mx-auto px-5 sm:px-10 py-12 sm:py-20">
        <ResourceCategories />
        <ResourceCards />
      </section>

      <Join />
    </>
  );
}
