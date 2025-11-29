import { use } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Sparkles } from "lucide-react";
import { BlogList } from "@/components/blog/blog-list";
import FadeIn from "@/components/animation/FadeIn";

const SECTION_HEADING =
  "text-4xl font-light leading-tight md:text-5xl lg:text-6xl";
const SECTION_BODY = "text-lg font-light leading-relaxed md:text-xl";
const EYEBROW_TEXT = "text-xs uppercase tracking-[0.4em]";

export default function BlogPage({ params }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("BlogPage");

  const hero = {
    eyebrow: t("hero.eyebrow"),
    title: t("hero.title"),
    body: t("hero.body"),
    cta: t("hero.cta"),
    image: t("hero.image"),
  };

  const categories = Object.entries(t.raw("categories")).map(
    ([key, label], idx) => ({
      key,
      label,
      default: idx === 0,
    })
  );

  const categoriesSubtitle = t("categoriesSubtitle")?.trim();

  const posts = Object.entries(t.raw("posts")).map(([key, post]) => ({
    slug: key,
    ...post,
  }));

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
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-0 py-20">
          <div className="space-y-6 max-w-3xl">
            <FadeIn>
              <div
                className={`inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 ${EYEBROW_TEXT} text-white/70`}
              >
                <Sparkles className="h-3 w-3" />
                {hero.eyebrow}
              </div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className={`${SECTION_HEADING} text-white`}>{hero.title}</h1>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className={`${SECTION_BODY} text-white/70`}>{hero.body}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6 dark:bg-zinc-950 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-12">
          {(t("categoriesTitle")?.trim() || categoriesSubtitle) && (
            <FadeIn className="space-y-4">
              {t("categoriesTitle")?.trim() && (
                <p
                  className={`${EYEBROW_TEXT} text-zinc-400 dark:text-white/40`}
                >
                  {t("categoriesTitle")}
                </p>
              )}
              {categoriesSubtitle && (
                <h2
                  className={`${SECTION_HEADING} text-zinc-950 dark:text-white`}
                >
                  {categoriesSubtitle}
                </h2>
              )}
            </FadeIn>
          )}
          <FadeIn delay={0.05}>
            <BlogList categories={categories} posts={posts} />
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
    title: t("blogTitle"),
    description: t("blogDescription"),
  };
}
