"use client";

import { useScramble } from "@/hooks/useScramble";

type EyebrowProps = {
  text: string;
  className?: string;
};

/** Uppercase section label that decodes with a glyph scramble on scroll-in. */
export default function Eyebrow({ text, className = "" }: EyebrowProps) {
  const { ref, display } = useScramble<HTMLParagraphElement>(text);

  return (
    <p ref={ref} aria-label={text} className={className}>
      <span aria-hidden="true">{display}</span>
    </p>
  );
}
