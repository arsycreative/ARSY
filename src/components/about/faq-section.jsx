"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection({ copy }) {
  const [active, setActive] = useState(null);

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24 px-6 text-white lg:px-12">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(139,92,246,0.25),transparent_55%),radial-gradient(circle_at_85%_85%,rgba(59,130,246,0.2),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr,1.15fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">
            {copy.eyebrow}
          </p>
          <h2 className="text-5xl font-light leading-tight lg:text-6xl">
            {copy.title}
          </h2>
          {copy.body && (
            <p className="text-lg font-light leading-relaxed text-white/70">
              {copy.body}
            </p>
          )}
        </div>
        <div className="space-y-4">
          {copy.items.map((item, index) => {
            const isOpen = active === index;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition-colors duration-300 hover:border-white/30 hover:bg-white/10"
              >
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-2xl font-light">
                      {item.question}
                    </h3>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="text-2xl text-white/40"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-base leading-relaxed text-white/70">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
