import { use } from "react";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ArrowUpRight,
  CalendarClock,
  Mail,
  MessageCircle,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { ContactPanel } from "@/components/home/contact-panel";
import Image from "next/image";

const channelIcons = {
  email: Mail,
  whatsapp: MessageCircle,
  workshop: CalendarClock,
};

const SECTION_HEADING =
  "text-4xl font-light leading-tight md:text-5xl lg:text-6xl";
const SECTION_BODY = "text-lg font-light leading-relaxed md:text-xl";
const EYEBROW_TEXT = "text-xs uppercase tracking-[0.4em]";
const CARD_TAG = "text-xs uppercase tracking-[0.3em]";
const CARD_TITLE = "text-xl font-light md:text-2xl";
const CARD_BODY = "text-sm font-light leading-relaxed";

export default function ContactPage({ params }) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("ContactPage");

  const heroCopy = {
    eyebrow: t("hero.eyebrow"),
    title: t("hero.title"),
    body: t("hero.body"),
    detail: t("hero.detail"),
    image: t("hero.image"),
    primaryCta: t("hero.primaryCta"),
    primaryHref: t("hero.primaryHref"),
    directLabel: t("hero.directLabel"),
    cardSubcopy: t("hero.cardSubcopy"),
    highlights: ["response", "timezone"].map((key) => ({
      label: t(`hero.highlights.${key}.label`),
      value: t(`hero.highlights.${key}.value`),
    })),
  };

  const heroPrimaryExternal = heroCopy.primaryHref.startsWith("http");

  const channels = ["email", "whatsapp", "workshop"].map((key) => ({
    icon: key,
    tag: t(`channels.items.${key}.tag`),
    title: t(`channels.items.${key}.title`),
    body: t(`channels.items.${key}.body`),
    action: t(`channels.items.${key}.action`),
    href: t(`channels.items.${key}.href`),
  }));

  const availability = {
    eyebrow: t("availability.eyebrow"),
    title: t("availability.title"),
    body: t("availability.body"),
    detail: t("availability.detail"),
    slots: ["builds", "partnerships", "audits"].map((key) => ({
      label: t(`availability.slots.${key}.label`),
      value: t(`availability.slots.${key}.value`),
    })),
  };

  const panelCopy = {
    eyebrow: t("panel.eyebrow"),
    title: t("panel.title"),
    body: t("panel.body"),
    primaryCta: t("panel.primaryCta"),
    secondaryCta: t("panel.secondaryCta"),
    reasons: ["build", "refresh", "partner"].map((key) =>
      t(`panel.reasons.${key}`)
    ),
    person: {
      role: t("panel.person.role"),
      name: t("panel.person.name"),
      title: t("panel.person.title"),
      email: t("panel.person.email"),
    },
  };

  const directEmail = panelCopy.person?.email || "hello@arsystudio.com";

  return (
    <>
      <section className="relative overflow-hidden bg-zinc-950 text-white px-6 lg:px-12">
        <div className="absolute inset-0">
          {heroCopy.image ? (
            <>
              <Image
                src={heroCopy.image}
                alt={heroCopy.title}
                fill
                className="object-cover opacity-70"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-linear-to-br from-zinc-950 via-zinc-900 to-black" />
          )}
        </div>
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-0 py-20">
          <div className="space-y-8 max-w-3xl">
            <div
              className={`inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 ${EYEBROW_TEXT} text-white/70`}
            >
              <Sparkles className="h-3 w-3" />
              {heroCopy.eyebrow}
            </div>
            <h1 className={`${SECTION_HEADING} text-white`}>
              {heroCopy.title}
            </h1>
            <p className={`${SECTION_BODY} text-white/70`}>
              {heroCopy.body}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={heroCopy.primaryHref}
              target={heroPrimaryExternal ? "_blank" : undefined}
              rel={heroPrimaryExternal ? "noreferrer" : undefined}
              className="group relative inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900 transition-transform hover:scale-[1.02]"
            >
              <PhoneCall className="h-4 w-4" />
              {heroCopy.primaryCta}
              <span className="absolute inset-0 -z-10 rounded-full bg-linear-to-r from-violet-100 to-white opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6 dark:bg-zinc-950 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-4">
            <p
              className={`${EYEBROW_TEXT} text-zinc-400 dark:text-white/40`}
            >
              {t("channels.eyebrow")}
            </p>
            <h2
              className={`${SECTION_HEADING} text-zinc-950 dark:text-white`}
            >
              {t("channels.title")}
            </h2>
            <p
              className={`${SECTION_BODY} text-zinc-500 dark:text-white/60`}
            >
              {t("channels.subtitle")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {channels.map((channel) => {
              const Icon = channelIcons[channel.icon] || Mail;
              const target = channel.href.startsWith("http")
                ? "_blank"
                : undefined;
              const rel = target ? "noreferrer" : undefined;

              return (
                <a
                  key={channel.title}
                  href={channel.href}
                  target={target}
                  rel={rel}
                  className="group flex h-full flex-col gap-6 rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
                >
                  <div
                    className={`flex items-center justify-between ${CARD_TAG} text-zinc-400 dark:text-white/40`}
                  >
                    <span>{channel.tag}</span>
                    <ArrowUpRight className="h-4 w-4 text-zinc-300 transition group-hover:text-zinc-500 dark:text-white/40" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-linear-to-br from-zinc-950 to-zinc-800 p-4 text-white dark:from-white/10 dark:to-white/5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3
                        className={`${CARD_TITLE} text-zinc-900 dark:text-white`}
                      >
                        {channel.title}
                      </h3>
                      <p className={`${CARD_BODY} text-zinc-500 dark:text-white/60`}>
                        {channel.body}
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto text-sm font-semibold text-zinc-900 transition group-hover:text-violet-500 dark:text-white">
                    {channel.action}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <ContactPanel copy={panelCopy} />
    </>
  );
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
  };
}
