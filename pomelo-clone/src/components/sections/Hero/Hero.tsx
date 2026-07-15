"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import CodeRain from "@/components/common/CodeRain";
import Container from "@/components/common/Container";
import MagneticButton from "@/components/common/MagneticButton";
import Reveal from "@/components/common/Reveal";
import SplitText from "@/components/common/SplitText";
import ScrollCube from "./ScrollCube";
import { FULL_MOTION, gsap, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const gridLayerRef = useRef<HTMLDivElement>(null);
  const orbLayerRef = useRef<HTMLDivElement>(null);
  const windowsLayerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Headline: chars rise with a tight stagger and settle from a random tilt.
      mm.add(FULL_MOTION, () => {
        const chars = gsap.utils.toArray<HTMLElement>(".hero-char");
        const accentChars = gsap.utils.toArray<HTMLElement>(".hero-char-accent");

        gsap.set([...chars, ...accentChars], {
          y: 20,
          opacity: 0,
          rotate: () => gsap.utils.random(-3, 3),
        });

        const tl = gsap.timeline({ delay: 0.25 });
        tl.to(chars, {
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.02,
        }).to(
          accentChars,
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            duration: 0.95,
            ease: "power4.out",
            stagger: 0.025,
          },
          "-=0.35"
        );
      });

      // Layered mouse parallax: grid 0.02x, orb 0.05x, code windows 0.08x.
      mm.add(`${FULL_MOTION} and (pointer: fine)`, () => {
        const section = sectionRef.current;
        if (!section) return;

        const layers = [
          { el: gridLayerRef.current, factor: 0.02 },
          { el: orbLayerRef.current, factor: 0.05 },
          { el: windowsLayerRef.current, factor: 0.08 },
        ]
          .filter((layer) => layer.el)
          .map(({ el, factor }) => ({
            factor,
            toX: gsap.quickTo(el, "x", { duration: 0.7, ease: "power3.out" }),
            toY: gsap.quickTo(el, "y", { duration: 0.7, ease: "power3.out" }),
          }));

        const handleMove = (event: globalThis.MouseEvent) => {
          const rect = section.getBoundingClientRect();
          const dx = event.clientX - (rect.left + rect.width / 2);
          const dy = event.clientY - (rect.top + rect.height / 2);
          for (const layer of layers) {
            layer.toX(dx * layer.factor);
            layer.toY(dy * layer.factor);
          }
        };

        section.addEventListener("mousemove", handleMove, { passive: true });
        return () => section.removeEventListener("mousemove", handleMove);
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#0B2023] pb-12 pt-28 text-[#EEFEFC] light:bg-[#EEFEFC] light:text-[#0B2023] sm:pt-32"
    >
      <div ref={orbLayerRef} aria-hidden="true" className="absolute inset-0">
        <div className="hero-orb glow-accent absolute inset-0 bg-[radial-gradient(ellipse_50%_42%_at_50%_57%,rgba(0,79,76,0.28),transparent_72%)] light:bg-[radial-gradient(ellipse_50%_42%_at_50%_57%,rgba(26,243,220,0.18),transparent_72%)]" />
      </div>
      <div ref={gridLayerRef} aria-hidden="true" className="absolute -inset-6">
        <div className="hero-grid absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(26,243,220,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(26,243,220,0.045)_1px,transparent_1px)] [background-size:82px_82px] light:[background-image:linear-gradient(rgba(0,79,76,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,79,76,0.08)_1px,transparent_1px)]" />
      </div>
      <div className="absolute left-[18%] top-[18%] h-px w-[42%] bg-gradient-to-r from-transparent via-[#004F4C]/45 to-transparent" />
      <div className="absolute right-[16%] top-[21%] h-[1px] w-[25%] bg-gradient-to-r from-transparent to-[#1AF3DC]/30" />

      <CodeRain />
      <ScrollCube />

      <div ref={windowsLayerRef} className="pointer-events-none absolute inset-0">
        <motion.div
          data-cursor="hover"
          whileHover={
            shouldReduceMotion
              ? undefined
              : { y: -12, rotate: -6, scale: 1.06 }
          }
          transition={{ type: "spring", stiffness: 220, damping: 16 }}
          className="pointer-events-auto absolute left-[14%] top-[56%] hidden w-[190px] -rotate-[14deg] cursor-pointer overflow-hidden rounded-[12px] border border-[#1AF3DC]/60 bg-[linear-gradient(135deg,rgba(0,79,76,0.24),rgba(11,32,35,0.7))] shadow-[-10px_14px_35px_rgba(0,79,76,0.2)] backdrop-blur-sm transition-shadow duration-300 hover:border-[#1AF3DC]/80 hover:shadow-[-12px_20px_50px_rgba(0,79,76,0.4)] light:border-[#004F4C]/30 light:bg-[linear-gradient(135deg,rgba(26,243,220,0.14),rgba(255,255,255,0.85))] light:shadow-[-10px_14px_35px_rgba(0,79,76,0.14)] lg:block"
        >
          <div className="flex items-center gap-1.5 border-b border-white/[0.08] bg-[#0B2023]/60 px-3 py-2 light:border-[#0B2023]/10 light:bg-white/70">
            <span className="h-2 w-2 rounded-full bg-[#004F4C]/80" />
            <span className="h-2 w-2 rounded-full bg-[#1AF3DC]/70" />
            <span className="h-2 w-2 rounded-full bg-[#1AF3DC]/60" />
          </div>
          <div className="space-y-2 px-3 py-3">
            <div className="h-1.5 w-[70%] rounded-full bg-[#1AF3DC]/60" />
            <div className="ml-4 h-1.5 w-[52%] rounded-full bg-[#1AF3DC]/40" />
            <div className="ml-4 h-1.5 w-[62%] rounded-full bg-white/20 light:bg-[#0B2023]/20" />
            <div className="h-1.5 w-[38%] rounded-full bg-[#1AF3DC]/50" />
          </div>
        </motion.div>
        <div className="absolute left-[17%] top-[53%] hidden h-[130px] w-[190px] -rotate-[14deg] rounded-[12px] bg-[#1AF3DC]/10 blur-sm lg:block" />

        <motion.div
          data-cursor="hover"
          whileHover={
            shouldReduceMotion
              ? undefined
              : { y: -12, rotate: 5, scale: 1.06 }
          }
          transition={{ type: "spring", stiffness: 220, damping: 16 }}
          className="pointer-events-auto absolute right-[13%] top-[31%] hidden w-[210px] rotate-[13deg] cursor-pointer overflow-hidden rounded-[12px] border border-[#1AF3DC]/70 bg-[linear-gradient(135deg,rgba(0,79,76,0.28),rgba(11,32,35,0.72))] shadow-[0_14px_45px_rgba(0,79,76,0.2)] backdrop-blur-sm transition-shadow duration-300 hover:border-[#1AF3DC]/80 hover:shadow-[0_20px_55px_rgba(0,79,76,0.42)] light:border-[#004F4C]/30 light:bg-[linear-gradient(135deg,rgba(26,243,220,0.16),rgba(255,255,255,0.88))] light:shadow-[0_14px_45px_rgba(0,79,76,0.15)] lg:block"
        >
          <div className="flex items-center gap-2 border-b border-white/[0.08] bg-[#0B2023]/60 px-3 py-2 light:border-[#0B2023]/10 light:bg-white/70">
            <span className="font-mono text-[10px] text-[#1AF3DC] light:text-[#004F4C]">❯_</span>
            <span className="font-mono text-[9px] text-[#609395] light:text-[#0B2023]/50">qua — deploy</span>
          </div>
          <div className="space-y-1.5 px-3 py-2.5 font-mono text-[9px] leading-relaxed text-[#609395] light:text-[#0B2023]/60">
            <p><span className="text-[#1AF3DC] light:text-[#004F4C]">❯</span> qua build --release</p>
            <p className="text-[#609395] light:text-[#004F4C]/80">✓ compiled in 1.2s</p>
            <p className="text-[#609395] light:text-[#004F4C]/80">✓ deployed to production</p>
          </div>
        </motion.div>
        <div className="absolute right-[10%] top-[27%] hidden h-[110px] w-[210px] rotate-[13deg] rounded-[12px] bg-[#004F4C]/20 lg:block" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-[660px] flex-col items-center text-center">
          <Reveal delay={0.05} blur>
            <span className="rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-1.5 text-[12px] font-medium tracking-[-0.02em] text-[#609395] shadow-[0_4px_20px_rgba(0,0,0,0.16)] backdrop-blur-md light:border-[#0B2023]/10 light:bg-white/60 light:text-[#0B2023]/75 light:shadow-[0_4px_20px_rgba(11,32,35,0.08)] sm:text-sm">
              Software development company
            </span>
          </Reveal>

          <h1 className="mt-7 text-[46px] font-semibold leading-[0.96] tracking-[-0.065em] sm:mt-8 sm:text-[62px] lg:text-[68px]">
            <SplitText text="We build things" charClassName="hero-char" />
            <br />
            <SplitText
              text="that work"
              charClassName="hero-char-accent"
              wordClassName="bg-gradient-to-r from-[#004F4C] via-[#1AF3DC] to-[#1AF3DC] bg-clip-text text-transparent"
            />
          </h1>

          <Reveal delay={0.45} blur>
            <p className="mt-6 max-w-[560px] text-[14px] font-medium leading-[1.5] tracking-[-0.025em] text-[#EEFEFC]/80 light:text-[#0B2023]/75 sm:text-[16px]">
              Qua is a software development company that provides digital technology services. From mobile and web development to custom software solutions, we&apos;re dedicated to delivering innovative, high-quality solutions tailored to your unique needs.
            </p>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="mt-7">
              <MagneticButton
                pulse
                className="rounded-[2px] bg-gradient-to-r from-[#004F4C] to-[#1AF3DC] px-6 py-3 text-[14px] font-medium text-[#EEFEFC] shadow-[0_6px_20px_rgba(0,79,76,0.32)]"
              >
                Contact us
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
