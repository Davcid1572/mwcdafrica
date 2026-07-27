// Thin wrapper around Paystack's inline popup script. Loads
// js.paystack.co once and reuses it, so the checkout opens as an overlay on
// this page instead of redirecting away to Paystack's own site.

declare global {
  interface Window {
    PaystackPop?: {
      setup: (options: PaystackSetupOptions) => { openIframe: () => void };
    };
  }
}

export type PaystackSetupOptions = {
  key: string;
  email: string;
  amount: number; // in kobo (NGN subunit) -- multiply the naira amount by 100
  currency?: string;
  ref?: string;
  metadata?: Record<string, unknown>;
  onClose?: () => void;
  callback: (response: { reference: string }) => void;
};

let scriptPromise: Promise<void> | null = null;

export function loadPaystackScript(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Paystack can only load in the browser"));
  }
  if (window.PaystackPop) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise(function (resolve, reject) {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v2/inline.js";
    script.async = true;
    script.onload = function () {
      resolve();
    };
    script.onerror = function () {
      scriptPromise = null;
      reject(new Error("Could not load Paystack"));
    };
    document.body.appendChild(script);
  });

  return scriptPromise;
}

export function generateReference(prefix = "mwcd") {
  return prefix + "_" + Date.now() + "_" + Math.random().toString(36).slice(2, 10);
}
