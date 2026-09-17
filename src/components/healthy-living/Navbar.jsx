import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const imgLogo =
  "https://raw.githubusercontent.com/zoyashahid2492-cloud/HLdesign/main/src/imports/WebsitePsd/05a7212f171115943cedfdbfeb36c95138e834d3.png";

const ROUTES = {
  "Healthy Living": "/",
  "Schools & Children": "/schools",
  "Global & Research": "/global",
  "Work with us": "/work-with-us",
  "Wellness Lab": "/wellness-lab",
};
const NAV_LEFT = ["Healthy Living", "Schools & Children", "Global & Research"];
const NAV_RIGHT = ["Work with us", "Wellness Lab", "More"];
const MORE_ITEMS = [
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Latest Updates", "/"],
];

const linkClass =
  "text-white text-[10px] font-heading font-medium tracking-[0.14em] uppercase text-center leading-[1.15] whitespace-normal max-w-[110px] min-w-0 lg:whitespace-nowrap lg:max-w-none hover:text-white/70 transition-colors";

export default function Navbar({ solid }) {
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();
  const moreRef = useRef(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  useEffect(() => {
    setMoreOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    const onClick = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const isSolid = solid || scrolled;

  const renderLink = (label) => {
    const to = ROUTES[label];
    const active = location.pathname === to;
    return (
      <Link key={label} to={to} className={`${linkClass} ${active ? "text-[#B0D5B5]" : ""}`}>
        {label}
      </Link>
    );
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-2.5 transition-colors duration-300"
      style={{ background: isSolid ? "#4E544E" : "transparent" }}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-start gap-4 min-w-0">
          {NAV_LEFT.map(renderLink)}
        </div>

        <Link to="/">
          <img src={imgLogo} alt="Healthy Living" className="h-9 object-contain shrink-0" />
        </Link>

        <div className="flex-1 flex items-center justify-end gap-4 min-w-0">
          {NAV_RIGHT.slice(0, 2).map(renderLink)}
          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setMoreOpen((o) => !o)}
              className={`${linkClass} flex items-center gap-1`}
            >
              More
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1 2.5L4 5.5L7 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {moreOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-44 rounded-xl py-2"
                style={{ background: "#4E544E", border: "1px solid #6b7a6b" }}
              >
                {MORE_ITEMS.map(([label, to]) => (
                  <Link
                    key={label}
                    to={to}
                    className="block px-4 py-2 text-[11px] font-heading font-medium tracking-[0.1em] uppercase text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/ask-ai"
            className="rounded-full text-white text-[11px] font-heading font-bold tracking-[0.18em] uppercase px-5 py-1.5 bg-white/5 hover:bg-white/15 transition-colors whitespace-nowrap shrink-0"
            style={{ border: "1.5px solid #A5B39A" }}
          >
            Ask AI
          </Link>
        </div>
      </div>
    </nav>
  );
}