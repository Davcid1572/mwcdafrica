import { Tap } from "@/components/ui/Tap";

export function JoinCC() {
  return (
    <section
      id="join"
      aria-labelledby="join-cc-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-14 sm:py-24"
    >
      <div className="relative overflow-hidden bg-primary-hover text-primary-foreground rounded-[28px] px-6 sm:px-16 py-11 sm:py-18 text-center">
        <svg
          viewBox="0 0 600 600"
          aria-hidden="true"
          className="absolute -right-40 -top-40 w-[360px] h-[360px] opacity-18 pointer-events-none"
        >
          <circle
            cx="300"
            cy="300"
            r="200"
            fill="none"
            stroke="var(--color-accent-light)"
            strokeWidth="3"
            strokeDasharray="900 320"
            transform="rotate(60 300 300)"
          />
        </svg>

        <div className="relative z-10 max-w-[560px] mx-auto">
          <h2
            id="join-cc-heading"
            className="font-serif font-medium text-[26px] sm:text-[42px] leading-[1.12] mb-3.5 text-balance"
          >
            Join the Creative Connect community
          </h2>
          <p className="text-[16px] leading-[1.6] text-primary-foreground/78 mb-7">
            Creatives, mentors and changemakers welcome. Be part of something
            growing, on creativeconnect.africa.
          </p>

          <Tap>
            <a
              href="https://creativeconnect.africa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-hover font-semibold text-[15px] px-7 py-3.5 rounded-full"
            >
              Join now &rarr;
            </a>
          </Tap>
        </div>
      </div>
    </section>
  );
}
