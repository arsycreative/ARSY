"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MessageCircle, Sparkles } from "lucide-react";

export function ContactPanel({ copy }) {
  const [hoveredReason, setHoveredReason] = useState(null);

  return (
    <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
      {/* Dramatic gradient background */}
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-zinc-950 via-zinc-900 to-black"
        aria-hidden="true"
      />

      {/* Animated orbs */}
      <div
        className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"
        aria-hidden="true"
      />

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-16 lg:gap-24">
          {/* Left Column - Main CTA */}
          <div className="space-y-10">
            {/* Eyebrow with icon */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
              <Sparkles className="h-3 w-3 text-violet-400" />
              <span className="text-xs uppercase tracking-[0.4em] text-white/60 font-light">
                {copy.eyebrow}
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1]">
                {copy.title}
              </h2>
              <p className="text-xl lg:text-2xl text-white/60 font-light leading-relaxed max-w-2xl">
                {copy.body}
              </p>
            </div>

            {/* Interactive reasons list */}
            <div className="space-y-4 pt-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/40 font-light mb-6">
                Perfect if you&apos;re
              </p>
              {copy.reasons?.map((reason, idx) => (
                <div
                  key={idx}
                  className="group relative"
                  onMouseEnter={() => setHoveredReason(idx)}
                  onMouseLeave={() => setHoveredReason(null)}
                >
                  <div className="flex items-start gap-4 p-4 rounded-2xl border border-white/5 bg-white/0 hover:bg-white/5 hover:border-white/10 transition-all cursor-pointer">
                    <div className="relative shrink-0 mt-1">
                      <div
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                          hoveredReason === idx
                            ? "bg-violet-400 scale-125 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                            : "bg-violet-400/50"
                        }`}
                      />
                      {hoveredReason === idx && (
                        <div className="absolute inset-0 h-2 w-2 rounded-full bg-violet-400 animate-ping" />
                      )}
                    </div>
                    <span className="text-white/70 group-hover:text-white font-light leading-relaxed transition-colors">
                      {reason}
                    </span>
                    <ArrowUpRight
                      className={`h-4 w-4 ml-auto text-white/30 group-hover:text-white/60 transition-all ${
                        hoveredReason === idx
                          ? "translate-x-1 -translate-y-1"
                          : ""
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-8">
              <button
                type="button"
                className="group relative px-8 py-5 bg-white text-zinc-950 rounded-full font-medium overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)]"
              >
                <span className="relative z-10 flex items-center gap-2 text-sm uppercase tracking-[0.2em]">
                  <Mail className="h-4 w-4" />
                  {copy.primaryCta}
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-violet-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button
                type="button"
                className="group px-8 py-5 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-xl"
              >
                <span className="flex items-center gap-2 text-sm uppercase tracking-[0.2em]">
                  <MessageCircle className="h-4 w-4" />
                  {copy.secondaryCta}
                </span>
              </button>
            </div>

            {/* Trust indicator */}
            <div className="flex items-center gap-3 pt-8 text-white/40">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-zinc-900 bg-linear-to-br from-violet-400 to-purple-500"
                  />
                ))}
              </div>
              <p className="text-sm font-light">
                Join 38+ forward-thinking brands
              </p>
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="relative group">
              {/* Glow effect */}
              <div
                className="pointer-events-none absolute -inset-1 bg-linear-to-r from-violet-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
                aria-hidden="true"
              />

              {/* Main card */}
              <div className="relative p-10 lg:p-12 rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-2xl space-y-8">
                {/* Header */}
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-[0.4em] text-white/40 font-light">
                    {copy.person?.role}
                  </div>
                  <h3 className="text-4xl font-light text-white">
                    {copy.person?.name}
                  </h3>
                  <p className="text-white/60 font-light text-lg">
                    {copy.person?.title}
                  </p>
                </div>

                <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

                {/* Email */}
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40 font-light">
                    Direct line
                  </p>

                  <a
                    href={`mailto:${copy.person?.email}`}
                    className="group/email flex items-center gap-3 text-2xl text-white hover:text-violet-400 transition-colors font-light"
                  >
                    <Mail className="h-5 w-5 text-violet-400" />
                    <span className="group-hover/email:underline underline-offset-4">
                      {copy.person?.email}
                    </span>
                  </a>
                </div>

                {/* Response time badge */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="relative">
                    <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                    <div className="absolute inset-0 h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <div>
                    <p className="text-white font-light text-sm">
                      Usually responds in 24h
                    </p>
                    <p className="text-white/40 text-xs font-light">
                      Jakarta • Singapore timezone
                    </p>
                  </div>
                </div>

                {/* Decorative element */}
                <div
                  className="pointer-events-none absolute -bottom-6 -right-6 w-32 h-32 bg-linear-to-br from-violet-500/20 to-purple-500/20 rounded-full blur-2xl"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Bottom note */}
            <div className="mt-8 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
              <p className="text-sm text-white/60 font-light leading-relaxed">
                <span className="text-white/80 font-medium">
                  Capacity note:
                </span>{" "}
                We take on two launches at a time to preserve attention and
                care.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-24 pt-12 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-6 text-white/40 text-sm font-light">
            <p>Next available slot: December 2024</p>
            <div className="flex items-center gap-6">
              <span>Jakarta</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span>Singapore</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span>Remote-first</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
