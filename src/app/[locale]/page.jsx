import { use } from "react";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default function HomePage({ params }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("Home");

  return (
    <section className="space-y-8 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
        {t("eyebrow")}
      </p>

      <div className="space-y-4">
        <h1 className="text-4xl font-semibold leading-tight text-zinc-900 sm:text-5xl dark:text-white">
          {t("headline")}
        </h1>
        <p className="text-base text-zinc-600 sm:text-lg dark:text-zinc-300">
          {t("subhead")}
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{t("body")}</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <button className="rounded-full bg-zinc-900 px-6 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
          {t("primaryCta")}
        </button>
        <button className="rounded-full border border-zinc-300 px-6 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900">
          {t("secondaryCta")}
        </button>
      </div>
    </section>
  );
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}
