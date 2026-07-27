import Link from "next/link";
import { MagicianCards } from "@/components/ui/MagicianCards";
import { WaitlistForm } from "@/components/sections/mica/WaitlistForm";

const heroCards = [
  { src: "/images/home/mica-card-1.png", alt: "MICA app splash screen" },
  { src: "/images/home/mica-card-2.png", alt: "MICA home screen with mood layers" },
  { src: "/images/home/mica-card-3.png", alt: "MICA journaling screen" },
  { src: "/images/home/mica-card-4.png", alt: "MICA resources screen" },
];

export function MicaHero() {
  return (
    <section className="relative overflow-hidden bg-[#221D17] text-[#F7F2EA]">
      <svg
        viewBox="0 0 600 600"
        aria-hidden="true"
        className="absolute -right-40 -bottom-50 w-[480px] opacity-16 pointer-events-none"
      >
        <circle
          cx="300"
          cy="300"
          r="220"
          fill="none"
          stroke="#D98A63"
          strokeWidth="2"
          strokeDasharray="1040 340"
          transform="rotate(-120 300 300)"
        />
      </svg>

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-10 pt-9 sm:pt-14 pb-12 sm:pb-20 flex flex-wrap gap-8 sm:gap-16 items-center">
        <div className="flex-1 min-w-[260px]">
          <nav
            aria-label="Breadcrumb"
            className="font-mono text-[12px] text-[#F7F2EA]/55 mb-5.5"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            /{" "}
            <Link
              href="/initiatives"
              className="hover:text-white transition-colors"
            >
              Initiatives
            </Link>{" "}
            / MICA
          </nav>

          <div className="inline-flex items-center gap-2 px-[13px] py-1.5 border border-white/25 rounded-full text-[12px] text-white/80 mb-5.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D98A63]" />
            Coming soon
          </div>

          <h1 className="font-serif font-semibold text-[34px] sm:text-[60px] leading-[1.04] tracking-[-0.5px] mb-4.5 text-balance">
            Mental health care,{" "}
            <span className="text-[#D98A63]">in your pocket.</span>
          </h1>

          <p className="text-[16px] sm:text-[18.5px] leading-[1.6] text-[#F7F2EA]/72 max-w-[480px] mb-7">
            MICA, the Mental Health Innovation &amp; Care Access platform.
            Track, reflect, learn, and find support, wherever you are.
          </p>

          <WaitlistForm variant="inline" />
        </div>

        <MagicianCards
          cards={heroCards}
          className="flex-1 min-w-[260px] basis-[440px] max-w-[520px]"
        />
      </div>
    </section>
  );
}
