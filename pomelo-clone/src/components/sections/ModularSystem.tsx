"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Braces, Cloud, Globe, Smartphone, TestTube2 } from "lucide-react";
import { useRef } from "react";
import Eyebrow from "@/components/common/Eyebrow";
import InteractiveCard from "@/components/common/InteractiveCard";
import { useGridStagger } from "@/hooks/useGridStagger";

const modules = [
  {
    eyebrow: "Engineering",
    title: "Mobile Development",
    items: ["iOS & Android apps", "Cross-platform builds", "App store delivery"],
    link: "Explore Mobile",
    icon: Smartphone,
    span: "lg:col-span-2",
  },
  {
    eyebrow: "Engineering",
    title: "Web Development",
    items: ["High-performance frontends", "Robust backend APIs", "Progressive web apps"],
    link: "Explore Web",
    icon: Globe,
    span: "lg:col-span-2",
  },
  {
    eyebrow: "Delivery",
    title: "Custom Software",
    items: ["Workflow automation", "System integrations"],
    link: "Explore Custom Software",
    icon: Braces,
    span: "lg:col-span-2",
  },
  {
    eyebrow: "Infrastructure",
    title: "Cloud & DevOps",
    items: ["Cloud architecture", "CI/CD pipelines", "Monitoring & scaling"],
    link: "Explore Cloud",
    icon: Cloud,
    span: "lg:col-span-3",
  },
  {
    eyebrow: "Quality",
    title: "QA & Support",
    items: ["Automated testing", "Ongoing maintenance"],
    link: "Explore QA",
    icon: TestTube2,
    span: "lg:col-span-3",
  },
];

export default function ModularSystem() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  useGridStagger(sectionRef);

  return (
    <section ref={sectionRef} id="solutions" className="relative isolate overflow-hidden bg-[#000339] px-6 pb-24 pt-24 text-white light:bg-[#f1f2f2] light:text-[#000339] sm:px-10">
      <div className="glow-accent absolute inset-0 bg-[radial-gradient(ellipse_46%_38%_at_50%_18%,rgba(22,72,255,0.22),transparent_74%)] light:bg-[radial-gradient(ellipse_46%_38%_at_50%_18%,rgba(52,132,255,0.14),transparent_74%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(52,132,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(52,132,255,0.04)_1px,transparent_1px)] [background-size:84px_84px]" />

      <div className="relative z-10 mx-auto max-w-[1050px]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-[640px] text-center"
        >
          <Eyebrow
            text="Modular services"
            className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#80b4ff] light:text-[#1648ff]"
          />
          <h2 className="mt-3 text-[34px] font-semibold leading-[1.04] tracking-[-0.06em] sm:text-[44px]">
            A modular, end-to-end team to design, build, and scale your product.
          </h2>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-5 max-w-[520px] text-[13px] leading-relaxed text-white/70 light:text-[#000339]/70 sm:text-[15px]"
          >
            From strategy to launch and beyond, engage the capabilities you need — as a full product team or alongside your own.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {modules.map((module) => (
            <InteractiveCard
              key={module.title}
              className={`batch-card group flex flex-col rounded-[14px] border border-white/[0.09] bg-[linear-gradient(150deg,rgba(52,132,255,0.1),rgba(0,3,57,0.6))] p-6 backdrop-blur-sm light:border-[#000339]/10 light:bg-[linear-gradient(150deg,rgba(52,132,255,0.09),rgba(255,255,255,0.9))] ${module.span}`}
            >
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#80b4ff]/90 light:text-[#1648ff]/80">
                  {module.eyebrow}
                </p>
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-[#3484ff]/35 bg-[#1648ff]/15 text-[#80b4ff] transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110 light:text-[#1648ff]">
                  <module.icon className="h-3.5 w-3.5" strokeWidth={1.7} />
                </span>
              </div>
              <h3 className="mt-2 text-[19px] font-semibold tracking-[-0.045em]">{module.title}</h3>
              <ul className="mt-4 flex flex-col gap-2">
                {module.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[13px] text-white/70 light:text-[#000339]/70">
                    <span className="h-1 w-1 rounded-full bg-[#3484ff]" />
                    {item}
                  </li>
                ))}
              </ul>
              <span className="mt-auto pt-5 text-[13px] font-medium text-[#80b4ff] transition-colors group-hover:text-white light:text-[#1648ff] light:group-hover:text-[#000339]">
                {module.link} →
              </span>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
}
