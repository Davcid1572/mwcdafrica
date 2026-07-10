import Link from "next/link";

const ways = [
  {
    title: "Funding & grants",
    desc: "Resource programs and scale what works.",
  },
  {
    title: "Program collaboration",
    desc: "Co-design and deliver work on the ground.",
  },
  {
    title: "Technical & in-kind",
    desc: "Lend expertise, tools, or platforms.",
  },
];

export function PartnershipOpportunities() {
  return (
    <section aria-label="Ways to partner" className="bg-muted">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-10 py-14 sm:py-20 flex flex-wrap gap-8 sm:gap-12">
        <div className="flex-1 min-w-[280px]">
          <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent mb-4.5">
            Ways to partner
          </p>
          <div className="flex flex-col gap-3.5">
            {ways.map(function (w) {
              return (
                <div
                  key={w.title}
                  className="bg-background rounded-[14px] px-[22px] py-5"
                >
                  <h3 className="font-serif font-semibold text-[18px] mb-1.5">
                    {w.title}
                  </h3>
                  <p className="text-[14px] text-muted-foreground leading-[1.55]">
                    {w.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-1 min-w-[300px] flex">
          <div className="relative overflow-hidden bg-primary text-primary-foreground rounded-[22px] p-7 sm:p-11 flex flex-col justify-center w-full">
            <svg
              viewBox="0 0 600 600"
              aria-hidden="true"
              className="absolute -right-38 -bottom-45 w-[340px] opacity-16 pointer-events-none"
            >
              <circle
                cx="300"
                cy="300"
                r="200"
                fill="none"
                stroke="var(--color-accent-light)"
                strokeWidth="3"
                strokeDasharray="900 320"
                transform="rotate(60 300 300)"
              />
            </svg>
            <div className="relative z-10">
              <h2 className="font-serif font-medium text-[24px] sm:text-[32px] leading-[1.16] mb-3 text-balance">
                Let&apos;s build something that lasts.
              </h2>
              <p className="text-[15.5px] leading-[1.6] text-primary-foreground/78 mb-6">
                Tell us about your organisation and where our missions meet.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-background text-primary font-semibold text-[15px] px-6.5 py-3.5 rounded-full"
              >
                Become a partner &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
