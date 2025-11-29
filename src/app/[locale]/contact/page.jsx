import { use } from "react";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ArrowUpRight,
  MapPin,
  Mail,
  MessageCircle,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import {
  CONTACT_PHONE,
  CONTACT_WHATSAPP_LINK,
  CONTACT_EMAIL,
} from "@/lib/contact-info";
import ContactForm from "@/components/contact/contact-form";

const channelIcons = {
  email: Mail,
  whatsapp: MessageCircle,
  workshop: MapPin,
};

const SECTION_HEADING =
  "text-4xl font-light leading-tight md:text-5xl lg:text-6xl";
const SECTION_BODY = "text-lg font-light leading-relaxed md:text-xl";
const EYEBROW_TEXT = "text-xs uppercase tracking-[0.4em]";

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

  const contactInfo = {
    heading: t("contactInfo.heading"),
    addressLabel: t("contactInfo.addressLabel"),
    address: t("contactInfo.address"),
    phoneLabel: t("contactInfo.phoneLabel"),
    emailLabel: t("contactInfo.emailLabel"),
    formTitle: t("contactInfo.formTitle"),
    formBody: t("contactInfo.formBody"),
    formNote: t("contactInfo.formNote"),
    fields: {
      name: t("contactInfo.name"),
      workEmail: t("contactInfo.workEmail"),
      phone: t("contactInfo.phone"),
      company: t("contactInfo.company"),
      message: t("contactInfo.message"),
      submit: t("contactInfo.submit"),
    },
  };
  const channels = ["email", "whatsapp", "workshop"].map((key) => {
    const base = {
      icon: key,
      tag: t(`channels.items.${key}.tag`),
      title: t(`channels.items.${key}.title`),
      body: t(`channels.items.${key}.body`),
      action: t(`channels.items.${key}.action`, {
        phone: CONTACT_PHONE,
        whatsapp: CONTACT_PHONE,
      }),
      href: t(`channels.items.${key}.href`, {
        whatsappHref: CONTACT_WHATSAPP_LINK,
      }),
    };
    if (key === "whatsapp") {
      return { ...base, action: CONTACT_PHONE, href: CONTACT_WHATSAPP_LINK };
    }
    return base;
  });
  const map = {
    title: t("map.title"),
    body: t("map.body"),
    embedUrl: t("map.embedUrl"),
  };

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
            <p className={`${SECTION_BODY} text-white/70`}>{heroCopy.body}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6 dark:bg-zinc-950 lg:px-12">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[2fr_3fr]">
          <div className="space-y-6 text-zinc-900 dark:text-white">
            <div className={`${EYEBROW_TEXT} text-zinc-400 dark:text-white/60`}>
              {t("channels.eyebrow")}
            </div>
            <h2 className={`${SECTION_HEADING} text-zinc-950 dark:text-white`}>
              {t("channels.title")}
            </h2>
            <p className={`${SECTION_BODY} text-zinc-600 dark:text-white/70`}>
              {t("channels.subtitle")}
            </p>

            <div className="space-y-4">
              {channels.map((channel) => {
                const Icon = channelIcons[channel.icon] || Mail;
                const target = channel.href?.startsWith("http")
                  ? "_blank"
                  : undefined;
                const rel = target ? "noreferrer" : undefined;
                return (
                  <a
                    key={channel.title}
                    href={channel.href}
                    target={target}
                    rel={rel}
                    className="group flex items-start gap-4 rounded-2xl bg-white/80 px-5 py-4 shadow-[0_15px_50px_rgba(15,23,42,0.07)] transition hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-white hover:via-violet-50 hover:to-white dark:bg-white/5 dark:hover:from-white/10 dark:hover:via-white/5 dark:hover:to-white/10"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-zinc-950 to-zinc-800 text-white shadow-lg dark:from-white/10 dark:to-white/5">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500 dark:text-white/60">
                          {channel.tag}
                        </p>
                        <ArrowUpRight className="h-4 w-4 text-zinc-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-white/50" />
                      </div>
                      <h3 className="text-lg font-light">{channel.title}</h3>
                      <p className="text-sm text-zinc-600 dark:text-white/70">
                        {channel.body}
                      </p>
                      <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                        {channel.action}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-[0_25px_90px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/5">
            <div className="relative space-y-2 mb-6">
              {contactInfo.formTitle ? (
                <h3 className="text-3xl font-light text-zinc-950 dark:text-white sm:text-4xl">
                  {contactInfo.formTitle}
                </h3>
              ) : null}
              <p className={`${SECTION_BODY} text-zinc-600 dark:text-white/70`}>
                {contactInfo.formBody}
              </p>
            </div>
            <ContactForm
              contactInfo={contactInfo}
              placeholderPhone={CONTACT_PHONE}
              formspreeUrl="https://formspree.io/f/xgvjdrbd"
            />
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 pb-24 px-6 dark:bg-zinc-950 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/5">
            <iframe
              title="Studio map location"
              src={map.embedUrl}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
    title: t("contactTitle"),
    description: t("contactDescription"),
  };
}
