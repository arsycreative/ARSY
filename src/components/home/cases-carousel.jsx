"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function CasesCarousel({ copy, cases }) {
  const layoutMap = [
    "lg:col-span-7 lg:min-h-[520px]",
    "lg:col-span-5 lg:min-h-[360px]",
    "lg:col-span-4 lg:min-h-[340px]",
    "lg:col-span-4 lg:min-h-[340px]",
    "lg:col-span-4 lg:min-h-[460px]",
  ];

  return (
    <section className="bg-zinc-50 py-32 px-6 dark:bg-zinc-900 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 text-xs font-light uppercase tracking-[0.4em] text-zinc-400 dark:text-white/40">
            {copy.eyebrow}
          </div>
          <h2 className="mb-6 text-5xl font-light leading-tight text-zinc-950 dark:text-white lg:text-6xl">
            {copy.title}
          </h2>
          <p className="text-xl font-light leading-relaxed text-zinc-600 dark:text-white/60">
            {copy.body}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {cases.map((item, idx) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-4xl border border-zinc-200 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-zinc-300 focus-within:-translate-y-1 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_25px_60px_rgba(0,0,0,0.45)] ${
                layoutMap[idx] || "lg:col-span-4 lg:row-span-1 lg:min-h-[300px]"
              }`}
              tabIndex={0}
            >
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-1200 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-b from-zinc-900/10 via-zinc-950/50 to-black/80 opacity-70 transition group-hover:opacity-90" />
              </div>

              <div className="relative flex h-full flex-col justify-end p-8">
                <h3 className="mt-4 text-3xl font-light text-white opacity-0 translate-y-2 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.title}
                </h3>
                <div className="mt-4 max-w-xl">
                  <p className="text-base leading-relaxed text-white/70 opacity-0 transition duration-500 group-hover:opacity-100 group-focus-within:opacity-100">
                    {item.summary}
                  </p>
                </div>
                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.3em] text-white/70 transition hover:text-white focus:outline-none focus-visible:text-white"
                >
                  {copy.cta}
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
