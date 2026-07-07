import Link from "next/link";

const smallCards = [
  { n: "02", title: "Community Development", area: "community" },
  { n: "03", title: "Creative Empowerment", area: "creative" },
  { n: "04", title: "Digital Innovation", area: "digital" },
  { n: "05", title: "Advocacy & Awareness", area: "advocacy" },
];

export function WhatWeDo() {
  return (
    <section
      aria-labelledby="what-we-do-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-16 sm:py-24"
    >
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10 sm:mb-14">
        <div>
          <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent mb-4">
            What we do
          </p>
          <h2
            id="what-we-do-heading"
            className="font-serif font-normal text-[30px] sm:text-[44px] leading-[1.1] tracking-[-0.02em] max-w-[10ch] text-balance"
          >
            Five ways we show up.
          </h2>
        </div>
        <p className="max-w-[280px] text-[14px] leading-[1.6] text-muted-foreground">
          Each area reinforces the others, strong minds build strong
          communities, and strong communities hold space to heal.
        </p>
      </div>

      <div
        className="grid grid-cols-3 gap-3 sm:gap-4"
        style={{
          gridTemplateAreas:
            '"big community community" "big creative creative" "digital advocacy explore"',
        }}
      >
        {/* Big card */}
        <div className="[grid-area:big] bg-[#1F3A2E] text-[#F7F2EA] rounded-2xl p-6 sm:p-8 flex flex-col justify-end min-h-[220px] sm:min-h-[340px]">
          <span className="font-mono text-[12px] text-[#F7F2EA]/50 mb-3">
            01
          </span>
          <h3 className="font-serif font-medium text-[24px] sm:text-[30px] leading-[1.1] mb-2 text-balance">
            Mental Health &amp; Wellbeing
          </h3>
          <p className="text-[13.5px] leading-[1.55] text-[#F7F2EA]/70 max-w-[34ch]">
            Accessible care, counselling and resources, offered with dignity,
            meeting people where they are.
          </p>
        </div>

        {/* Small numbered cards */}
        {smallCards.map(function (card) {
          return (
            <div
              key={card.n}
              style={{ gridArea: card.area }}
              className="bg-[#1F3A2E] text-[#F7F2EA] rounded-2xl p-5 sm:p-6 flex flex-col justify-end min-h-[100px] sm:min-h-[150px]"
            >
              <span className="font-mono text-[11px] text-[#F7F2EA]/50 mb-2">
                {card.n}
              </span>
              <h3 className="text-[15px] sm:text-[16px] font-medium leading-[1.25]">
                {card.title}
              </h3>
            </div>
          );
        })}

        {/* CTA card */}
        <Link
          href="/work"
          style={{ gridArea: "explore" }}
          className="group bg-accent-light text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-end min-h-[100px] sm:min-h-[150px] hover:bg-accent-light transition-colors"
        >
          <span className="font-mono text-[11px] text-white/70 mb-2">
            Explore
          </span>
          <h3 className="text-[15px] sm:text-[16px] font-semibold leading-[1.25] flex items-center gap-1.5">
            See all our work
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </h3>
        </Link>
      </div>
    </section>
  );
}
