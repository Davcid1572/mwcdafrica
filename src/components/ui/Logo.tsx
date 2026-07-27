import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 shrink-0">
      <svg
        width="34"
        height="34"
        viewBox="0 0 96 96"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M18 78L18 18L48 66L78 18L78 78"
          stroke="var(--color-primary)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 78L48 30L78 78"
          stroke="#C06B45"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-serif font-bold text-[19px] text-foreground">
          MWCD<span className="text-primary">AFRICA</span>
        </span>
        <span className="text-[9.5px] tracking-[2.4px] uppercase text-muted-foreground mt-1 hidden md:inline">
          Mental Wellbeing &amp; Community Development
        </span>
      </span>
    </Link>
  );
}
