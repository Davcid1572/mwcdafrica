import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { Tap } from "@/components/ui/Tap";

export function CreativeConnectShowcase() {
  return (
    <section
      aria-labelledby="cc-showcase-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-16 sm:py-24 flex flex-wrap items-center gap-12 sm:gap-16"
    >
      <Photo
        src="/images/home/creative-connect-card.jpg"
        alt="Creative Connect Africa community members at work"
        className="flex-1 min-w-[260px] basis-[440px] aspect-[16/11] rounded-[22px]"
      />

      <div className="flex-1 min-w-[260px]">
        <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-4">
          Flagship initiative
        </p>
        <h2
          id="cc-showcase-heading"
          className="font-serif font-medium text-[28px] sm:text-[42px] leading-[1.08] tracking-[-0.02em] text-balance mb-4.5"
        >
          Creative Connect Africa.
        </h2>
        <p className="text-[16px] leading-[1.65] text-muted-foreground mb-7 max-w-[46ch]">
          A creative ecosystem for community, learning, collaboration and
          empowerment, where talent and wellbeing grow together, connecting
          creatives, mentors and opportunity across Africa.
        </p>
        <Tap>
          <Link
            href="/initiatives/creative-connect"
            className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-[14.5px] px-6 py-3.5 rounded-full transition-colors"
          >
            Explore Creative Connect &rarr;
          </Link>
        </Tap>
      </div>
    </section>
  );
}
