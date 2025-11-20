"use client";

import {
  SiAdobeaftereffects,
  SiAmazonwebservices,
  SiContentful,
  SiDocker,
  SiFigma,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNotion,
  SiPrisma,
  SiReact,
  SiSanity,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const ICONS = {
  next: SiNextdotjs,
  react: SiReact,
  aws: SiAmazonwebservices,
  supabase: SiSupabase,
  mysql: SiMysql,
  mongodb: SiMongodb,
  tailwind: SiTailwindcss,
  docker: SiDocker,
  contentful: SiContentful,
  sanity: SiSanity,
  vercel: SiVercel,
  prisma: SiPrisma,
  graphql: SiGraphql,
  figma: SiFigma,
  aftereffects: SiAdobeaftereffects,
  notion: SiNotion,
};

export function TechStackSection({ copy = {}, items = [] }) {
  if (!items.length) return null;

  const rollingItems = [...items, ...items];

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-zinc-950 to-zinc-900 py-24 px-6 text-white lg:px-12">
      <style jsx>{`
        @keyframes tech-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(147,124,255,0.2),transparent_55%)]" />
      <div className="relative space-y-10">
        <div className="mx-auto max-w-7xl space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            {copy.eyebrow}
          </p>
          <h2 className="text-5xl font-light leading-tight text-white lg:text-6xl">
            {copy.title}
          </h2>
        </div>
        <div className="relative -mx-6 overflow-hidden py-8 lg:-mx-12">
          <div className="pointer-events-none absolute inset-0 " />
          <div
            className="flex w-[260%] gap-4 will-change-transform sm:w-[240%] sm:gap-16"
            style={{
              animation: "tech-marquee 30s linear infinite",
            }}
          >
            {rollingItems.map(({ name, icon }, index) => {
              const Icon = ICONS[icon] || SiNextdotjs;
              return (
                <div
                  key={`${name}-${index}`}
                  className="flex min-h-[140px] min-w-[150px] items-center justify-center px-3 sm:min-w-[220px] sm:px-6"
                >
                  <Icon
                    className="text-white drop-shadow-[0_12px_25px_rgba(0,0,0,0.35)]"
                    style={{ width: "4.5rem", height: "4.5rem" }}
                  />
                  <span className="sr-only">{name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
