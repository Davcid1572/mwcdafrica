import Link from "next/link";
import { posts } from "@/lib/data/blog";
import { Photo } from "@/components/ui/Photo";
import { Tap } from "@/components/ui/Tap";

export function PostsGrid() {
  return (
    <section className="max-w-[1240px] mx-auto px-5 sm:px-10 pt-5 sm:pt-8 pb-14 sm:pb-24">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(function (post) {
          return (
            <Tap key={post.slug} className="block h-full">
              <Link
                href={"/blog/" + post.slug}
                className="group flex flex-col h-full overflow-hidden rounded-[22px] border border-border bg-muted p-5 transition-shadow hover:shadow-lg"
              >
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <Photo
                    src={"/images/blog/" + post.slug + ".jpg"}
                    alt={post.title}
                    className="aspect-[16/10]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute top-2 right-2 w-[42px] h-[42px] rounded-full flex items-center justify-center text-white text-[13px] font-bold"
                    style={{ backgroundColor: post.badgeColor }}
                  >
                    &rarr;
                  </span>
                </div>
                <span className="text-[12px] font-semibold uppercase tracking-[0.4px] text-accent-light mb-2">
                  {post.category} &middot; {post.date}
                </span>
                <h3 className="font-serif font-semibold text-[19px] leading-[1.28] group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </Link>
            </Tap>
          );
        })}
      </div>
    </section>
  );
}
