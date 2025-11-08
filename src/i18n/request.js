import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

async function loadMessages(locale) {
  switch (locale) {
    case "en":
      return (await import("@/messages/en.json")).default;
    case "id":
      return (await import("@/messages/id.json")).default;
    default:
      return (await import("@/messages/en.json")).default;
  }
}

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: await loadMessages(locale),
  };
});
