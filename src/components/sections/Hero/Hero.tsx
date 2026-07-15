"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";
import CodeRain from "@/components/common/CodeRain";
import Container from "@/components/common/Container";
import MagneticButton from "@/components/common/MagneticButton";
import Reveal from "@/components/common/Reveal";

const headlineContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const headlineWord = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [canHover, setCanHover] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gridX = useSpring(useTransform(mouseX, (v) => v * 10), { stiffness: 45, damping: 18 });
  const gridY = useSpring(useTransform(mouseY, (v) => v * 8), { stiffness: 45, damping: 18 });
  const orbX = useSpring(useTransform(mouseX, (v) => v * 24), { stiffness: 28, damping: 16 });
  const orbY = useSpring(useTransform(mouseY, (v) => v * 18), { stiffness: 28, damping: 16 });

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!canHover || shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#000339] pb-12 pt-28 text-white light:bg-[#f1f2f2] light:text-[#000339] sm:pt-32"
    >
      <motion.div
        aria-hidden="true"
        style={shouldReduceMotion ? undefined : { x: orbX, y: orbY }}
        className="absolute inset-0"
      >
        <div className="hero-orb absolute inset-0 bg-[radial-gradient(ellipse_50%_42%_at_50%_57%,rgba(22,72,255,0.28),transparent_72%)] light:bg-[radial-gradient(ellipse_50%_42%_at_50%_57%,rgba(52,132,255,0.18),transparent_72%)]" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        style={shouldReduceMotion ? undefined : { x: gridX, y: gridY }}
        className="absolute -inset-6"
      >
        <div className="hero-grid absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(52,132,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(52,132,255,0.045)_1px,transparent_1px)] [background-size:82px_82px] light:[background-image:linear-gradient(rgba(22,72,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(22,72,255,0.08)_1px,transparent_1px)]" />
      </motion.div>
      <div className="absolute left-[18%] top-[18%] h-px w-[42%] bg-gradient-to-r from-transparent via-[#1648ff]/45 to-transparent" />
      <div className="absolute right-[16%] top-[21%] h-[1px] w-[25%] bg-gradient-to-r from-transparent to-[#3484ff]/30" />

      <CodeRain />

      <motion.div
        data-cursor="hover"
        whileHover={
          shouldReduceMotion
            ? undefined
            : { y: -12, rotate: -6, scale: 1.06 }
        }
        transition={{ type: "spring", stiffness: 220, damping: 16 }}
        className="absolute left-[14%] top-[56%] hidden w-[190px] -rotate-[14deg] cursor-pointer overflow-hidden rounded-[12px] border border-[#3484ff]/60 bg-[linear-gradient(135deg,rgba(22,72,255,0.24),rgba(0,3,57,0.7))] shadow-[-10px_14px_35px_rgba(22,72,255,0.2)] backdrop-blur-sm transition-shadow duration-300 hover:border-[#80b4ff]/80 hover:shadow-[-12px_20px_50px_rgba(22,72,255,0.4)] light:border-[#1648ff]/30 light:bg-[linear-gradient(135deg,rgba(52,132,255,0.14),rgba(255,255,255,0.85))] light:shadow-[-10px_14px_35px_rgba(22,72,255,0.14)] lg:block"
      >
        <div className="flex items-center gap-1.5 border-b border-white/[0.08] bg-[#000339]/60 px-3 py-2 light:border-[#000339]/10 light:bg-white/70">
          <span className="h-2 w-2 rounded-full bg-[#1648ff]/80" />
          <span className="h-2 w-2 rounded-full bg-[#3484ff]/70" />
          <span className="h-2 w-2 rounded-full bg-[#80b4ff]/60" />
        </div>
        <div className="space-y-2 px-3 py-3">
          <div className="h-1.5 w-[70%] rounded-full bg-[#3484ff]/60" />
          <div className="ml-4 h-1.5 w-[52%] rounded-full bg-[#80b4ff]/40" />
          <div className="ml-4 h-1.5 w-[62%] rounded-full bg-white/20 light:bg-[#000339]/20" />
          <div className="h-1.5 w-[38%] rounded-full bg-[#3484ff]/50" />
        </div>
      </motion.div>
      <div className="pointer-events-none absolute left-[17%] top-[53%] hidden h-[130px] w-[190px] -rotate-[14deg] rounded-[12px] bg-[#3484ff]/10 blur-sm lg:block" />

      <motion.div
        data-cursor="hover"
        whileHover={
          shouldReduceMotion
            ? undefined
            : { y: -12, rotate: 5, scale: 1.06 }
        }
        transition={{ type: "spring", stiffness: 220, damping: 16 }}
        className="absolute right-[13%] top-[31%] hidden w-[210px] rotate-[13deg] cursor-pointer overflow-hidden rounded-[12px] border border-[#3484ff]/70 bg-[linear-gradient(135deg,rgba(22,72,255,0.28),rgba(0,3,57,0.72))] shadow-[0_14px_45px_rgba(22,72,255,0.2)] backdrop-blur-sm transition-shadow duration-300 hover:border-[#80b4ff]/80 hover:shadow-[0_20px_55px_rgba(22,72,255,0.42)] light:border-[#1648ff]/30 light:bg-[linear-gradient(135deg,rgba(52,132,255,0.16),rgba(255,255,255,0.88))] light:shadow-[0_14px_45px_rgba(22,72,255,0.15)] lg:block"
      >
        <div className="flex items-center gap-2 border-b border-white/[0.08] bg-[#000339]/60 px-3 py-2 light:border-[#000339]/10 light:bg-white/70">
          <span className="font-mono text-[10px] text-[#80b4ff] light:text-[#1648ff]">❯_</span>
          <span className="font-mono text-[9px] text-white/40 light:text-[#000339]/50">qua — deploy</span>
        </div>
        <div className="space-y-1.5 px-3 py-2.5 font-mono text-[9px] leading-relaxed text-white/55 light:text-[#000339]/60">
          <p><span className="text-[#80b4ff] light:text-[#1648ff]">❯</span> qua build --release</p>
          <p className="text-[#9ac8ff] light:text-[#1648ff]/80">✓ compiled in 1.2s</p>
          <p className="text-[#9ac8ff] light:text-[#1648ff]/80">✓ deployed to production</p>
        </div>
      </motion.div>
      <div className="pointer-events-none absolute right-[10%] top-[27%] hidden h-[110px] w-[210px] rotate-[13deg] rounded-[12px] bg-[#1648ff]/20 lg:block" />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-[660px] flex-col items-center text-center">
          <Reveal delay={0.05}>
            <span className="rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-1.5 text-[12px] font-medium tracking-[-0.02em] text-white/70 shadow-[0_4px_20px_rgba(0,0,0,0.16)] backdrop-blur-md light:border-[#000339]/10 light:bg-white/60 light:text-[#000339]/75 light:shadow-[0_4px_20px_rgba(0,3,57,0.08)] sm:text-sm">
              Software development company
            </span>
          </Reveal>

          <motion.h1
            variants={headlineContainer}
            initial={shouldReduceMotion ? false : "hidden"}
            animate={shouldReduceMotion ? undefined : "show"}
            className="mt-7 text-[46px] font-semibold leading-[0.96] tracking-[-0.065em] sm:mt-8 sm:text-[62px] lg:text-[68px]"
          >
            {["We", "build", "things"].map((word) => (
              <motion.span key={word} variants={headlineWord} className="inline-block">
                {word}&nbsp;
              </motion.span>
            ))}
            <br />
            {["that", "work"].map((word) => (
              <motion.span
                key={word}
                variants={headlineWord}
                className="inline-block bg-gradient-to-r from-[#1648ff] via-[#3484ff] to-[#80b4ff] bg-clip-text text-transparent"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.h1>

          <Reveal delay={0.45}>
            <p className="mt-6 max-w-[560px] text-[14px] font-medium leading-[1.5] tracking-[-0.025em] text-white/80 light:text-[#000339]/75 sm:text-[16px]">
              Qua is a software development company that provides digital technology services. From mobile and web development to custom software solutions, we&apos;re dedicated to delivering innovative, high-quality solutions tailored to your unique needs.
            </p>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="mt-7">
              <MagneticButton
                pulse
                className="rounded-[2px] bg-gradient-to-r from-[#1648ff] to-[#3484ff] px-6 py-3 text-[14px] font-medium text-white shadow-[0_6px_20px_rgba(22,72,255,0.32)]"
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
