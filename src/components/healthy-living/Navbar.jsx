import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const leftLinks = ["Healthy Living", "Schools & Children", "Global & Research"];
const rightLinks = ["Work With Us", "Wellness Lab", "More"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        {/* Left links */}
        <div className="hidden lg:flex items-center gap-7 flex-1">
          {leftLinks.map((l) => (
            <a
              key={l}
              href="#"
              className={`text-[12px] uppercase tracking-wide font-medium transition-colors ${
                scrolled ? "text-black hover:text-neutral-500" : "text-white/90 hover:text-white"
              }`}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Center logo */}
        <a href="#" className="flex flex-col items-center justify-center leading-none flex-1 lg:flex-none">
          <span
            className={`text-lg lg:text-xl font-extrabold tracking-tight ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            HEALTHY LIVING
          </span>
          <span
            className={`text-[10px] lg:text-[11px] font-medium mt-0.5 ${
              scrolled ? "text-neutral-500" : "text-white/70"
            }`}
            dir="rtl"
          >
            الحياة الصحية
          </span>
        </a>

        {/* Right links + ASK AI */}
        <div className="hidden lg:flex items-center gap-7 flex-1 justify-end">
          {rightLinks.map((l) => (
            <a
              key={l}
              href="#"
              className={`text-[12px] uppercase tracking-wide font-medium transition-colors ${
                scrolled ? "text-black hover:text-neutral-500" : "text-white/90 hover:text-white"
              }`}
            >
              {l}
            </a>
          ))}
          <button
            className={`rounded-full px-5 py-2 text-[12px] uppercase tracking-wide font-medium border transition-all ${
              scrolled
                ? "border-black text-black hover:bg-black hover:text-white"
                : "border-white text-white hover:bg-white hover:text-black"
            }`}
          >
            Ask AI
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden ${scrolled ? "text-black" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-neutral-200 px-5 py-4 flex flex-col gap-3">
          {[...leftLinks, ...rightLinks].map((l) => (
            <a
              key={l}
              href="#"
              className="text-sm uppercase tracking-wide font-medium text-black py-1"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <button className="mt-2 rounded-full px-5 py-2 text-[12px] uppercase tracking-wide font-medium border border-black text-black w-fit">
            Ask AI
          </button>
        </div>
      )}
    </header>
  );
}