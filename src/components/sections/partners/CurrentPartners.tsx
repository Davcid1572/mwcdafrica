import { PartnerLogoGrid } from "@/components/ui/PartnerLogoGrid";

export function CurrentPartners() {
  return (
    <section
      aria-labelledby="current-partners-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-12 sm:py-20"
    >
      <p
        id="current-partners-heading"
        className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent mb-5.5"
      >
        Current partners
      </p>
      <PartnerLogoGrid count={8} variant="solid" minWidth={150} />
    </section>
  );
}
