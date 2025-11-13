import { use } from "react";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
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
      <section className="relative overflow-hidden py-32 px-6 text-white lg:px-12">
        <div
          className="absolute inset-0 bg-linear-to-br from-zinc-950 via-zinc-900 to-black"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-60 blur-3xl"
          aria-hidden="true"
        >
          <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-violet-500/30" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-purple-500/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/60">
                <Sparkles className="h-3 w-3 text-violet-400" />
                {hero.eyebrow}
              </div>
              <div className="space-y-6">
                <h1 className="text-5xl font-light leading-tight lg:text-6xl">
                  {hero.title}
                </h1>
                <p className="text-xl font-light text-white/70 leading-relaxed">
                  {hero.body}
                </p>
                <p className="text-sm text-white/50">{hero.detail}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900 transition-all hover:scale-[1.02]"
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
            </div>

            <div className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-3xl">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  {hero.card.label}
                </p>
                <p className="text-3xl font-light text-white">
                  {hero.card.title}
                </p>
                <p className="text-white/60">{hero.card.body}</p>
              </div>
              <div className="h-px bg-white/10" />
              <div className="space-y-4">
                {hero.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                      {item.label}
                    </span>
                    <span className="text-lg font-light text-white">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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
