"use client";

import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export function AboutPreview({ copy, locale }) {
  return (
    <section className="py-32 px-6 lg:px-12 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative aspect-4/3 rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1600&q=90&auto=format&fit=crop"
              alt="Studio"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/50 to-transparent" />
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <div className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/40 font-light">
              {copy.eyebrow}
            </div>
            <h2 className="text-5xl font-light text-zinc-950 dark:text-white leading-tight">
              {copy.title}
            </h2>
            <p className="text-xl text-zinc-600 dark:text-white/60 font-light leading-relaxed">
              {copy.body}
            </p>
            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-medium hover:bg-zinc-800 dark:hover:bg-white/90 transition-all hover:gap-4"
            >
              {copy.cta}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
