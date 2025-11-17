import { use } from "react";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

export default function PortfolioPage({ params }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("PortfolioPage");

  const hero = {
    eyebrow: t("hero.eyebrow"),
    title: t("hero.title"),
    body: t("hero.body"),
    detail: t("hero.detail"),
    primary: t("hero.primary"),
    secondary: t("hero.secondary"),
    image: t("hero.image", { defaultMessage: "" }),
    card: {
      label: t("hero.card.label"),
      title: t("hero.card.title"),
      body: t("hero.card.body"),
    },
    highlights: ["timeline", "industries"].map((key) => ({
      label: t(`hero.highlights.${key}.label`),
      value: t(`hero.highlights.${key}.value`),
    })),
  };

  const filtersRaw = t.raw("filters") || {};
  const filters = Object.entries(filtersRaw).map(([key, label]) => ({
    key,
    label,
  }));

  const projectsRaw = t.raw("projects") || {};
  const projects = Object.entries(projectsRaw).map(([key, project]) => ({
    key,
    ...project,
  }));

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
          {hero.image ? (
            <>
              <Image
                src={hero.image}
                alt={hero.title}
                fill
                className="object-cover opacity-60"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-linear-to-br from-zinc-950 via-zinc-900 to-black" />
          )}
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
            <p className="text-sm text-white/50">{hero.detail}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900 transition hover:scale-[1.02]"
            >
              {hero.primary}
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
            >
              {hero.secondary}
            </a>
          </div>
          <div className="mt-10 grid gap-6 text-sm uppercase tracking-[0.3em] text-white/70 sm:grid-cols-3">
            {hero.highlights.map((item) => (
              <div key={item.label} className="space-y-1">
                <p className="text-white/50">{item.label}</p>
                <p className="text-lg font-light text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="bg-white py-24 px-6 dark:bg-zinc-950 lg:px-12"
      >
        <div className="mx-auto max-w-7xl space-y-12">
          <PortfolioGrid
            filters={filters}
            projects={projects}
            emptyLabel={t("empty")}
          />
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
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900 transition hover:scale-[1.02]"
            >
              {cta.primary}
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <a
              href="mailto:hello@arsystudio.com"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
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
    title: t("portfolioTitle"),
    description: t("portfolioDescription"),
  };
}
