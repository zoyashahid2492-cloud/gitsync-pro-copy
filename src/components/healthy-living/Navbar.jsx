import React, { useState, useEffect } from "react";

const NAV_LEFT = ["Healthy Living", "Schools & Children", "Global & Research"];
const NAV_RIGHT = ["Work with us", "Wellness Lab", "More"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3 transition-all duration-300"
      style={
        scrolled
          ? { background: "rgba(15,22,15,0.82)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }
          : { background: "rgba(0,0,0,0.35)" }
      }
    >
      <div className="flex items-center gap-7">
        {NAV_LEFT.map((l) => (
          <button
            key={l}
            className="text-white text-[12px] font-heading font-medium tracking-[0.14em] uppercase hover:text-white/70 transition-colors"
          >
            {l}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center text-center leading-none select-none">
        <span className="text-white text-[13px] font-heading font-bold tracking-[0.22em] uppercase">Healthy Living</span>
        <span className="text-white text-[14px] font-heading tracking-[0.08em] mt-1" style={{ direction: "rtl" }}>
          الحياة الصحية
        </span>
      </div>

      <div className="flex items-center gap-7">
        {NAV_RIGHT.map((l) => (
          <button
            key={l}
            className="text-white text-[12px] font-heading font-medium tracking-[0.14em] uppercase hover:text-white/70 transition-colors"
          >
            {l}
          </button>
        ))}
        <button className="rounded-full border border-[#A8C5A8] text-white text-[11px] font-heading font-bold tracking-[0.18em] uppercase px-5 py-1.5 bg-transparent hover:bg-[#A8C5A8]/15 transition-colors">
          Ask AI
        </button>
      </div>
    </nav>
  );
}