import Link from "next/link";

const initiatives = [
  {
    badge: "Ecosystem",
    title: "Creative Connect Africa",
    href: "/initiatives/creative-connect",
    description:
      "A creative ecosystem for community, learning, collaboration and empowerment, where talent and wellbeing grow together.",
    tags: ["Community", "Learning", "Collaboration", "Empowerment"],
  },
  {
    badge: "Platform",
    title: "MICA",
    href: "/initiatives/mica",
    description:
      "The Mental Health Innovation & Care Access platform, mood tracking, journaling, wellness resources and pathways to support.",
    tags: ["Mood tracking", "Journaling", "Wellness", "AI support"],
  },
];

export function FlagshipInitiatives() {
  return (
    <section
      aria-labelledby="flagship-heading"
      className="bg-[#221D17] text-[#F7F2EA]"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-10 py-16 sm:py-24">
        <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-5">
          Flagship initiatives
        </p>
        <h2
          id="flagship-heading"
          className="font-serif font-medium text-[30px] sm:text-[44px] leading-[1.12] tracking-[-0.02em] max-w-[16ch] text-balance mb-12 sm:mb-16"
        >
          One foundation. An ecosystem of{" "}
          <span className="italic text-accent-light">change.</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {initiatives.map(function (item) {
            return (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col justify-between min-h-[260px] sm:min-h-[340px] rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 hover:bg-white/[0.06] transition-colors"
              >
                <span className="inline-flex self-start items-center text-[11px] font-semibold uppercase tracking-[0.5px] text-accent border border-accent/50 rounded-full px-3 py-1 bg-accent-light">
                  {item.badge}
                </span>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-serif font-semibold text-[22px] sm:text-[26px]">
                      {item.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="text-accent-light text-[16px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      &#8599;
                    </span>
                  </div>
                  <p className="text-[14px] leading-[1.6] text-[#F7F2EA]/65 mb-5 max-w-[38ch]">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(function (tag) {
                      return (
                        <span
                          key={tag}
                          className="text-[12px] text-[#F7F2EA]/55 border border-white/12 rounded-full px-3 py-1"
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
