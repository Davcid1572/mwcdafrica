import Link from "next/link";
import { Tap } from "@/components/ui/Tap";

export function CurrentPartners() {
  return (
    <section
      aria-labelledby="current-partners-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-12 sm:py-20"
    >
      <p
        id="current-partners-heading"
        className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent mb-5.5"
      >
        Current partners
      </p>

      <div className="border border-dashed border-border rounded-[20px] px-6 sm:px-10 py-12 sm:py-16 text-center">
        <h2 className="font-serif font-medium text-[22px] sm:text-[28px] leading-[1.2] text-balance mb-3">
          We&apos;re newly incorporated, and open to partnership.
        </h2>
        <p className="text-[15px] leading-[1.6] text-muted-foreground max-w-[52ch] mx-auto mb-7">
          This is where your name will sit. As a young foundation, our first
          partners will help shape what this page looks like, and we&apos;d
          love for that to be you.
        </p>
        <Tap>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-[14.5px] px-6 py-3 rounded-full transition-colors"
          >
            Become our first partner &rarr;
          </Link>
        </Tap>
      </div>
    </section>
  );
}
