"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TiltCard({ children, className }) {
  const cardRef = useRef(null);

  const handleMove = (event) => {
    const node = cardRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const rotateY = ((offsetX - rect.width / 2) / rect.width) * 12;
    const rotateX = ((offsetY - rect.height / 2) / rect.height) * -12;
    node.style.setProperty("--tilt-x", `${rotateX}deg`);
    node.style.setProperty("--tilt-y", `${rotateY}deg`);
  };

  const handleLeave = () => {
    const node = cardRef.current;
    if (!node) return;
    node.style.setProperty("--tilt-x", "0deg");
    node.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "transform-gpu rounded-3xl border border-black/5 bg-white/80 p-8 text-zinc-900 backdrop-blur-lg dark:border-white/10 dark:bg-white/5 dark:text-white",
        className
      )}
      style={{
        transform:
          "perspective(900px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
      }}
    >
      {children}
    </motion.div>
  );
}
