"use client";

import { useScroll, useTransform, useSpring, type MotionValue } from "framer-motion";
import { useRef } from "react";

export function useParallaxScroll(offset: number = 80) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const y = useSpring(raw, { stiffness: 50, damping: 20, mass: 0.5 });
  return { ref, y };
}

/**
 * Lightweight page scroll — raw useTransform, NO useSpring.
 * Spring on the full page scroll causes constant recalculations and jank.
 */
export function usePageScroll(): MotionValue<number> {
  const { scrollY } = useScroll();
  return scrollY;
}
