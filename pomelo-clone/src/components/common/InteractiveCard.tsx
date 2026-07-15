"use client";

import { useRef, type ReactNode } from "react";
import { FULL_MOTION, gsap, useGSAP } from "@/lib/gsap";

type InteractiveCardProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Card wrapper with the full hover system: 3D lift + rotating conic border +
 * cursor-origin glow (see .interactive-card in globals.css). The glow origin
 * follows the pointer via gsap.quickSetter — CSS vars only, no re-renders.
 */
export default function InteractiveCard({
  children,
  className = "",
}: InteractiveCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`${FULL_MOTION} and (pointer: fine)`, () => {
        const card = ref.current;
        if (!card) return;

        const setGlowX = gsap.quickSetter(card, "--glow-x", "px");
        const setGlowY = gsap.quickSetter(card, "--glow-y", "px");

        const handleMove = (event: globalThis.MouseEvent) => {
          const rect = card.getBoundingClientRect();
          setGlowX(event.clientX - rect.left);
          setGlowY(event.clientY - rect.top);
        };

        card.addEventListener("mouseenter", handleMove);
        card.addEventListener("mousemove", handleMove, { passive: true });
        return () => {
          card.removeEventListener("mouseenter", handleMove);
          card.removeEventListener("mousemove", handleMove);
        };
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={`interactive-card ${className}`}>
      {children}
    </div>
  );
}
