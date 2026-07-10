type PartnerLogoGridProps = {
  count: number;
  variant?: "solid" | "dashed";
  minWidth?: number;
};

export function PartnerLogoGrid({
  count,
  variant = "solid",
  minWidth = 150,
}: PartnerLogoGridProps) {
  const boxClass =
    variant === "dashed"
      ? "border border-dashed border-border bg-background/50"
      : "border border-border bg-background";

  return (
    <div
      className="grid gap-3.5"
      style={{
        gridTemplateColumns:
          "repeat(auto-fit, minmax(" + minWidth + "px, 1fr))",
      }}
    >
      {Array.from({ length: count }).map(function (_, i) {
        return (
          <div
            key={i}
            className={
              "h-[70px] sm:h-[84px] rounded-2xl flex items-center justify-center " +
              boxClass
            }
          >
            <span className="font-mono text-[11px] text-muted-foreground">
              Partner {String(i + 1).padStart(2, "0")}
            </span>
          </div>
        );
      })}
    </div>
  );
}
