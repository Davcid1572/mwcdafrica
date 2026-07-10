"use client";

import { useState } from "react";

type WaitlistFormProps = {
  variant?: "inline" | "centered";
};

export function WaitlistForm({ variant = "inline" }: WaitlistFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(function () {
      setStatus("sent");
    }, 600);
  }

  if (status === "sent") {
    return (
      <p role="status" className="font-medium">
        You&apos;re on the waitlist, we&apos;ll be in touch soon.
      </p>
    );
  }

  const wrapClass =
    variant === "centered"
      ? "flex flex-wrap gap-2.5 max-w-[460px] mx-auto"
      : "flex flex-wrap gap-2.5 max-w-[460px]";

  // The input and button styles are different for the two variants, so we define them separately
  const inputClass =
    variant === "centered"
      ? "flex-1 min-w-[200px] px-[18px] py-3.5 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground text-[15px] outline-none focus:ring-2 focus:ring-primary/25"
      : "flex-1 min-w-[200px] px-[18px] py-3.5 rounded-full border border-white/25 bg-white/[0.06] text-[#F7F2EA] placeholder:text-[#F7F2EA]/50 text-[15px] outline-none focus:ring-2 focus:ring-white/30";

  return (
    <form onSubmit={handleSubmit} className={wrapClass}>
      <label htmlFor={"mica-email-" + variant} className="sr-only">
        Email address
      </label>
      <input
        id={"mica-email-" + variant}
        name="email"
        type="email"
        required
        placeholder="Enter your email"
        className={inputClass}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-[15px] px-6.5 py-3.5 rounded-full transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Joining..." : "Join waitlist"}
      </button>
    </form>
  );
}
