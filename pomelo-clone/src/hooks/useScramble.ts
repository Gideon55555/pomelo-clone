"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#01";

/**
 * Decodes `text` with a glyph-scramble once the element scrolls into view.
 * Characters settle left-to-right. Reduced motion shows the text instantly.
 */
export function useScramble<T extends HTMLElement = HTMLElement>(text: string) {
  const ref = useRef<T | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    // Display already holds the plain text until the animation starts, so the
    // not-in-view and reduced-motion cases need no state update.
    if (!isInView || shouldReduceMotion) return;

    let frame: number;
    const start = performance.now();
    // Each character locks in sequence; total run ≈ 40ms per char + 220ms tail.
    const lockDelay = 40;
    const duration = text.length * lockDelay + 220;

    const tick = (now: number) => {
      const elapsed = now - start;
      const settled = Math.floor(elapsed / lockDelay);

      const next = Array.from(text)
        .map((char, index) => {
          if (char === " " || index < settled) return char;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");

      setDisplay(next);
      if (elapsed < duration && settled < text.length) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, text, shouldReduceMotion]);

  return { ref, display };
}
