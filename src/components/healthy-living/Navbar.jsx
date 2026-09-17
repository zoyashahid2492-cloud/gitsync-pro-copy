import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";

const PRIMARY = [
  ["HEALTHY LIVING", "/"],
  ["SCHOOLS & CHILDREN", "/schools"],
  ["GLOBAL & RESEARCH", "/research"],
];

const RIGHT = [
  ["WORK WITH US", "/collaborate"],
  ["WELLNESS LAB", "/lab"],
];

const MORE = [
  ["Our Approach", "/approach"],
  ["Updates", "/updates"],
  ["About Us", "/about"],
  ["Partners", "/partners"],
  ["Press", "/press"],
  ["FAQ", "/faq"],
];

const linkBase =
  "font-heading font-medium uppercase tracking-[0.14em] whitespace-nowrap hover:opacity-60 transition-opacity";

function LogoBlock({ small = false }) {
  return (
    <div className="leading-none text-center">
      <div
        className="font-heading font-bold text-[#1A1A1A] tracking-[0.14em]"
        style={{ fontSize: small ? "11px" : "12px" }}
      >
        HEALTHY LIVING
      </div>
      <div
        className="font-heading font-medium text-[#1A1A1A]/70 tracking-[0.08em] mt-0.5"
        style={{ fontSize: small ? "9px" : "10px" }}
        dir="rtl"
      >
        الحياة الصحية
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [more, setMore] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{ background: "rgba(255,255,255,0.94)", backdropFilter: "blur(6px)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}
      >
        <div className="relative flex items-center justify-between gap-4 px-6 py-3.5">
          {/* Left links */}
          <div className="hidden md:flex items-center gap-6 text-[#1A1A1A]">
            {PRIMARY.map(([label, to]) => (
              <Link key={label} to={to} className={`${linkBase} text-[10px] xl:text-[11px]`}>
                {label}
              </Link>
            ))}
          </div>

          {/* Centered logo block */}
          <Link
            to="/"
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center rounded-md px-4 py-1.5"
            style={{ background: "#EFEFEF" }}
          >
            <LogoBlock />
          </Link>

          {/* Right links + ASK AI */}
          <div className="hidden md:flex items-center gap-6 text-[#1A1A1A]">
            {RIGHT.map(([label, to]) => (
              <Link key={label} to={to} className={`${linkBase} text-[10px] xl:text-[11px]`}>
                {label}
              </Link>
            ))}

            {/* MORE dropdown */}
            <div className="relative">
              <button
                onClick={() => setMore((v) => !v)}
                onBlur={() => setTimeout(() => setMore(false), 150)}
                className={`${linkBase} text-[10px] xl:text-[11px] flex items-center gap-1 text-[#1A1A1A]`}
              >
                MORE <ChevronDown size={12} />
              </button>
              {more && (
                <div
                  className="absolute right-0 top-full mt-2 w-48 rounded-xl py-2"
                  style={{ background: "#fff", border: "1px solid #e5e5e5", boxShadow: "0 10px 30px rgba(0,0,0,0.12)" }}
                >
                  {MORE.map(([label, to]) => (
                    <Link
                      key={label}
                      to={to}
                      onClick={() => setMore(false)}
                      className="block px-4 py-2 text-[12px] font-heading font-medium text-[#1A1A1A] hover:bg-[#f5f5f5]"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/ai"
              className="inline-flex items-center gap-1.5 rounded-full text-white text-[11px] font-heading font-bold tracking-[0.16em] uppercase px-5 py-2 transition-opacity hover:opacity-90"
              style={{ background: "#1A1A1A" }}
            >
              <Sparkles size={12} /> ASK AI
            </Link>
          </div>

          {/* Mobile: hamburger + centered logo */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-[#1A1A1A] p-1"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
          <Link to="/" className="md:hidden absolute left-1/2 -translate-x-1/2">
            <LogoBlock small />
          </Link>
        </div>
      </nav>

      {/* Mobile / tablet drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div
            className="absolute right-0 top-0 h-full w-[82%] max-w-sm overflow-y-auto px-6 py-6"
            style={{ background: "#fff" }}
          >
            <div className="flex items-center justify-between mb-8">
              <LogoBlock />
              <button onClick={() => setOpen(false)} className="text-[#1A1A1A] p-1" aria-label="Close menu">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col">
              {[...PRIMARY, ...RIGHT, ...MORE].map(([label, to]) => (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[#1A1A1A] text-sm font-heading font-medium tracking-[0.1em] uppercase border-b border-[#eee]"
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/ai"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full text-white text-sm font-heading font-bold tracking-[0.16em] uppercase px-6 py-3 transition-opacity hover:opacity-90"
                style={{ background: "#1A1A1A" }}
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