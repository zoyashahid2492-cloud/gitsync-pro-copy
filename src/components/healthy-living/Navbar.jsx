import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";

const leftLinks = ["HEALTHY LIVING", "SCHOOLS & CHILDREN", "GLOBAL"];
const rightLinks = ["WORK WITH US", "WELLNESS LAB", "MORE"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
      <nav className="max-w-[1400px] mx-auto px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        {/* Left links */}
        <div className="hidden lg:flex items-center gap-6 flex-1">
          {leftLinks.map((l) => (
            <a
              key={l}
              href="#"
              className="text-[11px] uppercase tracking-wide font-medium text-[#333] hover:text-[#2B5B49] transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Center logo */}
        <a href="#" className="flex-1 lg:flex-none flex justify-center">
          <div className="flex flex-col items-center leading-none">
            <span className="text-[13px] lg:text-[15px] font-medium text-[#2B5B49] mb-1" dir="rtl">
              الحياة الصحية
            </span>
            <span className="text-[15px] lg:text-[17px] font-extrabold tracking-tight text-[#2B5B49]">
              HEALTHY LIVING
            </span>
          </div>
        </a>

        {/* Right links + ASK AI + Search */}
        <div className="hidden lg:flex items-center gap-6 flex-1 justify-end">
          {rightLinks.map((l) => (
            <a
              key={l}
              href="#"
              className="text-[11px] uppercase tracking-wide font-medium text-[#333] hover:text-[#2B5B49] transition-colors"
            >
              {l}
            </a>
          ))}
          <button className="rounded-full px-5 py-2 text-[11px] uppercase tracking-wide font-medium border border-[#2B5B49] text-[#2B5B49] hover:bg-[#2B5B49] hover:text-white transition-all">
            Ask AI
          </button>
          <button aria-label="Search" className="text-[#333] hover:text-[#2B5B49] transition-colors">
            <Search size={18} />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#333]"
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
              className="text-xs uppercase tracking-wide font-medium text-[#333] py-1"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <button className="mt-2 rounded-full px-5 py-2 text-[11px] uppercase tracking-wide font-medium border border-[#2B5B49] text-[#2B5B49] w-fit">
            Ask AI
          </button>
        </div>
      )}
    </header>
  );
}