"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection({ copy, metrics }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLit, setIsLit] = useState(false);
  const heroRef = useRef(null);

  const inner = 4;
  const mid = 8;
  const outer = 14;

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width)),
        y: Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height)),
      });
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove, { passive: true });
      return () => hero.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  // Mask position (hidden off-canvas when not hovered)
  const cx = isLit ? `${mousePosition.x * 100}%` : "-20%";
  const cy = isLit ? `${mousePosition.y * 100}%` : "-20%";

  // White = visible, Black = hidden
  const candleMask =
    `radial-gradient(circle at ${cx} ${cy}, ` +
    `rgba(255,255,255,1) 0%, ` +
    `rgba(255,255,255,1) ${inner}%, ` +
    `rgba(255,255,255,0.5) ${mid}%, ` +
    `rgba(255,255,255,0) ${outer}%)`;

  // Your background image (behind orbs + grid, revealed by mask)
  const bgSrc =
    "https://images.unsplash.com/photo-1669790232714-ed58d3e45316?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2064";

  return (
    <section
      ref={heroRef}
      onMouseEnter={() => setIsLit(true)}
      onMouseLeave={() => setIsLit(false)}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-950"
    >
      {/* Candle-reveal background image (hidden at rest, revealed under cursor) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          WebkitMaskImage: candleMask,
          maskImage: candleMask,
          WebkitMaskSize: "cover",
          maskSize: "cover",
          filter: "brightness(1.6) saturate(0.8) contrast(1.05)",
          opacity: 0.6,
          mixBlendMode: "soft-light",
          transition:
            "mask-position 120ms linear, -webkit-mask-position 120ms linear",
          pointerEvents: "none",
        }}
      />

      {/* Animated gradient orbs (unchanged) */}
      <div
        className="absolute inset-0 opacity-40 transition-all duration-700"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
            mousePosition.y * 100
          }%, rgba(139, 92, 246, 0.3), transparent 50%)`,
        }}
      />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.25),transparent_50%)]" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.2),transparent_50%)]" />

      {/* Grid overlay (unchanged) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[100px_100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-0 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left content */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-violet-400/40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-white/70 font-light">
                {copy.eyebrow}
              </span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                className="text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {copy.title}
              </motion.h1>
              <motion.p
                className="text-xl text-white/60 font-light leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, delay: 0.18 }}
              >
                {copy.body}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.26 }}
            >
              <button className="group relative px-8 py-4 bg-white text-zinc-950 rounded-full font-medium overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(255,255,255,0.12)]">
                <span className="relative z-10 flex items-center gap-2">
                  {copy.primaryCta}
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all backdrop-blur-xl">
                {copy.secondaryCta}
              </button>
            </motion.div>

          </motion.div>

          {/* Right content - Visual showcase */}
          <div className="relative">
            <div className="relative aspect-3/4 rounded-3xl overflow-hidden border border-white/10 bg-linear-to-br from-white/5 to-white/2 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-br from-violet-500/20 to-transparent" />
              <Image
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=90&auto=format&fit=crop"
                alt="Premium showcase"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover mix-blend-overlay"
              />

              {/* Floating card */}
              <div className="absolute top-8 right-8 p-6 rounded-2xl bg-zinc-950/90 backdrop-blur-2xl border border-white/10 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-linear-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">
                      {copy.lottieLabel}
                    </div>
                    <div className="text-xs text-white/50">Live Innovation</div>
                  </div>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-linear-to-r from-violet-500 to-purple-500 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Bottom badge */}
              <div className="absolute bottom-8 left-8 right-8 p-4 rounded-xl bg-white/10 backdrop-blur-2xl border border-white/20">
                <div className="text-sm font-medium text-white mb-1">
                  {copy.caption}
                </div>
                <div className="text-xs text-white/60">{copy.captionBody}</div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-10 -right-10 w-72 h-72 bg-violet-500/30 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
