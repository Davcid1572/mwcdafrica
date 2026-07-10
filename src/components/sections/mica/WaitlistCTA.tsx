import { WaitlistForm } from "@/components/sections/mica/WaitlistForm";

export function WaitlistCTA() {
  return (
    <section
      aria-labelledby="waitlist-cta-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-14 sm:py-24 text-center"
    >
      <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-3.5">
        Be first to know
      </p>
      <h2
        id="waitlist-cta-heading"
        className="font-serif font-medium text-[28px] sm:text-[46px] leading-[1.1] tracking-[-0.4px] max-w-[600px] mx-auto mb-4 text-balance"
      >
        MICA is launching soon. Join the waitlist.
      </h2>
      <p className="text-[16px] leading-[1.6] text-muted-foreground max-w-[480px] mx-auto mb-7">
        We&apos;ll let you know the moment MICA is ready, no spam, just one
        thoughtful note.
      </p>
      <WaitlistForm variant="centered" />
    </section>
  );
}
