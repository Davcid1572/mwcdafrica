import Image from "next/image";
import Link from "next/link";

export function CtaBand() {
  return (
    <section className="max-w-[1240px] mx-auto px-5 sm:px-10 pb-14 sm:pb-22">
      <div className="relative overflow-hidden rounded-[28px] px-7 sm:px-16 py-11 sm:py-20 text-center min-h-[420px] flex items-center">
        {/* Background photo, fills the card edge-to-edge, responsive at every size */}
        <Image
          src="/images/home/hero-hands.png"
          alt=""
          fill
          className="object-cover object-center"
        />

        {/* Tint so the green brand color still reads through, and text stays legible */}
        <div className="absolute inset-0 bg-primary/82" />

        {/* decorative arcs, unchanged */}
        <svg
          viewBox="0 0 600 600"
          aria-hidden="true"
          className="absolute -left-40 -bottom-50 w-[440px] h-[440px] opacity-18 pointer-events-none text-primary-foreground"
        >
          <circle
            cx="300"
            cy="300"
            r="220"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="1040 340"
            transform="rotate(-120 300 300)"
          />
        </svg>
        <svg
          viewBox="0 0 600 600"
          aria-hidden="true"
          className="absolute -right-45 -top-45 w-[380px] h-[380px] opacity-18 pointer-events-none text-accent"
        >
          <circle
            cx="300"
            cy="300"
            r="200"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="900 320"
            transform="rotate(60 300 300)"
          />
        </svg>

        <div className="relative z-10 max-w-[640px] mx-auto text-primary-foreground">
          <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-4">
            Get involved
          </p>
          <h2 className="font-serif font-medium text-[28px] sm:text-[48px] leading-[1.12] tracking-[-0.4px] mb-4 text-balance">
            Join us in building healthier minds and stronger communities.
          </h2>
          <p className="text-[16.5px] leading-[1.6] text-primary-foreground/78 mb-8">
            Whether you give, partner, or volunteer, there is room for you in
            this work.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/donate"
              className="bg-background text-primary font-semibold text-[15px] px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-transform"
            >
              Donate now
            </Link>
            <Link
              href="/volunteer"
              className="border border-primary-foreground/45 text-primary-foreground font-semibold text-[15px] px-6.5 py-3.5 rounded-full hover:bg-primary-foreground/12 transition-colors"
            >
              Become a volunteer
            </Link>
            <Link
              href="/partners"
              className="border border-primary-foreground/45 text-primary-foreground font-semibold text-[15px] px-6.5 py-3.5 rounded-full hover:bg-primary-foreground/12 transition-colors"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
