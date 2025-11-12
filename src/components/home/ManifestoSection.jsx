"use client";

import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

const ACCENT = "from-violet-500 via-purple-500 to-indigo-600";

export default function ManifestoSection({ copy = {} }) {
  const {
    eyebrow = "Manifesto",
    title = (
      <>
        Setiap solusi digital kami
        <span className="block mt-3 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
          harus berkelas, efektif, dan bernilai jangka panjang.
        </span>
      </>
    ),
    lead = "Kami memilih kualitas di atas kuantitas. Proyek yang kami ambil akan dirawat hingga halus dan presisi.",
    principles = [
      "Kejelasan mendahului kecepatan.",
      "Desain memandu perilaku, bukan sekadar dekor.",
      "Teknologi mengikuti strategi—bukan sebaliknya.",
    ],
    ctaTitle = "Siap membangun sesuatu yang bertahan?",
    ctaBody = "Mari wujudkan produk yang rapi, konsisten, dan menyatu dengan brand Anda.",
    primaryCta = "Mulai Diskusi",
  } = copy;

  return (
    <section
      className="relative overflow-hidden bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white"
      aria-labelledby="manifesto-heading"
    >
      {/* Dekorasi lembut (light & dark) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.10]"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 0%, rgba(124,58,237,.20), transparent 60%), radial-gradient(40% 35% at 0% 100%, rgba(59,130,246,.10), transparent 60%)",
        }}
      />
      {/* Hairline grid (light/dark) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />

      <div className="relative mx-auto max-w-7xl py-24 ">
        {/* Eyebrow */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <span className="relative inline-grid h-2 w-2 place-items-center">
              <span className="absolute h-2 w-2 rounded-full bg-violet-500/80 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-violet-600" />
            </span>
            <span className="text-[11px] uppercase tracking-[0.35em] text-zinc-600 dark:text-white/60">
              {eyebrow}
            </span>
          </div>
        </div>

        {/* Heading + Lead */}
        <div className="max-w-4xl">
          <h2
            id="manifesto-heading"
            className="text-4xl leading-tight font-light sm:text-5xl lg:text-6xl"
          >
            {title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-white/70">
            {lead}
          </p>
        </div>

        {/* Divider */}
        <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-white/10" />

        {/* Principles */}
        <div className="grid gap-6 lg:grid-cols-3">
          {principles.map((line, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-zinc-200 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-zinc-50 ring-1 ring-zinc-200 dark:bg-white/10 dark:ring-white/10">
                  <span className="block h-1.5 w-1.5 rounded-full bg-violet-500" />
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-zinc-500 dark:text-white/50">
                  Principle {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-lg leading-relaxed text-zinc-700 dark:text-white/80">
                {line}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-zinc-200 bg-white/80 p-6 sm:p-8 backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 dark:text-white/50">
                {ctaTitle}
              </div>
              <div className="mt-2 text-2xl font-light leading-snug sm:text-3xl text-zinc-900 dark:text-white">
                {ctaBody}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#contact"
                className={`group inline-flex items-center gap-3 rounded-full border border-zinc-300 bg-gradient-to-r ${ACCENT} px-7 py-3 text-sm font-medium text-white shadow-[0_18px_45px_rgba(124,58,237,.25)] transition-transform hover:scale-[1.02] dark:border-transparent`}
                aria-label="Mulai Diskusi"
              >
                {primaryCta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-7 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                aria-label="Lihat Layanan"
              >
                Lihat Layanan
              </Link>
            </div>
          </div>
        </div>

        {/* Meta row (opsional) */}
        <div className="mt-20 pt-8 border-t border-zinc-200 text-sm text-zinc-500 dark:border-white/10 dark:text-white/50">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p>Kualitas &gt; Kuantitas • Focused capacity</p>
            <div className="flex items-center gap-6">
              <span>Jakarta</span>
              <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-white/30" />
              <span>Singapore</span>
              <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-white/30" />
              <span>Remote-first</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
