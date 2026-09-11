import React from "react";

const imgStatsBg =
  "https://raw.githubusercontent.com/zoyashahid2492-cloud/HLdesign/main/src/imports/WebsitePsd/9521ecafbba8d80a33854341a0d8bec3bd972c22.png";

const stats = [
  { value: "466+", color: "#b3dbbb", label: "Schools on unified\nnutrition guidelines", sub: "Reaching 455,000 students" },
  { value: "200+", color: "#b3dbbb", label: "Activations every week\nand month", sub: "Across 13 priority districts" },
  { value: "10 - 25%", color: "#cb7d5d", label: "Sugar cut\nby producers", sub: "In key product categories" },
  { value: "Zero", color: "#b3dbbb", label: "Unhealthy food\nand drink ads", sub: "Across Abu Dhabi public spaces" },
];

export default function StatsRibbon() {
  return (
    <section className="relative bg-[#1a2a1a] overflow-hidden py-20 px-6">
      <img
        src={imgStatsBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-screen"
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <p className="text-[#b3dbbb] text-[10px] uppercase tracking-widest font-heading font-light text-center mb-14">
          Real change, already underway
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <p
                className="font-heading font-black mb-3"
                style={{ color: s.color, fontSize: "clamp(2.5rem,4vw,4rem)" }}
              >
                {s.value}
              </p>
              <p className="font-heading font-medium text-white text-sm leading-snug mb-1 whitespace-pre-line">
                {s.label}
              </p>
              <p className="font-heading font-light text-white/40 text-xs">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}