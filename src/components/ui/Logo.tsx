import Image from "next/image";

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-3 shrink-0">
      <Image
        src="/brand/logo-mark.png"
        alt=""
        width={34}
        height={34}
        priority
      />
      <span className="flex flex-col leading-none">
        <span className="font-serif font-bold text-[19px] text-foreground">
          MWCD<span className="text-primary">AFRICA</span>
        </span>
        <span className="text-[9.5px] tracking-[2.4px] uppercase text-muted-foreground mt-1">
          Mental Wellbeing &amp; Community Development
        </span>
      </span>
    </a>
  );
}
