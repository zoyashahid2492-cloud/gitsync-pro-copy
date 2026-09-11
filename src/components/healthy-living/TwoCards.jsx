import React from "react";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    tag: "NUTRITION",
    title: "Healthier eating. Everywhere.",
    desc: "Working with producers, retailers and schools to cut sugar and make nutritious food the easy choice.",
  },
  {
    tag: "EVIDENCE AND INSIGHT",
    title: "Setting a global benchmark.",
    desc: "Data-driven research and policy that positions Abu Dhabi as a leader in public health.",
  },
];

export default function TwoCards() {
  return (
    <section className="bg-[#F4F4F4] py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-6 lg:gap-8">
        {cards.map((c) => (
          <div
            key={c.tag}
            className="bg-[#1A2B24] text-white rounded-2xl p-8 lg:p-10 border border-white/10 flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-4">{c.tag}</p>
              <h3 className="text-2xl lg:text-3xl font-bold leading-tight">{c.title}</h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-sm">{c.desc}</p>
            </div>
            <a href="#" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white hover:gap-3 transition-all w-fit">
              Learn more <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}