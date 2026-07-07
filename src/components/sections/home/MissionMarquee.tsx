import Image from "next/image";

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
    <section className="relative z-20 -mt-4 hidden overflow-hidden -rotate-2 bg-[#3C6B54] py-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)] md:block">
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#3C6B54] to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#3C6B54] to-transparent" />

      {/* Marquee */}
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {repeatedItems.map((item, index) => (
          <div key={index} className="mx-8 flex items-center gap-8">
            <span className="font-serif text-[22px] italic text-white/60">
              {item}
            </span>

            <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-[#3C6B54] shrink-0">
              <Image src="/brand/logo-mark.png" alt="" width={22} height={22} />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
