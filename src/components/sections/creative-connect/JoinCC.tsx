"use client";

import { useState } from "react";

export function JoinCC() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(function () {
      setStatus("sent");
    }, 600);
  }

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
          <p className="text-[16px] leading-[1.6] text-primary-foreground/78 mb-6">
            Creatives, mentors and changemakers welcome. Be part of something
            growing.
          </p>

          {status === "sent" ? (
            <p role="status" className="font-medium">
              You&apos;re on the list, welcome to the community.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap gap-2.5 max-w-[440px] mx-auto"
            >
              <label htmlFor="cc-email" className="sr-only">
                Email address
              </label>
              <input
                id="cc-email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 min-w-[180px] px-[18px] py-3.5 rounded-full border border-white/30 bg-white/10 text-white placeholder:text-white/60 text-[15px] outline-none focus:ring-2 focus:ring-white/40"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-white text-primary-hover font-semibold text-[15px] px-6.5 py-3.5 rounded-full disabled:opacity-60"
              >
                {status === "submitting" ? "Joining..." : "Join now"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
