"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function CasesCarousel({ copy, cases }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-32 px-6 lg:px-12 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
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

        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20 transition-all hover:shadow-2xl"
              onMouseEnter={() => setActiveIndex(idx)}
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={false}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] bg-white/90 backdrop-blur-xl text-zinc-950 font-medium">
                    {item.industry}
                  </span>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-light text-zinc-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-white/60 font-light leading-relaxed">
                  {item.summary}
                </p>
                <div className="pt-4 border-t border-zinc-100 dark:border-white/10">
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-3">
                    {item.result}
                  </p>
                  <button className="inline-flex items-center gap-2 text-sm text-zinc-950 dark:text-white font-medium group-hover:gap-3 transition-all">
                    {copy.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
