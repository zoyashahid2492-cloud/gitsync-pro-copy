import React from "react";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    tag: "Nutrition",
    title: "Healthier eating. Everywhere.",
    body: "From schools and workplaces to restaurants and retailers, we're reshaping the food environment so the healthier choice is the default — not the exception.",
  },
  {
    tag: "Evidence and Insight",
    title: "Setting a global benchmark.",
    body: "Rigorous data and independent evaluation underpin every programme, giving Abu Dhabi a measurable, evidence-led model for population health.",
  },
];

export default function TwoCards() {
  return (
    <section className="bg-[#1A2621] py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 lg:gap-16">
        {cards.map((c) => (
          <div key={c.tag} className="border-t border-white/15 pt-8">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-[#B2D8C3]">{c.tag}</span>
            <h3 className="mt-4 text-2xl lg:text-3xl font-bold text-white">{c.title}</h3>
            <p className="mt-4 text-sm lg:text-base text-white/70 leading-relaxed max-w-md">{c.body}</p>
            <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#B2D8C3] transition-colors">
              Learn more <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}