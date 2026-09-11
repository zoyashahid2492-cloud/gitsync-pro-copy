import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["HEALTHY LIVING", "SCHOOLS & CHILDREN", "GLOBAL & RESEARCH", "WORK WITH US", "WELLNESS LAB", "MORE"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-[1400px] mx-auto px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between gap-4">
        {/* Logo - left */}
        <a href="#" className="flex items-center shrink-0">
          <div className="flex flex-col items-start leading-none">
            <span className="text-[15px] lg:text-[17px] font-extrabold tracking-tight text-white">
              HEALTHY LIVING
            </span>
            <span className="text-[11px] lg:text-[12px] font-medium text-white/90 mt-1" dir="rtl">
              الحياة الصحية
            </span>
          </div>
        </a>

        {/* Center links */}
        <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="text-[10px] uppercase tracking-wide font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Right - ASK AI + button */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <button className="text-[10px] uppercase tracking-wide font-medium text-white/90 hover:text-white transition-colors">
            Ask AI
          </button>
          <button className="rounded-full px-5 py-2 text-[10px] uppercase tracking-wide font-medium bg-white text-black hover:bg-white/90 transition-all">
            Search
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-black/85 backdrop-blur-sm border-t border-white/15 px-5 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="text-xs uppercase tracking-wide font-medium text-white py-1"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <button className="mt-2 rounded-full px-5 py-2 text-[10px] uppercase tracking-wide font-medium bg-white text-black w-fit">
            Ask AI
          </button>
        </div>
      )}
    </header>
  );
}