import React from "react";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    tag: "NUTRITION",
    title: "Healthier eating. Everywhere.",
    text: "From school canteens to restaurants and supermarkets, we work with partners to reformulate products, reduce sugar, and make nutritious options more available and affordable.",
  },
  {
    tag: "EVIDENCE AND INSIGHT",
    title: "Setting a global benchmark.",
    text: "Our research and data-driven approach tracks outcomes, informs policy, and shares what works — building an evidence base that other cities and nations can learn from.",
  },
];

export default function FocusAreas() {
  return (
    <section className="bg-[#1A211D] py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-6 lg:gap-8">
        {cards.map((c) => (
          <div key={c.tag} className="border border-white/20 rounded-2xl p-8 lg:p-10 flex flex-col">
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#b3dbbb] mb-5">
              {c.tag}
            </p>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
              {c.title}
            </h3>
            <p className="text-base text-white/65 leading-relaxed flex-1">{c.text}</p>
            <button className="mt-7 inline-flex items-center gap-2 text-white text-sm font-semibold hover:text-[#b3dbbb] transition-colors w-fit">
              Learn more <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}