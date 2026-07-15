"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useMagneticHover } from "@/hooks/useMagneticHover";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  /** Adds a subtle infinite glow pulse behind the button. */
  pulse?: boolean;
};

export default function MagneticButton({
  children,
  className = "",
  pulse = false,
}: MagneticButtonProps) {
  const { x, y, onMouseMove, onMouseLeave } = useMagneticHover(0.3);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative inline-block"
    >
      {pulse && !shouldReduceMotion && (
        <motion.span
          aria-hidden="true"
          animate={{ opacity: [0.25, 0.55, 0.25] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -inset-1 rounded-md bg-[#3484ff]/45 blur-lg"
        />
      )}
      <motion.button
        data-cursor="hover"
        whileTap={{ scale: 0.96 }}
        className={`button-shimmer relative ${className}`}
      >
        {children}
      </motion.button>
    </motion.div>
  );
}
