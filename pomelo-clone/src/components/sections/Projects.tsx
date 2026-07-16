"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  HeartPulse,
  Route,
  ShoppingBag,
  ShieldCheck,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Eyebrow from "@/components/common/Eyebrow";

type Project = {
  name: string;
  category: string;
  description: string;
  result: string;
  metric: string;
  tags: string[];
  icon: LucideIcon;
  visual: "commerce" | "operations" | "health";
};

const projects: Project[] = [
  {
    name: "Pulse Commerce",
    category: "Mobile commerce",
    description:
      "A fast, conversion-focused shopping experience connecting discovery, checkout, and delivery in one native app.",
    result: "Faster checkout",
    metric: "42%",
    tags: ["React Native", "Node.js", "Stripe"],
    icon: ShoppingBag,
    visual: "commerce",
  },
  {
    name: "Atlas Operations",
    category: "Logistics platform",
    description:
      "A real-time operations workspace helping distributed teams coordinate routes, inventory, and field performance.",
    result: "Less manual work",
    metric: "68%",
    tags: ["Next.js", "PostgreSQL", "AWS"],
    icon: Route,
    visual: "operations",
  },
  {
    name: "Northstar Health",
    category: "Healthcare software",
    description:
      "A secure care platform that gives clinicians a clearer patient overview and automates everyday follow-up.",
    result: "Tasks automated",
    metric: "12k",
    tags: ["TypeScript", "FHIR", "Cloud"],
    icon: HeartPulse,
    visual: "health",
  },
];

