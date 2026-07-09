export function AboutCC() {
  return (
    <section
      aria-labelledby="about-cc-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-14 sm:py-24 flex flex-wrap gap-8 sm:gap-18"
    >
      <div className="flex-1 min-w-[280px]">
        <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-3.5">
          About Creative Connect
        </p>
        <h2
          id="about-cc-heading"
          className="font-serif font-medium text-[26px] sm:text-[38px] leading-[1.16] text-balance"
        >
          More than a program, a living network.
        </h2>
      </div>
      <div className="flex-1 min-w-[300px]">
        <p className="text-[16.5px] leading-[1.65] text-muted-foreground">
          Creative Connect Africa brings together creatives, facilitators and
          communities to use art and expression as tools for wellbeing, skills
          and livelihood. It&apos;s the creative heart of MWCDAFRICA, open,
          collaborative, and built to grow with the people in it.
        </p>
      </div>
    </section>
  );
}
