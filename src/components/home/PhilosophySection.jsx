"use client";

import { Lightbulb, Users, Target, Compass } from "lucide-react";

export function PhilosophySection({ copy }) {
  const expertiseItems = [
    "Desain UI/UX",
    "Riset Pengguna",
    "Website & Web App Responsif",
    "Microsite Campaign",
    "CMS Development",
    "eCommerce",
    "Aplikasi Web Kustom",
    "Aplikasi Mobile",
  ];

  return (
    <section className="relative py-32 px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl mb-6">
            <Compass className="h-4 w-4 text-violet-500" />
            <span className="text-xs uppercase tracking-[0.4em] text-zinc-500 dark:text-white/50 font-light">
              {copy.eyebrow || "Our Philosophy"}
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-zinc-950 dark:text-white mb-8 leading-tight">
            {copy.title || "Collaboration & Precision"}
          </h2>
          <p className="text-xl text-zinc-600 dark:text-white/60 font-light leading-relaxed">
            {copy.subtitle ||
              "Kami percaya hasil terbaik lahir dari kolaborasi dan perhatian pada detail. Fokus kami ada pada menciptakan pengalaman digital yang berfungsi, menarik, dan relevan dengan kebutuhan pengguna."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Left: Expertise */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-light text-zinc-950 dark:text-white mb-4">
                  {copy.expertiseTitle || "Keahlian Kami"}
                </h3>
                <p className="text-zinc-600 dark:text-white/60 font-light leading-relaxed mb-6">
                  Beberapa bidang yang kami kuasai meliputi:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pl-16">
              {expertiseItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-2 p-3 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-violet-300 dark:hover:border-violet-500/50 hover:bg-violet-50 dark:hover:bg-violet-500/10 transition-all"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-500 group-hover:scale-125 transition-transform" />
                  <span className="text-sm text-zinc-700 dark:text-white/70 group-hover:text-zinc-950 dark:group-hover:text-white font-light transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Process */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-light text-zinc-950 dark:text-white mb-4">
                  {copy.processTitle || "Proses Kami"}
                </h3>
                <div className="space-y-4">
                  <p className="text-zinc-600 dark:text-white/60 font-light leading-relaxed">
                    Setiap proyek dimulai dari pemahaman mendalam tentang bisnis
                    dan penggunanya. Kami mendengarkan, menganalisis, lalu
                    merancang strategi dan solusi yang tepat — sebelum
                    mengeksekusinya dengan presisi dan perhatian penuh.
                  </p>
                  <p className="text-zinc-600 dark:text-white/60 font-light leading-relaxed">
                    Dengan pendekatan ini, kami memastikan setiap hasil bukan
                    hanya memenuhi ekspektasi, tapi juga membawa nilai nyata
                    bagi brand dan penggunanya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-indigo-500/10 dark:from-violet-500/20 dark:via-purple-500/20 dark:to-indigo-500/20 rounded-3xl blur-xl" />
          <div className="relative p-12 lg:p-16 rounded-3xl border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="h-6 w-6 text-violet-500" />
              <span className="text-xs uppercase tracking-[0.4em] text-zinc-500 dark:text-white/50 font-light">
                Our Commitment
              </span>
            </div>
            <p className="text-2xl lg:text-3xl font-light text-zinc-950 dark:text-white leading-relaxed max-w-4xl mx-auto">
              Kami memastikan setiap hasil bukan hanya memenuhi ekspektasi,
              <span className="block mt-2 text-violet-600 dark:text-violet-400">
                tapi juga membawa nilai nyata bagi brand dan penggunanya.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
