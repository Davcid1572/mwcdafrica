import Image from "next/image";
import Link from "next/link";
import { featuredPost } from "@/lib/data/blog";

export function FeaturedPost() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 pt-10 pb-5 sm:px-10 sm:pt-16 sm:pb-8">
      <Link
        href={`/blog/${featuredPost.slug}`}
        className="group grid overflow-hidden rounded-[22px] border border-border bg-muted lg:grid-cols-2"
      >
        {/* Image */}
        <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-full">
          <Image
            src={`/images/blog/${featuredPost.slug}.jpg`}
            alt={featuredPost.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

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
    </section>
  );
}
