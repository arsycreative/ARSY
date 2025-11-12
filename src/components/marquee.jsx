"use client";

export function StudioMarquee({ phrases = [] }) {
  const duplicated = [...phrases, ...phrases, ...phrases];

  return (
    <div className="relative py-8 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-900 to-zinc-950" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)]" />

      <div className="relative overflow-hidden">
        <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
          {duplicated.map((phrase, index) => (
            <span
              key={`${phrase}-${index}`}
              className="mx-8 text-2xl font-light tracking-[0.2em] text-white/30 uppercase hover:text-white/60 transition-colors"
            >
              {phrase}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}
