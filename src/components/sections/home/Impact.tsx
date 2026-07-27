import Link from "next/link";
import { StatGrid } from "@/components/ui/StatGrid";
import { Tap } from "@/components/ui/Tap";
import { impactStats } from "@/lib/data/impact";

export function Impact() {
  return (
    <section
      aria-labelledby="impact-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-16 sm:py-24"
    >
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-4">
            Measured impact
          </p>
          <h2
            id="impact-heading"
            className="font-serif font-normal text-[30px] sm:text-[44px] leading-[1.1] tracking-[-0.02em] max-w-[10ch] text-balance"
          >
            Change you can feel.
          </h2>
        </div>
        <Tap>
          <Link
            href="/impact"
            className="inline-block text-[14px] font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-accent transition-colors"
          >
            Read the impact report &rarr;
          </Link>
        </Tap>
      </div>

      <StatGrid stats={impactStats} columns={4} />
    </section>
  );
}
