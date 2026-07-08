const pillars = [
  { n: "01", label: "Wellbeing" },
  { n: "02", label: "Community" },
  { n: "03", label: "Innovation" },
  { n: "04", label: "Advocacy" },
];

export function WhyWeExist() {
  return (
    <section
      aria-labelledby="why-we-exist-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-16 sm:py-24"
    >
      <div className="relative">
        {/* Decorative rotated square outline, purely visual */}
        <div
          aria-hidden="true"
          className="hidden sm:block absolute right-0 top-2 w-16 h-16 rotate-12 rounded-2xl border border-accent/30"
        />

        <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-5">
          Why we exist
        </p>

        <h2
          id="why-we-exist-heading"
          className="font-serif font-normal text-[30px] sm:text-[44px] leading-[1.15] tracking-[-0.02em] max-w-[16ch] text-balance"
        >
          <span className="text-foreground">Wellbeing is not a luxury.</span>{" "}
          <span className="text-muted-foreground">
            It is the ground that everything else is built on.
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap gap-10 sm:gap-16 mt-14 sm:mt-20">
        <p className="flex-1 min-w-[260px] max-w-[420px] text-[15.5px] leading-[1.7] text-muted-foreground">
          Across Africa, mental-health and community-development resources stay
          out of reach for far too many. We close that gap, through programs,
          partnerships, and technology that carry dignity into every
          interaction.
        </p>

        <ul className="flex-1 min-w-[260px] max-w-[420px] border-t border-border">
          {pillars.map(function (item) {
            return (
              <li
                key={item.n}
                className="flex items-baseline gap-5 py-4 border-b border-border"
              >
                <span className="font-mono text-[12px] text-accent w-6 shrink-0">
                  {item.n}
                </span>
                <span className="text-[16px] font-medium text-foreground">
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
