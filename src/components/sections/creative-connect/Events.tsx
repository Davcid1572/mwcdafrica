const events = [
  {
    day: "12",
    month: "Jul",
    title: "Expression & Healing Workshop",
    details: "In-person \u00b7 Lagos \u00b7 Free",
    color: "#2E5141",
  },
  {
    day: "28",
    month: "Jul",
    title: "Creative Connect Showcase",
    details: "Hybrid \u00b7 Online & Accra",
    color: "#C06B45",
  },
  {
    day: "09",
    month: "Aug",
    title: "Mentor Roundtable",
    details: "Online \u00b7 Open to members",
    color: "#2E5141",
  },
];

export function Events() {
  return (
    <section
      aria-labelledby="cc-events-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-14 sm:py-24"
    >
      <div className="mb-8 sm:mb-11">
        <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent mb-3">
          Upcoming events
        </p>
        <h2
          id="cc-events-heading"
          className="font-serif font-medium text-[26px] sm:text-[40px] leading-[1.1]"
        >
          Come create with us
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {events.map(function (ev) {
          return (
            <div
              key={ev.title}
              className="flex bg-muted border border-border rounded-2xl overflow-hidden"
            >
              <div
                className="flex-none w-[84px] flex flex-col items-center justify-center py-3.5 text-white"
                style={{ backgroundColor: ev.color }}
              >
                <span className="font-serif font-bold text-[26px] leading-none">
                  {ev.day}
                </span>
                <span className="text-[12px] uppercase tracking-[1px] text-white/80">
                  {ev.month}
                </span>
              </div>
              <div className="p-[18px] px-5">
                <h3 className="font-serif font-semibold text-[18px] mb-1.5">
                  {ev.title}
                </h3>
                <p className="text-[13.5px] text-muted-foreground">
                  {ev.details}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
