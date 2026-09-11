import React from "react";
import { Sprout, ShieldCheck, Atom } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "Healthier Choices",
    icon: Sprout,
    desc: "Making nutritious food and active living the easy, default option across every part of daily life.",
  },
  {
    num: "02",
    title: "Prevention",
    icon: ShieldCheck,
    desc: "Early screening, awareness and lifestyle interventions that stop disease before it starts.",
  },
  {
    num: "03",
    title: "Healthier Together",
    icon: Atom,
    desc: "Uniting schools, workplaces and communities so wellbeing is a shared, societal responsibility.",
  },
];

export default function ThreePillars() {
  return (
    <section className="bg-white py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-black text-center mb-14 lg:mb-20">
          Three pillars. One shared goal.
        </h2>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((p) => (
            <div key={p.num} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#E8F3EE] flex items-center justify-center mb-6">
                <p.icon size={28} className="text-[#2E8B57]" strokeWidth={1.6} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">{p.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}