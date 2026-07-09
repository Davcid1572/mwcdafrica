"use client";

import { useState } from "react";

const amounts = [25, 50, 100, 250, 500];

export function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("monthly");
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function handleAmountClick(amount: number) {
    setSelectedAmount(amount);
    setCustomAmount("");
  }

  function handleCustomChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Wire up to your actual payment provider (Paystack / Flutterwave / Stripe) here.
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
      <h2 className="font-serif font-semibold text-[24px] mb-5">
        Make a donation
      </h2>

      {status === "sent" ? (
        <p role="status" className="text-[15px] text-primary font-medium">
          Thank you, your generosity means a great deal. A receipt has been sent
          to your email.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <p className="text-[13px] font-semibold uppercase tracking-[0.4px] text-muted-foreground mb-3">
            Choose an amount
          </p>
          <div className="grid grid-cols-3 gap-2.5 mb-4">
            {amounts.map(function (amount) {
              const isActive = selectedAmount === amount;
              return (
                <button
                  key={amount}
                  type="button"
                  onClick={function () {
                    handleAmountClick(amount);
                  }}
                  aria-pressed={isActive}
                  className={
                    "font-semibold text-[15px] py-3.5 rounded-xl border transition-colors " +
                    (isActive
                      ? "border-2 border-primary bg-primary/10 text-primary"
                      : "border-border bg-background text-foreground hover:border-primary/50")
                  }
                >
                  ${amount}
                </button>
              );
            })}
            <label htmlFor="customAmount" className="sr-only">
              Custom amount
            </label>
            <input
              id="customAmount"
              type="text"
              inputMode="numeric"
              placeholder="Other"
              value={customAmount}
              onChange={handleCustomChange}
              className="font-semibold text-[15px] px-3 py-3.5 rounded-xl border border-border bg-background text-center outline-none focus:border-primary"
            />
          </div>

          <div className="flex gap-2.5 mb-5">
            <button
              type="button"
              onClick={function () {
                setFrequency("one-time");
              }}
              aria-pressed={frequency === "one-time"}
              className={
                "flex-1 font-semibold text-[14px] py-2.5 rounded-full border transition-colors " +
                (frequency === "one-time"
                  ? "bg-foreground text-background border-foreground"
                  : "border-border bg-background text-foreground")
              }
            >
              One-time
            </button>
            <button
              type="button"
              onClick={function () {
                setFrequency("monthly");
              }}
              aria-pressed={frequency === "monthly"}
              className={
                "flex-1 font-semibold text-[14px] py-2.5 rounded-full border transition-colors " +
                (frequency === "monthly"
                  ? "bg-foreground text-background border-foreground"
                  : "border-border bg-background text-foreground")
              }
            >
              Monthly
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <label htmlFor="donorName" className={labelClasses}>
                Full name
              </label>
              <input
                id="donorName"
                name="donorName"
                type="text"
                required
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="donorEmail" className={labelClasses}>
                Email
              </label>
              <input
                id="donorEmail"
                name="donorEmail"
                type="email"
                required
                className={inputClasses}
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-1.5 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-[15px] py-3.5 rounded-full transition-colors disabled:opacity-60"
            >
              {status === "submitting"
                ? "Processing..."
                : "Donate securely \u2192"}
            </button>
            <p className="text-[12px] text-muted-foreground text-center">
              Secured via Paystack &middot; Flutterwave &middot; Stripe
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
