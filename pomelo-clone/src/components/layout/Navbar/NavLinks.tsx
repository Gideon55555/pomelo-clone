"use client";

import { motion } from "framer-motion";
import { useState, type MouseEvent as ReactMouseEvent } from "react";
import { NAV_LINKS } from "@/constants/navigation";

export default function NavLinks() {
  // Track hover state for ALL menu items
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  // Which side the cursor entered/left from — the underline draws in from the
  // entry side and collapses toward the exit side.
  const [underlineOrigin, setUnderlineOrigin] = useState<"left" | "right">("left");

  const sideOf = (event: ReactMouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    return event.clientX < rect.left + rect.width / 2 ? "left" : "right";
  };

  return (
    <ul className="hidden items-center gap-5 text-[13px] font-medium tracking-[-0.025em] text-[#EEFEFC]/80 light:text-[#0B2023]/80 lg:flex">
      {NAV_LINKS.map((link) => {
        const isHovered = hoveredItem === link.title;

        return (
          <li
            key={link.title}
            className="relative py-3"
            onMouseEnter={(event) => {
              setUnderlineOrigin(sideOf(event));
              setHoveredItem(link.title);
            }}
            onMouseLeave={(event) => {
              setUnderlineOrigin(sideOf(event));
              setHoveredItem(null);
            }}
          >
            {/* Main Link Element */}
            <button className="group relative z-20 flex items-center gap-1.5 transition-colors duration-300 hover:text-[#EEFEFC] light:hover:text-[#0B2023]">
              <span>{link.title}</span>
              {link.dropdown && (
                <svg
                  className={`w-2.5 h-2.5 text-[#609395] transition-transform duration-200 ${
                    isHovered ? "rotate-180 text-[#1AF3DC]" : ""
                  }`}
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <motion.span
                aria-hidden="true"
                initial={false}
                animate={{ scaleX: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute -bottom-1 left-0 right-0 h-px bg-[#1AF3DC] ${
                  underlineOrigin === "left" ? "origin-left" : "origin-right"
                }`}
              />
            </button>

            {/* ================= RADIAL BOTTOM-ANCHORED GLOW (Applies to all hovered items) ================= */}
            {isHovered && (
              <div className="absolute bottom-0 left-0 right-0 h-0 pointer-events-none z-10">
                {/* 1. The upward-projecting radial dome of light */}
                <div 
                  className="
                    absolute bottom-0 left-1/2 -translate-x-1/2 
                    w-[150px] h-[65px] 
                    bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] 
                    from-[#1AF3DC]/35 via-[#1AF3DC]/5 to-transparent 
                    blur-[14px] mix-blend-screen
                  " 
                />

                {/* 2. The sharp, hot-pink laser sliver running right along the bottom border edge */}
                <div 
                  className="
                    absolute bottom-[-1px] left-1/2 -translate-x-1/2 
                    w-[70px] h-[2px] 
                    bg-gradient-to-r from-transparent via-[#1AF3DC] to-transparent
                    shadow-[0_0_12px_#1AF3DC]
                  "
                />
              </div>
            )}

            {/* ================= DROPDOWN CARD ================= */}
            {link.dropdown && isHovered && (
              <div
                className="
                  absolute left-[-16px] top-full pt-2 w-[220px]
                  animate-in fade-in slide-in-from-top-2 duration-200 ease-out z-50
                "
              >
                <div
                  className="
                    w-full rounded-xl border border-white/10 bg-[#0B2023] p-5
                    shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                    light:border-[#0B2023]/10 light:bg-white light:shadow-[0_20px_50px_rgba(11,32,35,0.15)]
                  "
                >
                  <ul className="flex flex-col gap-3.5">
                    {link.items?.map((item) => (
                      <li key={item}>
                        <a
                          href={link.href}
                          className="
                            block font-geist text-[13px] font-semibold text-[#609395] 
                            hover:text-[#EEFEFC] transition-colors duration-150
                            light:text-[#0B2023]/60 light:hover:text-[#0B2023]
                          "
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}