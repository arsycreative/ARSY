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

const channelIcons = {
  email: Mail,
  whatsapp: MessageCircle,
  workshop: CalendarClock,
};

export default function ContactPage({ params }) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("ContactPage");

  const heroCopy = {
    eyebrow: t("hero.eyebrow"),
    title: t("hero.title"),
    body: t("hero.body"),
    detail: t("hero.detail"),
    primaryCta: t("hero.primaryCta"),
    secondaryCta: t("hero.secondaryCta"),
    primaryHref: t("hero.primaryHref"),
    secondaryHref: t("hero.secondaryHref"),
    directLabel: t("hero.directLabel"),
    cardSubcopy: t("hero.cardSubcopy"),
    highlights: ["response", "timezone"].map((key) => ({
      label: t(`hero.highlights.${key}.label`),
      value: t(`hero.highlights.${key}.value`),
    })),
  };

  const heroPrimaryExternal = heroCopy.primaryHref.startsWith("http");
  const heroSecondaryExternal = heroCopy.secondaryHref.startsWith("http");

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
      <section className="relative overflow-hidden py-32 px-6 lg:px-12 text-white">
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
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/60">
                <Sparkles className="h-3 w-3 text-violet-400" />
                {heroCopy.eyebrow}
              </div>
              <div className="space-y-6">
                <h1 className="text-5xl font-light leading-tight text-white lg:text-6xl">
                  {heroCopy.title}
                </h1>
                <p className="text-xl font-light leading-relaxed text-white/70">
                  {heroCopy.body}
                </p>
                <p className="text-sm font-light text-white/50">
                  {heroCopy.detail}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
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
                <a
                  href={heroCopy.secondaryHref}
                  target={heroSecondaryExternal ? "_blank" : undefined}
                  rel={heroSecondaryExternal ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" />
                  {heroCopy.secondaryCta}
                </a>
              </div>
            </div>

            <div className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-3xl">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  {heroCopy.directLabel}
                </p>
                <p className="text-3xl font-light text-white">
                  {directEmail}
                </p>
                <p className="text-white/60">{heroCopy.cardSubcopy}</p>
              </div>
              <div className="h-px bg-white/10" />
              <div className="space-y-4">
                {heroCopy.highlights.map((item, idx) => (
                  <div
                    key={idx}
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

      <section className="bg-white py-24 px-6 dark:bg-zinc-950 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/40">
              {t("channels.eyebrow")}
            </p>
            <h2 className="text-4xl font-light text-zinc-950 dark:text-white">
              {t("channels.title")}
            </h2>
            <p className="text-lg font-light text-zinc-500 dark:text-white/60">
              {t("channels.subtitle")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {channels.map((channel) => {
              const Icon = channelIcons[channel.icon] || Mail;
              const target = channel.href.startsWith("http") ? "_blank" : undefined;
              const rel = target ? "noreferrer" : undefined;

              return (
                <a
                  key={channel.title}
                  href={channel.href}
                  target={target}
                  rel={rel}
                  className="group flex h-full flex-col gap-6 rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-zinc-400 dark:text-white/40">
                    <span>{channel.tag}</span>
                    <ArrowUpRight className="h-4 w-4 text-zinc-300 transition group-hover:text-zinc-500 dark:text-white/40" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-linear-to-br from-zinc-950 to-zinc-800 p-4 text-white dark:from-white/10 dark:to-white/5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-zinc-900 dark:text-white">
                        {channel.title}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-white/60">
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

      <section className="relative overflow-hidden py-24 px-6 text-white lg:px-12">
        <div
          className="absolute inset-0 bg-linear-to-br from-zinc-950 via-zinc-900 to-black"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                {availability.eyebrow}
              </p>
              <h2 className="text-4xl font-light leading-snug">
                {availability.title}
              </h2>
              <p className="text-lg font-light text-white/70">
                {availability.body}
              </p>
              <p className="text-sm text-white/50">{availability.detail}</p>
            </div>
            <div className="space-y-4">
              {availability.slots.map((slot) => (
                <div
                  key={slot.label}
                  className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-6 py-5"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                      {slot.label}
                    </p>
                    <p className="text-xl font-light text-white">
                      {slot.value}
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full border border-white/20 text-white/70">
                    <CalendarClock className="h-10 w-10 p-2" />
                  </div>
                </div>
              ))}
            </div>
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
