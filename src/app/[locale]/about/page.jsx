import { use } from "react";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  ArrowUpRight,
  BookOpen,
  PenTool,
  RefreshCcw,
  Sparkles,
  Eye,
  Target,
} from "lucide-react";
import Image from "next/image";
import FAQSection from "@/components/about/faq-section";

const processIcons = {
  listen: BookOpen,
  craft: PenTool,
  sustain: RefreshCcw,
};

const SECTION_HEADING =
  "text-4xl font-light leading-tight md:text-5xl lg:text-6xl";
const SECTION_BODY = "text-lg font-light leading-relaxed md:text-xl";
const CARD_TITLE = "text-2xl font-light md:text-3xl";
const CARD_BODY = "text-base font-light leading-relaxed";
const EYEBROW_TEXT = "text-xs uppercase tracking-[0.4em]";
const FEATURE_TEXT = "text-xl font-light leading-tight md:text-2xl";
const METRIC_VALUE = "text-4xl font-light md:text-5xl";

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

  const philosophyCopy = t.raw("philosophy");
  const philosophy = {
    eyebrow: philosophyCopy?.eyebrow ?? "",
    title: philosophyCopy?.title ?? "",
    vision: {
      title: philosophyCopy?.vision?.title ?? "",
      lines: Object.values(philosophyCopy?.vision?.lines ?? {}),
    },
    mission: {
      title: philosophyCopy?.mission?.title ?? "",
      items: Object.values(philosophyCopy?.mission?.items ?? {}),
    },
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
    items: [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
    ].map((key) => t(`reasons.items.${key}`)),
  };

  const faq = {
    eyebrow: t("faq.eyebrow"),
    title: t("faq.title"),
    body: t("faq.body"),
    items: ["process", "timeline", "ownership", "support"].map((key) => ({
      id: key,
      question: t(`faq.items.${key}.question`),
      answer: t(`faq.items.${key}.answer`),
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
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-0 pb-20 pt-32">
          <div className="space-y-6 max-w-3xl">
            <div
              className={`inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 ${EYEBROW_TEXT} text-white/70`}
            >
              <Sparkles className="h-3 w-3" />
              {hero.eyebrow}
            </div>
            <h1 className={`${SECTION_HEADING} text-white`}>
              {hero.title}
            </h1>
            <p className={`${SECTION_BODY} text-white/70`}>
              {hero.body}
            </p>
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
        <div className="relative z-10 mx-auto max-w-7xl space-y-12">
          <div className="space-y-6">
            <p className={`${EYEBROW_TEXT} text-white/40`}>
              {philosophy.eyebrow}
            </p>
            <h2 className={`${SECTION_HEADING}`}>
              {philosophy.title}
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/15 bg-white/5 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition hover:border-white/30 hover:bg-white/10">
              <div
                className={`flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-white/50`}
              >
                <Eye className="h-5 w-5 text-violet-300" />
                {philosophy.vision.title}
              </div>
              <div className="mt-6 space-y-3">
                {philosophy.vision.lines.map((line, idx) => (
                  <p
                    key={`vision-line-${idx}`}
                    className={`${FEATURE_TEXT} text-white/90`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/15 bg-linear-to-br from-white/5 to-white/10 p-8 shadow-[0_25px_90px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-white/50">
                <Target className="h-5 w-5 text-violet-300" />
                {philosophy.mission.title}
              </div>
              <div className="mt-6 space-y-4">
                {philosophy.mission.items.map((item, idx) => (
                  <div
                    key={`mission-item-${idx}`}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-violet-300" />
                    <p className={CARD_BODY}>{item}</p>
                  </div>
                ))}
              </div>
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
                  <p className={`${EYEBROW_TEXT} text-white/40`}>
                    {step.tag}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="rounded-2xl bg-white/10 p-3 text-white/80 transition group-hover:bg-white/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className={`${FEATURE_TEXT} text-white/90`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className={`mt-4 ${CARD_BODY} text-white/60`}>
                    {step.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-zinc-50 py-24 px-6 dark:bg-zinc-950 lg:px-12">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(147,51,234,0.08),transparent_60%),radial-gradient(circle_at_85%_80%,rgba(59,130,246,0.12),transparent_55%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl space-y-10">
          <div className="max-w-3xl space-y-6">
            <p
              className={`${EYEBROW_TEXT} text-zinc-400 dark:text-white/40`}
            >
              {reasons.eyebrow}
            </p>
            <h2
              className={`${SECTION_HEADING} text-zinc-950 dark:text-white`}
            >
              {reasons.title}
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {reasons.items.map((item, idx) => (
              <div
                key={`${item}-${idx}`}
                className="group relative overflow-hidden rounded-[36px] border border-zinc-200/70 bg-white/80 p-8 shadow-[0_25px_90px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-zinc-300 hover:bg-white dark:border-white/10 dark:bg-zinc-900/70 dark:hover:border-white/30"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-violet-400/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative flex items-center gap-6">
                  <span className="text-3xl font-light text-zinc-400 dark:text-white/30">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p
                    className={`${SECTION_BODY} text-zinc-900 dark:text-white`}
                  >
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection copy={faq} />

      <section className="bg-zinc-50 py-24 px-6 dark:bg-zinc-900 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-6">
            <p
              className={`${EYEBROW_TEXT} text-zinc-500 dark:text-white/40`}
            >
              {metrics.eyebrow}
            </p>
            <h2
              className={`${SECTION_HEADING} text-zinc-950 dark:text-white`}
            >
              {metrics.title}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.items.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-zinc-200/80 bg-white p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_35px_100px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
              >
                <p className={`${METRIC_VALUE} text-zinc-950 dark:text-white`}>
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
          <p className={`${EYEBROW_TEXT} text-white/40`}>
            {cta.eyebrow}
          </p>
          <h2 className={`${SECTION_HEADING}`}>
            {cta.title}
          </h2>
          <p className={`${SECTION_BODY} text-white/70`}>
            {cta.body}
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900 transition-all hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(255,255,255,0.3)]"
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
    title: t("aboutTitle"),
    description: t("aboutDescription"),
  };
}
