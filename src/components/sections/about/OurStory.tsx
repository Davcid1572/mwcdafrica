export function OurStory() {
  return (
    <section
      aria-labelledby="our-story-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-12 py-16 sm:py-28"
    >
      <p className="font-mono text-[12.5px] tracking-[1px] text-accent-light mb-9 sm:mb-11">
        Our story
      </p>

      <h2
        id="our-story-heading"
        className="font-serif font-normal text-[28px] sm:text-[44px] leading-[1.16] tracking-[-0.02em] max-w-[20ch] text-balance"
      >
        From one conviction to a continental{" "}
        <span className="italic text-primary-hover">mission.</span>
      </h2>

      <div className="flex flex-wrap gap-10 sm:gap-16 mt-9 sm:mt-14">
        <p className="flex-1 min-w-[280px] max-w-[420px] text-[16px] leading-[1.65] text-muted-foreground">
          MWCDAFRICA began with a stubborn belief: that mental wellbeing and
          social dignity should not be luxuries. What started as a founder's
          response to a gap in care has grown into a structured foundation,
          building programs, partnerships, and technology that meet people where
          they are.
        </p>
        <p className="flex-1 min-w-[280px] max-w-[420px] text-[16px] leading-[1.65] text-muted-foreground">
          Today we steward an ecosystem designed to grow: a parent foundation
          strong enough to carry new flagship initiatives without rebranding or
          starting over.
        </p>
      </div>
    </section>
  );
}
