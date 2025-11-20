"use client";

import { ArrowUpRight, Quote, Sparkles } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

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
        <motion.div
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={32}
          centeredSlides
          grabCursor
          loop={false}
          initialSlide={0}
          rewind
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          breakpoints={{
            1024: { slidesPerView: 1.35, spaceBetween: 48 },
          }}
          className="overflow-visible!"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={`${item.author}-${index}`}>
              <article className="group relative flex h-full flex-col gap-8 overflow-hidden rounded-[36px] border border-white/10 bg-white/5 px-6 py-10 shadow-[0_45px_140px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-transform duration-500 hover:-translate-y-1 sm:px-12 sm:py-14">
                <div className="pointer-events-none absolute inset-0 rounded-[36px] border border-white/10" />
                <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.14),transparent_55%),radial-gradient(circle_at_90%_20%,rgba(255,255,255,0.10),transparent_50%)] opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="pointer-events-none absolute -right-16 top-10 h-52 w-52 rounded-full bg-white/10 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />
                <div className="relative flex flex-col gap-6">
                  <Quote className="h-10 w-10 text-white/30 transition-colors duration-500 group-hover:text-violet-400" />
                  <p className="text-xl font-light leading-relaxed text-white/90 sm:text-2xl">
                    {item.quote}
                  </p>
                  <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                      <p className="text-base font-medium tracking-wide text-white">
                        {item.author}
                      </p>
                      <p className="text-white/60">{item.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
