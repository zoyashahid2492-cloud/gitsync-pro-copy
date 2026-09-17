import React from "react";
import { Link } from "react-router-dom";

const imgLogo =
  "https://raw.githubusercontent.com/zoyashahid2492-cloud/HLdesign/main/src/imports/WebsitePsd/05a7212f171115943cedfdbfeb36c95138e834d3.png";

const COLS = [
  {
    title: "Explore",
    links: [
      ["Healthy Living", "/"],
      ["Schools & Children", "/schools"],
      ["Global & Research", "/global"],
      ["Work With Us", "/work-with-us"],
    ],
  },
  {
    title: "Tools",
    links: [
      ["Wellness Lab", "/wellness-lab"],
      ["Wellness Tools", "/tools"],
      ["Meal Plan", "/meal-plans"],
      ["Workout Plan", "/workout"],
      ["Wellness Check", "/wellness-check"],
      ["Ask AI", "/ask-ai"],
    ],
  },
  {
    title: "Community",
    links: [
      ["Rewards", "/rewards"],
      ["Communities", "/communities"],
      ["Food Scanner", "/scanner"],
      ["Sahatna", "https://sahatna.ae"],
    ],
  },
  {
    title: "More",
    links: [
      ["About", "/about"],
      ["Contact", "/contact"],
      ["Latest Updates", "/"],
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0F1914" }} className="text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div>
            <img src={imgLogo} alt="Healthy Living" className="h-10 object-contain mb-4" />
            <p className="font-heading font-light text-sm text-white/70 leading-relaxed max-w-xs">
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
                    {href.startsWith("http") ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-heading font-light text-white/75 hover:text-white transition-colors"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        to={href}
                        className="text-sm font-heading font-light text-white/75 hover:text-white transition-colors"
                      >
                        {label}
                      </Link>
                    )}
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
            Led by the Abu Dhabi Department of Health
          </p>
          <p className="text-[11px] font-heading font-light text-white/55">
            © {new Date().getFullYear()} Healthy Living. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}