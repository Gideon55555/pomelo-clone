"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "light") {
      document.documentElement.dataset.theme = "light";
    } else {
      delete document.documentElement.dataset.theme;
    }
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private browsing may block storage; theme still applies for the session.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to day mode" : "Switch to dark mode"}
      className="grid h-8 w-8 place-items-center rounded-sm bg-white/[0.035] text-white/80 transition-colors duration-150 hover:bg-white/[0.08] hover:text-white light:bg-[#000339]/[0.05] light:text-[#000339]/80 light:hover:bg-[#000339]/10 light:hover:text-[#000339]"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" strokeWidth={1.8} />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={1.8} />
      )}
    </button>
  );
}
