"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

const ACCENT = "from-violet-500 via-purple-500 to-indigo-600";

export default function ManifestoSection({ copy = {} }) {
  const {
    eyebrow = "Manifesto",
    title = (
      <>
        Setiap solusi digital kami
        <span className="block mt-3 bg-linear-to-r from-violet-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
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
    secondaryCta = "Lihat Layanan",
    principleLabel = "Principle",
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
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24">
        {/* Eyebrow */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <span className="relative inline-grid h-2 w-2 place-items-center">
              <span className="absolute h-2 w-2 rounded-full bg-violet-400/40" />
              <span className="relative h-2 w-2 rounded-full bg-violet-600" />
            </span>
            <span className="text-[11px] uppercase tracking-[0.35em] text-zinc-600 dark:text-white/60">
              {eyebrow}
            </span>
          </div>
        </motion.div>

        {/* Heading + Lead */}
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            id="manifesto-heading"
            className="text-4xl leading-tight font-light sm:text-5xl lg:text-6xl"
          >
            {title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-white/70">
            {lead}
          </p>
        </motion.div>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-linear-to-r from-transparent via-zinc-200 to-transparent dark:via-white/10" />

        {/* Principles */}
        <div className="grid gap-6 lg:grid-cols-3">
          {principles.map((line, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl border border-zinc-200 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-zinc-50 ring-1 ring-zinc-200 dark:bg-white/10 dark:ring-white/10">
                  <span className="block h-1.5 w-1.5 rounded-full bg-violet-500" />
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-zinc-500 dark:text-white/50">
                  {principleLabel} {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-lg leading-relaxed text-zinc-700 dark:text-white/80">
                {line}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="relative mt-16 overflow-hidden rounded-2xl border border-zinc-200 bg-linear-to-r from-zinc-950 via-zinc-900 to-zinc-800 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.25)] sm:p-8 dark:border-white/10"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_55%)] opacity-70" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="text-[11px] uppercase tracking-[0.3em] text-white/60">
                {ctaTitle}
              </div>
              <div className="mt-2 text-2xl font-light leading-snug text-white sm:text-3xl">
                {ctaBody}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#contact"
                className={`group inline-flex items-center gap-3 rounded-full border border-white/20 bg-linear-to-r ${ACCENT} px-7 py-3 text-sm font-medium text-white shadow-[0_18px_45px_rgba(124,58,237,.35)] transition-transform hover:scale-[1.02]`}
                aria-label={primaryCta}
              >
                {primaryCta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/20"
                aria-label={secondaryCta}
              >
                {secondaryCta}
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
