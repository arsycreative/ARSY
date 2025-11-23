"use client";

import { Lightbulb, Target, Compass } from "lucide-react";
import { motion } from "framer-motion";

export function PhilosophySection({ copy }) {
  const {
    eyebrow = "Our Philosophy",
    title = "Collaboration & Precision",
    subtitle =
      "We believe every outcome should balance craft and performance for the people who use it.",
    expertiseTitle = "Our Expertise",
    expertiseBody = "A few disciplines we lead every day:",
    expertiseItems = [],
    processTitle = "Our Process",
    processParagraphs = [
      "We start by listening—understanding the business and the people it serves.",
      "Teams stay connected from strategy through build so every detail feels intentional.",
    ],
  } = copy || {};

  return (
    <section className="relative py-32 px-6 lg:px-12 overflow-hidden bg-linear-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl mb-6">
            <Compass className="h-4 w-4 text-violet-500" />
            <span className="text-xs uppercase tracking-[0.4em] text-zinc-500 dark:text-white/50 font-light">
              {eyebrow}
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-zinc-950 dark:text-white mb-8 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-zinc-600 dark:text-white/60 font-light leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Left: Expertise */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-light text-zinc-950 dark:text-white mb-4">
                  {expertiseTitle}
                </h3>
                <p className="text-zinc-600 dark:text-white/60 font-light leading-relaxed mb-6">
                  {expertiseBody}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pl-16">
              {expertiseItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="group flex items-center gap-2 p-3 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-violet-300 dark:hover:border-violet-500/50 hover:bg-violet-50 dark:hover:bg-violet-500/10 transition-all"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-500 group-hover:scale-125 transition-transform" />
                  <span className="text-sm text-zinc-700 dark:text-white/70 group-hover:text-zinc-950 dark:group-hover:text-white font-light transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Process */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-linear-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-light text-zinc-950 dark:text-white mb-4">
                  {processTitle}
                </h3>
                <div className="space-y-4">
                  {processParagraphs.map((paragraph, idx) => (
                    <p
                      key={`process-${idx}`}
                      className="text-zinc-600 dark:text-white/60 font-light leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
