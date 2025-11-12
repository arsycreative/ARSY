"use client";

import { useTheme } from "next-themes";
import { Moon, SunMedium } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white/80 text-xs font-medium text-zinc-900 transition hover:border-zinc-900 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white"
      aria-label="Toggle theme"
    >
      {/* Render both icons; hide/show via CSS so SSR/CSR markup stays identical */}
      <span className="inline dark:hidden">
        <Moon className="h-4 w-4" />
      </span>
      <span className="hidden dark:inline">
        <SunMedium className="h-4 w-4" />
      </span>
    </button>
  );
}
