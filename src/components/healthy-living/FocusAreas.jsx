import React from "react";

export default function FocusAreas() {
  return (
    <section className="bg-[#1e2b1e]">
      <div className="max-w-6xl mx-auto px-10 py-20 grid md:grid-cols-2 gap-8">
        <div className="border border-white/10 rounded-xl p-10 flex flex-col">
          <p className="text-[#b3dbbb] text-[10px] uppercase tracking-widest font-heading font-medium mb-6">Nutrition</p>
          <h3 className="font-heading font-bold text-white text-2xl leading-snug mb-4">
            Healthier eating. Everywhere.
          </h3>
          <p className="font-heading font-light text-white/60 text-sm leading-relaxed flex-1">
            Healthy Living is making the easy choice the everyday choice — in schools, supermarkets, workplaces, and
            online.
          </p>
          <button className="mt-8 text-white text-sm font-heading font-medium flex items-center gap-1 hover:text-[#b3dbbb] transition-colors w-fit">
            Learn more <span className="text-[#b3dbbb]">→</span>
          </button>
        </div>
        <div className="border border-white/10 rounded-xl p-10 flex flex-col">
          <p className="text-[#b3dbbb] text-[10px] uppercase tracking-widest font-heading font-medium mb-6">
            Evidence and Insight
          </p>
          <h3 className="font-heading font-bold text-white text-2xl leading-snug mb-4">
            Setting a global benchmark.
          </h3>
          <p className="font-heading font-light text-white/60 text-sm leading-relaxed flex-1">
            Data, behavioural science, and evidence guide every action — helping Healthy Living measure what matters
            most.
          </p>
          <button className="mt-8 text-white text-sm font-heading font-medium flex items-center gap-1 hover:text-[#b3dbbb] transition-colors w-fit">
            Learn more <span className="text-[#b3dbbb]">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}