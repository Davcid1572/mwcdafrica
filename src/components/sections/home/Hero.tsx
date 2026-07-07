import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section>
      <div className="relative overflow-hidden min-h-[420px] lg:min-h-[520px]">
        {/* Background Image */}
        <Image
          src="/images/home/hero-hands.png"
          alt=""
          fill
          className="object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/25" />

        {/* Content */}
        <div className="relative max-w-[1240px] mx-auto z-10 flex h-full items-end">
          <div className="w-full p-8 sm:p-12 lg:p-16">
            {/* Eyebrow */}
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/60">
              Foundation
            </p>

            {/* Heading */}
            <h2 className="font-serif text-white text-[42px] sm:text-[56px] lg:text-[72px] leading-[0.95] tracking-[-2px]">
              Empowering minds.
              <br />
              Strengthening
              <br />
              <span className="italic font-light text-accent-light">
                communities.
              </span>
            </h2>

            {/* Paragraph + Buttons */}
            <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              {/* Paragraph */}
              <p className="max-w-md text-[16px] leading-7 text-white/75">
                A Mental Wellbeing &amp; Community Development foundation
                advancing care, innovation, and dignity, meeting people exactly
                where they are.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 lg:flex-nowrap">
                <Link
                  href="/about"
                  className="
    rounded-full
    bg-primary
    px-7
    py-3.5
    font-semibold
    text-primary-foreground
    whitespace-nowrap
    transition-all
    duration-300
    hover:bg-primary-hover
    hover:-translate-y-0.5
    hover:shadow-lg
  "
                >
                  Explore our work &rarr;
                </Link>

                <Link
                  href="/donate"
                  className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-white whitespace-nowrap backdrop-blur-sm transition hover:bg-white/20"
                >
                  Support the mission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
