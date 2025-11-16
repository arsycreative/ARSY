"use client";

import { useMemo, useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const buttons = useMemo(
    () => [
      { key: "en", label: "EN" },
      { key: "id", label: "ID" },
    ],
    []
  );

  function switchTo(nextLocale) {
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="inline-flex overflow-hidden rounded-full border border-zinc-300 bg-white/70 text-xs font-semibold uppercase text-zinc-800 shadow-sm dark:border-white/20 dark:bg-white/5 dark:text-white">
      {buttons.map((button) => (
        <button
          key={button.key}
          type="button"
          onClick={() => switchTo(button.key)}
          disabled={isPending}
          className={`px-4 py-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 dark:focus-visible:ring-white/60 ${
            locale === button.key
              ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
              : "text-zinc-600 hover:bg-white/80 hover:text-zinc-900 dark:text-white/80 dark:hover:bg-white/15 dark:hover:text-white"
          }`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}
