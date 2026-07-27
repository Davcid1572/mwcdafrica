"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, MoonStar } from "lucide-react";
import { haptic } from "@/lib/haptics";

// Floating theme switch, fixed to the corner of the viewport rather than
// sitting in the header row. Stays reachable with a thumb on mobile and
// doesn't compete with the nav for space.
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // avoids hydration mismatch

  const isDark = resolvedTheme === "dark";

  function toggle() {
    haptic(isDark ? [8, 30, 8] : 10);
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      whileTap={{ scale: 0.88 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg shadow-black/10 hover:border-primary/50 sm:bottom-7 sm:right-7"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25 }}
            className="text-accent-light"
          >
            <MoonStar size={20} />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25 }}
            className="text-primary"
          >
            <Sun size={20} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
