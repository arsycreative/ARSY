"use client";

import { useEffect, useSyncExternalStore, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { ArrowUpRight, Menu, X, Sparkles, Mail } from "lucide-react";
import LocaleSwitcher from "./locale-switcher";
import ThemeToggle from "./theme-toggle";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

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

export default function SiteHeader({ locale, navLinks = [] }) {
  const pathname = usePathname();
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
    <header className="fixed inset-x-0 top-0 z-50 px-6 lg:px-12">
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
        className={`mx-auto max-w-7xl transition-[padding] ${
          scrolled ? "pt-3" : "pt-6"
        }`}
      >
        <div
          className={`relative overflow-hidden rounded-2xl transition-colors duration-500 ${
            scrolled
              ? "backdrop-blur supports-backdrop-filter:bg-white/70 dark:supports-backdrop-filter:bg-zinc-950/70 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
              : "bg-transparent"
          }`}
        >
          <div
            className={`pointer-events-none absolute -inset-px rounded-2xl transition-opacity ${
              scrolled ? "opacity-60" : "opacity-0"
            } [mask:linear-gradient(#000,transparent_60%)]`}
            aria-hidden="true"
          >
            <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(at_10%_10%,#a78bfa,transparent_25%,#60a5fa_40%,transparent_60%,#c084fc_75%,transparent)] blur-[10px]" />
          </div>

          <div className="relative flex items-center justify-between px-4 py-3 sm:px-6 lg:px-6">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 rounded-full p-1.5"
              aria-label="Go to homepage"
            >
              <Image
                src="/logo.png"
                alt="Arsy Studio logo"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
                priority
              />
              <span
                className={`hidden text-sm font-medium sm:inline ${
                  scrolled ? "text-zinc-900 dark:text-white" : "text-white"
                }`}
              >
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
                    scrolled
                      ? isActive(item.href)
                        ? "text-zinc-950 dark:text-white"
                        : "text-zinc-700 hover:text-zinc-950 dark:text-white/70 dark:hover:text-white"
                      : isActive(item.href)
                      ? "text-white"
                      : "text-white/80 hover:text-white"
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
              <div className="flex items-center gap-2">
                <LocaleSwitcher />
                <span className="h-6 w-px bg-zinc-200 dark:bg-white/20" />
                <ThemeToggle />
              </div>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className={`rounded-full p-2 ${
                  scrolled
                    ? "text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-white/10"
                    : "text-white hover:bg-white/10"
                } lg:hidden`}
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
      <AnimatePresence>
        {open && (
          <div id="mobile-menu" className="lg:hidden">
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              className="fixed inset-x-4 top-[88px] z-50 overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/95 p-5 shadow-[0_22px_90px_rgba(15,23,42,0.2)] backdrop-blur dark:border-white/15 dark:bg-zinc-950/95"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="mb-4 flex items-center justify-between">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  aria-label="Go to homepage"
                  onClick={() => setOpen(false)}
                >
                  <Image
                    src="/logo.png"
                    alt="Arsy Studio logo"
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                    priority
                  />
                  <span className="text-sm font-medium text-zinc-900 dark:text-white">
                    Arsy Studio
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full p-2 text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="rounded-2xl bg-white/70 p-3 shadow-[0_16px_60px_rgba(15,23,42,0.08)] ring-1 ring-zinc-200/70 dark:bg-white/5 dark:ring-white/10">
                <div className="grid gap-2">
                  {navLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`group relative flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-all transform ${
                        isActive(item.href)
                          ? "bg-white/90 text-zinc-900 ring-1 ring-violet-200 shadow-[0_12px_35px_rgba(15,23,42,0.08)] scale-[1.02] dark:bg-white/10 dark:text-white dark:ring-white/20"
                          : "text-zinc-600 ring-1 ring-transparent hover:bg-white hover:text-zinc-900 hover:ring-zinc-200 hover:shadow-[0_8px_24px_rgba(15,23,42,0.05)] dark:text-white/80 dark:hover:bg-white/10 dark:hover:ring-white/15"
                      }`}
                    >
                    <span
                      className={`flex items-center gap-2 transition-transform ${
                        isActive(item.href) ? "scale-[1.05]" : ""
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-3 w-3 rounded-full transition ${
                          isActive(item.href)
                            ? "bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500 shadow-[0_0_10px_rgba(124,58,237,0.35)]"
                            : "bg-zinc-300 dark:bg-white/40"
                        }`}
                      />
                      <span>{item.label}</span>
                    </span>
                      <ArrowUpRight
                        className={`h-4 w-4 opacity-60 transition transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
                          isActive(item.href) ? "scale-110" : ""
                        }`}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
