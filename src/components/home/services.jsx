"use client";

import { Code2, Sparkles, Workflow } from "lucide-react";

const iconMap = {
  craft: Code2,
  spark: Sparkles,
  flow: Workflow,
};

export function ServicesSection({ copy, cards }) {
  return (
    <section className="py-32 px-6 lg:px-12 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <div className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/40 mb-4 font-light">
            {copy.eyebrow}
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-zinc-950 dark:text-white mb-6 leading-tight">
            {copy.title}
          </h2>
          <p className="text-xl text-zinc-600 dark:text-white/60 font-light leading-relaxed">
            {copy.body}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = iconMap[card.icon] || Code2;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl border border-zinc-200 dark:border-white/10 bg-linear-to-br from-zinc-50 to-white dark:from-white/5 dark:to-white/2 hover:border-zinc-300 dark:hover:border-white/20 transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-linear-to-br from-violet-500/0 to-purple-500/0 group-hover:from-violet-500/5 group-hover:to-purple-500/5 rounded-3xl transition-all" />

                <div className="relative space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="h-14 w-14 rounded-2xl bg-linear-to-br from-zinc-950 to-zinc-800 dark:from-white/10 dark:to-white/5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-white dark:text-white/80" />
                    </div>
                    <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 dark:text-white/40 font-light">
                      {card.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-light text-zinc-950 dark:text-white mb-3">
                      {card.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-white/60 font-light leading-relaxed">
                      {card.body}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-100 dark:border-white/10">
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 dark:text-white/40">
                      {card.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
