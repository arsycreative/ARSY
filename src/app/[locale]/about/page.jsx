import { use } from "react";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  ArrowUpRight,
  BookOpen,
  Gem,
  HeartHandshake,
  PenTool,
  RefreshCcw,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";

const processIcons = {
  listen: BookOpen,
  craft: PenTool,
  sustain: RefreshCcw,
};

const reasonIcons = {
  human: HeartHandshake,
  quality: Gem,
  collaboration: Sparkles,
};

export default function AboutPage({ params }) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("About");

  const hero = {
    eyebrow: t("hero.eyebrow"),
    title: t("hero.title"),
    body: t("hero.body"),
    detail: t("hero.detail"),
    secondary: t("hero.secondary"),
    image: t("hero.image"),
  };

  const who = {
    eyebrow: t("who.eyebrow"),
    title: t("who.title"),
    body: t("who.body"),
    cards: ["roots", "craft", "relationships"].map((key) => ({
      title: t(`who.cards.${key}.title`),
      body: t(`who.cards.${key}.body`),
    })),
  };

  const philosophy = {
    eyebrow: t("philosophy.eyebrow"),
    title: t("philosophy.title"),
    body: t("philosophy.body"),
    detail: t("philosophy.detail"),
    pillars: ["intent", "clarity"].map((key) => t(`philosophy.pillars.${key}`)),
  };

  const process = {
    eyebrow: t("process.eyebrow"),
    title: t("process.title"),
    steps: ["listen", "craft", "sustain"].map((key) => ({
      key,
      tag: t(`process.steps.${key}.tag`),
      title: t(`process.steps.${key}.title`),
      body: t(`process.steps.${key}.body`),
    })),
  };

  const reasons = {
    eyebrow: t("reasons.eyebrow"),
    title: t("reasons.title"),
    items: ["human", "quality", "collaboration"].map((key) => ({
      key,
      title: t(`reasons.items.${key}.title`),
      body: t(`reasons.items.${key}.body`),
    })),
  };

  const metrics = {
    eyebrow: t("metrics.eyebrow"),
    title: t("metrics.title"),
    items: ["years", "projects", "clients", "vision"].map((key) => ({
      value: t(`metrics.items.${key}.value`),
      label: t(`metrics.items.${key}.label`),
    })),
  };

  const cta = {
    eyebrow: t("cta.eyebrow"),
    title: t("cta.title"),
    body: t("cta.body"),
    primary: t("cta.primary"),
    secondary: t("cta.secondary"),
  };

  return (
    <>
      <section className="relative overflow-hidden bg-zinc-950 text-white px-6 lg:px-12">
        <div className="absolute inset-0">
          <Image
            src={hero.image}
            alt={hero.title}
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-0 py-20">
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
            <p className="text-sm text-white/50">{hero.detail}</p>
            <p className="text-sm text-white/40">{hero.secondary}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900 transition hover:scale-[1.02]"
            >
              {cta.primary}
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <a
              href="#studio"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
            >
              {cta.secondary}
            </a>
          </div>
        </div>
      </section>

      <section
        id="studio"
        className="bg-white py-24 px-6 dark:bg-zinc-950 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/40">
              {who.eyebrow}
            </p>
            <h2 className="text-5xl lg:text-6xl font-light text-zinc-950 dark:text-white leading-tight">
              {who.title}
            </h2>
            <p className="text-xl text-zinc-600 dark:text-white/60 font-light leading-relaxed">
              {who.body}
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {who.cards.map((card) => (
              <div
                key={card.title}
                className="group rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900/10 hover:shadow-[0_35px_90px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
              >
                <h3 className="text-2xl font-light text-zinc-950 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-base text-zinc-600 dark:text-white/60 font-light leading-relaxed">
                  {card.body}
                </p>
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
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.9fr,1.1fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                {philosophy.eyebrow}
              </p>
              <h2 className="text-5xl lg:text-6xl font-light leading-tight">
                {philosophy.title}
              </h2>
              <p className="text-xl font-light text-white/70 leading-relaxed">
                {philosophy.body}
              </p>
              <p className="text-sm text-white/50">{philosophy.detail}</p>
              <div className="space-y-3">
                {philosophy.pillars.map((pillar) => (
                  <div
                    key={pillar}
                    className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                  >
                    <Users className="h-5 w-5 text-violet-300" />
                    <p className="text-white/80">{pillar}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {process.steps.map((step) => {
                const Icon = processIcons[step.key] || BookOpen;
                return (
                  <div
                    key={step.title}
                    className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
                  >
                    <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                      {step.tag}
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="rounded-2xl bg-white/10 p-3 text-white/80 transition group-hover:bg-white/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-light">{step.title}</h3>
                    </div>
                    <p className="mt-4 text-sm text-white/60">{step.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6 dark:bg-zinc-950 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/40">
              {reasons.eyebrow}
            </p>
            <h2 className="text-5xl lg:text-6xl font-light text-zinc-950 dark:text-white leading-tight">
              {reasons.title}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reasons.items.map((item) => {
              const Icon = reasonIcons[item.key] || Sparkles;
              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-zinc-200/70 bg-white p-8 shadow-[0_25px_80px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_35px_100px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-zinc-900/90 p-3 text-white transition group-hover:bg-zinc-900 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-light text-zinc-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-500 dark:text-white/60">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-24 px-6 dark:bg-zinc-900 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 dark:text-white/40">
              {metrics.eyebrow}
            </p>
            <h2 className="text-5xl lg:text-6xl font-light text-zinc-950 dark:text-white leading-tight">
              {metrics.title}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.items.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-zinc-200/80 bg-white p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_35px_100px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
              >
                <p className="text-5xl font-light text-zinc-950 dark:text-white">
                  {metric.value}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-white/60">
                  {metric.label}
                </p>
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
        <div className="relative z-10 mx-auto max-w-5xl text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">
            {cta.eyebrow}
          </p>
          <h2 className="text-5xl lg:text-6xl font-light leading-tight">
            {cta.title}
          </h2>
          <p className="text-xl text-white/70 font-light leading-relaxed">
            {cta.body}
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href={`/${locale}/contact`}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900 transition-all hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(255,255,255,0.3)]"
            >
              {cta.primary}
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <a
              href="mailto:hello@arsystudio.com"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10 hover:border-white/60"
            >
              {cta.secondary}
            </a>
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
    title: t("aboutTitle"),
    description: t("aboutDescription"),
  };
}
