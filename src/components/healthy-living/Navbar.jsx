import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const leftLinks = ["HEALTHY LIVING", "SCHOOLS & CHILDREN", "GLOBAL & RESEARCH"];
const rightLinks = ["WORK WITH US", "WELLNESS LAB", "MORE"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b1109]">
      <nav className="max-w-[1600px] mx-auto px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between gap-4">
        {/* Left links */}
        <div className="hidden lg:flex items-center gap-6 flex-1">
          {leftLinks.map((l) => (
            <a
              key={l}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-[10px] uppercase tracking-wide font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Center stacked logo */}
        <a href="#" onClick={(e) => e.preventDefault()} className="flex-1 lg:flex-none flex justify-center cursor-pointer">
          <div className="flex flex-col items-center leading-none">
            <span className="text-[13px] lg:text-[15px] font-extrabold tracking-tight text-white">
              HEALTHY
            </span>
            <span className="text-[13px] lg:text-[15px] font-extrabold tracking-tight text-white">
              LIVING
            </span>
            <span className="text-[10px] lg:text-[11px] font-medium text-white/80 mt-1" dir="rtl">
              الحياة الصحية
            </span>
          </div>
        </a>

        {/* Right links + ASK AI */}
        <div className="hidden lg:flex items-center gap-6 flex-1 justify-end">
          {rightLinks.map((l) => (
            <a
              key={l}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-[10px] uppercase tracking-wide font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              {l}
            </a>
          ))}
          <div className="flex items-center gap-3 pl-2">
            <span className="text-[11px] uppercase tracking-wide font-bold text-white">
              Ask AI
            </span>
            <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors">
              <ArrowRight size={15} className="text-black" />
            </button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0b1109]/95 border-t border-white/15 px-5 py-4 flex flex-col gap-3">
          {allLinks.map((l) => (
            <a
              key={l}
              href="#"
              className="text-xs uppercase tracking-wide font-medium text-white py-1 cursor-pointer"
              onClick={(e) => { e.preventDefault(); setOpen(false); }}
            >
              {l}
            </a>
          ))}
          <div className="flex items-center gap-3 mt-2">
            <span className="text-[11px] uppercase tracking-wide font-bold text-white">Ask AI</span>
            <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
              <ArrowRight size={15} className="text-black" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}