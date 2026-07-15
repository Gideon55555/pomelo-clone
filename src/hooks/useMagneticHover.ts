"use client";

import { useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useState, type MouseEvent } from "react";

/**
 * Magnetic hover: translates an element slightly toward the cursor while it
 * is inside the element's bounds. Disabled on touch devices and when the
 * user prefers reduced motion.
 */
export function useMagneticHover(strength = 0.3) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.5 });
  const shouldReduceMotion = useReducedMotion();
  // Only read in event handlers (never in render output), so lazy init is
  // hydration-safe and avoids a setState-in-effect.
  const [canHover] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );

  const onMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!canHover || shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { x: springX, y: springY, onMouseMove, onMouseLeave };
}
