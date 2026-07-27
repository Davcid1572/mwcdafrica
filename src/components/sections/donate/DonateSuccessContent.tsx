"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Tap } from "@/components/ui/Tap";
import { haptic } from "@/lib/haptics";

type VerifyResult = {
  success: boolean;
  amount: number;
  currency: string;
  reference: string;
  email?: string;
  paidAt?: string;
};

export function DonateSuccessContent() {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference");
  const [state, setState] = useState<"checking" | "ok" | "error">(
    reference ? "checking" : "error"
  );
  const [result, setResult] = useState<VerifyResult | null>(null);
  const [message, setMessage] = useState(
    reference ? "" : "No payment reference was provided."
  );

  useEffect(function () {
    if (!reference) return;
    fetch("/api/paystack/verify?reference=" + encodeURIComponent(reference))
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (data.error) {
          setState("error");
          setMessage(data.error);
          return;
        }
        setResult(data);
        setState(data.success ? "ok" : "error");
        if (!data.success) setMessage("This payment was not completed.");
        if (data.success) haptic([10, 40, 10]);
      })
      .catch(function () {
        setState("error");
        setMessage("Could not reach the server to confirm this payment.");
      });
  }, [reference]);

  return (
    <section className="max-w-[640px] mx-auto px-5 sm:px-10 py-20 sm:py-28 text-center">
      {state === "checking" && (
        <>
          <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-6">
            One moment
          </p>
          <h1 className="font-serif font-medium text-[28px] sm:text-[38px] leading-[1.1] mb-4">
            Confirming your donation...
          </h1>
          <p className="text-muted-foreground">
            This only takes a second.
          </p>
        </>
      )}

      {state === "ok" && result && (
        <>
          <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-6">
            Thank you
          </p>
          <h1 className="font-serif font-medium text-[30px] sm:text-[42px] leading-[1.1] mb-4 text-balance">
            Your gift is on its way to changing a life.
          </h1>
          <p className="text-muted-foreground mb-8">
            We&apos;ve recorded your donation of{" "}
            <span className="font-semibold text-foreground">
              {result.currency} {result.amount.toLocaleString()}
            </span>
            . A receipt has been sent to {result.email || "your email"}.
          </p>
          <p className="text-[12px] font-mono text-muted-foreground mb-10">
            Reference: {result.reference}
          </p>
          <Tap>
            <Link
              href="/"
              className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-[14.5px] px-6 py-3 rounded-full transition-colors"
            >
              Back to home
            </Link>
          </Tap>
        </>
      )}

      {state === "error" && (
        <>
          <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-6">
            Hold on
          </p>
          <h1 className="font-serif font-medium text-[28px] sm:text-[38px] leading-[1.1] mb-4">
            We couldn&apos;t confirm that payment.
          </h1>
          <p className="text-muted-foreground mb-8">{message}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Tap>
              <Link
                href="/donate"
                className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-[14.5px] px-6 py-3 rounded-full transition-colors"
              >
                Try again
              </Link>
            </Tap>
            <Tap>
              <Link
                href="/contact"
                className="inline-block border border-foreground/25 font-semibold text-[14.5px] px-6 py-3 rounded-full hover:bg-foreground/5 transition-colors"
              >
                Contact us
              </Link>
            </Tap>
          </div>
        </>
      )}
    </section>
  );
}
