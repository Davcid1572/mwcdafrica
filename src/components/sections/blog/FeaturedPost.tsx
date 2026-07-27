import Link from "next/link";
import { featuredPost } from "@/lib/data/blog";
import { Photo } from "@/components/ui/Photo";
import { Tap } from "@/components/ui/Tap";

export function FeaturedPost() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 pt-10 pb-5 sm:px-10 sm:pt-16 sm:pb-8">
      <Tap className="block">
        <Link
          href={`/blog/${featuredPost.slug}`}
          className="group grid overflow-hidden rounded-[22px] border border-border bg-muted lg:grid-cols-2"
        >
          <Photo
            src={`/images/blog/${featuredPost.slug}.jpg`}
            alt={featuredPost.title}
            className="aspect-[16/10] lg:aspect-auto lg:min-h-full"
          />

          {/* Content */}
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <span className="text-[12px] font-semibold uppercase tracking-[0.4px] text-accent-light">
              {featuredPost.category} &middot; {featuredPost.date}
            </span>

            <h2 className="my-3 font-serif text-[24px] font-semibold leading-[1.18] sm:text-[32px]">
              {featuredPost.title}
            </h2>

            <p className="mb-6 text-[15px] leading-[1.6] text-muted-foreground">
              {featuredPost.excerpt}
            </p>

            <span className="inline-flex w-fit border-b-2 border-accent-light pb-0.5 text-[14.5px] font-semibold text-primary transition-colors group-hover:text-primary-hover">
              Read article &rarr;
            </span>
          </div>
        </Link>
      </Tap>
    </section>
  );
}
