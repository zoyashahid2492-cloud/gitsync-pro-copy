import React from "react";

const stats = [
  {
    value: "466+",
    color: "#b3dbbb",
    line1: "Schools on unified nutrition guidelines",
    line2: "Reaching 455,000 students",
  },
  {
    value: "200+",
    color: "#b3dbbb",
    line1: "Activations every week and month",
    line2: "Across 13 priority districts",
  },
  {
    value: "10 - 25%",
    color: "#cb7d5d",
    line1: "Sugar cut by producers",
    line2: "In key product categories",
  },
  {
    value: "Zero",
    color: "#b3dbbb",
    line1: "Unhealthy food and drink ads",
    line2: "Across Abu Dhabi public spaces",
  },
];

export default function StatsRibbon() {
  return (
    <section className="bg-[#232A21] py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-[19px] font-light text-[#b3dbbb] text-center mb-16 lg:mb-24 tracking-[1.2px]">
          REAL CHANGE, ALREADY UNDERWAY
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
          {stats.map((s) => (
            <div key={s.line1} className="text-center">
              <p
                className="font-black tracking-tight leading-none text-[56px] sm:text-[72px] lg:text-[94px]"
                style={{ color: s.color }}
              >
                {s.value}
              </p>
              <p className="mt-6 text-[20px] lg:text-[22px] font-medium text-white leading-snug max-w-[240px] mx-auto">
                {s.line1}
              </p>
              <p className="mt-2 text-[15px] lg:text-[16px] font-light text-white/60 max-w-[240px] mx-auto">
                {s.line2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}