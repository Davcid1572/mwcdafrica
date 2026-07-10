import { StatGrid } from "@/components/ui/StatGrid";

const metrics = [
  { value: "120+", label: "Communities reached" },
  { value: "45", label: "Programs delivered" },
  { value: "30", label: "Partnerships built" },
  { value: "8,500+", label: "Individuals supported" },
];

export function MetricsGrid() {
  return (
    <section
      aria-label="Impact metrics"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-12 sm:py-20"
    >
      <StatGrid stats={metrics} columns={4} />
    </section>
  );
}
