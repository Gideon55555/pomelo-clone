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
      className="
        fixed top-0 left-0 right-0 z-[9999] w-full 
        pt-5 transition-transform duration-300 ease-in-out sm:pt-7
      "
      style={{
        transform: visible ? "translateY(0)" : "translateY(-140%)",
      }}
    >
      <div className="relative mx-auto w-[calc(100%-2.5rem)] max-w-[1160px]">
        <div
          className="relative z-0 flex h-[48px] w-full items-center justify-between px-4 sm:px-5"
          style={{
            backgroundColor: "rgba(10, 10, 30, 0.44)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
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

        <div className="pointer-events-none absolute -bottom-3 -top-3 left-0 z-10 w-px bg-white/[0.08]" />
        <div className="pointer-events-none absolute -bottom-3 -top-3 right-0 z-10 w-px bg-white/[0.08]" />
        <div className="pointer-events-none absolute -left-4 -right-4 top-0 z-10 h-px bg-white/[0.08]" />
        <div className="pointer-events-none absolute -left-4 -right-4 bottom-0 z-10 h-px bg-white/[0.08]" />
      </div>
    </header>
  );
}