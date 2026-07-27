import Link from "next/link";
import Image from "next/image";
import { Tap } from "@/components/ui/Tap";

const smallCards = [
  { n: "02", title: "Community Development", area: "community", image: "/images/work/community.jpg" },
  { n: "03", title: "Creative Empowerment", area: "creative", image: "/images/home/creative-empowerment.jpg" },
  { n: "04", title: "Digital Innovation", area: "digital", image: "/images/home/digital-wellbeing.jpg" },
  { n: "05", title: "Advocacy & Awareness", area: "advocacy", image: "/images/work/advocacy.jpg" },
];

function Tile({
  n,
  title,
  image,
  big = false,
}: {
  n: string;
  title: string;
  image: string;
  big?: boolean;
}) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl text-[#F7F2EA] flex flex-col justify-end " +
        (big
          ? "p-6 sm:p-8 min-h-[220px] sm:min-h-[340px]"
          : "p-5 sm:p-6 min-h-[100px] sm:min-h-[150px]")
      }
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, 33vw"
        className="object-cover object-center -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#14120e] via-[#14120e]/45 to-[#14120e]/5" />
      <span className="font-mono text-[11px] sm:text-[12px] text-[#F7F2EA]/60 mb-2 sm:mb-3">
        {n}
      </span>
      <h3
        className={
          big
            ? "font-serif font-medium text-[24px] sm:text-[30px] leading-[1.1] mb-2 text-balance"
            : "text-[15px] sm:text-[16px] font-medium leading-[1.25]"
        }
      >
        {title}
      </h3>
      {big && (
        <p className="text-[13.5px] leading-[1.55] text-[#F7F2EA]/78 max-w-[34ch]">
          Accessible care, counselling and resources, offered with dignity,
          meeting people where they are.
        </p>
      )}
    </div>
  );
}

function ExploreCard() {
  return (
    <Tap className="block h-full">
      <Link
        href="/work"
        className="group bg-accent-light text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-end min-h-[100px] sm:min-h-[150px] hover:bg-accent-light/85 transition-colors h-full"
      >
        <span className="font-mono text-[11px] text-white/70 mb-2">Explore</span>
        <h3 className="text-[15px] sm:text-[16px] font-semibold leading-[1.25] flex items-center gap-1.5">
          See all our work
          <span className="transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </h3>
      </Link>
    </Tap>
  );
}

export function WhatWeDo() {
  return (
    <section
      aria-labelledby="what-we-do-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-16 sm:py-24"
    >
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10 sm:mb-14">
        <div>
          <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-4">
            What we do
          </p>
          <h2
            id="what-we-do-heading"
            className="font-serif font-normal text-[30px] sm:text-[44px] leading-[1.1] tracking-[-0.02em] max-w-[10ch] text-balance"
          >
            Five ways we show up.
          </h2>
        </div>
        <p className="max-w-[280px] text-[14px] leading-[1.6] text-muted-foreground">
          Each area reinforces the others, strong minds build strong
          communities, and strong communities hold space to heal.
        </p>
      </div>

      {/* MOBILE: simple stacked column, only visible below sm */}
      <div className="flex flex-col gap-3 sm:hidden">
        <Tile n="01" title="Mental Health & Wellbeing" image="/images/home/mental-wellbeing.jpg" big />
        {smallCards.map(function (card) {
          return (
            <Tile key={card.n} n={card.n} title={card.title} image={card.image} />
          );
        })}
        <ExploreCard />
      </div>

      {/* DESKTOP: original bento grid, untouched, only visible from sm up */}
      <div
        className="hidden sm:grid grid-cols-3 gap-4"
        style={{
          gridTemplateAreas:
            '"big community community" "big creative creative" "digital advocacy explore"',
        }}
      >
        <div className="[grid-area:big]">
          <Tile n="01" title="Mental Health & Wellbeing" image="/images/home/mental-wellbeing.jpg" big />
        </div>

        {smallCards.map(function (card) {
          return (
            <div key={card.n} style={{ gridArea: card.area }}>
              <Tile n={card.n} title={card.title} image={card.image} />
            </div>
          );
        })}

        <div style={{ gridArea: "explore" }}>
          <ExploreCard />
        </div>
      </div>
    </section>
  );
}
