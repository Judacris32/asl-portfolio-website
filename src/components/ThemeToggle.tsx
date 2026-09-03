"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className="relative h-9 w-9 flex items-center justify-center rounded-full border border-hairline dark:border-midnight-hairline text-ink dark:text-slate-200 hover:border-accent dark:hover:border-accent-dark transition-colors"
    >
      <Sun
        className={`absolute h-4 w-4 transition-all duration-300 ${
          theme === "light" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90"
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-300 ${
          theme === "dark" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 rotate-90"
        }`}
      />
    </button>
  );
}
