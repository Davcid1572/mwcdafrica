import Link from "next/link";

const stats = [
  {
    value: "47+",
    label: "Communities reached",
    sublabel: "across 6 regions",
  },
  {
    value: "18",
    label: "Programs delivered",
    sublabel: "Workshops & campaigns",
  },
  {
    value: "12",
    label: "Partnerships built",
    sublabel: "Institutions & NGOs",
  },
  {
    value: "3,353+",
    label: "Individuals supported",
    sublabel: "and counting",
  },
];

export function Impact() {
  return (
    <section
      aria-labelledby="impact-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-16 sm:py-24"
    >
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-4">
            Measured impact
          </p>
          <h2
            id="impact-heading"
            className="font-serif font-normal text-[30px] sm:text-[44px] leading-[1.1] tracking-[-0.02em] max-w-[10ch] text-balance"
          >
            Change you can feel.
          </h2>
        </div>
        <Link
          href="/impact"
          className="text-[14px] font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-light transition-colors"
        >
          Read the impact report &rarr;
        </Link>
      </div>

      <dl className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6">
        {stats.map(function (stat) {
          return (
            <div key={stat.label} className="border-t-2 border-accent pt-4">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-serif font-bold text-[36px] sm:text-[48px] leading-none tracking-[-0.02em] text-foreground">
                {stat.value}
              </dd>
              <p className="text-[14px] font-semibold text-foreground mt-3">
                {stat.label}
              </p>
              <p className="text-[12.5px] text-muted-foreground mt-1">
                {stat.sublabel}
              </p>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
