import Link from "next/link";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa6";
import { footerColumns, socialLinks } from "@/lib/data/footer";
import { Tap } from "@/components/ui/Tap";

const socialIcons = {
  instagram: FaInstagram,
  x: FaXTwitter,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  tiktok: FaTiktok,
};

export default function Footer() {
  return (
    <footer className="bg-[#221D17] text-[#F7F2EA]/72">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-10 pt-12 sm:pt-16 pb-8">
        <div className="flex flex-wrap gap-10 justify-between mb-12">
          {/* Brand column */}
          <div className="flex-1 min-w-[260px] basis-[280px]">
            <Link href="/" className="flex items-center gap-3 mb-5">
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
                  stroke="#F7F2EA"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 78L48 30L78 78"
                  stroke="#D98A63"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
                const Icon = socialIcons[s.icon];
                return (
                  <Tap key={s.label} hapticPattern={8}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-[38px] h-[38px] rounded-full border border-white/22 flex items-center justify-center text-[#F7F2EA]/80 hover:bg-[#C06B45] hover:text-white active:scale-95 transition-all"
                    >
                      <Icon size={15} />
                    </a>
                  </Tap>
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

        <div className="border-t border-white/14 pt-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] text-[#F7F2EA]/55">
            © {new Date().getFullYear()} MWCDAFRICA Foundation. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5 text-[13px]">
            <Link
              href="/documents/privacy-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F7F2EA]/60 hover:text-[#D98A63] transition-colors"
            >
              Privacy Policy
            </Link>

            <span className="text-white/20">•</span>

            <Link
              href="/documents/terms-and-conditions.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F7F2EA]/60 hover:text-[#D98A63] transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>

          <p className="text-[13px] text-[#F7F2EA]/55">
            Empowering minds · Strengthening communities
          </p>
        </div>
      </div>
    </footer>
  );
}
