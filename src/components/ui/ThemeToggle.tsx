import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  //
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // avoids hydration mismatch

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
