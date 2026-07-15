"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const choices = [
  { label: "Choose your product", detail: "Mobile app, web platform, or custom software.", icon: "◌", position: "left-0 top-8 sm:left-[10%]" },
  { label: "Define your goals", detail: "Growth, efficiency, customer experience, or scale.", icon: "▭", position: "left-8 top-40 sm:left-[18%]" },
  { label: "Select your audience", detail: "Customers, teams, partners, or internal users.", icon: "Aᴮ", position: "left-14 top-64 sm:left-[25%]" },
  { label: "Set the project scope", detail: "MVP, redesign, or end-to-end product delivery.", icon: "◉", position: "left-20 top-[21rem] sm:left-[31%]" },
  { label: "Choose a platform", detail: "iOS, Android, web, cloud, or all of the above.", icon: "▣", position: "right-1 top-24 sm:right-[13%]" },
  { label: "Plan your launch", detail: "Build, test, release, and evolve with confidence.", icon: "▷", position: "right-0 top-64 sm:right-[5%]" },
];

export default function CardDesigner() {
  const [selected, setSelected] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="relative isolate min-h-[720px] overflow-hidden bg-[#000339] px-5 pb-20 pt-24 text-white sm:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_46%_40%_at_50%_62%,rgba(22,72,255,0.28),transparent_76%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(52,132,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(52,132,255,0.04)_1px,transparent_1px)] [background-size:84px_84px]" />
      <div className="hero-orb pointer-events-none absolute left-[25%] top-[53%] h-64 w-64 rounded-full bg-[#1648ff]/20 blur-[100px]" />
      <div className="hero-orb pointer-events-none absolute right-[25%] top-[56%] h-64 w-64 rounded-full bg-[#3484ff]/15 blur-[100px] [animation-delay:-7s]" />

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto max-w-[1050px] text-center"
      >
        <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#80b4ff]">
          Your product, your way
        </p>
        <h2 className="mx-auto mt-3 max-w-[570px] text-[43px] font-semibold leading-[0.98] tracking-[-0.065em] sm:text-[58px]">
          You define it,
          <br />
          we build it
        </h2>
        <p className="mx-auto mt-5 max-w-[530px] text-[10px] leading-relaxed text-white/55 sm:text-xs">
          From discovery to launch, we turn your ideas into high-performing digital products built around your business.
        </p>
        <button className="button-shimmer mt-5 rounded-[2px] bg-gradient-to-r from-[#1648ff] to-[#3484ff] px-5 py-2.5 text-[10px] font-medium text-white shadow-[0_8px_24px_rgba(22,72,255,0.35)]">
          Start your project
        </button>
      </motion.div>

      <div className="relative z-10 mx-auto mt-10 h-[370px] max-w-[860px] sm:mt-12">
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, -5, 0], rotate: [-1, 1, -1] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[112px] h-[170px] w-[264px] -translate-x-1/2 rounded-xl border border-[#80b4ff]/45 bg-[linear-gradient(135deg,rgba(52,132,255,0.7),rgba(0,3,57,0.74))] p-5 text-left shadow-[0_24px_55px_rgba(22,72,255,0.36)]"
        >
          <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_85%_8%,rgba(242,242,242,0.34),transparent_18%)]" />
          <div className="relative flex items-center justify-between text-[10px] font-semibold tracking-[0.16em] text-white/80">
            <span>QUA DIGITAL</span>
            <span className="text-lg tracking-normal">◫</span>
          </div>
          <div className="relative mt-11 text-[12px] tracking-[0.16em] text-white/90">BUILD · SHIP · GROW</div>
          <div className="relative mt-5 flex justify-between text-[8px] uppercase tracking-[0.1em] text-white/70">
            <span>Your next product</span>
            <span>EST. 2026</span>
          </div>
        </motion.div>

        {choices.map((choice, index) => (
          <motion.button
            key={choice.label}
            type="button"
            aria-pressed={selected === index}
            onClick={() => setSelected(selected === index ? null : index)}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.025 }}
            whileTap={{ scale: 0.97 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute z-20 hidden w-[232px] rounded-md border px-3 py-2 text-left backdrop-blur-md transition-colors sm:block ${choice.position} ${
              selected === index
                ? "border-[#80b4ff]/75 bg-[#1648ff]/30 shadow-[0_10px_26px_rgba(22,72,255,0.34)]"
                : "border-white/10 bg-[#000339]/65 hover:border-[#3484ff]/55 hover:bg-[#1648ff]/15"
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="grid h-5 w-5 place-items-center rounded border border-white/10 text-[9px] text-[#80b4ff]">{choice.icon}</span>
              <span className="min-w-0 flex-1">
                <span className="block text-[9px] font-medium text-white/90">{choice.label}</span>
                <span className="mt-0.5 block truncate text-[7px] text-white/45">{choice.detail}</span>
              </span>
              <span className="grid h-5 w-5 place-items-center rounded bg-white/[0.08] text-xs text-white/65">+</span>
            </span>
          </motion.button>
        ))}

        <div className="absolute bottom-1 left-1/2 flex -translate-x-1/2 gap-2">
          <button className="rounded-sm border border-white/15 bg-white/[0.03] px-3 py-2 text-[8px] text-white/55 transition hover:border-[#3484ff]/60 hover:text-white">↩ Go back</button>
          <button className="rounded-sm border border-white/15 bg-white/[0.03] px-3 py-2 text-[8px] text-white/55 transition hover:border-[#3484ff]/60 hover:text-white">↻ Start over</button>
        </div>
      </div>
    </section>
  );
}
