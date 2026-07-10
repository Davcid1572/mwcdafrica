import Image from "next/image";
import Link from "next/link";

const features = [
  { label: "Features", value: "Mood, journaling, resources, AI" },
  { label: "Roadmap", value: "Therapy referrals, group care" },
  { label: "Access", value: "Care that fits in a pocket" },
  { label: "Status", value: "Coming soon \u00b7 join waitlist" },
];

export function MicaBlock() {
  return (
    <section
      aria-labelledby="mica-block-heading"
      className="bg-[#221D17] text-[#F7F2EA]"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-10 py-14 sm:py-24 flex flex-wrap gap-8 sm:gap-14">
        <div className="flex-1 min-w-[300px] order-1">
          <div className="flex items-center gap-2.5 mb-3.5">
            <h2
              id="mica-block-heading"
              className="font-serif font-bold text-[26px] sm:text-[34px]"
            >
              MICA
            </h2>
            <span className="text-[11px] font-semibold uppercase tracking-[0.5px] text-[#D98A63] border border-[#D98A63]/50 rounded-full px-[9px] py-[3px]">
              Platform
            </span>
          </div>
          <p className="text-[16px] leading-[1.65] text-[#F7F2EA]/72 mb-5.5">
            The Mental Health Innovation &amp; Care Access platform, mood
            tracking, journaling, wellness resources, AI support and pathways to
            professional care.
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 mb-6">
            {features.map(function (f) {
              return (
                <div key={f.label}>
                  <div className="text-[13px] font-semibold text-[#F7F2EA] mb-1">
                    {f.label}
                  </div>
                  <div className="text-[13.5px] text-[#F7F2EA]/60">
                    {f.value}
                  </div>
                </div>
              );
            })}
          </div>
          <Link
            href="/initiatives/mica"
            className="inline-block bg-accent-light hover:bg-accent-light/60 text-white font-semibold text-[14.5px] px-6 py-3.5 rounded-full transition-colors"
          >
            Learn more &rarr;
          </Link>
        </div>

        <div className="flex-1 min-w-[280px] order-2 relative">
          <div className="relative aspect-[4/4.2] rounded-[20px] overflow-hidden">
            <Image
              src="/images/initiatives/mica-preview.png"
              alt="MICA app interface preview"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
