import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

const imgLogo =
  "https://raw.githubusercontent.com/zoyashahid2492-cloud/HLdesign/main/src/imports/WebsitePsd/05a7212f171115943cedfdbfeb36c95138e834d3.png";

// Phase 1 site map — exact order
const NAV = [
  ["Home", "/"],
  ["Our Approach", "/approach"],
  ["Schools & Children", "/schools"],
  ["Global & Research", "/global"],
  ["Collaborate With Us", "/work-with-us"],
  ["Wellness Lab", "/wellness-lab"],
  ["Updates", "/updates"],
  ["About Us", "/about"],
  ["Partners", "/partners"],
  ["Press", "/press"],
  ["FAQ", "/faq"],
  ["Ask AI", "/ask-ai"],
];

const linkBase =
  "text-white text-[10px] font-heading font-medium tracking-[0.12em] uppercase whitespace-nowrap hover:text-white/60 transition-colors";

export default function Navbar({ solid }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isSolid = solid || scrolled;

  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const main = NAV.slice(0, 11); // text links
  const askAi = NAV[11];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-3 transition-colors duration-300"
        style={{ background: isSolid ? "#4E544E" : "transparent" }}
      >
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="shrink-0">
            <img src={imgLogo} alt="Healthy Living" className="h-9 object-contain" />
          </Link>

          {/* Desktop horizontal nav (xl+) */}
          <div className="hidden xl:flex flex-1 items-center justify-center gap-5 min-w-0">
            {main.map(([label, to]) => (
              <Link key={label} to={to} className={linkBase}>
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to={askAi[1]}
              className="hidden xl:inline-flex items-center gap-1.5 rounded-full text-white text-[11px] font-heading font-bold tracking-[0.16em] uppercase px-5 py-1.5 bg-white/5 hover:bg-white/15 transition-colors whitespace-nowrap"
              style={{ border: "1.5px solid #A5B39A" }}
            >
              <Sparkles size={12} /> {askAi[0]}
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="xl:hidden text-white p-1"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile / tablet drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] xl:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div
            className="absolute right-0 top-0 h-full w-[82%] max-w-sm overflow-y-auto px-6 py-6"
            style={{ background: "#3A403A" }}
          >
            <div className="flex items-center justify-between mb-8">
              <img src={imgLogo} alt="Healthy Living" className="h-8 object-contain" />
              <button onClick={() => setOpen(false)} className="text-white p-1" aria-label="Close menu">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col">
              {NAV.map(([label, to]) => (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-white text-sm font-heading font-medium tracking-[0.1em] uppercase border-b border-white/10 hover:text-white/70"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}