import Image from "next/image";

const reports = [
  { title: "2025 Annual Impact Report", href: "#" },
  { title: "2024 Annual Impact Report", href: "#" },
];

const caseStudies = [
  {
    slug: "counselling-rural-communities",
    title: "Counselling in rural communities",
  },
  {
    slug: "creative-therapy-after-crisis",
    title: "Creative therapy after crisis",
  },
];

export function ReportsCaseStudies() {
  return (
    <section
      aria-label="Impact reports and case studies"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-14 sm:py-24 flex flex-wrap gap-8 sm:gap-12"
    >
      <div className="flex-1 min-w-[300px]">
        <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-3.5">
          Impact reports
        </p>
        <h2 className="font-serif font-medium text-[24px] sm:text-[32px] leading-[1.16] mb-5.5">
          Read the full story, in detail
        </h2>
        <div className="flex flex-col gap-3">
          {reports.map(function (r) {
            return (
              <a
                key={r.title}
                href={r.href}
                className="flex items-center justify-between bg-muted border border-border rounded-[14px] px-[22px] py-[18px] hover:border-primary transition-colors"
              >
                <span className="font-semibold text-[15.5px]">{r.title}</span>
                <span className="text-accent-light font-semibold">
                  PDF &rarr;
                </span>
              </a>
            );
          })}
        </div>
      </div>

      <div className="flex-1 min-w-[300px]">
        <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-3.5">
          Case studies
        </p>
        <h2 className="font-serif font-medium text-[24px] sm:text-[32px] leading-[1.16] mb-5.5">
          Programs, up close
        </h2>
        <div className="grid grid-cols-2 gap-3.5">
          {caseStudies.map(function (cs) {
            return (
              <a key={cs.slug} href="#" className="text-inherit no-underline">
                <div className="relative aspect-[4/3] rounded-[14px] overflow-hidden mb-2.5">
                  <Image
                    src={"/images/impact/" + cs.slug + ".jpg"}
                    alt=""
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="font-semibold text-[14.5px]">{cs.title}</div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
