import { PhoneMockup } from "@/components/ui/PhoneMockup";

const screens = [
  { id: "onboarding", title: "Welcome", sub: "Gentle first launch" },
  { id: "mood", title: "Mood check-in", sub: "Daily, in seconds" },
  { id: "journal", title: "Journal", sub: "Private reflection" },
  { id: "resources", title: "Resources", sub: "Help, always near" },
];

export function ScreenByScreen() {
  return (
    <section
      aria-labelledby="screens-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-14 sm:py-24"
    >
      <div className="max-w-[600px] mb-9 sm:mb-14">
        <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-3.5">
          The app, screen by screen
        </p>
        <h2
          id="screens-heading"
          className="font-serif font-medium text-[28px] sm:text-[46px] leading-[1.08] tracking-[-0.02em]"
        >
          A calm experience, from first launch to daily care.
        </h2>
      </div>

      <div className="flex flex-wrap gap-6 sm:gap-9 justify-center">
        {screens.map(function (s) {
          return (
            <div
              key={s.id}
              className="flex-0 basis-[200px] max-w-[240px] flex flex-col items-center gap-4"
            >
              <PhoneMockup
                src={"/images/mica/screen-" + s.id + ".jpg"}
                alt={s.title + " screen of the MICA app"}
              />
              <div className="text-center">
                <div className="font-serif font-semibold text-[17px]">
                  {s.title}
                </div>
                <div className="text-[13px] text-muted-foreground mt-0.5">
                  {s.sub}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
