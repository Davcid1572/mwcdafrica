import Link from "next/link";
import { MagicianCards } from "@/components/ui/MagicianCards";
import { Tap } from "@/components/ui/Tap";

const cards = [
  { src: "/images/home/mica-card-1.png", alt: "MICA app splash screen" },
  { src: "/images/home/mica-card-2.png", alt: "MICA home screen with mood layers" },
  { src: "/images/home/mica-card-3.png", alt: "MICA journaling screen" },
  { src: "/images/home/mica-card-4.png", alt: "MICA resources screen" },
];

export function MicaShowcase() {
  return (
    <section
      aria-labelledby="mica-showcase-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-16 sm:py-24 flex flex-wrap-reverse items-center gap-12 sm:gap-16"
    >
      <div className="flex-1 min-w-[260px] max-w-[420px] mx-auto">
        <MagicianCards cards={cards} className="max-w-[420px]" />
      </div>

      <div className="flex-1 min-w-[260px]">
        <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-4">
          Sneak peek
        </p>
        <h2
          id="mica-showcase-heading"
          className="font-serif font-medium text-[28px] sm:text-[42px] leading-[1.08] tracking-[-0.02em] text-balance mb-4.5"
        >
          Care for your mind, in layers.
        </h2>
        <p className="text-[16px] leading-[1.65] text-muted-foreground mb-7 max-w-[46ch]">
          MICA is our mental health technology platform, built to fit in a
          pocket. Mood tracking, journaling, and a gentle companion that
          checks in when you need it.
        </p>
        <Tap>
          <Link
            href="/initiatives/mica"
            className="inline-block bg-accent-light hover:bg-accent-light/80 text-white font-semibold text-[14.5px] px-6 py-3.5 rounded-full transition-colors"
          >
            Explore MICA &rarr;
          </Link>
        </Tap>
      </div>
    </section>
  );
}
