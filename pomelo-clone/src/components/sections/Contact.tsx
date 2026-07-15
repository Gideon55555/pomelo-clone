"use client";

import { motion, useReducedMotion } from "framer-motion";
import MagneticButton from "@/components/common/MagneticButton";

const team = [
  { name: "Cecilia Marin", role: "Head of Business Development", initials: "CM" },
  { name: "Alfonso Duarte", role: "Head of Solutions", initials: "AD" },
  { name: "Santiago Vela", role: "Delivery Lead", initials: "SV" },
  { name: "Jacob Linden", role: "Engineering Manager", initials: "JL" },
  { name: "Rafaela Gomes", role: "Design Director", initials: "RG" },
  { name: "Paula Bern", role: "Head of QA & Compliance", initials: "PB" },
];

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-[#000339] px-6 pb-28 pt-24 text-white light:bg-[#f1f2f2] light:text-[#000339] sm:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_46%_at_50%_80%,rgba(22,72,255,0.3),transparent_74%)] light:bg-[radial-gradient(ellipse_50%_46%_at_50%_80%,rgba(52,132,255,0.16),transparent_74%)]" />
      <div className="hero-orb pointer-events-none absolute left-[18%] top-[45%] h-64 w-64 rounded-full bg-[#1648ff]/20 blur-[110px]" />
      <div className="hero-orb pointer-events-none absolute right-[18%] top-[35%] h-64 w-64 rounded-full bg-[#3484ff]/15 blur-[110px] [animation-delay:-6s]" />

      <div className="relative z-10 mx-auto max-w-[900px] text-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#80b4ff] light:text-[#1648ff]">
            Let&apos;s talk
          </p>
          <h2 className="mx-auto mt-3 max-w-[480px] text-[40px] font-semibold leading-[0.98] tracking-[-0.065em] sm:text-[52px]">
            Build the solution your business needs
          </h2>
          <p className="mx-auto mt-5 max-w-[420px] text-[13px] leading-relaxed text-white/70 light:text-[#000339]/70 sm:text-[15px]">
            Talk to our team and get started faster.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center rounded-[14px] border border-white/[0.08] bg-[linear-gradient(160deg,rgba(52,132,255,0.09),rgba(0,3,57,0.55))] px-3 py-5 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-[#80b4ff]/55 hover:shadow-[0_14px_38px_rgba(22,72,255,0.28)] light:border-[#000339]/10 light:bg-[linear-gradient(160deg,rgba(52,132,255,0.09),rgba(255,255,255,0.9))] light:hover:border-[#1648ff]/45 light:hover:shadow-[0_14px_38px_rgba(22,72,255,0.15)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full border border-[#3484ff]/40 bg-[#1648ff]/25 text-[12px] font-semibold text-[#b3d2ff] light:bg-[#1648ff]/15 light:text-[#1648ff]">
                {member.initials}
              </div>
              <p className="mt-3 text-[13px] font-semibold tracking-[-0.02em]">{member.name}</p>
              <p className="mt-1 text-[11px] leading-snug text-white/60 light:text-[#000339]/60">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <MagneticButton
            pulse
            className="rounded-[2px] bg-gradient-to-r from-[#1648ff] to-[#3484ff] px-7 py-3.5 text-[14px] font-medium text-white shadow-[0_8px_26px_rgba(22,72,255,0.4)]"
          >
            Contact us
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
