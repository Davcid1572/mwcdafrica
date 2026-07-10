const testimonials = [
  {
    quote:
      "For the first time, I had somewhere to turn. It changed how I see myself.",
    name: "Program participant",
    role: "Counselling program",
  },
  {
    quote:
      "Creative Connect gave me a community, and a way to make a living doing what I love.",
    name: "Creative member",
    role: "Creative Connect Africa",
  },
  {
    quote: "Their work reaches places most programs never do. A true partner.",
    name: "Partner organisation",
    role: "NGO collaborator",
  },
];

export function Stories() {
  return (
    <section
      aria-labelledby="stories-heading"
      className="bg-[#221D17] text-[#F7F2EA]"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-10 py-14 sm:py-24">
        <div className="max-w-[560px] mb-8 sm:mb-12">
          <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-[#D98A63] mb-3.5">
            Stories &amp; testimonials
          </p>
          <h2
            id="stories-heading"
            className="font-serif font-medium text-[28px] sm:text-[42px] leading-[1.1]"
          >
            In their words
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(function (t, i) {
            return (
              <figure
                key={i}
                className="bg-white/[0.06] border border-white/14 rounded-2xl p-7"
              >
                <blockquote className="font-serif text-[19px] leading-[1.5] mb-5">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div
                    aria-hidden="true"
                    className="w-[42px] h-[42px] rounded-full bg-[repeating-linear-gradient(135deg,#3a342c_0_8px,#332e27_8px_16px)]"
                  />
                  <div>
                    <div className="font-semibold text-[14px]">{t.name}</div>
                    <div className="text-[12.5px] text-white/60">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
