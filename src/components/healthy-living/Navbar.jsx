import React, { useState, useEffect } from "react";

const NAV_LEFT = ["Healthy Living", "Schools & Children", "Global & Research"];
const NAV_RIGHT = ["Work with us", "Wellness Lab", "More"];
const imgLogo =
  "https://raw.githubusercontent.com/zoyashahid2492-cloud/HLdesign/main/src/imports/WebsitePsd/05a7212f171115943cedfdbfeb36c95138e834d3.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-2.5 transition-all duration-300"
      style={{ background: scrolled ? "#3f453f" : "#4E544E" }}
    >
      <div className="flex items-center gap-6 whitespace-nowrap">
        {NAV_LEFT.map((l) => (
          <button
            key={l}
            className="text-white text-[10px] font-heading font-medium tracking-[0.14em] uppercase hover:text-white/70 transition-colors"
          >
            {l}
          </button>
        ))}
      </div>

      <img src={imgLogo} alt="Healthy Living" className="h-9 object-contain shrink-0" />

      <div className="flex items-center gap-6 whitespace-nowrap">
        {NAV_RIGHT.map((l) => (
          <button
            key={l}
            className="text-white text-[10px] font-heading font-medium tracking-[0.14em] uppercase hover:text-white/70 transition-colors"
          >
            {l}
          </button>
        ))}
        <button className="rounded-full border border-white text-white text-[11px] font-heading font-bold tracking-[0.18em] uppercase px-5 py-1.5 bg-transparent hover:bg-white/10 transition-colors">
          Ask AI
        </button>
      </div>
    </nav>
  );
}