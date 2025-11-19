"use client";

import { ArrowUpRight, Quote, Sparkles } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function TestimonialSection({ copy = {}, testimonials = [] }) {
  if (!testimonials.length) return null;

  const ctaHref = copy.ctaHref || "/contact";

  return (
    <section className="relative overflow-hidden py-32 px-6 text-white lg:px-12">
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-zinc-950 via-zinc-900 to-black"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl space-y-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/60">
              <Sparkles className="h-3 w-3 text-violet-300" />
              {copy.eyebrow}
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
                {copy.title}
              </h2>
            </div>
          </div>
          {copy.cta && (
            <Link
              href={ctaHref}
              className="group inline-flex items-center gap-3 self-start rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-900 transition hover:scale-[1.02]"
            >
              {copy.cta}
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={24}
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 1.5, spaceBetween: 32 },
          }}
          className="overflow-visible!"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={`${item.company}-${index}`}>
              <article className="relative h-full rounded-4xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl transition hover:border-white/20">
                <Quote className="mt-6 h-10 w-10 text-violet-300" />
                <p className="mt-6 text-2xl font-light leading-tight text-white">
                  {item.quote}
                </p>
                <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-6 text-sm text-white/70">
                  <div>
                    <p className="text-base font-semibold text-white">
                      {item.author}
                    </p>
                    <p className="text-white/60">{item.role}</p>
                  </div>
                  <span className="rounded-full border border-white/15 px-4 py-1 text-[11px] uppercase tracking-[0.4em] text-white/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
