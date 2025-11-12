"use client";

import { useEffect } from "react";

export function LenisProvider({ children }) {
  useEffect(() => {
    let lenisInstance;
    let frame;
    let ScrollTrigger;

    async function initLenis() {
      const [{ default: Lenis }, gsapMod, scrollTriggerMod] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      const gsap = gsapMod.gsap || gsapMod.default;
      ScrollTrigger = scrollTriggerMod.ScrollTrigger;

      if (gsap && ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
      }

      lenisInstance = new Lenis({
        lerp: 0.12,
        duration: 1.4,
        smoothWheel: true,
        smoothTouch: false,
      });

      lenisInstance.on("scroll", () => ScrollTrigger?.update());

      const raf = (time) => {
        lenisInstance?.raf(time);
        frame = requestAnimationFrame(raf);
      };

      frame = requestAnimationFrame(raf);
    }

    initLenis();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      lenisInstance?.destroy();
      if (ScrollTrigger?.getAll) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return <>{children}</>;
}
