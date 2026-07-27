import Link from "next/link";
import { Tap } from "@/components/ui/Tap";

export function Join() {
  return (
    <section
      aria-labelledby="join-us-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 pb-14 sm:pb-22"
    >
      <div className="relative overflow-hidden rounded-[28px] bg-primary px-7 py-11 text-center text-primary-foreground sm:px-18 sm:py-20">
        <svg
          viewBox="0 0 600 600"
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -bottom-50 h-[440px] w-[440px] opacity-18"
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
          className="pointer-events-none absolute -right-45 -top-45 h-[380px] w-[380px] opacity-18"
        >
          <circle
            cx="300"
            cy="300"
            r="200"
            fill="none"
            stroke="#D98A63"
            strokeWidth="3"
            strokeDasharray="900 320"
            transform="rotate(60 300 300)"
          />
        </svg>

        <div className="relative z-10 mx-auto max-w-160">
          <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-4">
            Get involved
          </p>
          <h2
            id="join-us-heading"
            className="font-serif font-medium text-[28px] sm:text-[48px] leading-[1.12] tracking-[-0.4px] text-balance mb-4"
          >
            Join us in building healthier minds and stronger communities.
          </h2>
          <p className="text-[16.5px] leading-[1.6] text-primary-foreground/78 mb-7.5">
            Whether you give, partner, or volunteer, there is room for you in
            this work.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center">
            <Tap>
              <Link
                href="/donate"
                className="inline-block bg-background hover:bg-background/90 text-primary font-semibold text-[15px] px-7 py-3.5 rounded-full transition-colors"
              >
                Donate now
              </Link>
            </Tap>
            <Tap>
              <Link
                href="/volunteer"
                className="inline-block bg-transparent text-primary-foreground font-semibold text-[15px] px-6.5 py-3.5 rounded-full border border-primary-foreground/45 hover:bg-primary-foreground/12 transition-colors"
              >
                Become a volunteer
              </Link>
            </Tap>
            <Tap>
              <Link
                href="/partners"
                className="inline-block bg-transparent text-primary-foreground font-semibold text-[15px] px-6.5 py-3.5 rounded-full border border-primary-foreground/45 hover:bg-primary-foreground/12 transition-colors"
              >
                Partner with us
              </Link>
            </Tap>
          </div>
        </div>
      </div>
    </section>
  );
}
