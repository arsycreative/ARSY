import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://arsy-studio.com"),
  title: {
    default: "Arsy Studio — Digital agency for meticulous founders",
    template: "%s — Arsy Studio",
  },
  description:
    "Arsy Studio partners with modern brands to design, engineer, and launch elevated web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} min-h-screen antialiased`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
