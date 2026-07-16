"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Eyebrow from "@/components/common/Eyebrow";
import InteractiveCard from "@/components/common/InteractiveCard";
import MagneticButton from "@/components/common/MagneticButton";
import { useGridStagger } from "@/hooks/useGridStagger";

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
  const sectionRef = useRef<HTMLElement>(null);
  useGridStagger(sectionRef);

  return (
    <section ref={sectionRef} id="contact" className="relative isolate overflow-hidden bg-[#0B2023] px-6 pb-28 pt-24 text-[#EEFEFC] light:bg-[#EEFEFC] light:text-[#0B2023] sm:px-10">
      <div className="glow-accent absolute inset-0 bg-[radial-gradient(ellipse_50%_46%_at_50%_80%,rgba(0,79,76,0.3),transparent_74%)] light:bg-[radial-gradient(ellipse_50%_46%_at_50%_80%,rgba(26,243,220,0.16),transparent_74%)]" />
      <div className="hero-orb pointer-events-none absolute left-[18%] top-[45%] h-64 w-64 rounded-full bg-[#004F4C]/20 blur-[110px]" />
      <div className="hero-orb pointer-events-none absolute right-[18%] top-[35%] h-64 w-64 rounded-full bg-[#1AF3DC]/15 blur-[110px] [animation-delay:-6s]" />

      <div className="relative z-10 mx-auto max-w-[900px] text-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow
            text="Let's talk"
            className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#1AF3DC] light:text-[#004F4C]"
          />
          <h2 className="mx-auto mt-3 max-w-[480px] text-[40px] font-semibold leading-[0.98] tracking-[-0.065em] sm:text-[52px]">
            Build the solution your business needs
          </h2>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-5 max-w-[420px] text-[13px] leading-relaxed text-[#609395] light:text-[#0B2023]/70 sm:text-[15px]"
          >
            Talk to our team and get started faster.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {team.map((member) => (
            <InteractiveCard
              key={member.name}
              className="batch-card flex flex-col items-center rounded-[14px] border border-white/[0.08] bg-[linear-gradient(160deg,rgba(26,243,220,0.09),rgba(11,32,35,0.55))] px-3 py-5 backdrop-blur-sm light:border-[#0B2023]/10 light:bg-[linear-gradient(160deg,rgba(26,243,220,0.09),rgba(255,255,255,0.9))]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full border border-[#1AF3DC]/40 bg-[#004F4C]/25 text-[12px] font-semibold text-[#EEFEFC] light:bg-[#004F4C]/15 light:text-[#004F4C]">
                {member.initials}
              </div>
              <p className="mt-3 text-[13px] font-semibold tracking-[-0.02em]">{member.name}</p>
              <p className="mt-1 text-[11px] leading-snug text-[#609395] light:text-[#0B2023]/60">{member.role}</p>
            </InteractiveCard>
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
            className="rounded-[2px] bg-gradient-to-r from-[#004F4C] to-[#1AF3DC] px-7 py-3.5 text-[14px] font-medium text-[#EEFEFC] shadow-[0_8px_26px_rgba(0,79,76,0.4)]"
          >
            Contact us
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
