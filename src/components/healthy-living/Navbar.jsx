import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

const LOGO =
  "https://media.base44.com/images/public/6aa3a64fa8d590a56698abe0/750736f69_image.png";

const HL_DROPDOWN = [
  ["Our Approach", "/approach"],
  ["Updates", "/updates"],
  ["About Us", "/about"],
];

const LEFT_LINKS = [
  ["SCHOOLS & CHILDREN", "/schools"],
  ["GLOBAL & RESEARCH", "/research"],
];

const RIGHT = [
  ["WORK WITH US", "/collaborate"],
  ["WELLNESS LAB", "/lab"],
];

const MORE = [
  ["Partners", "/partners"],
  ["Press", "/press"],
  ["FAQ", "/faq"],
];

const MOBILE_LIST = [
  ["Home", "/"],
  ["Our Approach", "/approach"],
  ["Updates", "/updates"],
  ["About Us", "/about"],
  ["Schools & Children", "/schools"],
  ["Global & Research", "/research"],
  ["Work With Us", "/collaborate"],
  ["Wellness Lab", "/lab"],
  ["Partners", "/partners"],
  ["Press", "/press"],
  ["FAQ", "/faq"],
];

const linkBase =
  "font-heading font-medium uppercase tracking-[0.14em] whitespace-nowrap transition-opacity hover:opacity-60 text-white";

const UNDERLINE = "#b3dbbb";

function NavDropdown({ label, items, align, open, setOpen, activePath }) {
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className={`${linkBase} text-[9px] lg:text-[10px] xl:text-[11px] flex items-center gap-1 pb-1`}
        style={{ borderBottom: `2px solid ${open ? UNDERLINE : "transparent"}` }}
      >
        {label} {open ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
      </button>
      {open && (
        <div
          className={`absolute top-full mt-2 min-w-[176px] rounded-b-lg overflow-hidden ${
            align === "right" ? "right-0" : "left-0"
          }`}
          style={{
            background: "#fff",
            border: "1px solid #e2e6dc",
            boxShadow: "0 12px 32px rgba(0,0,0,0.14)",
          }}
        >
          {items.map(([itemLabel, to], i) => {
            const active = to === activePath;
            return (
              <Link
                key={itemLabel}
                to={to}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 text-[12px] font-heading uppercase tracking-[0.14em] transition-colors hover:text-[#365e49]"
                style={{
                  color: active ? "#365e49" : "#a0a0a0",
                  fontWeight: active ? 700 : 500,
                  borderTop: i > 0 ? "1px solid #eef0ec" : "none",
                }}
              >
                {itemLabel}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Navbar({ solid }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hl, setHl] = useState(false);
  const [more, setMore] = useState(false);
  const [open, setOpen] = useState(false);
  const isSolid = solid || scrolled;

  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{
          background: isSolid ? "#0F2520" : "transparent",
          borderBottom: isSolid ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        <div className="relative flex items-center justify-between gap-3 px-5 lg:px-6 py-3.5">
          {/* Left links */}
          <div className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-6">
            <NavDropdown
              label="HEALTHY LIVING"
              items={HL_DROPDOWN}
              align="left"
              open={hl}
              setOpen={setHl}
              activePath={location.pathname}
            />
            {LEFT_LINKS.map(([label, to]) => (
              <Link key={label} to={to} className={`${linkBase} text-[9px] lg:text-[10px] xl:text-[11px]`}>
                {label}
              </Link>
            ))}
          </div>

          {/* Centered logo block */}
          <Link to="/" className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center px-2 shrink-0">
            <img
              src={LOGO}
              alt="Healthy Living"
              className="h-7 lg:h-9 xl:h-10 w-auto object-contain"
            />
          </Link>

          {/* Right links + MORE + ASK AI */}
          <div className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-6">
            {RIGHT.map(([label, to]) => (
              <Link key={label} to={to} className={`${linkBase} text-[9px] lg:text-[10px] xl:text-[11px]`}>
                {label}
              </Link>
            ))}

            <NavDropdown
              label="MORE"
              items={MORE}
              align="right"
              open={more}
              setOpen={setMore}
              activePath={location.pathname}
            />

            <Link
              to="/ai"
              className="inline-flex items-center gap-1.5 rounded-full text-[10px] lg:text-[11px] font-heading font-bold tracking-[0.16em] uppercase px-3 lg:px-4 xl:px-5 py-1.5 lg:py-2 transition-colors hover:bg-white hover:text-[#0F2520] shrink-0"
              style={{ border: "1px solid #b3dbbb", color: "#ffffff" }}
            >
              <Sparkles size={12} /> ASK AI
            </Link>
          </div>

          {/* Mobile / tablet: hamburger + centered logo */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white p-1 shrink-0"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
          <Link to="/" className="md:hidden absolute left-[56%] -translate-x-1/2 shrink-0">
            <img
              src={LOGO}
              alt="Healthy Living"
              className="h-8 w-auto object-contain"
            />
          </Link>
          {/* spacer to balance hamburger on the right */}
          <div className="md:hidden w-6 shrink-0" />
        </div>
      </nav>

      {/* Mobile / tablet drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div
            className="absolute right-0 top-0 h-full w-[82%] max-w-sm overflow-y-auto px-6 py-6"
            style={{ background: "#0F2520" }}
          >
            <div className="flex items-center justify-between mb-8">
              <img
                src={LOGO}
                alt="Healthy Living"
                className="h-8 w-auto object-contain"
              />
              <button onClick={() => setOpen(false)} className="text-white p-1" aria-label="Close menu">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col">
              {MOBILE_LIST.map(([label, to]) => (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-white text-sm font-heading font-medium tracking-[0.1em] uppercase border-b border-white/10 hover:text-white/70"
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/ai"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full text-[11px] font-heading font-bold tracking-[0.16em] uppercase px-6 py-3 transition-colors hover:bg-white hover:text-[#0F2520]"
                style={{ border: "1px solid #b3dbbb", color: "#ffffff" }}
              >
                <Sparkles size={14} /> ASK AI
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}