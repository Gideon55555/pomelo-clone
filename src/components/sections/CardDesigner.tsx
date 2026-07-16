"use client";

import { motion, useReducedMotion } from "framer-motion";
import Eyebrow from "@/components/common/Eyebrow";
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
import { useRef, useState } from "react";
import { FULL_MOTION, gsap, useGSAP } from "@/lib/gsap";

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
  const sectionRef = useRef<HTMLElement>(null);
  const playgroundRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const lineRef = useRef<SVGPolylineElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop: pin the section and scrub the full sequence — chips fly out
      // from the editor, the progress line draws between them, then the
      // editor's code lines "compile" in. Releases after ~1.5 viewports.
      mm.add(`${FULL_MOTION} and (min-width: 1024px)`, () => {
        const section = sectionRef.current;
        const playground = playgroundRef.current;
        const editor = editorRef.current;
        const svg = svgRef.current;
        const line = lineRef.current;
        if (!section || !playground || !editor || !svg || !line) return;

        const chips = gsap.utils.toArray<HTMLElement>(".designer-chip", section);
        const playgroundRect = playground.getBoundingClientRect();
        const editorRect = editor.getBoundingClientRect();
        const centerX = editorRect.left + editorRect.width / 2;
        const centerY = editorRect.top + editorRect.height / 2;

        const chipRects = chips.map((chip) => chip.getBoundingClientRect());
        const chipDeltas = chipRects.map((rect) => ({
          dx: centerX - (rect.left + rect.width / 2),
          dy: centerY - (rect.top + rect.height / 2),
        }));

        const points = chipRects
          .map(
            (rect) =>
              `${rect.left - playgroundRect.left + rect.width / 2},${
                rect.top - playgroundRect.top + rect.height / 2
              }`
          )
          .join(" ");
        line.setAttribute("points", points);
        const lineLength = line.getTotalLength();
        gsap.set(line, { strokeDasharray: lineLength, strokeDashoffset: lineLength });
        gsap.set(svg, { autoAlpha: 1 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        tl.from(chips, {
          x: (index: number) => chipDeltas[index].dx,
          y: (index: number) => chipDeltas[index].dy,
          opacity: 0,
          scale: 0.8,
          duration: 1,
          stagger: 0.18,
          ease: "power3.out",
        })
          .to(line, { strokeDashoffset: 0, duration: 1.4, ease: "none" }, 0.4)
          .fromTo(
            ".editor-line",
            { autoAlpha: 0, clipPath: "inset(0 100% 0 0)" },
            {
              immediateRender: true,
              autoAlpha: 1,
              clipPath: "inset(0 0% 0 0)",
              duration: 0.5,
              stagger: 0.35,
              ease: "none",
            },
            ">-0.3"
          );
      });

      // Tablet (chips visible, no pin): simple staggered entrance.
      mm.add(
        `${FULL_MOTION} and (min-width: 640px) and (max-width: 1023px)`,
        () => {
          const chips = gsap.utils.toArray<HTMLElement>(
            ".designer-chip",
            sectionRef.current
          );
          if (!chips.length) return;
          gsap.from(chips, {
            opacity: 0,
            y: 16,
            stagger: 0.08,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: playgroundRef.current,
              start: "top 80%",
              once: true,
            },
          });
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="services" className="relative isolate min-h-[720px] overflow-hidden bg-[#0B2023] px-5 pb-20 pt-24 text-[#EEFEFC] light:bg-[#EEFEFC] light:text-[#0B2023] sm:pt-28">
      <div className="glow-accent absolute inset-0 bg-[radial-gradient(ellipse_46%_40%_at_50%_62%,rgba(0,79,76,0.28),transparent_76%)] light:bg-[radial-gradient(ellipse_46%_40%_at_50%_62%,rgba(26,243,220,0.15),transparent_76%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(26,243,220,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(26,243,220,0.04)_1px,transparent_1px)] [background-size:84px_84px]" />
      <div className="hero-orb pointer-events-none absolute left-[25%] top-[53%] h-64 w-64 rounded-full bg-[#004F4C]/20 blur-[100px]" />
      <div className="hero-orb pointer-events-none absolute right-[25%] top-[56%] h-64 w-64 rounded-full bg-[#1AF3DC]/15 blur-[100px] [animation-delay:-7s]" />

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto max-w-[1050px] text-center"
      >
        <Eyebrow
          text="Your product, your way"
          className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#1AF3DC] light:text-[#004F4C]"
        />
        <h2 className="mx-auto mt-3 max-w-[570px] text-[43px] font-semibold leading-[0.98] tracking-[-0.065em] sm:text-[58px]">
          You define it,
          <br />
          we build it
        </h2>
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-5 max-w-[560px] text-[13px] leading-relaxed text-[#609395] light:text-[#0B2023]/70 sm:text-[15px]"
        >
          From discovery to launch, we turn your ideas into high-performing digital products built around your business.
        </motion.p>
        <div className="mt-5">
          <MagneticButton className="rounded-[2px] bg-gradient-to-r from-[#004F4C] to-[#1AF3DC] px-6 py-3 text-[14px] font-medium text-[#EEFEFC] shadow-[0_8px_24px_rgba(0,79,76,0.35)]">
            Start your project
          </MagneticButton>
        </div>
      </motion.div>

      <div ref={playgroundRef} className="relative z-10 mx-auto mt-10 h-[370px] max-w-[860px] sm:mt-12">
        <svg
          ref={svgRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full opacity-0 lg:block"
        >
          <polyline
            ref={lineRef}
            fill="none"
            stroke="url(#designer-line-gradient)"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="designer-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#004F4C" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#1AF3DC" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1AF3DC" stopOpacity="0.55" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          ref={editorRef}
          animate={shouldReduceMotion ? undefined : { y: [0, -5, 0], rotate: [-1, 1, -1] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[112px] z-20 h-[170px] w-[310px] -translate-x-1/2 overflow-hidden rounded-xl border border-[#1AF3DC]/45 bg-[linear-gradient(135deg,rgba(0,79,76,0.32),rgba(11,32,35,0.86))] text-left shadow-[0_24px_55px_rgba(0,79,76,0.36)]"
        >
          <div className="flex items-center gap-2 border-b border-white/[0.08] bg-[#0B2023]/70 px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-[#004F4C]/80" />
            <span className="h-2 w-2 rounded-full bg-[#1AF3DC]/70" />
            <span className="h-2 w-2 rounded-full bg-[#1AF3DC]/60" />
            <span className="ml-2 text-[10px] font-medium tracking-[0.06em] text-[#609395]">
              your-product.tsx — qua
            </span>
          </div>
          <div className="space-y-2 px-4 py-3.5 font-mono text-[11px] leading-relaxed">
            <p className="editor-line"><span className="text-[#1AF3DC]">import</span> <span className="text-[#EEFEFC]/85">&#123; idea &#125;</span> <span className="text-[#1AF3DC]">from</span> <span className="text-[#609395]">&quot;you&quot;</span>;</p>
            <p className="editor-line"><span className="text-[#1AF3DC]">const</span> <span className="text-[#1AF3DC]">product</span> <span className="text-[#609395]">=</span> <span className="text-[#1AF3DC]">await</span> <span className="text-[#EEFEFC]">qua</span><span className="text-[#609395]">.</span><span className="text-[#1AF3DC]">build</span><span className="text-[#609395]">(idea);</span></p>
            <p className="editor-line"><span className="text-[#EEFEFC]">product</span><span className="text-[#609395]">.</span><span className="text-[#1AF3DC]">ship</span><span className="text-[#609395]">();</span> <span className="text-[#609395]">{"// build · ship · grow"}</span></p>
          </div>
        </motion.div>

        {choices.map((choice, index) => (
          <motion.button
            key={choice.label}
            type="button"
            aria-pressed={selected === index}
            onClick={() => setSelected(selected === index ? null : index)}
            whileHover={{ y: -5, scale: 1.025 }}
            whileTap={{ scale: 0.97 }}
            className={`designer-chip absolute z-20 hidden w-[280px] rounded-md border px-3.5 py-2.5 text-left backdrop-blur-md transition-colors sm:block ${choice.position} ${
              selected === index
                ? "border-[#1AF3DC]/75 bg-[#004F4C]/30 shadow-[0_10px_26px_rgba(0,79,76,0.34)] light:border-[#004F4C]/55 light:bg-[#004F4C]/15"
                : "border-white/10 bg-[#0B2023]/65 hover:border-[#1AF3DC]/55 hover:bg-[#004F4C]/15 light:border-[#0B2023]/10 light:bg-white/75 light:hover:bg-[#004F4C]/10"
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded border border-white/10 text-[#1AF3DC] light:border-[#0B2023]/10 light:text-[#004F4C]">
                <choice.icon className="h-3.5 w-3.5" strokeWidth={1.8} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[12px] font-medium text-[#EEFEFC]/90 light:text-[#0B2023]/90">{choice.label}</span>
                <span className="mt-0.5 block truncate text-[10px] text-[#609395] light:text-[#0B2023]/60">{choice.detail}</span>
              </span>
              <span className="grid h-6 w-6 place-items-center rounded bg-white/[0.08] text-[#609395] light:bg-[#0B2023]/[0.06] light:text-[#0B2023]/60">
                <Plus className="h-3.5 w-3.5" strokeWidth={1.8} />
              </span>
            </span>
          </motion.button>
        ))}

        <div className="absolute bottom-1 left-1/2 flex -translate-x-1/2 gap-2">
          <button className="flex items-center gap-1.5 rounded-sm border border-white/15 bg-white/[0.03] px-4 py-2.5 text-[12px] text-[#609395] transition hover:border-[#1AF3DC]/60 hover:text-[#EEFEFC] light:border-[#0B2023]/15 light:bg-white/60 light:text-[#0B2023]/70 light:hover:text-[#0B2023]">
            <Undo2 className="h-3.5 w-3.5" strokeWidth={1.8} /> Go back
          </button>
          <button className="flex items-center gap-1.5 rounded-sm border border-white/15 bg-white/[0.03] px-4 py-2.5 text-[12px] text-[#609395] transition hover:border-[#1AF3DC]/60 hover:text-[#EEFEFC] light:border-[#0B2023]/15 light:bg-white/60 light:text-[#0B2023]/70 light:hover:text-[#0B2023]">
            <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.8} /> Start over
          </button>
        </div>
      </div>
    </section>
  );
}
