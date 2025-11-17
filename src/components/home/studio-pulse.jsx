"use client";

export function StudioPulse({ copy, highlights }) {
  return (
    <section className="py-32 px-6 lg:px-12 bg-linear-to-br from-zinc-950 to-zinc-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="text-xs uppercase tracking-[0.4em] text-white/40 font-light">
              {copy.eyebrow}
            </div>
            <h2 className="text-5xl lg:text-6xl font-light leading-tight">
              {copy.title}
            </h2>
            <p className="text-xl text-white/60 font-light leading-relaxed">
              {copy.body}
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-1 h-16 bg-linear-to-b from-violet-400 to-purple-500 rounded-full" />
                  <div className="space-y-3">
                    <div className="text-xs uppercase tracking-[0.3em] text-white/40 font-light">
                      {item.tag}
                    </div>
                    <h3 className="text-xl font-light text-white">
                      {item.title}
                    </h3>
                    <p className="text-white/60 font-light leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
