import Link from "next/link";
import { Tap } from "@/components/ui/Tap";

export default function NotFound() {
  return (
    <section className="max-w-[720px] mx-auto px-5 sm:px-10 py-24 sm:py-36 text-center">
      <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-6">
        404
      </p>
      <h1 className="font-serif font-medium text-[36px] sm:text-[56px] leading-[1.05] tracking-[-0.02em] text-balance mb-5">
        This page wandered off.
      </h1>
      <p className="text-[16px] leading-[1.6] text-muted-foreground max-w-[46ch] mx-auto mb-9">
        The page you&apos;re looking for doesn&apos;t exist, or it may have moved.
        Let&apos;s get you back somewhere useful.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Tap>
          <Link
            href="/"
            className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-[14.5px] px-6 py-3 rounded-full transition-colors"
          >
            Back to home
          </Link>
        </Tap>
        <Tap>
          <Link
            href="/contact"
            className="inline-block border border-foreground/25 text-foreground font-semibold text-[14.5px] px-6 py-3 rounded-full hover:bg-foreground/5 transition-colors"
          >
            Contact us
          </Link>
        </Tap>
      </div>
    </section>
  );
}
