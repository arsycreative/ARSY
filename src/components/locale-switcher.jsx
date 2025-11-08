"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();

  const nextLocale = locale === "en" ? "id" : "en";

  function toggleLocale() {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <button
      type="button"
      onClick={toggleLocale}
      disabled={isPending}
      className="rounded-full border border-zinc-300 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-zinc-700 transition hover:bg-zinc-100 disabled:opacity-60 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
      aria-label={`${t("label")}: ${t("switchTo", { locale: nextLocale })}`}
    >
      {t("current", { locale })} |{" "}
      {isPending ? "..." : t("switchTo", { locale: nextLocale })}
    </button>
  );
}
