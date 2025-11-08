import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "id"],

  // Used when no locale matches
  defaultLocale: "en",
});
