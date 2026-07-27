import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { featuredPost, posts } from "@/lib/data/blog";
import { Photo } from "@/components/ui/Photo";
import { Tap } from "@/components/ui/Tap";

const allPosts = [featuredPost, ...posts];

function getPost(slug: string) {
  return allPosts.find(function (p) {
    return p.slug === slug;
  });
}

export function generateStaticParams() {
  return allPosts.map(function (p) {
    return { slug: p.slug };
  });
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  return { title: post ? post.title : "Blog" };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="max-w-[760px] mx-auto px-5 sm:px-10 py-12 sm:py-20">
      <nav
        aria-label="Breadcrumb"
        className="font-mono text-[12px] text-muted-foreground mb-8"
      >
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-foreground transition-colors">
          Blog
        </Link>{" "}
        / {post.title}
      </nav>

      <span className="text-[12px] font-semibold uppercase tracking-[0.4px] text-accent-light">
        {post.category} &middot; {post.date}
      </span>

      <h1 className="font-serif font-semibold text-[30px] sm:text-[44px] leading-[1.12] tracking-[-0.02em] text-balance mt-3 mb-8">
        {post.title}
      </h1>

      <Photo
        src={`/images/blog/${post.slug}.jpg`}
        alt={post.title}
        className="aspect-[16/9] rounded-[20px] mb-10"
      />

      <div className="flex flex-col gap-5">
        {post.body.map(function (paragraph, i) {
          return (
            <p
              key={i}
              className="text-[16.5px] leading-[1.75] text-foreground/85"
            >
              {paragraph}
            </p>
          );
        })}
      </div>

      <div className="mt-14 pt-8 border-t border-border">
        <Tap>
          <Link
            href="/blog"
            className="inline-block font-semibold text-[14.5px] text-primary hover:text-primary-hover transition-colors"
          >
            &larr; Back to all articles
          </Link>
        </Tap>
      </div>
    </article>
  );
}
