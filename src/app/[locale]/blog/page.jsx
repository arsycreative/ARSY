import { use } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { BlogList } from "@/components/blog/blog-list";

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
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70">
              <Sparkles className="h-3 w-3" />
              {hero.eyebrow}
            </div>
            <h1 className="text-5xl font-light leading-tight lg:text-6xl">
              {hero.title}
            </h1>
            <p className="text-lg font-light text-white/70 leading-relaxed">
              {hero.body}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6 dark:bg-zinc-950 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/40">
              {t("categoriesTitle")}
            </p>
            <h2 className="text-4xl font-light text-zinc-950 dark:text-white">
              {t("categoriesSubtitle")}
            </h2>
          </div>
          <BlogList categories={categories} posts={posts} />
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
