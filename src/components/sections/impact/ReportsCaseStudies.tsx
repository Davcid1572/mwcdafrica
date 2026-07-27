import { Photo } from "@/components/ui/Photo";
import { Tap } from "@/components/ui/Tap";

const reports = [{ title: "2026 Annual Impact Report", status: "Coming soon" }];

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
      <div className="flex-1 min-w-[260px]">
        <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-3.5">
          Impact reports
        </p>
        <h2 className="font-serif font-medium text-[24px] sm:text-[32px] leading-[1.16] mb-5.5">
          Read the full story, in detail
        </h2>
        <div className="flex flex-col gap-3">
          {reports.map(function (r) {
            return (
              <div
                key={r.title}
                className="flex items-center justify-between bg-muted border border-dashed border-border rounded-[14px] px-[22px] py-[18px]"
              >
                <span className="font-semibold text-[15.5px] text-muted-foreground">
                  {r.title}
                </span>
                <span className="text-[12px] font-semibold uppercase tracking-[0.4px] text-accent-light bg-accent-light/10 px-3 py-1 rounded-full">
                  {r.status}
                </span>
              </div>
            );
          })}
          <p className="text-[13.5px] text-muted-foreground leading-[1.5]">
            MWCDAFRICA was incorporated in 2026, our first annual report will
            be published once our inaugural year closes.
          </p>
        </div>
      </div>

      <div className="flex-1 min-w-[260px]">
        <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-3.5">
          Case studies
        </p>
        <h2 className="font-serif font-medium text-[24px] sm:text-[32px] leading-[1.16] mb-5.5">
          Programs, up close
        </h2>
        <div className="grid grid-cols-2 gap-3.5">
          {caseStudies.map(function (cs) {
            return (
              <Tap key={cs.slug} className="block">
                <a href="#" className="text-inherit no-underline block">
                  <Photo
                    src={"/images/impact/" + cs.slug + ".jpg"}
                    alt={cs.title}
                    className="aspect-[4/3] rounded-[14px] mb-2.5"
                  />
                  <div className="font-semibold text-[14.5px]">{cs.title}</div>
                </a>
              </Tap>
            );
          })}
        </div>
      </div>
    </section>
  );
}
