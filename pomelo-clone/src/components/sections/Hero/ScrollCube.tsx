"use client";

import { useRef } from "react";
import { FULL_MOTION, gsap, useGSAP } from "@/lib/gsap";

const FACES = [
  "rotateY(0deg) translateZ(44px)",
  "rotateY(90deg) translateZ(44px)",
  "rotateY(180deg) translateZ(44px)",
  "rotateY(270deg) translateZ(44px)",
  "rotateX(90deg) translateZ(44px)",
  "rotateX(-90deg) translateZ(44px)",
];

/**
 * Faint CSS wireframe cube that rotates with scroll (ScrollTrigger scrub)
 * from the hero down through the next section. Desktop only.
 */
export default function ScrollCube() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(FULL_MOTION, () => {
        gsap.set(cubeRef.current, { rotateX: -18, rotateY: 24 });
        gsap.to(cubeRef.current, {
          rotateX: 342,
          rotateY: 244,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "center bottom",
            end: "+=1600",
            scrub: 1,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute right-[6%] top-[68%] hidden [perspective:620px] lg:block"
    >
      <div
        ref={cubeRef}
        className="relative h-[88px] w-[88px] [transform-style:preserve-3d]"
      >
        {FACES.map((transform) => (
          <div
            key={transform}
            style={{ transform }}
            className="absolute inset-0 rounded-[3px] border border-[#1AF3DC]/35 bg-[#1AF3DC]/[0.03] light:border-[#004F4C]/25"
          />
        ))}
      </div>
    </div>
  );
}
