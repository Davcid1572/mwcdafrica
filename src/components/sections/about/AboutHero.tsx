import Image from "next/image";
import Link from "next/link";

export function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-12 pt-11 sm:pt-16 pb-10 sm:pb-16"
    >
      <div className="flex items-center gap-4 mb-9 sm:mb-14">
        <span className="font-mono text-[12.5px] tracking-[1px] text-accent"></span>
        <span className="flex-1 h-px bg-border" />
        <Link
          href="/"
          className="font-mono text-[12.5px] tracking-[1px] text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; Home
        </Link>
      </div>

      <h1
        id="about-hero-heading"
        className="font-serif font-medium text-[40px] sm:text-[68px] lg:text-[88px] leading-[0.98] tracking-[-0.03em] max-w-[15ch] text-balance"
      >
        An institution built around{" "}
        <span className="italic text-primary-hover">dignity.</span>
      </h1>

      <p className="text-[16px] sm:text-[18px] leading-[1.6] text-muted-foreground max-w-[520px] mt-9 sm:mt-14">
        MWCDAFRICA is the parent foundation behind a growing ecosystem of
        mental-wellbeing and community-development work, including Creative
        Connect Africa and MICA.
      </p>

      <div className="relative mt-9 sm:mt-14 overflow-hidden rounded-[20px] aspect-[16/9] sm:aspect-[16/7] sm:min-h-[220px] shadow-[0_30px_70px_-40px_rgba(34,29,23,0.5)]">
        <Image
          src="/images/about/founder-team.jpg"
          alt="Founder and team members meeting together"
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
