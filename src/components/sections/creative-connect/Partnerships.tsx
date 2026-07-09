const partnerCount = 5;

export function Partnerships() {
  return (
    <section aria-label="Creative partners" className="bg-muted">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-10 py-12 sm:py-20">
        <p className="text-center text-[13.5px] text-muted-foreground mb-6">
          Built with creative partners across the continent
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
          {Array.from({ length: partnerCount }).map(function (_, i) {
            return (
              <div
                key={i}
                className="h-[66px] rounded-xl border border-dashed border-border flex items-center justify-center bg-background/50"
              >
                <span className="font-mono text-[11px] text-muted-foreground">
                  Partner {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
