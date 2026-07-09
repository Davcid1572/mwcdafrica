"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/lib/data/nav";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the drawer on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-310 mx-auto flex items-center justify-between gap-6 px-5 sm:px-10 py-4">
        <Logo />

        {/* Desktop nav — visible lg and up */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-[14.5px] font-medium pb-1 border-b-2 transition-colors ${
                  isActive
                    ? "border-accent-light text-foreground"
                    : "border-transparent text-foreground/80 hover:border-accent-light hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <ThemeToggle />

          <Link
            href="/donate"
            className="bg-primary hover:bg-primary-hover text-primary-foreground text-[14.5px] font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Donate
          </Link>
        </nav>

        {/* Mobile controls — visible below lg */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="sr-only">Toggle menu</span>
            <span
              className={`absolute h-[1.5px] w-5 bg-current transition-all duration-300 ease-out ${
                open ? "translate-y-0 rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-5 bg-current transition-all duration-300 ease-out ${
                open ? "translate-y-0 -rotate-45" : "translate-y-[5px]"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        inert={!open ? true : undefined}
        className={`lg:hidden grid overflow-hidden border-t border-border bg-background/95 backdrop-blur-md transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Primary mobile"
            className="flex flex-col gap-1 px-5 py-4 sm:px-10"
          >
            {navLinks.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-md px-3 py-2.5 text-[15px] font-medium transition-colors ${
                    isActive
                      ? "bg-accent/10 text-foreground"
                      : "text-foreground/80 hover:bg-accent/5 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/donate"
              className="bg-primary hover:bg-primary-hover text-primary-foreground text-[14.5px] font-semibold px-5 py-2.5 rounded-full transition-colors mt-3 text-center"
            >
              Donate
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
