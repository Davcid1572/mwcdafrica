import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { MagicianCards } from "@/components/ui/MagicianCards";
import { Tap } from "@/components/ui/Tap";

const areas = [
  {
    n: "01",
    title: "Mental Health & Wellbeing",
    desc: "Accessible counselling, psychoeducation, and community-based care that meets people with dignity, closing the gap between need and support.",
    tags: ["Community counselling", "Peer support", "School programs"],
    slug: "mental-health",
    link: null as null | { href: string; label: string },
  },
  {
    n: "02",
    title: "Community Development",
    desc: "Grassroots programs that strengthen the social fabric, building local capacity, leadership, and resilience where it lives.",
    tags: ["Local leadership", "Livelihoods", "Resilience"],
    slug: "community",
    link: null,
  },
  {
    n: "03",
    title: "Creative Empowerment",
    desc: "Art, expression, and skills as tools for healing and livelihood, anchored by our Creative Connect Africa ecosystem.",
    tags: ["Workshops", "Creative therapy"],
    slug: "creative",
    link: { href: "/initiatives/creative-connect", label: "Creative Connect" },
  },
  {
    n: "04",
    title: "Digital Innovation",
    desc: "Technology that extends care and learning beyond physical reach, led by MICA, our mental-health technology platform.",
    tags: ["MICA platform", "Remote access"],
    slug: "digital",
    link: { href: "/initiatives/mica", label: "Explore MICA" },
  },
  {
    n: "05",
    title: "Advocacy & Awareness",
    desc: "Shifting narratives and policy around mental health across Africa, making wellbeing a public priority, not a private burden.",
    tags: ["Campaigns", "Policy dialogue", "Public education"],
    slug: "advocacy",
    link: null,
  },
];

const digitalCards = [
  { src: "/images/work/mica-card-1.png", alt: "MICA app home screen" },
  { src: "/images/work/mica-card-2.png", alt: "MICA app journaling screen" },
  { src: "/images/work/mica-card-3.png", alt: "MICA app resources screen" },
];

export function Areas() {
  return (
    <section
      aria-label="Our areas of work"
      className="max-w-[1240px] mx-auto px-5 sm:px-12 pb-16 sm:pb-28"
    >
      {areas.map(function (area, i) {
        return (
          <div
            key={area.n}
            className={
              "flex flex-wrap items-center gap-8 sm:gap-16 py-9 sm:py-16 border-t border-border" +
              (i === areas.length - 1 ? " border-b" : "")
            }
          >
            <div className="flex-1 min-w-[260px]">
              <span className="font-mono text-[13px] text-accent-light">
                {area.n}
              </span>
              <h2 className="font-serif font-medium text-[28px] sm:text-[42px] leading-[1.02] tracking-[-0.02em] mt-3 mb-4.5 text-balance">
                {area.title}
              </h2>
              <p className="text-[16px] leading-[1.65] text-muted-foreground max-w-[46ch] mb-5.5">
                {area.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {area.tags.map(function (tag) {
                  return (
                    <span
                      key={tag}
                      className="text-[13px] font-semibold text-primary bg-primary/10 px-[15px] py-2 rounded-full"
                    >
                      {tag}
                    </span>
                  );
                })}
                {area.link && (
                  <Tap>
                    <Link
                      href={area.link.href}
                      className="inline-block text-[13px] font-semibold text-white bg-accent-light px-4 py-2 rounded-2xl hover:bg-accent-light/85 transition-colors"
                    >
                      {area.link.label} &rarr;
                    </Link>
                  </Tap>
                )}
              </div>
            </div>

            {area.slug === "digital" ? (
              <div className="flex-1 min-w-[260px]">
                <MagicianCards cards={digitalCards} className="max-w-[360px]" />
              </div>
            ) : (
              <Photo
                src={"/images/work/" + area.slug + ".jpg"}
                alt={area.title}
                className="flex-1 min-w-[260px] aspect-[4/3] rounded-[18px]"
              />
            )}
          </div>
        );
      })}
    </section>
  );
}
