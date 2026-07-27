const items = [
  "Community Development",
  "Dignity & Care",
  "Innovation",
  "Advocacy",
  "Mental Wellbeing",
];

const repeatedItems = [...items, ...items, ...items];

export function MissionMarquee() {
  return (
    <section className="relative z-20 -mt-4 overflow-hidden -rotate-2 bg-[#3C6B54] py-3.5 sm:py-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-r from-[#3C6B54] to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-l from-[#3C6B54] to-transparent" />

      {/* Marquee */}
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {repeatedItems.map((item, index) => (
          <div key={index} className="mx-5 sm:mx-8 flex items-center gap-5 sm:gap-8">
            <span className="font-serif text-[17px] sm:text-[22px] italic text-white/60">
              {item}
            </span>

            <svg
              width="20"
              height="20"
              viewBox="0 0 96 96"
              fill="none"
              aria-hidden="true"
              className="shrink-0"
            >
              <path
                d="M18 78L18 18L48 66L78 18L78 78"
                stroke="#F7F2EA"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 78L48 30L78 78"
                stroke="#D98A63"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
}
