"use client";

import { motion } from "framer-motion";
import {
  Braces,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Globe,
  PenTool,
  Smartphone,
} from "lucide-react";
import { useEffect, useState } from "react";

const partners = [
  { name: "NORTH", mark: "◈" },
  { name: "Venturely", mark: "" },
  { name: "Orbit", mark: "◒" },
  { name: "NEXUS", mark: "✣" },
  { name: "APEX", mark: "A" },
  { name: "elevate", mark: "" },
];

const useCases = [
  { title: "Mobile Apps", description: "Native and cross-platform apps built for real-world growth.", icon: Smartphone, tone: "from-[#1648ff] to-[#80b4ff]" },
  { title: "Web Platforms", description: "Fast, accessible digital products that people enjoy using.", icon: Globe, tone: "from-[#3484ff] to-[#b3d2ff]" },
  { title: "Custom Software", description: "Tailored software that simplifies complex operations.", icon: Braces, tone: "from-[#1648ff] to-[#5da0ff]" },
  { title: "Cloud Solutions", description: "Scalable cloud systems designed for reliable performance.", icon: Cloud, tone: "from-[#3484ff] to-[#9ac8ff]" },
  { title: "Product Design", description: "Clear, intuitive experiences shaped around your users.", icon: PenTool, tone: "from-[#1648ff] to-[#73aaff]" },
];

export default function UseCases() {
  const [activeCard, setActiveCard] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const carouselCases = [...useCases, ...useCases, ...useCases];

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveCard((current) => (current + 1) % useCases.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const previous = () =>
    setActiveCard((current) => (current - 1 + useCases.length) % useCases.length);
  const next = () => setActiveCard((current) => (current + 1) % useCases.length);

  return (
    <section
      id="use-cases"
      className="relative isolate min-h-[720px] overflow-hidden bg-[#000339] px-6 pb-24 pt-20 text-white sm:px-10 sm:pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_48%_44%_at_50%_77%,rgba(22,72,255,0.3),transparent_72%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(90deg,rgba(52,132,255,0.07)_1px,transparent_1px),linear-gradient(rgba(52,132,255,0.06)_1px,transparent_1px)] [background-size:68px_68px] [mask-image:linear-gradient(to_bottom,transparent,black)]" />
      <div className="absolute -bottom-32 left-[20%] h-80 w-80 rounded-full bg-[#1648ff]/20 blur-[115px]" />
      <div className="absolute -bottom-28 right-[20%] h-72 w-72 rounded-full bg-[#3484ff]/20 blur-[100px]" />

      <div className="relative mx-auto max-w-[1120px]">
          <p className="text-center text-[15px] font-medium tracking-[-0.025em] text-white/85">
          Ambitious teams build their next digital product with Qua
        </p>

        <div className="mx-auto mt-7 grid max-w-[950px] grid-cols-2 items-center gap-x-8 gap-y-8 text-center sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
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

        <motion.div
          className="mt-28 text-center sm:mt-32"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#80b4ff]">
            What we build
          </p>
          <h2 className="mx-auto mt-3 max-w-[620px] text-[43px] font-semibold leading-[0.98] tracking-[-0.065em] sm:text-[58px]">
            Digital products,
            <br />
            built to perform
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.76, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-10 sm:mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.button
            type="button"
            aria-label="Show previous use case"
            onClick={previous}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(52, 132, 255, 0.18)" }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 text-white/50 transition hover:border-[#3484ff]/60 hover:text-white lg:grid"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.8} />
          </motion.button>
          <motion.button
            type="button"
            aria-label="Show next use case"
            onClick={next}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(52, 132, 255, 0.18)" }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 text-white/50 transition hover:border-[#3484ff]/60 hover:text-white lg:grid"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.8} />
          </motion.button>

          <div className="relative mx-auto h-[330px] max-w-[980px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <motion.div
              animate={{ x: `calc(50% - ${(activeCard + useCases.length) * 215 + 95}px)` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="absolute left-0 top-4 flex gap-5"
            >
              {carouselCases.map((useCase, index) => {
                const isActive = index === activeCard + useCases.length;
                const distanceFromActive = Math.abs(index - (activeCard + useCases.length));

                return (
                  <motion.article
                    key={`${useCase.title}-${index}`}
                    animate={{
                      opacity: isActive ? 1 : distanceFromActive === 1 ? 0.82 : 0.58,
                      scale: isActive ? 1.08 : distanceFromActive === 1 ? 0.96 : 0.88,
                    }}
                    whileHover={{ y: -8 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                    className={`group flex h-[262px] w-[195px] shrink-0 cursor-pointer flex-col overflow-hidden rounded-[18px] border px-5 py-5 text-left backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-[#80b4ff]/80 hover:shadow-[0_18px_46px_rgba(22,72,255,0.35)] ${
                      isActive
                        ? "active-case-card border-[#80b4ff]/45 bg-[linear-gradient(145deg,rgba(22,72,255,0.3),rgba(0,3,57,0.72))] shadow-[0_14px_42px_rgba(22,72,255,0.28)]"
                        : "border-white/[0.1] bg-[linear-gradient(145deg,rgba(52,132,255,0.13),rgba(0,3,57,0.58))]"
                    }`}
                  >
                    <div className="relative mb-4 grid h-[66px] place-items-center transition-transform duration-300 ease-out group-hover:scale-110">
                      <div className={`grid h-12 w-12 -rotate-6 place-items-center rounded-xl bg-gradient-to-br ${useCase.tone} shadow-[0_10px_22px_rgba(22,72,255,0.38)] transition-transform duration-300 ease-out group-hover:rotate-0`}>
                        <useCase.icon className="h-5 w-5 text-white" strokeWidth={1.7} />
                      </div>
                      <div className="absolute left-2 top-9 h-5 w-5 rounded-full border border-white/25 bg-[#80b4ff]/20" />
                      <div className="absolute right-2 top-1 h-4 w-4 rounded-full border border-white/15 bg-[#1648ff]/30" />
                    </div>
                    <h3 className="translate-y-0 text-[16px] font-medium tracking-[-0.04em] text-white transition-transform duration-300 ease-out group-hover:-translate-y-0.5">{useCase.title}</h3>
                    {isActive && (
                      <p className="mt-2 text-[12px] leading-[1.45] text-white/70">{useCase.description}</p>
                    )}
                  </motion.article>
                );
              })}
            </motion.div>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {useCases.map((useCase, index) => (
              <button
                key={useCase.title}
                type="button"
                aria-label={`Show ${useCase.title}`}
                aria-current={activeCard === index}
                onClick={() => setActiveCard(index)}
                className={`h-1.5 w-1.5 rounded-full transition ${
                  activeCard === index ? "bg-[#80b4ff]" : "bg-white/25 hover:bg-white/55"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
