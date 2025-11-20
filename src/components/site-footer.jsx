"use client";

import { Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";

export default function SiteFooter({ footer = {}, navLinks = [] }) {
  const year = new Date().getFullYear();

  const studio = footer?.studio || "ARSY STUDIO";
  const tagline = footer?.tagline || "Digital Atelier";
  const description =
    footer?.description ||
    "We design and develop premium digital experiences with precision and purpose.";

  const email = footer?.contact?.email || "hello@arsy.studio";
  const phone = footer?.contact?.phone || "+62 812-0000-0000";
  const rights = footer?.rights || "All rights reserved.";
  const policies = footer?.policies || { privacy: "Privacy", terms: "Terms" };

  const primaryLinks = footer?.primaryLinks || [
    { label: "About", href: "/about" },
    { label: "Cases", href: "/cases" },
    { label: "Services", href: "/services" },
    { label: "Journal", href: "/journal" },
  ];

  const pathname = usePathname?.() || "";
  const links = navLinks?.length ? navLinks : primaryLinks;
  const isActive = (href = "") => pathname === href || (href && pathname?.startsWith(href + "/"));

  return (
    <footer className="relative bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl py-20">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-between gap-10 border-b border-white/10 pb-10 lg:flex-row">
          {/* Brand */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <div className="h-12 w-12 rounded-full bg-linear-to-br from-violet-500 via-purple-500 to-indigo-600 shadow-lg shadow-violet-500/30" />
                <div className="absolute inset-0 h-12 w-12 rounded-full bg-linear-to-br from-violet-500 to-purple-500 blur opacity-40" />
              </div>
              <div className="leading-tight">
                <span className="block text-base font-semibold tracking-[0.2em]">
                  {studio}
                </span>
                <span className="block text-[0.7rem] uppercase tracking-[0.3em] text-white/50">
                  {tagline}
                </span>
              </div>
            </div>
            <p className="max-w-md text-base font-light text-white/60 lg:max-w-sm">
              {description}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm lg:text-base text-white/70 lg:justify-end">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-colors ${
                  isActive(item.href)
                    ? "text-white"
                    : "hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                {isActive(item.href) && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500"
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact & Social */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/80">
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:border-white/20 hover:bg-white/10"
              >
                <Mail className="h-4 w-4" /> {email}
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:border-white/20 hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> {phone}
              </a>
            )}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={footer?.social?.linkedin || "#"}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-white/20 hover:bg-white/10"
            >
              <Linkedin className="h-5 w-5 text-white/70" />
            </a>
            <a
              href={footer?.social?.twitter || "#"}
              aria-label="Twitter"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-white/20 hover:bg-white/10"
            >
              <Twitter className="h-5 w-5 text-white/70" />
            </a>
            <a
              href={footer?.social?.instagram || "#"}
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-white/20 hover:bg-white/10"
            >
              <Instagram className="h-5 w-5 text-white/70" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 lg:flex-row">
          <p>
            © {year} {studio}. {rights}
          </p>
          <nav className="flex items-center gap-6 uppercase tracking-[0.25em]">
            <a
              href={footer?.policies?.privacyHref || "#privacy"}
              className="hover:text-white"
            >
              {policies?.privacy || "Privacy"}
            </a>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <a
              href={footer?.policies?.termsHref || "#terms"}
              className="hover:text-white"
            >
              {policies?.terms || "Terms"}
            </a>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <a
              href={footer?.policies?.sitemapHref || "#"}
              className="hover:text-white"
            >
              Sitemap
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
