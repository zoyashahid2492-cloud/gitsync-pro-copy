import React from "react";

const BG = "#0F1914";
const CARD = "#17231E";
const BORDER = "#33403A";
const PILL = "#1C2A24";
const GREEN = "#82D1A3";
const MUTED = "#AAB0AD";

const CARDS = [
  {
    tag: "Nutrition",
    title: "Healthier eating. Everywhere.",
    body: "Healthy Living makes healthier eating the easy choice in everyday life — in schools, supermarkets, workplaces, and online.",
  },
  {
    tag: "Evidence and Insight",
    title: "Setting a global benchmark.",
    body: "Data, behavioural science, and evidence guide every action — helping Healthy Living focus where it is needed most.",
  },
];

export default function FocusAreas() {
  return (
    <section style={{ background: BG }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-10 grid md:grid-cols-2 gap-6">
        {CARDS.map((c) => (
          <div
            key={c.tag}
            className="rounded-2xl p-10 flex flex-col"
            style={{ background: CARD, border: `1px solid ${BORDER}` }}
          >
            <span
              className="inline-flex items-center self-start px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] font-heading font-medium mb-7"
              style={{ background: PILL, color: "#FFFFFF" }}
            >
              {c.tag}
            </span>
            <h3 className="font-heading font-bold text-white text-[1.65rem] leading-snug mb-4">{c.title}</h3>
            <p className="font-heading font-normal text-sm leading-relaxed flex-1" style={{ color: MUTED }}>
              {c.body}
            </p>
            <button
              className="mt-8 text-sm font-heading font-medium flex items-center gap-1.5 transition-colors w-fit"
              style={{ color: GREEN }}
            >
              Learn more <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}