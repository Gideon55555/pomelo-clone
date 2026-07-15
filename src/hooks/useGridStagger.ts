"use client";

import type { RefObject } from "react";
import { FULL_MOTION, gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

/**
 * Staggered entrance for a card grid via ScrollTrigger.batch — handles
 * partially visible rows correctly (unlike per-card index delays).
 * Cards are hidden with gsap.set before first paint, so there is no flash,
 * and reduced-motion users simply see the cards static.
 */
export function useGridStagger(
  scope: RefObject<HTMLElement | null>,
  selector = ".batch-card"
) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(FULL_MOTION, () => {
        const cards = gsap.utils.toArray<HTMLElement>(selector);
        if (!cards.length) return;

        gsap.set(cards, { opacity: 0, y: 32 });
        ScrollTrigger.batch(cards, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.08,
              overwrite: true,
            }),
        });
      });
    },
    { scope }
  );
}
