import Image from "next/image";
import Link from "next/link";

const features = [
  { label: "Programs", value: "Workshops, residencies, skills labs" },
  { label: "Events", value: "Showcases, meetups, festivals" },
  { label: "Community", value: "A network of creatives & mentors" },
  { label: "Impact", value: "Healing, income, belonging" },
];

export function CreativeConnectBlock() {
  return (
    <section aria-labelledby="cc-block-heading" className="bg-muted">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-10 py-14 sm:py-24 flex flex-wrap gap-8 sm:gap-14">
        <div className="flex-1 min-w-[280px] relative">
          <div className="relative aspect-[4/4.2] rounded-[20px] overflow-hidden">
            <Image
              src="/images/initiatives/creative-connect-preview.png"
              alt="Creative Connect Africa community"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="flex-1 min-w-[300px]">
          <div className="flex items-center gap-2.5 mb-3.5">
            <h2
              id="cc-block-heading"
              className="font-serif font-bold text-[26px] sm:text-[34px]"
            >
              Creative Connect Africa
            </h2>
            <span className="text-[11px] font-semibold uppercase tracking-[0.5px] text-accent-light border border-accent-light rounded-full px-[9px] py-[3px]">
              Ecosystem
            </span>
          </div>
          <p className="text-[16px] leading-[1.65] text-muted-foreground mb-5.5">
            A creative ecosystem for community, learning, collaboration and
            empowerment, where talent and wellbeing grow together.
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 mb-6">
            {features.map(function (f) {
              return (
                <div key={f.label}>
                  <div className="text-[13px] font-semibold mb-1">
                    {f.label}
                  </div>
                  <div className="text-[13.5px] text-muted-foreground">
                    {f.value}
                  </div>
                </div>
              );
            })}
          </div>
          <Link
            href="/initiatives/creative-connect"
            className="inline-block bg-primary-hover hover:bg-primary-hover text-primary-foreground font-semibold text-[14.5px] px-6 py-3.5 rounded-full transition-colors"
          >
            Learn more &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
