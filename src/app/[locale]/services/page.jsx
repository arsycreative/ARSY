import { use } from "react";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  ArrowUpRight,
  LayoutGrid,
  PenTool,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import Image from "next/image";

const offeringIcons = {
  web: LayoutGrid,
  product: Workflow,
  brand: PenTool,
};

export default function ServicesPage({ params }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("ServicesPage");

  const hero = {
    eyebrow: t("hero.eyebrow"),
    title: t("hero.title"),
    body: t("hero.body"),
    detail: t("hero.detail"),
    cta: t("hero.cta"),
    secondary: t("hero.secondary"),
    stats: ["timeline", "coverage", "access"].map((key) => ({
      label: t(`hero.stats.${key}.label`),
      value: t(`hero.stats.${key}.value`),
    })),
    image: t("hero.image"),
  };

  const offeringsRaw = t.raw("offerings.items");
  const offerings = ["web", "product", "brand"].map((key) => {
    const raw = offeringsRaw?.[key] ?? {};
    return {
      key,
      tag: t(`offerings.items.${key}.tag`),
      title: t(`offerings.items.${key}.title`),
      body: t(`offerings.items.${key}.body`),
      features: Object.values(raw.features ?? {}),
    };
  });

  const approach = {
    eyebrow: t("approach.eyebrow"),
    title: t("approach.title"),
    steps: ["discover", "build", "launch"].map((key) => ({
      tag: t(`approach.steps.${key}.tag`),
      title: t(`approach.steps.${key}.title`),
      body: t(`approach.steps.${key}.body`),
    })),
  };

  const stackRaw = t.raw("stack.items");
  const stack = {
    eyebrow: t("stack.eyebrow"),
    title: t("stack.title"),
    body: t("stack.body"),
    items: ["experience", "technology", "delivery"].map((key) => ({
      title: t(`stack.items.${key}.title`),
      bullets: Object.values(stackRaw?.[key]?.bullets ?? {}),
    })),
  };

  const cta = {
    eyebrow: t("cta.eyebrow"),
    title: t("cta.title"),
    body: t("cta.body"),
    primary: t("cta.primary"),
  };

  return (
    <>
      <section className="relative overflow-hidden bg-zinc-950 text-white px-6 lg:px-12">
        <div className="absolute inset-0">
          <Image
            src={hero.image}
            alt={hero.title}
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-0 pb-20 pt-32">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70">
              <Sparkles className="h-3 w-3" />
              {hero.eyebrow}
            </div>
            <h1 className="text-5xl font-light leading-tight lg:text-6xl">
              {hero.title}
            </h1>
            <p className="text-xl font-light text-white/70 leading-relaxed">
              {hero.body}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900 transition hover:scale-[1.02]"
            >
              {hero.cta}
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="offerings"
        className="bg-white py-24 px-6 dark:bg-zinc-950 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/40">
              {t("offerings.eyebrow")}
            </p>
            <h2 className="text-5xl font-light text-zinc-950 dark:text-white leading-tight">
              {t("offerings.title")}
            </h2>
            <p className="text-xl font-light text-zinc-600 dark:text-white/60 leading-relaxed">
              {t("offerings.body")}
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {offerings.map((item) => {
              const Icon = offeringIcons[item.key] || Sparkles;
              return (
                <div
                  key={item.title}
                  className="group flex h-full flex-col rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_30px_90px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-zinc-400 dark:text-white/50">
                    <span>{item.tag}</span>
                    <span className="rounded-full border border-zinc-200/80 px-3 py-1 text-[10px] text-zinc-500 dark:border-white/20 dark:text-white/60">
                      {t("offerings.cardBadge")}
                    </span>
                  </div>
                  <div className="mt-6 inline-flex rounded-2xl bg-zinc-900/90 p-3 text-white dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-2xl font-light text-zinc-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base font-light text-zinc-600 dark:text-white/60 leading-relaxed">
                    {item.body}
                  </p>
                  <div className="mt-6 space-y-2">
                    {item.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 rounded-full bg-zinc-50 px-4 py-2 text-sm text-zinc-600 transition group-hover:bg-zinc-900 group-hover:text-white dark:bg-white/5 dark:text-white/60 dark:group-hover:bg-white/10"
                      >
                        <Sparkles className="h-3.5 w-3.5" />
                        <span className="font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 px-6 text-white lg:px-12">
        <div
          className="absolute inset-0 bg-linear-to-br from-zinc-950 via-zinc-900 to-black"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">
              {approach.eyebrow}
            </p>
            <h2 className="text-5xl font-light leading-tight">
              {approach.title}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {approach.steps.map((step, idx) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  {step.tag}
                </p>
                <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-white/20 px-4 py-2 text-sm text-white/70">
                  <span>{String(idx + 1).padStart(2, "0")}</span>
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <h3 className="mt-6 text-2xl font-light text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-base font-light text-white/70 leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-24 px-6 dark:bg-zinc-900 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 dark:text-white/40">
              {stack.eyebrow}
            </p>
            <h2 className="text-5xl font-light text-zinc-950 dark:text-white leading-tight">
              {stack.title}
            </h2>
            <p className="text-xl font-light text-zinc-600 dark:text-white/60 leading-relaxed">
              {stack.body}
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stack.items.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_30px_90px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
              >
                <h3 className="text-xl font-light text-zinc-900 dark:text-white">
                  {item.title}
                </h3>
                <div className="mt-4 space-y-2">
                  {item.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-center gap-3 rounded-full bg-zinc-50 px-4 py-2 text-sm text-zinc-600 dark:bg-white/5 dark:text-white/60"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-white" />
                      <span className="font-light">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 px-6 text-white lg:px-12">
        <div
          className="absolute inset-0 bg-linear-to-br from-zinc-950 via-zinc-900 to-black"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-5xl space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">
            {cta.eyebrow}
          </p>
          <h2 className="text-5xl font-light leading-tight lg:text-6xl">
            {cta.title}
          </h2>
          <p className="text-xl font-light text-white/70 leading-relaxed">
            {cta.body}
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href={`/${locale}/contact`}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900 transition hover:scale-[1.02]"
            >
              {cta.primary}
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("servicesTitle"),
    description: t("servicesDescription"),
  };
}
