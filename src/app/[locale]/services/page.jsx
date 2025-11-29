import { use } from "react";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  ArrowUpRight,
  LayoutGrid,
  PenTool,
  Sparkles,
  Workflow,
} from "lucide-react";
import Image from "next/image";

const offeringIcons = {
  web: LayoutGrid,
  product: Workflow,
  brand: PenTool,
};

const SECTION_HEADING =
  "text-4xl font-light leading-tight md:text-5xl lg:text-6xl";
const SECTION_BODY = "text-lg font-light leading-relaxed md:text-xl";
const CARD_TITLE = "text-2xl font-light md:text-3xl";
const CARD_BODY = "text-base font-light leading-relaxed";
const EYEBROW_TEXT = "text-xs uppercase tracking-[0.4em]";
const CARD_LABEL = "text-sm uppercase tracking-[0.3em]";
const BULLET_TEXT = "text-sm font-light leading-relaxed";

export default function ServicesPage({ params }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("ServicesPage");
  const homeServices = useTranslations("Home.services");

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

  const signatureServices = ["web", "mobile", "brand"].map((key, idx) => ({
    key,
    tag: homeServices(`cards.${key}.tag`),
    title: homeServices(`cards.${key}.title`),
    body: homeServices(`cards.${key}.body`),
    index: String(idx + 1).padStart(2, "0"),
  }));

  const signatureVisuals = {
    web: {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80&auto=format&fit=crop",
      caption: "Custom platforms engineered around your operations.",
    },
    mobile: {
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80&auto=format&fit=crop",
      caption: "Interfaces that feel effortless on every device.",
    },
    brand: {
      image:
        "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?w=1600&q=80&auto=format&fit=crop",
      caption: "Identity systems with warmth, consistency, and intent.",
    },
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
            <div
              className={`inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 ${EYEBROW_TEXT} text-white/70`}
            >
              <Sparkles className="h-3 w-3" />
              {hero.eyebrow}
            </div>
            <h1 className={`${SECTION_HEADING} text-white`}>{hero.title}</h1>
            <p className={`${SECTION_BODY} text-white/70`}>{hero.body}</p>
          </div>
        </div>
      </section>

      <section
        id="signature-services"
        className="relative overflow-hidden bg-white py-24 px-6 dark:bg-zinc-950 lg:px-12"
      >
        <div className="relative mx-auto max-w-7xl space-y-16">
          <div className="max-w-3xl space-y-4">
            <p className={`${EYEBROW_TEXT} text-zinc-500 dark:text-white/40`}>
              {t("signature.eyebrow")}
            </p>
            <h2 className={`${SECTION_HEADING} text-zinc-950 dark:text-white`}>
              {t("signature.title")}
            </h2>
            <p className={`${SECTION_BODY} text-zinc-600 dark:text-white/70`}>
              {t("signature.body")}
            </p>
          </div>

          <div className="space-y-20">
            {signatureServices.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const visual = signatureVisuals[item.key];
              const Icon = offeringIcons[item.key] || Sparkles;

              return (
                <div
                  key={item.title}
                  className={`grid gap-10 lg:grid-cols-2 lg:items-stretch ${
                    isEven ? "" : "lg:[&>div:first-child]:order-2"
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-4xl">
                    <div className="absolute inset-0 z-10 opacity-20 transition duration-700 group-hover:opacity-60">
                      <div className="h-full w-full bg-linear-to-r from-black to-transparent" />
                    </div>
                    <div className="absolute inset-0 z-10 rounded-4xl border border-transparent transition duration-700 group-hover:border-white/40" />
                    <div className="absolute inset-0 z-10 border-l border-white/40 opacity-0 transition duration-700 group-hover:opacity-100" />
                    <div className="absolute inset-0 z-10 border-r border-white/40 opacity-0 transition duration-700 group-hover:opacity-100" />
                    <Image
                      src={visual.image}
                      alt={item.title}
                      width={1400}
                      height={700}
                      className="h-full min-h-80 w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="pointer-events-none absolute inset-0 z-0 scale-110 bg-linear-to-br from-white/10 to-transparent opacity-0 blur-3xl transition duration-700 group-hover:opacity-60" />
                  </div>
                  <div className="flex h-full flex-col space-y-5 rounded-4xl border border-zinc-200/80 bg-white/95 p-10 shadow-[0_30px_120px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-zinc-900/30 hover:shadow-[0_40px_130px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-white/5">
                    <div
                      className={`${CARD_LABEL} text-zinc-500 dark:text-white/60`}
                    >
                      {item.tag}
                    </div>
                    <h3
                      className={`${CARD_TITLE} text-zinc-950 dark:text-white`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`${CARD_BODY} text-zinc-600 dark:text-white/70`}
                    >
                      {item.body}
                    </p>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-3 self-start rounded-full border border-zinc-900 px-6 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-900 hover:text-white dark:border-white/40 dark:text-white dark:hover:bg-white/10"
                    >
                      {t("signature.cta")}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-24 px-6 dark:bg-zinc-900 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-6">
            <p className={`${EYEBROW_TEXT} text-zinc-500 dark:text-white/40`}>
              {stack.eyebrow}
            </p>
            <h2 className={`${SECTION_HEADING} text-zinc-950 dark:text-white`}>
              {stack.title}
            </h2>
            <p className={`${SECTION_BODY} text-zinc-600 dark:text-white/60`}>
              {stack.body}
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stack.items.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_30px_90px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
              >
                <h3 className={`${CARD_TITLE} text-zinc-900 dark:text-white`}>
                  {item.title}
                </h3>
                <div className="mt-4 space-y-2">
                  {item.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-center gap-3 rounded-full bg-zinc-50 px-4 py-2 text-zinc-600 dark:bg-white/5 dark:text-white/60"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-white" />
                      <span className={BULLET_TEXT}>{bullet}</span>
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
          <p className={`${EYEBROW_TEXT} text-white/40`}>{cta.eyebrow}</p>
          <h2 className={`${SECTION_HEADING}`}>{cta.title}</h2>
          <p className={`${SECTION_BODY} text-white/70`}>{cta.body}</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/contact"
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
