export function VisionMission() {
  return (
    <section
      aria-labelledby="vision-mission-heading"
      className="bg-[#221D17] text-[#F7F2EA]"
    >
      <h2 id="vision-mission-heading" className="sr-only">
        Vision and Mission
      </h2>

      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-12 sm:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Vision */}
          <div>
            <p className="mb-6 font-mono text-[12.5px] tracking-[1px] text-accent-light">
              Vision
            </p>

            <p className="font-serif text-[20px] leading-[1.28] text-balance md:text-[30px] lg:text-[38px]">
              An Africa where mental wellbeing and community strength are within
              reach of everyone, by right, not by chance.
            </p>
          </div>

          {/* Mission */}
          <div>
            <p className="mb-6 font-mono text-[12.5px] tracking-[1px] text-accent-light">
              Mission
            </p>

            <p className="font-serif text-[20px] leading-[1.28] text-balance md:text-[30px] lg:text-[38px]">
              To advance wellbeing, innovation, and social development through
              programs, partnerships, and technology that honour dignity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
