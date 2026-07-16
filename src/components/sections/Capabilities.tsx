"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Cpu, Globe, SlidersHorizontal, Zap } from "lucide-react";
import { useRef } from "react";
import Eyebrow from "@/components/common/Eyebrow";
import InteractiveCard from "@/components/common/InteractiveCard";
import MagneticButton from "@/components/common/MagneticButton";
import { useCountUp } from "@/hooks/useCountUp";
import { useGridStagger } from "@/hooks/useGridStagger";

function CountUpStat({
  value,
  decimals = 0,
  suffix = "",
  label,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
}) {
  const { ref, display } = useCountUp<HTMLParagraphElement>(value, 1400, decimals);

  return (
    <div className="rounded-lg border border-white/[0.07] bg-[#0B2023]/60 p-3 light:border-[#0B2023]/10 light:bg-white/75">
      <p ref={ref} className="text-[16px] font-semibold text-[#EEFEFC] light:text-[#0B2023]">
        {display}
        {suffix}
      </p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#609395] light:text-[#0B2023]/60">{label}</p>
    </div>
  );
}

const capabilities = [
  {
    title: "Global scalability",
    description: "One codebase and one team, ready to grow with you across every market you enter.",
    icon: Globe,
  },
  {
    title: "Flexible solutions",
    description: "Architecture and engagement models shaped around your business, not the other way around.",
    icon: SlidersHorizontal,
  },
  {
    title: "Speed with excellence",
    description: "Short, focused delivery cycles that ship real value without cutting corners.",
    icon: Zap,
  },
  {
    title: "Next-gen tech",
    description: "API-first, cloud-native foundations for fast, reliable, maintainable products.",
    icon: Cpu,
  },
];

export default function Capabilities() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  useGridStagger(sectionRef);

  return (
    <section ref={sectionRef} id="expertise" className="relative isolate overflow-hidden bg-[#0B2023] px-6 pb-24 pt-24 text-[#EEFEFC] light:bg-[#EEFEFC] light:text-[#0B2023] sm:px-10">
      <div className="glow-accent absolute inset-0 bg-[radial-gradient(ellipse_50%_44%_at_50%_84%,rgba(0,79,76,0.26),transparent_74%)] light:bg-[radial-gradient(ellipse_50%_44%_at_50%_84%,rgba(26,243,220,0.15),transparent_74%)]" />

      <div className="relative z-10 mx-auto max-w-[1050px]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <Eyebrow
            text="Key capabilities"
            className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#1AF3DC] light:text-[#004F4C]"
          />
          <h2 className="mx-auto mt-3 max-w-[540px] text-[43px] font-semibold leading-[0.98] tracking-[-0.065em] sm:text-[54px]">
            Technology built to scale
          </h2>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-5 max-w-[480px] text-[13px] leading-relaxed text-[#609395] light:text-[#0B2023]/70 sm:text-[15px]"
          >
            Everything you need to build, run, and grow your digital product.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <InteractiveCard
              key={capability.title}
              className="batch-card group rounded-[14px] border border-white/[0.09] bg-[linear-gradient(160deg,rgba(26,243,220,0.1),rgba(11,32,35,0.55))] p-6 backdrop-blur-sm light:border-[#0B2023]/10 light:bg-[linear-gradient(160deg,rgba(26,243,220,0.09),rgba(255,255,255,0.9))]"
            >
              <div className="grid h-9 w-9 place-items-center rounded-lg border border-[#1AF3DC]/40 bg-[#004F4C]/20 text-[#1AF3DC] transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110 light:text-[#004F4C]">
                <capability.icon className="h-4 w-4" strokeWidth={1.7} />
              </div>
              <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.04em]">{capability.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.55] text-[#609395] light:text-[#0B2023]/70">{capability.description}</p>
            </InteractiveCard>
          ))}
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.72, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid items-center gap-10 lg:grid-cols-2"
        >
          <div>
            <Eyebrow
              text="Dashboard & AI"
              className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#1AF3DC] light:text-[#004F4C]"
            />
            <h3 className="mt-3 max-w-[400px] text-[26px] font-semibold leading-[1.08] tracking-[-0.05em] sm:text-[32px]">
              Full visibility of your product, powered by AI
            </h3>
            <p className="mt-4 max-w-[460px] text-[13px] leading-relaxed text-[#609395] light:text-[#0B2023]/70 sm:text-[15px]">
              Follow progress, releases, and performance in real time. AI assists every layer of
              our delivery — automating routine work, catching issues early, and shortening your
              time to market.
            </p>
            <div className="mt-6">
              <MagneticButton className="rounded-[2px] bg-gradient-to-r from-[#004F4C] to-[#1AF3DC] px-6 py-3 text-[14px] font-medium text-[#EEFEFC] shadow-[0_8px_24px_rgba(0,79,76,0.35)]">
                Explore how we work
              </MagneticButton>
            </div>
          </div>

          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-[16px] border border-[#1AF3DC]/35 bg-[linear-gradient(150deg,rgba(0,79,76,0.18),rgba(11,32,35,0.75))] p-6 shadow-[0_24px_60px_rgba(0,79,76,0.25)] light:border-[#004F4C]/25 light:bg-[linear-gradient(150deg,rgba(26,243,220,0.14),rgba(255,255,255,0.92))] light:shadow-[0_24px_60px_rgba(0,79,76,0.16)]"
          >
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-3 light:border-[#0B2023]/10">
              <span className="text-[13px] font-semibold tracking-[-0.02em] text-[#EEFEFC]/90 light:text-[#0B2023]/90">Delivery dashboard</span>
              <span className="rounded-full bg-[#004F4C]/30 px-2.5 py-1 text-[10px] text-[#1AF3DC] light:bg-[#004F4C]/15 light:text-[#004F4C]">Live</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <CountUpStat value={128} label="Releases shipped" />
              <CountUpStat value={99.98} decimals={2} suffix="%" label="Uptime" />
              <CountUpStat value={3} label="Open issues" />
            </div>
            <div className="mt-4 flex items-end gap-1.5">
              {[34, 52, 41, 66, 58, 78, 72, 90, 84, 96].map((height, index) => (
                <div
                  key={index}
                  style={{ height: `${height * 0.5}px` }}
                  className="w-full rounded-sm bg-gradient-to-t from-[#004F4C]/60 to-[#1AF3DC]/80"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
