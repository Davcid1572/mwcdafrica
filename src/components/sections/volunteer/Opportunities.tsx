const opportunities = [
  {
    title: "Community facilitation",
    desc: "Help run workshops and support sessions on the ground.",
  },
  {
    title: "Mentorship",
    desc: "Guide creatives and young people in our programs.",
  },
  {
    title: "Skills & tech",
    desc: "Design, content, data, or product help for MICA & more.",
  },
  {
    title: "Events & outreach",
    desc: "Support campaigns, showcases and awareness drives.",
  },
];

export function Opportunities() {
  return (
    <section
      aria-labelledby="opportunities-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-12 sm:py-20"
    >
      <div className="max-w-[560px] mb-8 sm:mb-11">
        <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-3.5">
          Opportunities
        </p>
        <h2
          id="opportunities-heading"
          className="font-serif font-medium text-[26px] sm:text-[40px] leading-[1.1]"
        >
          Ways you can help
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {opportunities.map(function (o) {
          return (
            <div
              key={o.title}
              className="bg-background border border-border rounded-2xl p-6.5"
            >
              <h3 className="font-serif font-semibold text-[19px] mb-2">
                {o.title}
              </h3>
              <p className="text-[14px] leading-[1.55] text-muted-foreground">
                {o.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
