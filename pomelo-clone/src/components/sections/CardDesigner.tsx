"use client";

import { motion, useReducedMotion } from "framer-motion";
import MagneticButton from "@/components/common/MagneticButton";
import {
  Crosshair,
  Layers,
  MonitorSmartphone,
  Plus,
  Rocket,
  RotateCcw,
  Target,
  Undo2,
  Users,
} from "lucide-react";
import { useState } from "react";

const choices = [
  { label: "Choose your product", detail: "Mobile app, web platform, or custom software.", icon: MonitorSmartphone, position: "left-0 top-8 sm:left-[10%]" },
  { label: "Define your goals", detail: "Growth, efficiency, customer experience, or scale.", icon: Target, position: "left-8 top-40 sm:left-[18%]" },
  { label: "Select your audience", detail: "Customers, teams, partners, or internal users.", icon: Users, position: "left-14 top-64 sm:left-[25%]" },
  { label: "Set the project scope", detail: "MVP, redesign, or end-to-end product delivery.", icon: Crosshair, position: "left-20 top-[21rem] sm:left-[31%]" },
  { label: "Choose a platform", detail: "iOS, Android, web, cloud, or all of the above.", icon: Layers, position: "right-1 top-24 sm:right-[13%]" },
  { label: "Plan your launch", detail: "Build, test, release, and evolve with confidence.", icon: Rocket, position: "right-0 top-64 sm:right-[5%]" },
];

export default function CardDesigner() {
  const [selected, setSelected] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="relative isolate min-h-[720px] overflow-hidden bg-[#000339] px-5 pb-20 pt-24 text-white light:bg-[#f1f2f2] light:text-[#000339] sm:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_46%_40%_at_50%_62%,rgba(22,72,255,0.28),transparent_76%)] light:bg-[radial-gradient(ellipse_46%_40%_at_50%_62%,rgba(52,132,255,0.15),transparent_76%)]" />
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
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#80b4ff] light:text-[#1648ff]">
          Your product, your way
        </p>
        <h2 className="mx-auto mt-3 max-w-[570px] text-[43px] font-semibold leading-[0.98] tracking-[-0.065em] sm:text-[58px]">
          You define it,
          <br />
          we build it
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-[13px] leading-relaxed text-white/70 light:text-[#000339]/70 sm:text-[15px]">
          From discovery to launch, we turn your ideas into high-performing digital products built around your business.
        </p>
        <div className="mt-5">
          <MagneticButton className="rounded-[2px] bg-gradient-to-r from-[#1648ff] to-[#3484ff] px-6 py-3 text-[14px] font-medium text-white shadow-[0_8px_24px_rgba(22,72,255,0.35)]">
            Start your project
          </MagneticButton>
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto mt-10 h-[370px] max-w-[860px] sm:mt-12">
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, -5, 0], rotate: [-1, 1, -1] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[112px] h-[170px] w-[310px] -translate-x-1/2 overflow-hidden rounded-xl border border-[#80b4ff]/45 bg-[linear-gradient(135deg,rgba(22,72,255,0.32),rgba(0,3,57,0.86))] text-left shadow-[0_24px_55px_rgba(22,72,255,0.36)]"
        >
          <div className="flex items-center gap-2 border-b border-white/[0.08] bg-[#000339]/70 px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-[#1648ff]/80" />
            <span className="h-2 w-2 rounded-full bg-[#3484ff]/70" />
            <span className="h-2 w-2 rounded-full bg-[#80b4ff]/60" />
            <span className="ml-2 text-[10px] font-medium tracking-[0.06em] text-white/60">
              your-product.tsx — qua
            </span>
          </div>
          <div className="space-y-2 px-4 py-3.5 font-mono text-[11px] leading-relaxed">
            <p><span className="text-[#3484ff]">import</span> <span className="text-white/85">&#123; idea &#125;</span> <span className="text-[#3484ff]">from</span> <span className="text-[#9ac8ff]">&quot;you&quot;</span>;</p>
            <p><span className="text-[#3484ff]">const</span> <span className="text-[#80b4ff]">product</span> <span className="text-white/60">=</span> <span className="text-[#3484ff]">await</span> <span className="text-[#b3d2ff]">qua</span><span className="text-white/60">.</span><span className="text-[#80b4ff]">build</span><span className="text-white/60">(idea);</span></p>
            <p><span className="text-[#b3d2ff]">product</span><span className="text-white/60">.</span><span className="text-[#80b4ff]">ship</span><span className="text-white/60">();</span> <span className="text-white/35">{"// build · ship · grow"}</span></p>
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
            className={`absolute z-20 hidden w-[280px] rounded-md border px-3.5 py-2.5 text-left backdrop-blur-md transition-colors sm:block ${choice.position} ${
              selected === index
                ? "border-[#80b4ff]/75 bg-[#1648ff]/30 shadow-[0_10px_26px_rgba(22,72,255,0.34)] light:border-[#1648ff]/55 light:bg-[#1648ff]/15"
                : "border-white/10 bg-[#000339]/65 hover:border-[#3484ff]/55 hover:bg-[#1648ff]/15 light:border-[#000339]/10 light:bg-white/75 light:hover:bg-[#1648ff]/10"
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded border border-white/10 text-[#80b4ff] light:border-[#000339]/10 light:text-[#1648ff]">
                <choice.icon className="h-3.5 w-3.5" strokeWidth={1.8} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[12px] font-medium text-white/90 light:text-[#000339]/90">{choice.label}</span>
                <span className="mt-0.5 block truncate text-[10px] text-white/60 light:text-[#000339]/60">{choice.detail}</span>
              </span>
              <span className="grid h-6 w-6 place-items-center rounded bg-white/[0.08] text-white/65 light:bg-[#000339]/[0.06] light:text-[#000339]/60">
                <Plus className="h-3.5 w-3.5" strokeWidth={1.8} />
              </span>
            </span>
          </motion.button>
        ))}

        <div className="absolute bottom-1 left-1/2 flex -translate-x-1/2 gap-2">
          <button className="flex items-center gap-1.5 rounded-sm border border-white/15 bg-white/[0.03] px-4 py-2.5 text-[12px] text-white/70 transition hover:border-[#3484ff]/60 hover:text-white light:border-[#000339]/15 light:bg-white/60 light:text-[#000339]/70 light:hover:text-[#000339]">
            <Undo2 className="h-3.5 w-3.5" strokeWidth={1.8} /> Go back
          </button>
          <button className="flex items-center gap-1.5 rounded-sm border border-white/15 bg-white/[0.03] px-4 py-2.5 text-[12px] text-white/70 transition hover:border-[#3484ff]/60 hover:text-white light:border-[#000339]/15 light:bg-white/60 light:text-[#000339]/70 light:hover:text-[#000339]">
            <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.8} /> Start over
          </button>
        </div>
      </div>
    </section>
  );
}
