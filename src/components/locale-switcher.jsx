"use client";

import { useMemo, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();

  const nextLocale = locale === "en" ? "id" : "en";
  const localeLabel = useMemo(
    () => ({
      en: t("locales.en"),
      id: t("locales.id"),
    }),
    [t]
  );

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
      className="rounded-full border border-zinc-300 bg-white/80 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-zinc-700 transition hover:border-zinc-900 hover:bg-white disabled:opacity-60 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-white/50 dark:hover:bg-white/10"
      aria-label={`${t("switchTo", { locale: localeLabel[nextLocale] })}`}
    >
      {isPending ? t("loading") : localeLabel[nextLocale]}
    </button>
  );
}
