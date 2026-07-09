import Link from "next/link";
import type { ReactNode } from "react";

type PageBannerProps = {
  breadcrumbLabel: string;
  eyebrow: string;
  heading: ReactNode;
  description?: string;
  children?: ReactNode;
};

export function PageBanner({
  breadcrumbLabel,
  eyebrow,
  heading,
  description,
  children,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-muted">
      <svg
        viewBox="0 0 600 600"
        aria-hidden="true"
        className="absolute -right-[170px] -top-[120px] w-[min(54vw,560px)] opacity-45 pointer-events-none"
      >
        <circle
          cx="300"
          cy="300"
          r="220"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="1040 340"
          transform="rotate(-120 300 300)"
          opacity="0.55"
        />
        <circle
          cx="300"
          cy="300"
          r="160"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="1.5"
          strokeDasharray="760 250"
          transform="rotate(40 300 300)"
          opacity="0.4"
        />
      </svg>

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-10 pt-10 sm:pt-17 pb-11 sm:pb-18">
        {/* <nav
          aria-label="Breadcrumb"
          className="font-mono text-[12px] text-muted-foreground mb-6"
        >
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>{" "}
          / {breadcrumbLabel}
        </nav> */}

        <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-4">
          {eyebrow}
        </p>

        <h1 className="font-serif font-semibold text-[34px] sm:text-[58px] leading-[1.06] tracking-[-0.5px] max-w-[740px] text-balance mb-5">
          {heading}
        </h1>

        {description && (
          <p className="text-[16px] sm:text-[18.5px] leading-[1.6] text-muted-foreground max-w-[580px]">
            {description}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
