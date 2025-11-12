import { use } from "react";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { StudioMarquee } from "@/components/marquee";
import { ServicesSection } from "@/components/home/services";
import { CasesCarousel } from "@/components/home/cases-carousel";
import { StudioPulse } from "@/components/home/studio-pulse";
import { AboutPreview } from "@/components/home/about-preview";
import { ContactPanel } from "@/components/home/contact-panel";
import HeroSection from "@/components/home/hero";

const caseImages = {
  atlas:
    "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=900&q=80&auto=format&fit=crop",
  coast:
    "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=900&q=80&auto=format&fit=crop",
  atelier:
    "https://images.unsplash.com/photo-1642054220942-d3c7dd1466cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
};

export default function HomePage({ params }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("Home");

  const heroCopy = {
    eyebrow: t("hero.eyebrow"),
    title: t("hero.title"),
    body: t("hero.body"),
    subcopy: t("hero.subcopy"),
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
    { key: "alchemy", icon: "craft" },
    { key: "systems", icon: "spark" },
    { key: "partnership", icon: "flow" },
  ].map((card) => ({
    title: t(`services.cards.${card.key}.title`),
    body: t(`services.cards.${card.key}.body`),
    tag: t(`services.cards.${card.key}.tag`),
    detail: t(`services.cards.${card.key}.detail`),
    icon: card.icon,
  }));

  const cases = ["atlas", "coast", "atelier"].map((key) => ({
    title: t(`cases.items.${key}.title`),
    summary: t(`cases.items.${key}.summary`),
    result: t(`cases.items.${key}.result`),
    industry: t(`cases.items.${key}.industry`),
    image: caseImages[key],
  }));

  const studioHighlights = ["method", "stack", "relationship"].map((key) => ({
    title: t(`studio.highlights.${key}.title`),
    body: t(`studio.highlights.${key}.body`),
    tag: t(`studio.highlights.${key}.tag`),
  }));

  const contactReasons = ["build", "launch", "scale"].map((key) =>
    t(`contact.reasons.${key}`)
  );

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
          detail: t("studio.detail"),
        }}
        highlights={studioHighlights}
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
      <ContactPanel
        copy={{
          eyebrow: t("contact.eyebrow"),
          title: t("contact.title"),
          body: t("contact.body"),
          primaryCta: t("contact.primaryCta"),
          secondaryCta: t("contact.secondaryCta"),
          reasons: contactReasons,
          person: {
            role: t("contact.person.role"),
            name: t("contact.person.name"),
            title: t("contact.person.title"),
            email: t("contact.person.email"),
          },
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
