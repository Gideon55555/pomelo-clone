"use client";

import { motion, useReducedMotion, type PanInfo } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Clock3,
  CreditCard,
  Globe2,
  Landmark,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

type UseCase = {
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  symbol: string;
};

const useCases: UseCase[] = [
  {
    title: "Corporate Cards",
    shortTitle: "Corporate Cards",
    description: "Smart controls and real-time visibility for every business expense.",
    icon: CreditCard,
    symbol: "Q",
  },
  {
    title: "Engagement & Rewards",
    shortTitle: "Engagement & Rewards",
    description: "Reward experiences designed to build lasting customer relationships.",
    icon: Trophy,
    symbol: "★",
  },
  {
    title: "Global Cards",
    shortTitle: "Global Cards",
    description: "Issue cards to users across markets with a rapid time-to-market.",
    icon: Globe2,
    symbol: "¤",
  },
  {
    title: "Single-use cards",
    shortTitle: "Single-use cards",
    description: "Secure virtual cards generated for a single payment or purpose.",
    icon: Clock3,
    symbol: "1",
  },
  {
    title: "Traditional Banking",
    shortTitle: "Traditional Banking",
    description: "Modern infrastructure that connects established banking experiences.",
    icon: Landmark,
    symbol: "Q",
  },
];

function circularOffset(index: number, active: number) {
  let offset = index - active;
  const half = Math.floor(useCases.length / 2);
  if (offset > half) offset -= useCases.length;
  if (offset < -half) offset += useCases.length;
  return offset;
}

function CardIllustration({ item, active }: { item: UseCase; active: boolean }) {
  const Icon = item.icon;

  return (
    <div
      className={`relative grid place-items-center ${
        active ? "h-[190px] w-[220px]" : "h-[130px] w-[160px]"
      }`}
      aria-hidden="true"
    >
      <div
        className={`absolute rounded-full bg-[radial-gradient(circle_at_32%_24%,rgba(238,254,252,0.95),rgba(26,243,220,0.78)_43%,rgba(0,79,76,0.28)_74%,transparent)] blur-[1px] ${
          active ? "h-28 w-28" : "h-20 w-20"
        }`}
      />
      {active && (
        <>
          <div className="absolute h-[112px] w-[186px] -rotate-[17deg] rounded-[50%] border border-[#1AF3DC]/45" />
          <div className="absolute h-[94px] w-[160px] rotate-[27deg] rounded-[50%] border border-[#609395]/25" />
          <span className="absolute left-4 top-16 text-[10px] font-semibold text-[#EEFEFC]">¤</span>
          <span className="absolute right-5 top-12 text-[9px] font-semibold text-[#609395]">Q</span>
        </>
      )}
      <div
        className={`absolute -translate-x-4 rotate-[8deg] rounded-[12px] border border-white/20 bg-[linear-gradient(145deg,rgba(26,243,220,0.94),rgba(0,79,76,0.78))] shadow-[0_20px_36px_rgba(0,79,76,0.42)] backdrop-blur-sm ${
          active ? "h-[82px] w-[108px]" : "h-[58px] w-[78px]"
        }`}
      />
      <div
        className={`relative z-10 grid -translate-y-2 translate-x-4 -rotate-[7deg] place-items-center rounded-[12px] border border-white/25 bg-[linear-gradient(145deg,rgba(26,243,220,0.96),rgba(0,79,76,0.92))] shadow-[0_18px_38px_rgba(0,79,76,0.48)] ${
          active ? "h-[88px] w-[116px]" : "h-[62px] w-[82px]"
        }`}
      >
        <Icon
          className={active ? "h-8 w-8 text-[#EEFEFC]/90" : "h-6 w-6 text-[#EEFEFC]/80"}
          strokeWidth={1.35}
        />
        <span className="absolute bottom-2 right-3 text-[9px] font-semibold text-[#609395]">
          {item.symbol}
        </span>
      </div>
    </div>
  );
}

