"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function BlogList({ categories = [], posts = [] }) {
  const [selected, setSelected] = useState(categories[0]?.key ?? "all");

  const filteredPosts = useMemo(() => {
    if (selected === "all") return posts;
    return posts.filter((post) => post.category === selected);
  }, [posts, selected]);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-3 text-sm uppercase tracking-[0.3em] text-zinc-400 dark:text-white/50">
        {categories.map((category) => {
          const isActive = category.key === selected;
          return (
            <button
              key={category.key}
              type="button"
              onClick={() => setSelected(category.key)}
              className={`rounded-full px-5 py-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                isActive
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
                  : "border border-zinc-200/80 text-zinc-500 hover:border-zinc-400 dark:border-white/20 dark:text-white/60 dark:hover:border-white/40"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="space-y-16">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col gap-8 rounded-[2.5rem] border border-zinc-200/80 bg-white p-8 shadow-[0_35px_95px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:shadow-[0_45px_120px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/5 md:flex-row"
          >
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-zinc-100 dark:border-white/10 md:w-1/2">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-5 md:w-1/2">
              <div className="space-y-4 border-b border-zinc-200 pb-4 dark:border-white/10">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400 dark:text-white/50">
                  {post.meta}
                </p>
                <h3 className="text-3xl font-light text-zinc-950 dark:text-white leading-tight">
                  {post.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/40">
                  {post.categoryLabel}
                </p>
              </div>
              <p className="text-base font-light text-zinc-600 dark:text-white/60 leading-relaxed">
                {post.excerpt}
              </p>
              <button
                type="button"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900 transition hover:-translate-y-0.5 hover:border-zinc-900 dark:border-white/30 dark:text-white"
              >
                {post.cta}
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
