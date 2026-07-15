"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Global66", mark: "⌁" },
  { name: "AstroPay", mark: "" },
  { name: "DiDi", mark: "◒" },
  { name: "stori", mark: "✣" },
  { name: "NOMAD", mark: "N" },
  { name: "Bancolombia", mark: "" },
];

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="relative isolate min-h-[720px] overflow-hidden bg-[#000339] px-6 pb-24 pt-20 text-white sm:px-10 sm:pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_46%_at_50%_90%,rgba(22,72,255,0.3),transparent_75%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[56%] bg-[linear-gradient(90deg,rgba(52,132,255,0.08)_1px,transparent_1px),linear-gradient(rgba(52,132,255,0.07)_1px,transparent_1px)] [background-size:68px_68px] [mask-image:linear-gradient(to_bottom,transparent,black)]" />
      <div className="absolute -bottom-32 left-[20%] h-80 w-80 rounded-full bg-[#1648ff]/20 blur-[115px]" />
      <div className="absolute -bottom-28 right-[20%] h-72 w-72 rounded-full bg-[#3484ff]/20 blur-[100px]" />

      <div className="relative mx-auto max-w-[1120px]">
        <p className="text-center text-[13px] font-medium tracking-[-0.025em] text-white/80">
          Banks, fintechs, and global businesses run on our technology
        </p>

        <div className="mx-auto mt-7 grid max-w-[950px] grid-cols-2 items-center gap-x-8 gap-y-8 text-center sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className={`flex items-center justify-center gap-1.5 text-[15px] font-semibold tracking-[-0.055em] text-white/75 ${
                partner.name === "NOMAD" ? "tracking-[0.05em]" : ""
              }`}
            >
              {partner.mark && (
                <span className="text-[14px] leading-none text-white/65">{partner.mark}</span>
              )}
              {partner.name}
            </motion.div>
          ))}
        </div>

        <div className="mt-28 text-center sm:mt-32">
          <p className="text-[8px] font-medium uppercase tracking-[0.28em] text-[#80b4ff]">
            Use cases
          </p>
          <h2 className="mx-auto mt-3 max-w-[620px] text-[43px] font-semibold leading-[0.98] tracking-[-0.065em] sm:text-[58px]">
            One technology,
            <br />
            endless applications
          </h2>
        </div>
      </div>
    </section>
  );
}
