import { StatGrid } from "@/components/ui/StatGrid";
import { impactStats } from "@/lib/data/impact";

export function MetricsGrid() {
  return (
    <section
      aria-label="Impact metrics"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-12 sm:py-20"
    >
      <StatGrid stats={impactStats} columns={4} />
    </section>
  );
}
