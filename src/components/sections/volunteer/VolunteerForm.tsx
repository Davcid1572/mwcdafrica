"use client";

import { useState } from "react";

const interestOptions = [
  "Community facilitation",
  "Mentorship",
  "Skills & tech",
  "Events & outreach",
  "Advocacy",
];

export function VolunteerForm() {
  const [interests, setInterests] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function toggleInterest(value: string) {
    setInterests(function (prev) {
      if (prev.includes(value)) {
        return prev.filter(function (v) {
          return v !== value;
        });
      }
      return [...prev, value];
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(function () {
      setStatus("sent");
    }, 600);
  }

  const inputClasses =
    "w-full px-4 py-3.5 rounded-xl border border-border bg-muted text-[15px] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors";
  const labelClasses =
    "block text-[13px] font-medium text-muted-foreground mb-1.5";

  return (
    <div className="max-w-[840px] mx-auto bg-background border border-border rounded-[22px] p-6 sm:p-11">
      <h2 className="font-serif font-semibold text-[26px] mb-1.5">
        Volunteer application
      </h2>
      <p className="text-[15px] text-muted-foreground mb-6.5">
        Tell us a little about you and your areas of interest.
      </p>

      {status === "sent" ? (
        <p role="status" className="text-[15px] text-primary font-medium">
          Thank you for applying, we&apos;ll be in touch soon about next steps.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-3.5 flex-wrap">
            <div className="flex-1 min-w-[180px]">
              <label htmlFor="fullName" className={labelClasses}>
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className={inputClasses}
              />
            </div>
            <div className="flex-1 min-w-[180px]">
              <label htmlFor="volunteerEmail" className={labelClasses}>
                Email
              </label>
              <input
                id="volunteerEmail"
                name="email"
                type="email"
                required
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="location" className={labelClasses}>
              City / location
            </label>
            <input
              id="location"
              name="location"
              type="text"
              required
              className={inputClasses}
            />
          </div>

          <fieldset>
            <legend className="text-[13px] font-semibold uppercase tracking-[0.4px] text-muted-foreground mb-3">
              Areas of interest
            </legend>
            <div className="flex flex-wrap gap-2">
              {interestOptions.map(function (option) {
                const checked = interests.includes(option);
                return (
                  <label
                    key={option}
                    className={
                      "inline-flex items-center gap-2 text-[14px] border rounded-full px-[15px] py-2 cursor-pointer transition-colors " +
                      (checked
                        ? "bg-primary/10 border-primary text-primary"
                        : "bg-muted border-border text-foreground")
                    }
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={function () {
                        toggleInterest(option);
                      }}
                      className="accent-primary"
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div>
            <label htmlFor="volunteerReason" className={labelClasses}>
              Why would you like to volunteer? (optional)
            </label>
            <textarea
              id="volunteerReason"
              name="reason"
              rows={4}
              className={inputClasses + " resize-y"}
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-1.5 bg-primary-hover hover:bg-primary-hover/90 text-primary-foreground font-semibold text-[15px] py-3.5 rounded-full transition-colors disabled:opacity-60"
          >
            {status === "submitting"
              ? "Submitting..."
              : "Submit application \u2192"}
          </button>
        </form>
      )}
    </div>
  );
}
