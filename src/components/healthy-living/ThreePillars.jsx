import React from "react";

const INK = "#1a1a1a";
const SAGE = "#5a8d5e";
const DIV = "#e0e0e0";

const pillars = [
  {
    n: "01",
    title: "Healthier Choices",
    desc: "Where the healthy option is the easy one.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke={SAGE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6v28" />
        <path d="M20 12h-9l4-4-4-4h9" />
        <path d="M20 28h9l-4 4 4 4h-9" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Prevention",
    desc: "Acting early, in the habits that shape our health.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke={SAGE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 5L8 10v10c0 8.5 5.1 15.4 12 17.9C27 35.4 32 28.5 32 20V10L20 5z" />
        <path d="M11 21h5l2-5 3 8 2-3h6" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Healthier Together",
    desc: "Government, business and community, pulling one way.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke={SAGE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="9" r="4" />
        <circle cx="9" cy="29" r="4" />
        <circle cx="31" cy="29" r="4" />
        <path d="M20 13v6M16.5 25L11.5 27M23.5 25L28.5 27" />
      </svg>
    ),
  },
];

export default function ThreePillars() {
  return (
    <section className="bg-white py-24 px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-5" style={{ color: SAGE }}>
            How we make it the easy choice
          </p>
          <h2 className="font-heading font-black" style={{ color: INK, fontSize: "clamp(1.9rem,3.6vw,3rem)" }}>
            Three pillars. One shared goal.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: DIV }}>
          {pillars.map((p) => (
            <div key={p.n} className="flex flex-col items-center text-center px-8 py-10 md:py-0" style={{ borderColor: DIV }}>
              <p className="text-[10px] uppercase tracking-[0.22em] font-heading font-medium mb-8" style={{ color: SAGE }}>
                Pillar {p.n}
              </p>
              <div className="mb-7">{p.icon}</div>
              <h3 className="font-heading font-bold text-xl mb-3" style={{ color: INK }}>
                {p.title}
              </h3>
              <p className="font-heading font-light text-sm leading-relaxed max-w-[240px]" style={{ color: INK, opacity: 0.7 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}