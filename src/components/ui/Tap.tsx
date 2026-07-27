"use client";

import { motion } from "framer-motion";
import { haptic } from "@/lib/haptics";

type TapProps = {
  children: React.ReactNode;
  className?: string;
  hapticPattern?: number | number[];
};

// Wraps a button/link so it scales down on press and fires a short haptic
// pulse on devices that support it. Pass className to control display
// (e.g. "inline-block" for a pill button, "block w-full" for a grid tile).
export function Tap({ children, className = "inline-block", hapticPattern = 10 }: TapProps) {
  return (
    <motion.span
      className={className}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      onPointerDown={function () {
        haptic(hapticPattern);
      }}
    >
      {children}
    </motion.span>
  );
}
