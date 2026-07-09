const values = [
  { n: "01", title: "Compassion", desc: "We lead with empathy, always." },
  { n: "02", title: "Dignity", desc: "Every person is treated as whole." },
  { n: "03", title: "Inclusion", desc: "No one is left outside the circle." },
  { n: "04", title: "Innovation", desc: "We build new paths to care." },
  { n: "05", title: "Integrity", desc: "We do what we say, transparently." },
  { n: "06", title: "Community", desc: "We heal together, not alone." },
];

export function CoreValues() {
  return (
    <section
      aria-labelledby="core-values-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-12 py-16 sm:py-28"
    >
      <div className="mb-9 sm:mb-14 max-w-[600px]">
        <p className="font-mono text-[12.5px] tracking-[1px] text-accent-light mb-4">
          Core values
        </p>
        <h2
          id="core-values-heading"
          className="font-serif font-medium text-[32px] sm:text-[52px] leading-[1.02] tracking-[-0.02em]"
        >
          What we hold ourselves to.
        </h2>
      </div>

      <ul className="border-t border-border">
        {values.map(function (v) {
          return (
            <li
              key={v.n}
              className="flex flex-wrap items-baseline gap-4 sm:gap-10 py-5 sm:py-7 border-b border-border"
            >
              <span className="font-mono text-[13px] text-accent-light w-9 shrink-0">
                {v.n}
              </span>
              <h3 className="flex-1 min-w-[180px] font-serif font-medium text-[22px] sm:text-[32px] leading-[1.04]">
                {v.title}
              </h3>
              <p className="flex-1 min-w-[240px] max-w-[420px] text-[14.5px] leading-[1.55] text-muted-foreground">
                {v.desc}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
