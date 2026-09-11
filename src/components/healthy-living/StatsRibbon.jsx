import React from "react";

const stats = [
  { value: "466+", line1: "Schools on unified nutrition guidelines", line2: "Reaching 455,000 students" },
  { value: "200+", line1: "Activations every week and month", line2: "Across 13 priority districts" },
  { value: "10-25%", line1: "Sugar cut by producers", line2: "In key product categories" },
  { value: "Zero", line1: "Unhealthy food and drink ads", line2: "Across Abu Dhabi public spaces" },
];

export default function StatsRibbon() {
  return (
    <section className="bg-[#232A21] py-16 lg:py-20 px-5 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-sm lg:text-base font-bold text-white text-center mb-12 lg:mb-16 tracking-[0.15em]">
          REAL CHANGE, ALREADY UNDERWAY
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map((s) => (
            <div key={s.line1} className="text-center">
              <p className="text-4xl lg:text-6xl font-extrabold text-[#BDE0C1] tracking-tight">{s.value}</p>
              <p className="mt-4 text-xs lg:text-sm text-white leading-snug max-w-[200px] mx-auto">{s.line1}</p>
              <p className="mt-1 text-[11px] lg:text-xs text-white/50 max-w-[200px] mx-auto">{s.line2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}