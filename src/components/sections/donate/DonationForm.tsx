"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { haptic } from "@/lib/haptics";
import { loadPaystackScript, generateReference } from "@/lib/paystack";

const amounts = [25, 50, 100, 250, 500];
const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;
const CURRENCY = process.env.NEXT_PUBLIC_PAYSTACK_CURRENCY || "NGN";

export function DonationForm() {
  const router = useRouter();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("monthly");
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  function handleAmountClick(amount: number) {
    haptic(8);
    setSelectedAmount(amount);
    setCustomAmount("");
  }

  function handleCustomChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    haptic(12);
    setError(null);

    const amount = customAmount ? Number(customAmount) : selectedAmount;
    if (!amount || amount <= 0) {
      setError("Choose or enter an amount first.");
      return;
    }

    if (!PAYSTACK_PUBLIC_KEY) {
      setError(
        "Payments aren't switched on yet, add NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY and PAYSTACK_SECRET_KEY to enable this form."
      );
      return;
    }

    const form = e.currentTarget;
    const email = (form.elements.namedItem("donorEmail") as HTMLInputElement).value;
    const name = (form.elements.namedItem("donorName") as HTMLInputElement).value;

    setStatus("submitting");

    try {
      await loadPaystackScript();

      window.PaystackPop!.setup({
        key: PAYSTACK_PUBLIC_KEY,
        email,
        amount: Math.round(amount * 100),
        currency: CURRENCY,
        ref: generateReference(),
        metadata: {
          donor_name: name,
          frequency,
          custom_fields: [
            { display_name: "Frequency", variable_name: "frequency", value: frequency },
          ],
        },
        callback: function (response) {
          router.push("/donate/success?reference=" + response.reference);
        },
        onClose: function () {
          setStatus("idle");
        },
      }).openIframe();
    } catch {
      setStatus("idle");
      setError("Could not open the payment window. Check your connection and try again.");
    }
  }

  const inputClasses =
    "w-full px-4 py-3.5 rounded-xl border border-border bg-background text-[15px] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors";
  const labelClasses =
    "block text-[13px] font-medium text-muted-foreground mb-1.5";
  const currencySymbol =
    { NGN: "\u20a6", USD: "$", GHS: "\u20b5", ZAR: "R", KES: "KSh" }[CURRENCY] ||
    CURRENCY + " ";

  return (
    <div className="flex-1 min-w-[260px] bg-muted border border-border rounded-[22px] p-6 sm:p-10">
      <h2 className="font-serif font-semibold text-[24px] mb-5">
        Make a donation
      </h2>

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
                    "font-semibold text-[15px] py-3.5 rounded-xl border transition-all active:scale-95 " +
                    (isActive
                      ? "border-2 border-primary bg-primary/10 text-primary"
                      : "border-border bg-background text-foreground hover:border-primary/50")
                  }
                >
                  {currencySymbol}
                  {amount}
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
                haptic(8);
                setFrequency("one-time");
              }}
              aria-pressed={frequency === "one-time"}
              className={
                "flex-1 font-semibold text-[14px] py-2.5 rounded-full border transition-all active:scale-95 " +
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
                haptic(8);
                setFrequency("monthly");
              }}
              aria-pressed={frequency === "monthly"}
              className={
                "flex-1 font-semibold text-[14px] py-2.5 rounded-full border transition-all active:scale-95 " +
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

            {error && (
              <p role="alert" className="text-[13px] text-destructive">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-1.5 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-[15px] py-3.5 rounded-full transition-all active:scale-[0.98] disabled:opacity-60"
            >
              {status === "submitting"
                ? "Opening secure checkout..."
                : "Donate securely \u2192"}
            </button>
            <p className="text-[12px] text-muted-foreground text-center">
              Secured via Paystack
            </p>
          </div>
        </form>
    </div>
  );
}
