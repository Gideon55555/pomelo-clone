"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Adds a blur(4px) → blur(0) on entrance. Keep for small text blocks only. */
  blur?: boolean;
  /** Adds a scale(0.96) → scale(1) on entrance, for section headers. */
  scale?: boolean;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  blur = false,
  scale = false,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y,
              ...(blur ? { filter: "blur(4px)" } : {}),
              ...(scale ? { scale: 0.96 } : {}),
            }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
              ...(blur ? { filter: "blur(0px)" } : {}),
              ...(scale ? { scale: 1 } : {}),
            }
      }
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.72,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
