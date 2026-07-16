"use client";

import { motion, useReducedMotion, useTransform } from "framer-motion";
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

  // Inner content trails at half the button's magnetic offset again
  // (parallax-within-hover); both snap back on the same spring.
  const innerX = useTransform(x, (value) => value * 0.5);
  const innerY = useTransform(y, (value) => value * 0.5);

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
          className="pointer-events-none absolute -inset-1 rounded-md bg-[#1AF3DC]/45 blur-lg"
        />
      )}
      <motion.button
        data-cursor="hover"
        whileTap={{ scale: 0.96 }}
        className={`button-shimmer group relative ${className}`}
      >
        <motion.span
          style={shouldReduceMotion ? undefined : { x: innerX, y: innerY }}
          className="inline-flex items-center gap-1.5 [&_svg]:transition-transform [&_svg]:duration-300 group-hover:[&_svg]:translate-x-0.5 group-hover:[&_svg]:-rotate-6"
        >
          {children}
        </motion.span>
      </motion.button>
    </motion.div>
  );
}
