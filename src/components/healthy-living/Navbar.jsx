import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const leftLinks = ["HEALTHY LIVING", "SCHOOLS & CHILDREN", "GLOBAL & RESEARCH"];
const rightLinks = ["WORK WITH US", "WELLNESS LAB", "MORE"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-[1400px] mx-auto px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between gap-4">
        {/* Left links */}
        <div className="hidden lg:flex items-center gap-5 flex-1">
          {leftLinks.map((l) => (
            <a key={l} href="#" className="text-[10px] uppercase tracking-wide font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap">
              {l}
            </a>
          ))}
        </div>

        {/* Center logo */}
        <a href="#" className="flex-1 lg:flex-none flex justify-center">
          <div className="flex flex-col items-center leading-none">
            <span className="text-[15px] lg:text-[17px] font-extrabold tracking-tight text-white">
              HEALTHY LIVING
            </span>
            <span className="text-[11px] lg:text-[12px] font-medium text-white/90 mt-1" dir="rtl">
              الحياة الصحية
            </span>
          </div>
        </a>

        {/* Right links + ASK AI */}
        <div className="hidden lg:flex items-center gap-5 flex-1 justify-end">
          {rightLinks.map((l) => (
            <a key={l} href="#" className="text-[10px] uppercase tracking-wide font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap">
              {l}
            </a>
          ))}
          <button className="rounded-full px-5 py-2 text-[10px] uppercase tracking-wide font-medium border border-white/70 text-white hover:bg-white hover:text-black transition-all">
            Ask AI
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-black/85 backdrop-blur-sm border-t border-white/15 px-5 py-4 flex flex-col gap-3">
          {[...leftLinks, ...rightLinks].map((l) => (
            <a key={l} href="#" className="text-xs uppercase tracking-wide font-medium text-white py-1" onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <button className="mt-2 rounded-full px-5 py-2 text-[10px] uppercase tracking-wide font-medium border border-white text-white w-fit">
            Ask AI
          </button>
        </div>
      )}
    </header>
  );
}