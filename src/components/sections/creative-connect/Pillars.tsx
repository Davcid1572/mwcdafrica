const pillars = [
  {
    title: "Programs",
    desc: "Workshops, residencies and skills labs that build craft and confidence.",
  },
  {
    title: "Events",
    desc: "Showcases, meetups and festivals that celebrate and connect.",
  },
  {
    title: "Community",
    desc: "A network of creatives and mentors supporting one another.",
  },
  {
    title: "Resources",
    desc: "Toolkits, guides and opportunities, shared openly.",
  },
];

export function Pillars() {
  return (
    <section
      aria-label="What Creative Connect offers"
      className="bg-[#221D17] text-[#F7F2EA]"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-10 py-14 sm:py-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(function (p) {
            return (
              <div
                key={p.title}
                className="bg-white/[0.06] border border-white/14 rounded-2xl p-6"
              >
                <h3 className="font-serif font-semibold text-[20px] mb-2">
                  {p.title}
                </h3>
                <p className="text-[14px] leading-[1.55] text-white/70">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
