"use client";

import { useEffect, useRef, useSyncExternalStore, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { ArrowUpRight, Menu, X, Sparkles, Mail } from "lucide-react";
import LocaleSwitcher from "./locale-switcher";
import ThemeToggle from "./theme-toggle";

const SERVER_SNAPSHOT = Object.freeze({ progress: 0, scrolled: false });
let CLIENT_SNAPSHOT = { progress: 0, scrolled: false };

function getSnapshotServer() {
  return SERVER_SNAPSHOT;
}

function getSnapshotClient() {
  return CLIENT_SNAPSHOT;
}

function useScrollProgress() {
  return useSyncExternalStore(
    (cb) => {
      let raf = 0;

      const loop = () => {
        const y = window.scrollY || 0;
        const se = document.scrollingElement || document.documentElement;
        const h = (se.scrollHeight || 0) - window.innerHeight;
        const nextProgress =
          h > 0 ? Math.min(100, Math.max(0, (y / h) * 100)) : 0;
        const nextScrolled = y > 20;

        if (
          nextProgress !== CLIENT_SNAPSHOT.progress ||
          nextScrolled !== CLIENT_SNAPSHOT.scrolled
        ) {
          CLIENT_SNAPSHOT = { progress: nextProgress, scrolled: nextScrolled };
          cb();
        }
        raf = requestAnimationFrame(loop);
      };

      raf = requestAnimationFrame(loop);

      const onResize = () => {};
      window.addEventListener("resize", onResize, { passive: true });

      return () => {
        if (raf) cancelAnimationFrame(raf);
        window.removeEventListener("resize", onResize);
      };
    },
    getSnapshotClient,
    getSnapshotServer
  );
}

export default function SiteHeader({ locale, navLinks = [], contactHref }) {
  const pathname = usePathname();
  const overlayRef = useRef(null);
  const { progress, scrolled } = useScrollProgress();
  const [open, setOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const id = requestAnimationFrame(() => {
      if (cancelled) return;
      try {
        const hide = window.localStorage.getItem("arsy.hide.announcement");
        setShowAnnouncement(!hide);
      } catch {}
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(id);
    };
  }, []);

  const isActive = (href = "") =>
    pathname === href || (href && pathname?.startsWith(href + "/"));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {showAnnouncement && (
        <div
          role="region"
          aria-label="Announcement"
          className="relative isolate"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mt-2 flex items-center justify-center gap-3 rounded-xl border border-zinc-200/40 bg-white/70 p-2.5 text-xs text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-zinc-900/70 dark:text-white/80">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              <span className="tracking-wider">
                Now booking Q1 2025 — secure your slot today
              </span>
              <button
                type="button"
                aria-label="Dismiss announcement"
                onClick={() => {
                  setShowAnnouncement(false);
                  try {
                    window.localStorage.setItem("arsy.hide.announcement", "1");
                  } catch {}
                }}
                className="ml-auto rounded-md p-1.5 hover:bg-zinc-100 dark:hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 transition-[padding] ${
          scrolled ? "pt-3" : "pt-6"
        }`}
      >
        <div
          className={`relative overflow-hidden rounded-2xl backdrop-blur supports-backdrop-filter:bg-white/70 dark:supports-backdrop-filter:bg-zinc-950/70 transition-colors duration-500 ${
            scrolled
              ? "border-zinc-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:border-white/15"
              : "border-zinc-200/40 dark:border-white/10"
          }`}
        >
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-60 [mask:linear-gradient(#000,transparent_60%)]"
            aria-hidden="true"
          >
            <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(at_10%_10%,#a78bfa,transparent_25%,#60a5fa_40%,transparent_60%,#c084fc_75%,transparent)] blur-[10px]" />
          </div>

          <div className="relative flex items-center justify-between px-4 py-3 sm:px-6">
            {/* Logo */}
            <Link
              href={`/${locale ?? ""}`}
              className="flex items-center gap-2 rounded-full p-1.5 "
              aria-label="Go to homepage"
            >
              <span className="inline-block h-8 w-8 rounded-full bg-linear-to-br from-violet-500 via-purple-500 to-indigo-600" />
              <span className="hidden text-sm font-medium sm:inline">
                Arsy Studio
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav
              aria-label="Primary"
              className="hidden items-center gap-6 lg:flex"
            >
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm transition-colors ${
                    isActive(item.href)
                      ? "text-zinc-950 dark:text-white"
                      : "text-zinc-600 hover:text-zinc-950 dark:text-white/60 dark:hover:text-white"
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

            {/* Actions */}
            <div className="flex items-center gap-2">
              <LocaleSwitcher />
              <ThemeToggle />

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-white/10 lg:hidden"
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label="Toggle menu"
              >
                {open ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Scroll progress (super realtime, no transition to keep in lockstep) */}
          <div
            className="absolute inset-x-0 bottom-0 h-0.5 overflow-hidden z-[-1]"
            aria-hidden="true"
          >
            <div
              className="h-full will-change-[width] transition-none bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Sheet */}
      {open && (
        <div id="mobile-menu" className="lg:hidden">
          <div
            ref={overlayRef}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed inset-x-4 top-[88px] z-50 rounded-2xl border border-zinc-200/60 bg-white/90 p-4 shadow-2xl backdrop-blur dark:border-white/15 dark:bg-zinc-950/90">
            <nav aria-label="Mobile Primary" className="space-y-1">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${
                    isActive(item.href)
                      ? "bg-zinc-100 text-zinc-950 dark:bg-white/10 dark:text-white"
                      : "text-zinc-700 hover:bg-zinc-100 dark:text-white/80 dark:hover:bg-white/10"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-60" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
