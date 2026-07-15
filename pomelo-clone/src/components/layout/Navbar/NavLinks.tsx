"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/constants/navigation";

export default function NavLinks() {
  // Track hover state for ALL menu items
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <ul className="hidden items-center gap-3.5 text-[9px] font-medium tracking-[-0.025em] text-white/75 lg:flex">
      {NAV_LINKS.map((link) => {
        const isHovered = hoveredItem === link.title;

        return (
          <li
            key={link.title}
            className="relative py-3"
            onMouseEnter={() => setHoveredItem(link.title)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Main Link Element */}
            <button className="group relative z-20 flex items-center gap-1.5 transition-colors duration-300 hover:text-white">
              <span>{link.title}</span>
              {link.dropdown && (
                <svg
                  className={`w-2.5 h-2.5 text-white/50 transition-transform duration-200 ${
                    isHovered ? "rotate-180 text-[#3484FF]" : ""
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
              <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-[#3484FF] transition-all duration-300 group-hover:w-full" />
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
                    from-[#3484FF]/35 via-[#3484FF]/5 to-transparent 
                    blur-[14px] mix-blend-screen
                  " 
                />

                {/* 2. The sharp, hot-pink laser sliver running right along the bottom border edge */}
                <div 
                  className="
                    absolute bottom-[-1px] left-1/2 -translate-x-1/2 
                    w-[70px] h-[2px] 
                    bg-gradient-to-r from-transparent via-[#3484FF] to-transparent
                    shadow-[0_0_12px_#3484FF]
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
                    w-full rounded-xl border border-white/10 p-5
                    shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                  "
                  style={{
                    backgroundColor: "#000339",
                  }}
                >
                  <ul className="flex flex-col gap-3.5">
                    {link.items?.map((item) => (
                      <li key={item}>
                        <a
                          href={link.href}
                          className="
                            block font-geist text-[13px] font-semibold text-white/60 
                            hover:text-white transition-colors duration-150
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