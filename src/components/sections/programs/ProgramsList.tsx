const programs = [
  {
    n: "01",
    title: "Workshops",
    desc: "Short, hands-on sessions on mental health, creativity and skills.",
    status: "Ongoing",
  },
  {
    n: "02",
    title: "Training",
    desc: "Structured courses for facilitators, peer supporters and leaders.",
    status: "Cohorts",
  },
  {
    n: "03",
    title: "Fellowships",
    desc: "Multi-month programs nurturing changemakers and creatives.",
    status: "Annual",
  },
  {
    n: "04",
    title: "Community sessions",
    desc: "Open, recurring gatherings for support and connection.",
    status: "Weekly",
  },
  {
    n: "05",
    title: "Campaigns",
    desc: "Awareness drives that shift how communities see mental health.",
    status: "Seasonal",
  },
];

export function ProgramsList() {
  return (
    <section
      aria-label="All programs"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-12 sm:py-20 flex flex-col gap-3.5"
    >
      {programs.map(function (p) {
        return (
          <a
            key={p.n}
            href="#"
            className="group flex flex-wrap items-center gap-5 bg-background border border-border rounded-[18px] px-6 sm:px-7 py-6 hover:border-primary transition-colors"
          >
            <span className="font-serif font-bold text-[18px] text-accent-light flex-none w-9">
              {p.n}
            </span>
            <div className="flex-1 min-w-[260px]">
              <h3 className="font-serif font-semibold text-[21px] mb-1">
                {p.title}
              </h3>
              <p className="text-[14.5px] text-muted-foreground">{p.desc}</p>
            </div>
            <span className="text-[12.5px] font-semibold text-primary bg-primary/10 px-3.5 py-1.5 rounded-full">
              {p.status}
            </span>
            <span
              aria-hidden="true"
              className="text-accent-light font-semibold transition-transform group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </a>
        );
      })}
    </section>
  );
}
