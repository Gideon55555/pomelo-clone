"use client";

import { motion, useReducedMotion } from "framer-motion";

const capabilities = [
  {
    title: "Global scalability",
    description: "One codebase and one team, ready to grow with you across every market you enter.",
  },
  {
    title: "Flexible solutions",
    description: "Architecture and engagement models shaped around your business, not the other way around.",
  },
  {
    title: "Speed with excellence",
    description: "Short, focused delivery cycles that ship real value without cutting corners.",
  },
  {
    title: "Next-gen tech",
    description: "API-first, cloud-native foundations for fast, reliable, maintainable products.",
  },
];

export default function Capabilities() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="expertise" className="relative isolate overflow-hidden bg-[#000339] px-6 pb-24 pt-24 text-white sm:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_44%_at_50%_84%,rgba(22,72,255,0.26),transparent_74%)]" />

      <div className="relative z-10 mx-auto max-w-[1050px]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#80b4ff]">
            Key capabilities
          </p>
          <h2 className="mx-auto mt-3 max-w-[540px] text-[43px] font-semibold leading-[0.98] tracking-[-0.065em] sm:text-[54px]">
            Technology built to scale
          </h2>
          <p className="mx-auto mt-5 max-w-[440px] text-[11px] leading-relaxed text-white/55 sm:text-xs">
            Everything you need to build, run, and grow your digital product.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              whileHover={{ y: -7 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[14px] border border-white/[0.09] bg-[linear-gradient(160deg,rgba(52,132,255,0.1),rgba(0,3,57,0.55))] p-6 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-[#80b4ff]/60 hover:shadow-[0_18px_46px_rgba(22,72,255,0.3)]"
            >
              <div className="grid h-9 w-9 place-items-center rounded-lg border border-[#3484ff]/40 bg-[#1648ff]/20 text-[13px] text-[#80b4ff]">
                {["◈", "▣", "◉", "▷"][index]}
              </div>
              <h3 className="mt-4 text-[15px] font-semibold tracking-[-0.04em]">{capability.title}</h3>
              <p className="mt-2 text-[10px] leading-[1.5] text-white/55">{capability.description}</p>
            </motion.article>
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
            <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#80b4ff]">
              Dashboard & AI
            </p>
            <h3 className="mt-3 max-w-[400px] text-[26px] font-semibold leading-[1.08] tracking-[-0.05em] sm:text-[32px]">
              Full visibility of your product, powered by AI
            </h3>
            <p className="mt-4 max-w-[420px] text-[11px] leading-relaxed text-white/60 sm:text-xs">
              Follow progress, releases, and performance in real time. AI assists every layer of
              our delivery — automating routine work, catching issues early, and shortening your
              time to market.
            </p>
            <button className="button-shimmer mt-6 rounded-[2px] bg-gradient-to-r from-[#1648ff] to-[#3484ff] px-5 py-2.5 text-[10px] font-medium text-white shadow-[0_8px_24px_rgba(22,72,255,0.35)]">
              Explore how we work
            </button>
          </div>

          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-[16px] border border-[#3484ff]/35 bg-[linear-gradient(150deg,rgba(22,72,255,0.18),rgba(0,3,57,0.75))] p-6 shadow-[0_24px_60px_rgba(22,72,255,0.25)]"
          >
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
              <span className="text-[10px] font-semibold tracking-[-0.02em] text-white/85">Delivery dashboard</span>
              <span className="rounded-full bg-[#1648ff]/30 px-2 py-0.5 text-[8px] text-[#80b4ff]">Live</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { label: "Releases shipped", value: "128" },
                { label: "Uptime", value: "99.98%" },
                { label: "Open issues", value: "3" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg border border-white/[0.07] bg-[#000339]/60 p-3">
                  <p className="text-[13px] font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-[7px] uppercase tracking-[0.14em] text-white/45">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-end gap-1.5">
              {[34, 52, 41, 66, 58, 78, 72, 90, 84, 96].map((height, index) => (
                <div
                  key={index}
                  style={{ height: `${height * 0.5}px` }}
                  className="w-full rounded-sm bg-gradient-to-t from-[#1648ff]/60 to-[#80b4ff]/80"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
