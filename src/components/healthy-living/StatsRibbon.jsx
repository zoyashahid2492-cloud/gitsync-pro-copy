import React from "react";

const BG = "#0F1914";
const GREEN = "#82D1A3";
const ORANGE = "#D9734D";
const HEADER = "#6E7A75";
const MUTED = "#AAB0AD";

const stats = [
  { value: "466+", color: GREEN, label: "Schools on unified nutrition guidelines", sub: "Reaching 455,000 students" },
  { value: "200+", color: GREEN, label: "Activations every week and month", sub: "Across 13 priority districts" },
  { value: "10 - 25%", color: ORANGE, label: "Sugar cut by producers", sub: "In key product categories" },
  { value: "Zero", color: GREEN, label: "Unhealthy food and drink ads", sub: "Across Abu Dhabi public spaces" },
];

export default function StatsRibbon() {
  return (
    <section style={{ background: BG }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 pb-20 pt-6">
        <p
          className="text-[11px] uppercase tracking-[0.22em] font-heading font-light text-center mb-12"
          style={{ color: HEADER }}
        >
          Real change, already underway
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {stats.map((s) => (
            <div key={s.value} className="flex flex-col">
              <p
                className="font-heading font-light mb-3 leading-none"
                style={{ color: s.color, fontSize: "clamp(2.6rem,4.2vw,4rem)" }}
              >
                {s.value}
              </p>
              <p className="font-heading font-medium text-white text-sm leading-snug mb-1.5">{s.label}</p>
              <p className="font-heading font-light text-xs" style={{ color: MUTED }}>
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}