"use client";

import { motion, useReducedMotion } from "framer-motion";

const modules = [
  {
    eyebrow: "Engineering",
    title: "Mobile Development",
    items: ["iOS & Android apps", "Cross-platform builds", "App store delivery"],
    link: "Explore Mobile",
    span: "lg:col-span-2",
  },
  {
    eyebrow: "Engineering",
    title: "Web Development",
    items: ["High-performance frontends", "Robust backend APIs", "Progressive web apps"],
    link: "Explore Web",
    span: "lg:col-span-2",
  },
  {
    eyebrow: "Delivery",
    title: "Custom Software",
    items: ["Workflow automation", "System integrations"],
    link: "Explore Custom Software",
    span: "lg:col-span-2",
  },
  {
    eyebrow: "Infrastructure",
    title: "Cloud & DevOps",
    items: ["Cloud architecture", "CI/CD pipelines", "Monitoring & scaling"],
    link: "Explore Cloud",
    span: "lg:col-span-3",
  },
  {
    eyebrow: "Quality",
    title: "QA & Support",
    items: ["Automated testing", "Ongoing maintenance"],
    link: "Explore QA",
    span: "lg:col-span-3",
  },
];

export default function ModularSystem() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="solutions" className="relative isolate overflow-hidden bg-[#000339] px-6 pb-24 pt-24 text-white sm:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_46%_38%_at_50%_18%,rgba(22,72,255,0.22),transparent_74%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(52,132,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(52,132,255,0.04)_1px,transparent_1px)] [background-size:84px_84px]" />

      <div className="relative z-10 mx-auto max-w-[1050px]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-[640px] text-center"
        >
          <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#80b4ff]">
            Modular services
          </p>
          <h2 className="mt-3 text-[34px] font-semibold leading-[1.04] tracking-[-0.06em] sm:text-[44px]">
            A modular, end-to-end team to design, build, and scale your product.
          </h2>
          <p className="mx-auto mt-5 max-w-[480px] text-[11px] leading-relaxed text-white/55 sm:text-xs">
            From strategy to launch and beyond, engage the capabilities you need — as a full product team or alongside your own.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {modules.map((module, index) => (
            <motion.article
              key={module.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              whileHover={{ y: -7 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.09, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`group flex flex-col rounded-[14px] border border-white/[0.09] bg-[linear-gradient(150deg,rgba(52,132,255,0.1),rgba(0,3,57,0.6))] p-6 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-[#80b4ff]/60 hover:shadow-[0_18px_46px_rgba(22,72,255,0.3)] ${module.span}`}
            >
              <p className="text-[8px] font-medium uppercase tracking-[0.24em] text-[#80b4ff]/85">
                {module.eyebrow}
              </p>
              <h3 className="mt-2 text-[19px] font-semibold tracking-[-0.045em]">{module.title}</h3>
              <ul className="mt-4 flex flex-col gap-2">
                {module.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[10px] text-white/60">
                    <span className="h-1 w-1 rounded-full bg-[#3484ff]" />
                    {item}
                  </li>
                ))}
              </ul>
              <span className="mt-auto pt-5 text-[10px] font-medium text-[#80b4ff] transition-colors group-hover:text-white">
                {module.link} →
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
