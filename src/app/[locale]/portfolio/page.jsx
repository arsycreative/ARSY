import { use } from "react";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import FadeIn from "@/components/animation/FadeIn";

export default function PortfolioPage({ params }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("PortfolioPage");

  const hero = {
    eyebrow: t("hero.eyebrow"),
    title: t("hero.title"),
    body: t("hero.body"),
    image: t("hero.image", { defaultMessage: "" }),
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
            <FadeIn>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70">
                <Sparkles className="h-3 w-3" />
                {hero.eyebrow}
              </div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="text-5xl font-light leading-tight lg:text-6xl">
                {hero.title}
              </h1>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="text-xl font-light text-white/70 leading-relaxed">
                {hero.body}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="bg-white py-24 px-6 dark:bg-zinc-950 lg:px-12"
      >
        <div className="mx-auto max-w-7xl space-y-12">
          <FadeIn>
            <PortfolioGrid
              filters={filters}
              projects={projects}
              emptyLabel={t("empty")}
            />
          </FadeIn>
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
