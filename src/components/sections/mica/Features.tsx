const features = [
  {
    title: "Mood tracking",
    desc: "Notice patterns over time with simple daily check-ins.",
  },
  {
    title: "Journaling",
    desc: "A private space to reflect, prompted or free-form.",
  },
  {
    title: "Wellness resources",
    desc: "Guides, exercises and tools, curated for real life.",
  },
  {
    title: "AI support",
    desc: "A compassionate, always-on first point of contact.",
  },
  {
    title: "Therapy referrals",
    desc: "Bridges to trusted professionals when you need more.",
  },
];

export function Features() {
  return (
    <section aria-labelledby="mica-features-heading" className="bg-muted">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-10 py-14 sm:py-24">
        <div className="max-w-[560px] mb-8 sm:mb-12">
          <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-3.5">
            Features
          </p>
          <h2
            id="mica-features-heading"
            className="font-serif font-medium text-[28px] sm:text-[44px] leading-[1.1] tracking-[-0.4px]"
          >
            Everything you need to check in with yourself
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(function (f) {
            return (
              <div key={f.title} className="bg-background rounded-2xl p-6.5">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4.5">
                  <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
                    <circle
                      cx="20"
                      cy="20"
                      r="13"
                      stroke="var(--color-primary)"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeDasharray="60 22"
                      transform="rotate(-118 20 20)"
                    />
                    <circle
                      cx="30"
                      cy="12.4"
                      r="3"
                      fill="var(--color-accent)"
                    />
                  </svg>
                </div>
                <h3 className="font-serif font-semibold text-[19px] mb-2">
                  {f.title}
                </h3>
                <p className="text-[14px] leading-[1.55] text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            );
          })}

          <div className="bg-primary-hover text-primary-foreground rounded-2xl p-6.5 flex flex-col justify-center">
            <h3 className="font-serif font-semibold text-[19px] mb-2">
              More on the way
            </h3>
            <p className="text-[14px] leading-[1.55] text-primary-foreground/78 mb-4">
              Group care, reminders, and localized content are on the roadmap.
            </p>
            <a
              href="#"
              className="text-[14px] font-semibold border-b-2 border-accent-light pb-0.5 self-start"
            >
              See roadmap &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
