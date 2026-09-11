import React from "react";

const pillars = [
  {
    n: "01",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 30V14l12-8 12 8v16" stroke="#253926" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M13 30v-8h10v8" stroke="#253926" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="18" cy="10" r="2" fill="#253926" opacity=".4" />
      </svg>
    ),
    title: "Healthier Choices",
    desc: "Where the healthy option is the easy one.",
  },
  {
    n: "02",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18 4L6 9v10c0 8.5 5.1 16.4 12 18.9C25 35.4 30 27.5 30 19V9L18 4z"
          stroke="#253926"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M13 18l3 3 7-7" stroke="#253926" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Prevention",
    desc: "Acting early, in the habits that shape our health.",
  },
  {
    n: "03",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="13" r="4" stroke="#253926" strokeWidth="1.5" />
        <circle cx="25" cy="13" r="4" stroke="#253926" strokeWidth="1.5" />
        <path
          d="M3 30c0-5 3.6-8 8-8M25 22c4.4 0 8 3 8 8M14 30c0-4.5 1.8-8 4-8s4 3.5 4 8"
          stroke="#253926"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Healthier Together",
    desc: "Government, business and community, pulling one way.",
  },
];

export default function ThreePillars() {
  return (
    <section className="bg-white py-20 px-10">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#253926]/40 text-[10px] uppercase tracking-widest font-heading font-light mb-5">
          How we make it the easy choice
        </p>
        <h2 className="font-heading font-black text-[#253926]" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)" }}>
          Three pillars. One shared goal.
        </h2>
        <div className="grid md:grid-cols-3 gap-16 mt-16">
          {pillars.map((p) => (
            <div key={p.n} className="flex flex-col items-center text-center">
              <p className="text-[#253926]/30 text-[10px] uppercase tracking-widest font-heading font-light mb-6">
                Pillar {p.n}
              </p>
              <div className="mb-5">{p.icon}</div>
              <h3 className="font-heading font-bold text-[#253926] text-lg mb-2">{p.title}</h3>
              <p className="font-heading font-light text-[#253926]/60 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}