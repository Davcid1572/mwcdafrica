"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Wire up to your actual email/API endpoint here.
    setTimeout(function () {
      setStatus("sent");
    }, 600);
  }

  const inputClasses =
    "w-full px-4 py-3.5 rounded-xl border border-border bg-background text-[15px] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors";
  const labelClasses =
    "block text-[13px] font-medium text-muted-foreground mb-1.5";

  return (
    <div className="flex-1 min-w-[300px] bg-muted border border-border rounded-[22px] p-6 sm:p-10">
      <h2 className="font-serif font-semibold text-[24px] mb-6">
        Send us a message
      </h2>

      {status === "sent" ? (
        <p role="status" className="text-[15px] text-primary font-medium">
          Thanks, your message has been sent. We will get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[140px]">
              <label htmlFor="firstName" className={labelClasses}>
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className={inputClasses}
              />
            </div>
            <div className="flex-1 min-w-[140px]">
              <label htmlFor="lastName" className={labelClasses}>
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="subject" className={labelClasses}>
              What is this about?
            </label>
            <select
              id="subject"
              name="subject"
              required
              className={inputClasses}
            >
              <option value="">Select an option</option>
              <option>General enquiry</option>
              <option>Partnership</option>
              <option>Volunteering</option>
              <option>Press / media</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className={labelClasses}>
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className={inputClasses + " resize-y"}
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-2 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-[15px] py-3.5 rounded-full transition-colors disabled:opacity-60"
          >
            {status === "submitting" ? "Sending..." : "Send message \u2192"}
          </button>
        </form>
      )}
    </div>
  );
}
