import { PartnerLogoGrid } from "@/components/ui/PartnerLogoGrid";

export function Partnerships() {
  return (
    <section aria-label="Creative partners" className="bg-muted">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-10 py-12 sm:py-20">
        <p className="text-center text-[13.5px] text-muted-foreground mb-6">
          Built with creative partners across the continent
        </p>
        <PartnerLogoGrid count={5} variant="dashed" minWidth={140} />
      </div>
    </section>
  );
}
