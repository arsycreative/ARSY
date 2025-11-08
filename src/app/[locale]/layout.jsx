import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import LocaleSwitcher from "@/components/locale-switcher";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const year = new Date().getFullYear();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-white">
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-10">
          <header className="flex items-center justify-between gap-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            <p className="text-xs">Arsy Studio</p>
            <LocaleSwitcher />
          </header>

          <main className="flex flex-1 flex-col justify-center py-16">
            {children}
          </main>

          <footer className="mt-8 text-center text-xs text-zinc-500 dark:text-zinc-400">
            &copy; {year} Arsy Studio
          </footer>
        </div>
      </div>
    </NextIntlClientProvider>
  );
}
