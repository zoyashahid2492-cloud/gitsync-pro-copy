import React from "react";
import { Link } from "react-router-dom";

const COLS = [
  {
    title: "Explore",
    links: [
      ["Our Approach", "/approach"],
      ["About", "/about"],
      ["Schools & Children", "/schools"],
      ["Evidence & Insight", "/research"],
    ],
  },
  {
    title: "Focus Areas",
    links: [
      ["Nutrition", "/lab"],
      ["Movement", "/lab"],
      ["Mental Health", "/lab"],
      ["Sleep", "/lab"],
    ],
  },
  {
    title: "Connect",
    links: [
      ["Work with us", "/collaborate"],
      ["Partners", "/partners"],
      ["Press", "/press"],
      ["FAQ", "/faq"],
    ],
  },
];

function Logo() {
  return (
    <div className="leading-none">
      <div className="font-heading font-bold text-white text-[13px] tracking-[0.16em]">HEALTHY LIVING</div>
      <div className="font-heading font-medium text-white/80 text-[11px] tracking-[0.08em] mt-0.5" dir="rtl">الحياة الصحية</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#0F1914" }} className="text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <Logo />
            <p className="font-heading font-light text-sm text-white/70 leading-relaxed max-w-xs mt-4">
              Making healthier choices easier, more accessible and part of everyday life across Abu Dhabi.
            </p>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <p
                className="text-[11px] uppercase tracking-[0.18em] font-heading font-bold mb-4"
                style={{ color: "#82D1A3" }}
              >
                {c.title}
              </p>
              <ul className="space-y-2.5">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="text-sm font-heading font-light text-white/75 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-[11px] font-heading font-light text-white/55">
            © 2026 Healthy Living
          </p>
          <p className="text-[11px] font-heading font-light text-white/55">
            Privacy policy <span className="mx-2 text-white/30">|</span> Terms &amp; conditions
          </p>
        </div>
      </div>
    </footer>
  );
}