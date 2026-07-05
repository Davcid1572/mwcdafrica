import Link from "next/link";
import Image from "next/image";
import { footerColumns, socialLinks } from "@/lib/data/footer";

export default function Footer() {
  return (
    <footer className="bg-[#221D17] text-[#F7F2EA]/72">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-10 pt-12 sm:pt-16 pb-8">
        <div className="flex flex-wrap gap-10 justify-between mb-12">
          {/* Brand column */}
          <div className="flex-1 min-w-[260px] basis-[280px]">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#3C6B54] shrink-0">
                <Image
                  src="/brand/logo-mark.png"
                  alt=""
                  width={22}
                  height={22}
                />
              </span>
              <span className="font-serif font-bold text-[19px] text-[#F7F2EA]">
                MWCD<span className="text-[#D98A63]">AFRICA</span>
              </span>
            </Link>
            <p className="text-[14.5px] leading-[1.62] max-w-[300px] mb-5">
              A Mental Wellbeing &amp; Community Development foundation
              advancing care, innovation, and dignity across Africa.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map(function (s) {
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-[38px] h-[38px] rounded-full border border-white/22 flex items-center justify-center text-[12px] font-semibold text-[#F7F2EA]/80 hover:bg-[#C06B45] hover:text-white transition-colors"
                  >
                    {s.short}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map(function (col) {
            return (
              <nav
                key={col.heading}
                aria-label={col.heading}
                className="min-w-[140px]"
              >
                <p className="text-[12px] tracking-[1px] uppercase text-[#F7F2EA]/50 mb-4">
                  {col.heading}
                </p>
                <ul className="flex flex-col gap-[11px]">
                  {col.links.map(function (link) {
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-[14px] text-[#F7F2EA]/78 hover:text-[#D98A63] transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            );
          })}
        </div>

        <div className="border-t border-white/14 pt-[22px] flex flex-wrap gap-3 justify-between text-[13px] text-[#F7F2EA]/55">
          <span>
            &copy; {new Date().getFullYear()} MWCDAFRICA Foundation. All rights
            reserved.
          </span>
          <span>Empowering minds &middot; Strengthening communities</span>
        </div>
      </div>
    </footer>
  );
}
