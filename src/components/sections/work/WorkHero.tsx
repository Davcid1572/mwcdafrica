import Link from "next/link";

export function WorkHero() {
  return (
    <section className="max-w-[1240px] mx-auto px-5 sm:px-12 pt-11 sm:pt-16 pb-10 sm:pb-16">
      <div className="flex items-center gap-4 mb-9 sm:mb-14">
        <span className="font-mono text-[12.5px] tracking-[1px] text-accent-light">
          Our work
        </span>
        <span className="flex-1 h-px bg-border" />
        {/* <Link
          href="/"
          className="font-mono text-[12.5px] tracking-[1px] text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; Home
        </Link> */}
      </div>

      <h1 className="font-serif font-medium text-[40px] sm:text-[68px] lg:text-[88px] leading-[0.98] tracking-[-0.03em] max-w-[14ch] text-balance">
        Five areas, one{" "}
        <span className="italic text-primary-hover">mission.</span>
      </h1>

      <p className="max-w-[540px] text-[16px] sm:text-[22px] leading-[1.6] text-muted-foreground mt-9 sm:mt-14">
        Every area reinforces the others, care, community, creativity,
        technology, and advocacy working as one interconnected system.
      </p>
    </section>
  );
}
