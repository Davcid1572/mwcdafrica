const initiatives = [
  {
    name: "Creative Connect Africa",
    desc: "Creative Ecosystem",
    dashed: false,
  },
  { name: "MICA", desc: "Mental Health Technology", dashed: false },
  { name: "Future initiative", desc: "Room to grow", dashed: true },
];

export function EcosystemMap() {
  return (
    <section
      aria-label="MWCDAFRICA ecosystem structure"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-12 sm:py-20"
    >
      <div className="flex flex-col items-center">
        <div className="bg-primary-hover text-primary-foreground rounded-2xl px-8 py-4.5 text-center">
          <div className="font-serif font-bold text-[20px]">MWCDAFRICA</div>
          <div className="text-[12.5px] text-primary-foreground/70">
            Parent Foundation
          </div>
        </div>

        <div aria-hidden="true" className="w-0.5 h-8.5 bg-border" />

        <div className="flex flex-wrap gap-6 justify-center w-full">
          {initiatives.map(function (item) {
            return (
              <div
                key={item.name}
                className={
                  "flex-0 basis-[280px] rounded-2xl px-6 py-4.5 text-center " +
                  (item.dashed
                    ? "border border-dashed border-border bg-transparent"
                    : "bg-background border border-border")
                }
              >
                <div
                  className={
                    "font-serif font-bold text-[18px] " +
                    (item.dashed ? "text-muted-foreground" : "text-foreground")
                  }
                >
                  {item.name}
                </div>
                <div className="text-[12.5px] text-muted-foreground">
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
