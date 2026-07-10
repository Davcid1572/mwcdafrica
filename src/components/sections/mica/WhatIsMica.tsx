export function WhatIsMica() {
  return (
    <section
      aria-labelledby="what-is-mica-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-14 sm:py-24 flex flex-wrap gap-8 sm:gap-18"
    >
      <div className="flex-1 min-w-[280px]">
        <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-3.5">
          What is MICA
        </p>
        <h2
          id="what-is-mica-heading"
          className="font-serif font-medium text-[26px] sm:text-[38px] leading-[1.16] text-balance"
        >
          A gentle, always-available companion for mental wellbeing.
        </h2>
      </div>

      <div className="flex-1 min-w-[300px]">
        <p className="text-[16.5px] leading-[1.65] text-muted-foreground mb-6">
          MICA brings care closer, combining everyday tools for self-reflection
          with pathways to professional support. It&apos;s built for the
          realities of access across Africa: lightweight, private, and human.
        </p>
        <div className="flex flex-wrap gap-3">
          <div className="flex-1 min-w-[150px] bg-muted rounded-2xl p-4.5">
            <div className="font-serif font-bold text-[22px] text-primary">
              Private
            </div>
            <div className="text-[13.5px] text-muted-foreground mt-1">
              Your data, your control
            </div>
          </div>
          <div className="flex-1 min-w-[150px] bg-muted rounded-2xl p-4.5">
            <div className="font-serif font-bold text-[22px] text-primary">
              Accessible
            </div>
            <div className="text-[13.5px] text-muted-foreground mt-1">
              Low-bandwidth friendly
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
