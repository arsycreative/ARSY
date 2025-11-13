"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

export function PortfolioGrid({ filters = [], projects = [], emptyLabel }) {
  const [selected, setSelected] = useState(filters[0]?.key ?? "all");

  const visibleProjects = useMemo(() => {
    if (selected === "all") return projects;
    return projects.filter((project) => project.category === selected);
  }, [projects, selected]);

  return (
    <div className="space-y-12">
      <LayoutGroup>
        <div className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.3em] text-zinc-400 dark:text-white/40">
          {filters.map((filter) => {
            const isActive = selected === filter.key;
            return (
              <motion.button
                key={filter.key}
                type="button"
                onClick={() => setSelected(filter.key)}
                className="relative overflow-hidden rounded-full px-5 py-2 focus:outline-none"
                whileTap={{ scale: 0.97 }}
              >
                {isActive && (
                  <motion.span
                    layoutId="portfolio-filter-pill"
                    className="absolute inset-0 rounded-full bg-zinc-900 dark:bg-white"
                    transition={{ type: "spring", stiffness: 450, damping: 40 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    isActive
                      ? "text-white dark:text-zinc-950"
                      : "border border-zinc-200/80 text-zinc-500 dark:border-white/20 dark:text-white/60"
                  }`}
                >
                  {filter.label}
                </span>
                {!isActive && (
                  <span className="absolute inset-0 rounded-full border border-zinc-200/80 dark:border-white/20" />
                )}
              </motion.button>
            );
          })}
        </div>
      </LayoutGroup>

      <div className="grid gap-8 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.div
              key={project.key}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.25, 0.8, 0.25, 1] }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.05)] transition-colors dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-zinc-100 dark:border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 dark:text-white/50">
                  {project.tag}
                </p>
                <h3 className="text-3xl font-light text-zinc-950 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-base font-light text-zinc-600 dark:text-white/60 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-900/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900 transition hover:-translate-y-0.5 hover:border-zinc-900 dark:border-white/30 dark:text-white"
                  >
                    {project.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          {visibleProjects.length === 0 && (
            <motion.div
              key="empty"
              className="col-span-full rounded-3xl border border-dashed border-zinc-200/70 p-12 text-center text-zinc-500 dark:border-white/20 dark:text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {emptyLabel}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
