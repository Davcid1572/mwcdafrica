import Link from "next/link";
import { MissionMarquee } from "@/components/sections/home/MissionMarquee";

export function Join() {
  return (
    <section
      aria-labelledby="join-us-heading"
      className="relative bg-background overflow-hidden py-6 sm:py-10"
    >
      <div className="relative z-10 max-w-[720px] mx-auto text-center px-5 py-16 sm:py-20">
        <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-5">
          Join us
        </p>
        <h2
          id="join-us-heading"
          className="font-serif font-normal text-[32px] sm:text-[48px] leading-[1.15] tracking-[-0.02em] text-balance mb-9"
        >
          There is room for you in this{" "}
          <span className="italic text-primary">work.</span>
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/donate"
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-[14.5px] px-6 py-3 rounded-full transition-colors"
          >
            Donate now
          </Link>
          <Link
            href="/volunteer"
            className="border border-foreground/25 text-foreground font-semibold text-[14.5px] px-6 py-3 rounded-full hover:bg-foreground/5 transition-colors"
          >
            Become a volunteer
          </Link>
          <Link
            href="/partners"
            className="border border-foreground/25 text-foreground font-semibold text-[14.5px] px-6 py-3 rounded-full hover:bg-foreground/5 transition-colors"
          >
            Partner with us
          </Link>
        </div>
      </div>
    </section>
  );
}
