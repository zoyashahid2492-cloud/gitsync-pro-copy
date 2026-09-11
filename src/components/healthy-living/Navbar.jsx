import React, { useState, useEffect } from "react";

const NAV_LEFT = ["Healthy Living", "Schools & Children", "Global & Research"];
const NAV_RIGHT = ["Work with us", "Wellness Lab", "More"];
const imgLogo =
  "https://raw.githubusercontent.com/zoyashahid2492-cloud/HLdesign/main/src/imports/WebsitePsd/05a7212f171115943cedfdbfeb36c95138e834d3.png";

const linkClass =
  "text-white font-heading hover:text-white/70 transition-colors";
const linkStyle = { fontSize: "13px", fontWeight: 300, letterSpacing: ".12em", whiteSpace: "nowrap" };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed left-0 right-0 z-50 px-6 transition-colors duration-300"
      style={{ top: 36, background: scrolled ? "#4E544E" : "transparent" }}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-start gap-4 min-w-0">
          {NAV_LEFT.map((l) => (
            <button key={l} className={linkClass + " uppercase"} style={linkStyle}>
              {l}
            </button>
          ))}
        </div>

        <img src={imgLogo} alt="Healthy Living" className="h-9 object-contain shrink-0" />

        <div className="flex-1 flex items-center justify-end gap-4 min-w-0">
          {NAV_RIGHT.map((l) => (
            <button key={l} className={linkClass + " uppercase"} style={linkStyle}>
              {l}
            </button>
          ))}
          <button className="rounded-full border border-white text-white text-[11px] font-heading font-bold tracking-[0.18em] uppercase px-5 py-1.5 bg-transparent hover:bg-white/10 transition-colors whitespace-nowrap shrink-0">
            Ask AI
          </button>
        </div>
      </div>
    </nav>
  );
}