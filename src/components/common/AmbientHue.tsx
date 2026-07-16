"use client";

import { useRef } from "react";
import { FULL_MOTION, gsap, useGSAP } from "@/lib/gsap";

/**
 * Drifts the accent hue of the radial glow overlays (elements with
 * .glow-accent) across a narrow teal range as the page scrolls.
 * Only the --accent-hue CSS var animates; surfaces stay untouched so the
 * light/dark theme backgrounds are unaffected.
 */
export default function AmbientHue() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(FULL_MOTION, () => {
        const root = document.documentElement;
        const tl = gsap.timeline({
          scrollTrigger: {
            start: 0,
            end: "max",
            scrub: 1.2,
          },
        });
        tl.fromTo(
          root,
          { "--accent-hue": 174 },
          { "--accent-hue": 184, ease: "none" }
        ).to(root, { "--accent-hue": 174, ease: "none" });

        return () => {
          root.style.removeProperty("--accent-hue");
        };
      });
    },
    { scope: ref }
  );

  return <div ref={ref} aria-hidden="true" className="hidden" />;
}