function ProjectVisual({ type }: { type: Project["visual"] }) {
  if (type === "commerce") {
    return (
      <div className="relative flex h-full min-h-[300px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_45%,rgba(26,243,220,0.22),transparent_45%)]">
        <div className="absolute left-[12%] top-[18%] h-24 w-24 rounded-full border border-[#1AF3DC]/20" />
        <div className="absolute bottom-[12%] right-[12%] h-36 w-36 rounded-full border border-[#1AF3DC]/10" />
        <motion.div
          whileHover={{ rotateY: -8, rotateX: 4, y: -7 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="relative h-[250px] w-[132px] rounded-[28px] border border-[#1AF3DC]/40 bg-[#0B2023] p-2 shadow-[0_32px_70px_rgba(0,79,76,0.55)] [transform-style:preserve-3d]"
        >
          <div className="h-full overflow-hidden rounded-[21px] bg-[#EEFEFC] p-3 text-[#0B2023]">
            <div className="mx-auto h-1 w-8 rounded-full bg-[#0B2023]/20" />
            <div className="mt-4 flex items-center justify-between text-[7px] font-semibold">
              <span>New arrivals</span>
              <ShoppingBag className="h-3 w-3" />
            </div>
            <div className="mt-3 h-24 rounded-xl bg-[linear-gradient(145deg,#1AF3DC,#004F4C)] p-3">
              <span className="block h-9 w-9 rounded-full border border-white/35" />
              <span className="mt-5 block h-1 w-12 rounded-full bg-white/65" />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {[0, 1].map((item) => (
                <div key={item} className="rounded-lg bg-[#004F4C]/10 p-2">
                  <span className="block h-7 rounded bg-[#004F4C]/15" />
                  <span className="mt-2 block h-1 w-8 rounded bg-[#0B2023]/30" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <div className="absolute right-[14%] top-[25%] rounded-xl border border-[#1AF3DC]/25 bg-[#0B2023]/80 px-3 py-2 text-[9px] text-[#EEFEFC] shadow-xl backdrop-blur-md">
          <span className="text-[#1AF3DC]">+24%</span> conversion
        </div>
      </div>
    );
  }

  if (type === "operations") {
    return (
      <div className="relative flex h-full min-h-[250px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_58%_45%,rgba(0,79,76,0.42),transparent_52%)] p-7">
        <div className="w-full max-w-[410px] rotate-[-2deg] rounded-xl border border-[#1AF3DC]/25 bg-[#071719]/90 p-4 shadow-[0_28px_65px_rgba(0,0,0,0.36)] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.02]">
          <div className="flex items-center justify-between">
            <div>
              <span className="block h-1.5 w-20 rounded bg-[#EEFEFC]/70" />
              <span className="mt-2 block h-1 w-12 rounded bg-[#609395]/50" />
            </div>
            <span className="rounded-md bg-[#1AF3DC]/15 px-2 py-1 text-[7px] text-[#1AF3DC]">LIVE</span>
          </div>
          <div className="mt-5 grid grid-cols-[1.3fr_0.7fr] gap-3">
            <div className="relative h-28 overflow-hidden rounded-lg border border-white/[0.06] bg-[#004F4C]/15">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 220 110" fill="none">
                <path d="M12 85 C55 78 54 27 105 43 S165 86 209 22" stroke="#1AF3DC" strokeWidth="2" strokeDasharray="4 5" />
                {[["12", "85"], ["105", "43"], ["209", "22"]].map(([cx, cy]) => (
                  <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill="#0B2023" stroke="#1AF3DC" strokeWidth="2" />
                ))}
              </svg>
            </div>
            <div className="space-y-2">
              {[72, 48, 86].map((width) => (
                <div key={width} className="rounded-md bg-white/[0.04] p-2">
                  <span className="block h-1 rounded bg-[#609395]/35" style={{ width: `${width}%` }} />
                  <span className="mt-2 block h-1.5 rounded bg-[#1AF3DC]/50" style={{ width: `${width - 12}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full min-h-[250px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_48%,rgba(26,243,220,0.16),transparent_50%)] p-7">
      <div className="relative w-full max-w-[390px] rounded-2xl border border-[#1AF3DC]/25 bg-[#071719]/90 p-5 shadow-[0_28px_65px_rgba(0,0,0,0.36)] transition duration-500 group-hover:-translate-y-1">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#1AF3DC]/15 text-[#1AF3DC]">
            <HeartPulse className="h-4 w-4" />
          </span>
          <div className="flex-1">
            <span className="block h-1.5 w-24 rounded bg-[#EEFEFC]/70" />
            <span className="mt-2 block h-1 w-16 rounded bg-[#609395]/45" />
          </div>
          <ShieldCheck className="h-4 w-4 text-[#1AF3DC]" />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {[["72", "Pulse"], ["98", "Oxygen"], ["36.7", "Temp"]].map(([value, label]) => (
            <div key={label} className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-3">
              <span className="text-[13px] font-semibold text-[#EEFEFC]">{value}</span>
              <span className="mt-1 block text-[7px] uppercase tracking-wider text-[#609395]">{label}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex h-16 items-end gap-1 rounded-lg bg-[#004F4C]/10 px-3 pb-3">
          {[28, 45, 34, 58, 42, 72, 52, 82, 63, 88, 68, 78].map((height, index) => (
            <span
              key={`${height}-${index}`}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-[#004F4C] to-[#1AF3DC]"
              style={{ height: `${height}%`, opacity: 0.45 + index * 0.035 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="relative isolate overflow-hidden bg-[#071719] px-6 py-24 text-[#EEFEFC] light:bg-white light:text-[#0B2023] sm:px-10 sm:py-28">
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(26,243,220,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(26,243,220,0.04)_1px,transparent_1px)] [background-size:84px_84px]" />
      <div className="glow-accent absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#004F4C]/20 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1050px]">
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Eyebrow
              text="Selected projects"
              className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#1AF3DC] light:text-[#004F4C]"
            />
            <h2 className="mt-4 max-w-[560px] text-[39px] font-semibold leading-[1] tracking-[-0.065em] sm:text-[54px]">
              Software that moves businesses forward.
            </h2>
          </div>
          <p className="max-w-[500px] text-[14px] leading-relaxed text-[#609395] light:text-[#0B2023]/65 sm:text-[16px] lg:justify-self-end">
            A selection of digital products designed and engineered around measurable outcomes, reliable technology, and the people who use them.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const featured = index === 0;

            return (
              <motion.article
                key={project.name}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 40, scale: 0.97 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.72, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className={`group overflow-hidden rounded-[18px] border border-white/[0.09] bg-[linear-gradient(145deg,rgba(26,243,220,0.08),rgba(11,32,35,0.72))] shadow-[0_24px_70px_rgba(0,0,0,0.2)] light:border-[#0B2023]/10 light:bg-[#EEFEFC] ${
                  featured ? "lg:col-span-2 lg:grid lg:grid-cols-[0.88fr_1.12fr]" : ""
                }`}
              >
                <div className={`flex flex-col p-6 sm:p-8 ${featured ? "lg:py-10" : ""}`}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-[#1AF3DC]/25 bg-[#004F4C]/20 text-[#1AF3DC] light:text-[#004F4C]">
                      <Icon className="h-4 w-4" strokeWidth={1.7} />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-[#609395] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#1AF3DC]" />
                  </div>
                  <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.23em] text-[#1AF3DC] light:text-[#004F4C]">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-[27px] font-semibold tracking-[-0.055em] sm:text-[32px]">
                    {project.name}
                  </h3>
                  <p className="mt-3 max-w-[480px] text-[13px] leading-relaxed text-[#609395] light:text-[#0B2023]/65 sm:text-[14px]">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-[#609395] light:border-[#0B2023]/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex items-end gap-3 border-t border-white/[0.08] pt-5 light:border-[#0B2023]/10">
                    <span className="text-[30px] font-semibold tracking-[-0.06em] text-[#1AF3DC] light:text-[#004F4C]">
                      {project.metric}
                    </span>
                    <span className="pb-1 text-[11px] text-[#609395]">{project.result}</span>
                    {index === 0 ? <TrendingUp className="mb-1 ml-auto h-4 w-4 text-[#1AF3DC]" /> : <Zap className="mb-1 ml-auto h-4 w-4 text-[#1AF3DC]" />}
                  </div>
                </div>
                <ProjectVisual type={project.visual} />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
