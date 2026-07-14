"use client";

import { useEffect, useState, useRef } from "react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavButton from "./NavButton";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Always show if near the absolute top
      if (currentScrollY <= 15) {
        setVisible(true);
      } 
      // 2. Hide when scrolling down past threshold
      else if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setVisible(false);
      } 
      // 3. Reappear instantly when scrolling up
      else if (currentScrollY < lastScrollY.current) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      // Exactly top-0, left-0, right-0, z-9999, w-full, with 37px top padding
      className="
        fixed top-0 left-0 right-0 z-[9999] w-full 
        pt-[37px] transition-transform duration-300 ease-in-out
      "
      style={{
        transform: visible ? "translateY(0)" : "translateY(-140%)",
      }}
    >
      {/* 
        Inner container: max-w-[1226px], mx-auto, mt-0.
        Heights render at exactly 79.5px via flex-content sizing.
      */}
      <div className="relative max-w-[1226px] mx-auto w-full">

        {/* ================= MAIN NAVBAR CONTENT CONTAINER ================= */}
        <div
          // Exactly px-[30px], height auto mapping to ~79.5px
          className="w-full flex h-[79.5px] items-center justify-between px-[30px] max-lg:py-[13px] relative z-0"
          style={{
            backgroundColor: "oklab(0.164275 0.00177746 -0.0442353 / 0.4)",
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          {/* Logo Section */}
          <div className="flex items-center">
            <NavLogo />
          </div>

          {/* Navigation Link Menu Items */}
          <nav className="flex-grow flex justify-center">
            <NavLinks />
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center gap-3">
            <NavButton />
            <LanguageSwitcher />
            <MobileMenu />
          </div>
        </div>

        {/* ================= BLUEPRINT STROKE CORNERS (RENDERED ON TOP) ================= */}
        {/* LEFT VERTICAL LINE (Extends exactly 12px above and below) */}
        <div className="absolute left-0 top-[-12px] bottom-[-12px] w-[1px] bg-white/[0.08] z-10 pointer-events-none" />

        {/* RIGHT VERTICAL LINE (Extends exactly 12px above and below) */}
        <div className="absolute right-0 top-[-12px] bottom-[-12px] w-[1px] bg-white/[0.08] z-10 pointer-events-none" />

        {/* TOP HORIZONTAL STROKE (Overshoots exactly 16px past vertical edges) */}
        <div className="absolute top-0 left-[-16px] right-[-16px] h-[1px] bg-white/[0.08] z-10 pointer-events-none" />

        {/* BOTTOM HORIZONTAL STROKE (Overshoots exactly 16px past vertical edges) */}
        <div className="absolute bottom-0 left-[-16px] right-[-16px] h-[1px] bg-white/[0.08] z-10 pointer-events-none" />

      </div>
    </header>
  );
}