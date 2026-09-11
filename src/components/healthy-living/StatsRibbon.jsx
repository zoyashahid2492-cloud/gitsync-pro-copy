import React from "react";

const stats = [
  { value: "466+", label: "Schools on unified nutrition guidelines" },
  { value: "200+", label: "Activations every week and month" },
  { value: "10–25%", label: "Sugar cut by producers" },
  { value: "Zero", label: "Unhealthy food and drink ads" },
];

export default function StatsRibbon() {
  return (
    <section className="bg-[#1A2B24] py-16 lg:py-20 px-5 lg:px-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">{s.value}</p>
            <p className="mt-3 text-xs lg:text-sm text-white/60 leading-snug max-w-[200px] mx-auto">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}