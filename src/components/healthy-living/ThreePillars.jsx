import React from "react";
import { GitBranch, Shield, Atom } from "lucide-react";

const pillars = [
  {
    num: "01",
    icon: GitBranch,
    title: "Healthier Choices",
    text: "Making the healthier choice the easier choice — in shops, restaurants, schools and public spaces across Abu Dhabi.",
  },
  {
    num: "02",
    icon: Shield,
    title: "Prevention",
    text: "Building prevention into everyday life so people stay well longer, reducing the burden of preventable disease.",
  },
  {
    num: "03",
    icon: Atom,
    title: "Healthier Together",
    text: "Uniting government, business and communities around a shared goal: longer, healthier lives for everyone.",
  },
];

export default function ThreePillars() {
  return (
    <section className="bg-[#F9FAF8] py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#1A211D] max-w-3xl">
          Three pillars. One shared goal.
        </h2>
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14 mt-14 lg:mt-20">
          {pillars.map((p) => (
            <div key={p.num} className="flex flex-col">
              <div className="w-14 h-14 rounded-full bg-white border border-[#1A211D]/10 flex items-center justify-center mb-6">
                <p.icon size={24} className="text-[#1A211D]" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#1A211D]/50 mb-2">
                Pillar {p.num}
              </p>
              <h3 className="text-2xl font-bold text-[#1A211D] mb-3">{p.title}</h3>
              <p className="text-base text-[#1A211D]/65 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}