export default function UseCases() {
  const [activeCard, setActiveCard] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const [step, setStep] = useState(292);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const updateStep = () => {
      const width = window.innerWidth;
      setStep(width < 640 ? 228 : width < 1024 ? 260 : 292);
    };
    const frame = requestAnimationFrame(updateStep);
    window.addEventListener("resize", updateStep, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateStep);
    };
  }, []);

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;
    const interval = window.setInterval(() => {
      setActiveCard((current) => (current + 1) % useCases.length);
    }, 5600);
    return () => window.clearInterval(interval);
  }, [isPaused, shouldReduceMotion]);

  const previous = () =>
    setActiveCard((current) => (current - 1 + useCases.length) % useCases.length);
  const next = () => setActiveCard((current) => (current + 1) % useCases.length);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -55 || info.velocity.x < -420) next();
    if (info.offset.x > 55 || info.velocity.x > 420) previous();
  };

  return (
    <section
      id="use-cases"
      aria-labelledby="use-cases-heading"
      className="relative isolate overflow-hidden bg-[var(--use-cases-bg)] py-28 text-[#EEFEFC] sm:py-36 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[30%] bg-[radial-gradient(ellipse_40%_45%_at_50%_58%,var(--use-cases-glow-core)_0%,var(--use-cases-glow-mid)_35%,rgba(0,79,76,0.32)_55%,transparent_76%)]"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[28%] h-[62%] w-[46%] opacity-[0.08]"
        viewBox="0 0 700 520"
        fill="none"
      >
        <path d="M-40 470 190 80l232 390H-40Z" stroke="#1AF3DC" />
        <path d="m92 470 202-340 202 340H92Z" stroke="#004F4C" />
        <path d="m-12 320 302-170 296 174-298 170L-12 320Z" stroke="#609395" />
        <path d="M30 218h530M10 375h590M144 50v440M382 38v450" stroke="#004F4C" />
      </svg>

      <motion.header
        initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto px-6 text-center"
      >
        <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-[var(--use-cases-eyebrow)]">
          Use Cases
        </p>
        <h2
          id="use-cases-heading"
          className="mx-auto mt-4 max-w-[820px] text-[44px] font-bold leading-[0.98] tracking-[-0.055em] sm:text-[58px] lg:text-[70px]"
        >
          One technology,
          <br />
          endless applications.
        </h2>
      </motion.header>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-16 h-[430px] w-full sm:mt-20 sm:h-[460px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <motion.button
          type="button"
          aria-label="Show previous use case"
          onClick={previous}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="group absolute left-4 top-1/2 z-30 hidden h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-transparent text-[#609395] transition-colors hover:border-white/45 hover:bg-white/[0.07] hover:text-[#EEFEFC] sm:grid lg:left-8"
        >
          <ChevronLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
        </motion.button>
        <motion.button
          type="button"
          aria-label="Show next use case"
          onClick={next}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="group absolute right-4 top-1/2 z-30 hidden h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-transparent text-[#609395] transition-colors hover:border-white/45 hover:bg-white/[0.07] hover:text-[#EEFEFC] sm:grid lg:right-8"
        >
          <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </motion.button>

        <motion.div
          drag={shouldReduceMotion ? false : "x"}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 cursor-grab touch-pan-y select-none active:cursor-grabbing"
        >
          {useCases.map((item, index) => {
            const offset = circularOffset(index, activeCard);
            const distance = Math.abs(offset);
            const isActive = offset === 0;

            return (
              <motion.button
                key={item.title}
                type="button"
                aria-label={`Show ${item.title}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setActiveCard(index)}
                animate={{
                  x: offset * step,
                  y: isActive ? 0 : distance === 1 ? 18 : 28,
                  scale: isActive ? 1 : distance === 1 ? 0.82 : 0.68,
                  opacity: isActive ? 1 : distance === 1 ? 0.64 : 0.17,
                  borderColor: isActive
                    ? "rgba(255,255,255,0.14)"
                    : "rgba(255,255,255,0)",
                  zIndex: 10 - distance,
                }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 145, damping: 23, mass: 0.8 }
                }
                className="absolute left-1/2 top-0 flex h-[420px] w-[270px] -ml-[135px] flex-col items-center justify-center border bg-transparent px-5 text-center outline-none focus-visible:ring-2 focus-visible:ring-[#1AF3DC] sm:h-[450px] sm:w-[310px] sm:-ml-[155px]"
              >
                <CardIllustration item={item} active={isActive} />
                <motion.h3
                  animate={{ scale: isActive ? 1 : 0.92 }}
                  className={`mt-4 max-w-[250px] font-semibold tracking-[-0.035em] text-[#EEFEFC] ${
                    isActive ? "text-[27px] sm:text-[30px]" : "text-[20px]"
                  }`}
                >
                  {item.shortTitle}
                </motion.h3>
                <motion.p
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.32 }}
                  className="mt-3 max-w-[265px] text-[14px] leading-[1.55] text-[#609395]/72 sm:text-[15px]"
                >
                  {item.description}
                </motion.p>
              </motion.button>
            );
          })}
        </motion.div>

        <div className="absolute inset-x-0 -bottom-2 z-30 flex justify-center gap-2 sm:hidden">
          {useCases.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Show ${item.title}`}
              onClick={() => setActiveCard(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === activeCard ? "w-6 bg-[#1AF3DC]" : "w-1.5 bg-white/25"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
