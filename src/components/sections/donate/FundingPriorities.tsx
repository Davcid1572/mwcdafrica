const priorities = [
  {
    title: "Counselling & care",
    desc: "Free and subsidised mental-health support.",
  },
  {
    title: "Community programs",
    desc: "Workshops, training and grassroots development.",
  },
  {
    title: "Technology & access",
    desc: "Building MICA to reach people everywhere.",
  },
];

export function FundingPriorities() {
  return (
    <div className="flex-1 min-w-[300px]">
      <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent mb-4">
        Funding priorities
      </p>

      <div className="flex flex-col gap-3.5 mb-8">
        {priorities.map(function (item) {
          return (
            <div key={item.title} className="flex gap-3.5 items-start">
              <div
                aria-hidden="true"
                className="flex-none w-[38px] h-[38px] rounded-full bg-primary/10 flex items-center justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 40 40" fill="none">
                  <circle
                    cx="20"
                    cy="20"
                    r="13"
                    stroke="var(--color-primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="60 22"
                    transform="rotate(-118 20 20)"
                  />
                  <circle cx="30" cy="12.4" r="3" fill="var(--color-accent)" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-[15.5px]">{item.title}</div>
                <div className="text-[14px] text-muted-foreground leading-[1.5]">
                  {item.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-muted rounded-2xl p-6">
        <h3 className="font-serif font-semibold text-[18px] mb-2">
          Our transparency promise
        </h3>
        <p className="text-[14px] leading-[1.6] text-muted-foreground">
          We publish how funds are used. Every donation is tracked against
          programs, and an annual impact report is shared openly with our
          community.
        </p>
      </div>
    </div>
  );
}
