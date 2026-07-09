"use client";

import { PageBanner } from "@/components/ui/PageBanner";
import { CategoryPills } from "@/components/sections/blog/CategoryPills";
import { use } from "react";
import { FeaturedPost } from "@/components/sections/blog/FeaturedPost";
import { PostsGrid } from "@/components/sections/blog/PostsGrid";
// import { FeaturedPost } from "@/components/sections/blog/FeaturedPost";
// import { PostsGrid } from "@/components/sections/blog/PostsGrid";

export default function BlogPage() {
  return (
    <>
      <PageBanner
        breadcrumbLabel="Blog"
        eyebrow="The blog"
        heading={
          <>
            Ideas, <span className="italic text-primary-hover">stories</span>,
            and field notes.
          </>
        }
      >
        <CategoryPills />
      </PageBanner>
      <FeaturedPost />
      <PostsGrid />
    </>
  );
}
