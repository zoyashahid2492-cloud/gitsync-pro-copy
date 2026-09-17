import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

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

const INK = "#1A1A1A";
const MUTED = "#6b7a70";
const HEAD = "#9aa39c";

export default function Footer() {
  return (
    <footer style={{ background: "#F6F7F2" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:pr-6">
            <div className="leading-none">
              <div className="font-heading font-bold tracking-[0.14em] text-[14px]" style={{ color: INK }}>
                HEALTHY LIVING
              </div>
              <div
                className="font-heading font-medium tracking-[0.08em] mt-1 text-[11px]"
                style={{ color: INK, opacity: 0.7 }}
                dir="rtl"
              >
                الحياة الصحية
              </div>
            </div>
            <p className="font-heading font-light text-sm leading-relaxed mt-5" style={{ color: MUTED }}>
              Healthy Living is led by the Abu Dhabi Department of Health. It brings together government entities, partners, and communities to make healthier choices easier, more accessible, and part of daily life.
            </p>
            <p className="font-heading font-medium text-sm mt-4" style={{ color: INK }}>
              Making healthy living the easy choice for all.
            </p>
            <a
              href="https://sahatna.gov.ae"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-heading font-bold text-white mt-6 transition-opacity hover:opacity-90 active:scale-95"
              style={{ background: "#2E7D5C" }}
            >
              Connect to Sahatna <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Link columns */}
          {COLS.map((c) => (
            <div key={c.title} className="md:pl-4">
              <p
                className="text-[11px] uppercase tracking-[0.18em] font-heading font-bold mb-5"
                style={{ color: HEAD }}
              >
                {c.title}
              </p>
              <ul className="space-y-3">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="text-sm font-heading font-light transition-colors hover:opacity-70"
                      style={{ color: INK }}
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

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "#e2e6dc" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-[11px] font-heading font-light" style={{ color: HEAD }}>
            © 2026 Healthy Living. Led by the Abu Dhabi Department of Health.
          </p>
          <p className="text-[11px] font-heading font-medium tracking-[0.14em] uppercase" style={{ color: HEAD }}>
            HEALTHYLIVING.ABU
          </p>
        </div>
      </div>
    </footer>
  );
}