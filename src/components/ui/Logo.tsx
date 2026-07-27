import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 shrink-0 min-w-0">
      <Image src="/brand/logo.png" alt="" width={34} height={34} priority />
      <span className="flex flex-col leading-none min-w-0">
        <span className="font-serif font-bold text-[19px] text-foreground whitespace-nowrap">
          MWCD<span className="text-primary">AFRICA</span>
        </span>
        <span className="hidden md:block text-[9.5px] tracking-[2.4px] uppercase text-muted-foreground mt-1 whitespace-nowrap">
          Mental Wellbeing &amp; Community Development
        </span>
      </span>
    </Link>
  );
}
