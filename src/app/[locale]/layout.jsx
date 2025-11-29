// app/[locale]/layout.jsx
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { AppProviders } from "@/components/providers/app-providers";
import SiteHeader from "@/components/site-header";
import { FaPhone } from "react-icons/fa6";
import SiteFooter from "@/components/site-footer";
import {
  CONTACT_PHONE,
  CONTACT_WHATSAPP_LINK,
} from "@/lib/contact-info";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Optional: base defaults to merge into the dynamic metadata
const BASE_METADATA = {
  metadataBase: new URL("https://arsy-studio.com"),
  openGraph: { siteName: "Arsy Studio", type: "website" },
  twitter: {
    card: "summary_large_image",
    site: "@arsy_studio",
    creator: "@arsy_studio",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params; // <-- no await
  if (!hasLocale(routing.locales, locale)) return {};

  const t = await getTranslations({ locale, namespace: "Metadata" });
  const title = t("title");
  const description = t("description");

  return {
    ...BASE_METADATA,
    title,
    description,
    openGraph: {
      ...BASE_METADATA.openGraph,
      title,
      description,
      url: `/${locale}`,
      locale,
      images: [
        {
          url: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=1200",
          width: 1200,
          height: 630,
          alt: "Arsy Studio bespoke web build",
        },
      ],
    },
    twitter: {
      ...BASE_METADATA.twitter,
      title,
      description,
    },
    alternates: {
      languages: { en: "/en", id: "/id" },
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const [messages, navigationCopy, footerCopy] = await Promise.all([
    getMessages(),
    getTranslations({ locale, namespace: "Navigation" }),
    getTranslations({ locale, namespace: "Footer" }),
  ]);

  const navLinks = [
    { label: navigationCopy("home"), href: "/" },
    { label: navigationCopy("about"), href: "/about" },
    { label: navigationCopy("services"), href: "/services" },
    { label: navigationCopy("portfolio"), href: "/portfolio" },
    { label: navigationCopy("blog"), href: "/blog" },
    { label: navigationCopy("contact"), href: "/contact" },
  ];

  const footer = {
    tagline: footerCopy("tagline"),
    studio: footerCopy("studio"),
    description: footerCopy("description"),
    actions: {
      primary: {
        label: footerCopy("actions.primary"),
        href: `mailto:${footerCopy("contact.email")}`,
      },
      secondary: {
        label: footerCopy("actions.secondary"),
        href: `/${locale}/about`,
      },
    },
    contact: {
      title: footerCopy("contact.title"),
      email: footerCopy("contact.email"),
      phone: CONTACT_PHONE,
      address: footerCopy("contact.address"),
    },
    rights: footerCopy("rights"),
    policies: {
      privacy: footerCopy("policies.privacy"),
      terms: footerCopy("policies.terms"),
    },
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <AppProviders>
        <div className="relative overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
          <div className="pointer-events-none fixed inset-0 opacity-50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.02),transparent_70%)] dark:bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.03),transparent_70%)]" />
          </div>
          <div className="relative z-10 flex min-h-screen flex-col">
            <SiteHeader locale={locale} navLinks={navLinks} />
            <main className="flex-1">{children}</main>
            <SiteFooter footer={footer} navLinks={navLinks} />
            <a
              href={CONTACT_WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#32d951] text-white shadow-[0_15px_45px_rgba(50,217,81,0.35)] transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label="Chat on WhatsApp"
            >
              <FaPhone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </AppProviders>
    </NextIntlClientProvider>
  );
}
