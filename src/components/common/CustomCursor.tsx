"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHoveringTarget, setIsHoveringTarget] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.55 });
  const springY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.55 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    // Deferred so the enable toggle isn't a synchronous setState in the effect.
    const enableFrame = requestAnimationFrame(() => setEnabled(true));

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target as Element | null;
      setIsHoveringTarget(
        Boolean(target?.closest?.('[data-cursor="hover"], a, button'))
      );
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      cancelAnimationFrame(enableFrame);
      window.removeEventListener("mousemove", handleMove);
    };
  }, [x, y]);

  if (!enabled || shouldReduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[10000]"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        animate={{
          scale: isHoveringTarget ? 2.1 : 1,
          backgroundColor: isHoveringTarget
            ? "rgba(26, 243, 220, 0.18)"
            : "rgba(26, 243, 220, 0)",
          borderColor: isHoveringTarget
            ? "rgba(26, 243, 220, 0.9)"
            : "rgba(26, 243, 220, 0.65)",
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="-ml-3 -mt-3 h-6 w-6 rounded-full border"
      />
    </motion.div>
  );
}
