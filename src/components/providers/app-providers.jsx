"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Theme as RadixTheme } from "@radix-ui/themes";
import { LenisProvider } from "./lenis-provider";
import { PageTransition } from "./page-transition";

export function AppProviders({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <RadixTheme accentColor="iris" grayColor="slate" radius="large">
        <LenisProvider>
          <PageTransition>{children}</PageTransition>
        </LenisProvider>
      </RadixTheme>
    </NextThemesProvider>
  );
}
