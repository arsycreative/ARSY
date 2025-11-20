import { use } from "react";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { StudioMarquee } from "@/components/marquee";
import { ServicesSection } from "@/components/home/services";
import { CasesCarousel } from "@/components/home/cases-carousel";
import { StudioPulse } from "@/components/home/studio-pulse";
import { AboutPreview } from "@/components/home/about-preview";
import { TestimonialSection } from "@/components/home/testimonial-section";
import { TechStackSection } from "@/components/home/tech-stack";
import HeroSection from "@/components/home/hero";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import ManifestoSection from "@/components/home/ManifestoSection";

const caseImages = {
  atlas:
    "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1200&q=80&auto=format&fit=crop",
  coast:
    "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=1200&q=80&auto=format&fit=crop",
  atelier:
    "https://images.unsplash.com/photo-1642054220942-d3c7dd1466cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
  solstice:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop",
  noir: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80&auto=format&fit=crop",
};

export default function HomePage({ params }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("Home");

  const heroCopy = {
    eyebrow: t("hero.eyebrow"),
    title: t("hero.title"),
    body: t("hero.body"),
    primaryCta: t("hero.primaryCta"),
    secondaryCta: t("hero.secondaryCta"),
    caption: t("hero.caption"),
    captionBody: t("hero.captionBody"),
    lottieLabel: t("hero.lottieLabel"),
  };

  const heroMetrics = ["partners", "conversion", "timeline"].map((key) => ({
    label: t(`hero.metrics.${key}.label`),
    value: t(`hero.metrics.${key}.value`),
  }));

  const marqueePhrases = ["one", "two", "three", "four"].map((key) =>
    t(`hero.marquee.${key}`)
  );

  const servicesCards = [
    { key: "web", icon: "web" },
    { key: "mobile", icon: "mobile" },
    { key: "brand", icon: "brand" },
  ].map((card) => ({
    title: t(`services.cards.${card.key}.title`),
    body: t(`services.cards.${card.key}.body`),
    tag: t(`services.cards.${card.key}.tag`),
    detail: t(`services.cards.${card.key}.detail`),
    icon: card.icon,
  }));

  const cases = ["atlas", "coast", "atelier", "solstice", "noir"].map(
    (key) => ({
      title: t(`cases.items.${key}.title`),
      summary: t(`cases.items.${key}.summary`),
      result: t(`cases.items.${key}.result`),
      industry: t(`cases.items.${key}.industry`),
      image: caseImages[key],
    })
  );

  const studioHighlights = ["planning", "design", "launch"].map((key) => ({
    title: t(`studio.highlights.${key}.title`),
    body: t(`studio.highlights.${key}.body`),
    tag: t(`studio.highlights.${key}.tag`),
  }));

  const testimonials = ["lumina", "seraya", "noir"].map((key) => ({
    company: t(`testimonials.items.${key}.company`),
    quote: t(`testimonials.items.${key}.quote`),
    author: t(`testimonials.items.${key}.author`),
    role: t(`testimonials.items.${key}.role`),
    metricLabel: t(`testimonials.items.${key}.metricLabel`),
    metricValue: t(`testimonials.items.${key}.metricValue`),
  }));

  const manifestoTitle = <>{t("manifesto.title.primary")}</>;

  const manifestoPrinciples = ["clarity", "design", "strategy"].map((key) =>
    t(`manifesto.principles.${key}`)
  );

  const manifestoLocations = ["jakarta", "singapore", "remote"].map((key) =>
    t(`manifesto.meta.locations.${key}`)
  );

  const techItems = [
    { name: "Next.js", icon: "next" },
    { name: "React", icon: "react" },
    { name: "AWS", icon: "aws" },
    { name: "Supabase", icon: "supabase" },
    { name: "MySQL", icon: "mysql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Docker", icon: "docker" },
    { name: "Contentful", icon: "contentful" },
    { name: "Sanity", icon: "sanity" },
    { name: "Vercel", icon: "vercel" },
    { name: "Prisma", icon: "prisma" },
    { name: "GraphQL", icon: "graphql" },
    { name: "Figma", icon: "figma" },
    { name: "After Effects", icon: "aftereffects" },
    { name: "Notion", icon: "notion" },
  ];

  return (
    <>
      <HeroSection copy={heroCopy} metrics={heroMetrics} />
      <div className="mt-10">
        <StudioMarquee phrases={marqueePhrases} />
      </div>
      <ServicesSection
        copy={{
          eyebrow: t("services.eyebrow"),
          title: t("services.title"),
          body: t("services.body"),
        }}
        cards={servicesCards}
      />
      <CasesCarousel
        copy={{
          eyebrow: t("cases.eyebrow"),
          title: t("cases.title"),
          body: t("cases.body"),
          cta: t("cases.cta"),
        }}
        cases={cases}
      />
      <StudioPulse
        copy={{
          eyebrow: t("studio.eyebrow"),
          title: t("studio.title"),
          body: t("studio.body"),
        }}
        highlights={studioHighlights}
      />
      <TechStackSection
        copy={{
          eyebrow: t("techStack.eyebrow"),
          title: t("techStack.title"),
        }}
        items={techItems}
      />
      <AboutPreview
        locale={locale}
        copy={{
          eyebrow: t("aboutPreview.eyebrow"),
          title: t("aboutPreview.title"),
          body: t("aboutPreview.body"),
          cta: t("aboutPreview.cta"),
        }}
      />

      <PhilosophySection
        copy={{
          eyebrow: "Our Philosophy",
          title: "Collaboration & Precision",
          subtitle:
            "Kami percaya hasil terbaik lahir dari kolaborasi dan perhatian pada detail.",
          expertiseTitle: "Keahlian Kami",
          processTitle: "Proses Kami",
        }}
      />

      <TestimonialSection
        copy={{
          eyebrow: t("testimonials.eyebrow"),
          title: t("testimonials.title"),
          cta: t("testimonials.cta"),
          ctaHref: "/contact",
        }}
        testimonials={testimonials}
      />

      <ManifestoSection
        copy={{
          eyebrow: t("manifesto.eyebrow"),
          title: manifestoTitle,
          lead: t("manifesto.lead"),
          principles: manifestoPrinciples,
          ctaTitle: t("manifesto.ctaTitle"),
          ctaBody: t("manifesto.ctaBody"),
          primaryCta: t("manifesto.primaryCta"),
          secondaryCta: t("manifesto.secondaryCta"),
          principleLabel: t("manifesto.principleLabel"),
          metaStatement: t("manifesto.meta.statement"),
          metaLocations: manifestoLocations,
        }}
      />
    </>
  );
}
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}
