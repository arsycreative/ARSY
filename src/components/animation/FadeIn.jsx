"use client";

import { motion } from "framer-motion";

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
  ...rest
}) {
  const MotionEl = motion[Component] || motion.div;
  return (
    <MotionEl
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      {...rest}
    >
      {children}
    </MotionEl>
  );
}
