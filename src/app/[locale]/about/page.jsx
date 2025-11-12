import { use } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";

const portraits = {
  amira:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&auto=format&fit=crop",
  rafi:
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80&auto=format&fit=crop",
};

export default function AboutPage({ params }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("About");

  const timeline = ["origin", "scale", "future"].map((key) => ({
    year: t(`story.timeline.${key}.year`),
    title: t(`story.timeline.${key}.title`),
    body: t(`story.timeline.${key}.body`),
  }));

  const values = ["care", "clarity", "momentum"].map((key) => ({
    title: t(`values.items.${key}.title`),
    body: t(`values.items.${key}.body`),
    tag: t(`values.items.${key}.tag`),
  }));

  const process = ["listen", "design", "evolve"].map((key) => ({
    title: t(`process.steps.${key}.title`),
    body: t(`process.steps.${key}.body`),
    detail: t(`process.steps.${key}.detail`),
  }));

  const leadership = ["amira", "rafi"].map((key) => ({
    name: t(`leadership.team.${key}.name`),
    title: t(`leadership.team.${key}.title`),
    bio: t(`leadership.team.${key}.bio`),
    portrait: portraits[key],
  }));

  const capabilities = ["experience", "platforms", "scale"].map((key) =>
    t(`capabilities.list.${key}`)
  );

  return (
    <div className="space-y-16 pb-12 text-zinc-900 dark:text-white">
      <section className="grid gap-10 rounded-[2.5rem] border border-black/5 bg-white/90 p-8 shadow-[0_40px_120px_rgba(15,15,15,0.08)] dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1.1fr,0.9fr] lg:p-12">
        <div className="space-y-6">
          <Reveal>
          <p className="text-xs uppercase tracking-[0.6em] text-zinc-500 dark:text-white/60">
            {t("hero.eyebrow")}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-4xl font-semibold lg:text-5xl">
            {t("hero.title")}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-zinc-600 dark:text-white/70">
            {t("hero.body")}
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="text-sm text-zinc-500 dark:text-white/60">
            {t("hero.subhead")}
          </p>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          <Reveal delay={0.3}>
            <Button
              size="lg"
              className="dark:bg-white dark:text-zinc-900"
            >
              {t("hero.primaryCta")}
            </Button>
          </Reveal>
          <Reveal delay={0.35}>
            <Button
              size="lg"
              variant="ghost"
              className="border-zinc-300 text-zinc-900 dark:border-white/30 dark:text-white"
            >
              {t("hero.secondaryCta")}
            </Button>
          </Reveal>
        </div>
        </div>
        <Reveal delay={0.2}>
          <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-black/5 dark:border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=900&q=80&auto=format&fit=crop"
              alt="Arsy Studio atelier"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-sm font-semibold text-white">
                {t("hero.caption")}
              </p>
              <p className="text-xs text-white/60">{t("hero.captionBody")}</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="space-y-6 rounded-[2.5rem] border border-black/5 bg-white/90 p-8 shadow-[0_30px_90px_rgba(15,15,15,0.08)] dark:border-white/10 dark:bg-white/5 lg:p-12">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.5em] text-zinc-500 dark:text-white/50">
            {t("story.eyebrow")}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl font-semibold">{t("story.title")}</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-zinc-600 dark:text-white/70">
            {t("story.body")}
          </p>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {timeline.map((item, index) => (
            <Reveal key={item.title} delay={0.1 * index}>
              <div className="rounded-3xl border border-black/5 bg-white/80 p-6 text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-white">
                <p className="text-xs uppercase tracking-[0.5em] text-zinc-400 dark:text-white/40">
                  {item.year}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-white/70">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {values.map((value, index) => (
          <TiltCard key={value.title}>
            <Reveal delay={0.1 * index}>
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.4em] text-zinc-500 dark:text-white/40">
                  {value.tag}
                </span>
                <h3 className="text-2xl font-semibold">
                  {value.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-white/70">
                  {value.body}
                </p>
              </div>
            </Reveal>
          </TiltCard>
        ))}
      </section>

      <section className="space-y-6 rounded-[2.5rem] border border-black/5 bg-white/90 p-8 shadow-[0_30px_90px_rgba(15,15,15,0.08)] dark:border-white/10 dark:bg-white/5 lg:p-12">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.5em] text-zinc-500 dark:text-white/50">
            {t("process.eyebrow")}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl font-semibold">{t("process.title")}</h2>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {process.map((step, index) => (
            <Reveal key={step.title} delay={0.1 * index}>
              <div className="rounded-3xl border border-black/5 bg-gradient-to-b from-white to-zinc-100 p-6 text-zinc-900 dark:border-white/10 dark:from-white/10 dark:to-transparent dark:text-white">
                <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 dark:text-white/40">
                  {step.detail}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-white/70">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="rounded-[2.5rem] border border-black/5 bg-white/90 p-8 text-zinc-900 shadow-[0_30px_90px_rgba(15,15,15,0.08)] dark:border-white/10 dark:bg-white/5 dark:text-white lg:p-12">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.5em] text-zinc-500 dark:text-white/50">
            {t("leadership.eyebrow")}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold">
                {t("leadership.title")}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-white/70">
                {t("leadership.body")}
              </p>
            </div>
            <Button
              variant="ghost"
              className="border-zinc-300 text-zinc-900 dark:border-white/30 dark:text-white"
            >
              {t("leadership.cta")}
            </Button>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {leadership.map((leader, index) => (
            <Reveal key={leader.name} delay={0.1 * index}>
              <div className="rounded-3xl border border-black/5 bg-white/80 p-6 text-zinc-900 dark:border-white/10 dark:bg-white/10 dark:text-white">
                <div className="relative h-64 overflow-hidden rounded-2xl border border-black/5 dark:border-white/10">
                  <Image
                    src={leader.portrait}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-xl font-semibold">{leader.name}</p>
                  <p className="text-sm text-zinc-600 dark:text-white/60">
                    {leader.title}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-white/70">
                    {leader.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="rounded-[2.5rem] border border-black/5 bg-white/90 p-8 text-zinc-900 shadow-[0_30px_90px_rgba(15,15,15,0.08)] dark:border-white/10 dark:bg-white/5 dark:text-white lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-12">
        <div className="space-y-4">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 dark:text-white/50">
              {t("capabilities.eyebrow")}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-semibold">
              {t("capabilities.title")}
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <ul className="space-y-2 text-sm text-zinc-600 dark:text-white/70">
            {capabilities.map((capability) => (
              <li key={capability} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-zinc-900 dark:bg-white" />
                {capability}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </div>
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
