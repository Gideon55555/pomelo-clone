"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Eyebrow from "@/components/common/Eyebrow";
import { FULL_MOTION, gsap, useGSAP } from "@/lib/gsap";

// GSAP quickTo drives rotateX/rotateY directly on the element — no React
// re-render per mousemove, which keeps the tilt smooth at pointer frequency.
function TiltCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`${FULL_MOTION} and (pointer: fine)`, () => {
        const card = ref.current;
        if (!card) return;

        gsap.set(card, { transformPerspective: 900 });
        const toRotateX = gsap.quickTo(card, "rotationX", { duration: 0.5, ease: "power3.out" });
        const toRotateY = gsap.quickTo(card, "rotationY", { duration: 0.5, ease: "power3.out" });

        const handleMove = (event: globalThis.MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const px = (event.clientX - rect.left) / rect.width - 0.5;
          const py = (event.clientY - rect.top) / rect.height - 0.5;
          toRotateY(px * 9);
          toRotateX(-py * 9);
        };
        const handleLeave = () => {
          toRotateX(0);
          toRotateY(0);
        };

        card.addEventListener("mousemove", handleMove, { passive: true });
        card.addEventListener("mouseleave", handleLeave);
        return () => {
          card.removeEventListener("mousemove", handleMove);
          card.removeEventListener("mouseleave", handleLeave);
        };
      });
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className="rounded-[18px] border border-white/[0.07] bg-[linear-gradient(160deg,rgba(52,132,255,0.07),rgba(0,3,57,0.4))] px-6 py-8 backdrop-blur-sm light:border-[#000339]/10 light:bg-[linear-gradient(160deg,rgba(52,132,255,0.08),rgba(255,255,255,0.9))] light:shadow-[0_18px_46px_rgba(22,72,255,0.1)] sm:px-10"
    >
      {children}
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Qua became a true strategic partner. Beyond the engineering, they understood our roadmap, stayed close to our team, and executed with a speed that made every launch feel effortless.",
    name: "Alejandra Soler",
    role: "Product Director, Venturely",
  },
  {
    quote:
      "Working with Qua let us expand our digital product line far faster than we could have alone. Their technical depth and communication set a new bar for what we expect from a partner.",
    name: "Guido Barros",
    role: "CTO, NORTH",
  },
  {
    quote:
      "What won us over was their model: flexible engagement, transparent costs, and a clear commitment to growing together. The technology was excellent — the partnership was even better.",
    name: "Andrea Uribe",
    role: "Commercial Director, Orbit",
  },
  {
    quote:
      "Qua has been key to our growth strategy, helping us ship our flagship app quickly and reliably while keeping quality uncompromised.",
    name: "Mari Flores",
    role: "Program Manager, APEX",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  const testimonial = testimonials[active];

  return (
    <section id="company" className="relative isolate overflow-hidden bg-[#000339] px-6 pb-24 pt-24 text-white light:bg-[#f1f2f2] light:text-[#000339] sm:px-10">
      <div className="glow-accent absolute inset-0 bg-[radial-gradient(ellipse_44%_40%_at_50%_30%,rgba(22,72,255,0.2),transparent_72%)] light:bg-[radial-gradient(ellipse_44%_40%_at_50%_30%,rgba(52,132,255,0.13),transparent_72%)]" />

      <div className="relative z-10 mx-auto max-w-[820px] text-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow
            text="Success stories"
            className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#80b4ff] light:text-[#1648ff]"
          />
          <h2 className="mx-auto mt-3 max-w-[520px] text-[34px] font-semibold leading-[1.02] tracking-[-0.06em] sm:text-[44px]">
            Built for your business. Proven in the real world.
          </h2>
        </motion.div>

        <div className="relative mt-12 min-h-[230px]">
          <TiltCard>
            <AnimatePresence mode="wait">
              <motion.figure
                key={active}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -14 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-4xl leading-none text-[#3484ff]">&ldquo;</span>
                <blockquote className="mx-auto mt-2 max-w-[640px] text-[14px] leading-[1.7] text-white/85 light:text-[#000339]/85 sm:text-[16px]">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-[14px] font-semibold tracking-[-0.02em]">{testimonial.name}</p>
                  <p className="mt-1 text-[12px] text-white/60 light:text-[#000339]/60">{testimonial.role}</p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </TiltCard>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((entry, index) => (
            <button
              key={entry.name}
              type="button"
              aria-label={`Show testimonial from ${entry.name}`}
              aria-current={active === index}
              onClick={() => setActive(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === index
                  ? "w-6 bg-[#80b4ff] light:bg-[#1648ff]"
                  : "w-1.5 bg-white/25 hover:bg-white/55 light:bg-[#000339]/20 light:hover:bg-[#000339]/45"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
