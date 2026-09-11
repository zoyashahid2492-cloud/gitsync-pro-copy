import React from "react";
import { ArrowRight } from "lucide-react";

const updates = [
  { tag: "EVENTS", title: "Festival of Health returns to Abu Dhabi", date: "10 Jul 2026" },
  { tag: "POLICY", title: "Nutri-Mark front-of-pack labelling adopted", date: "3 Jul 2026" },
  { tag: "PROGRAMME", title: "Healthy Living reaches 466 schools", date: "28 Jun 2026" },
  { tag: "POLICY", title: "Out-of-home advertising policy approved", date: "15 Jun 2026" },
];

export default function UpdatesFooter() {
  return (
    <section className="bg-white py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Sahatna CTA */}
        <div className="bg-[#F4F4F4] rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-black">
              Personal health tracking, device sync and health records.
            </h3>
            <p className="mt-2 text-sm text-neutral-600">Continue your health journey in Sahatna.</p>
          </div>
          <button className="bg-white border border-black text-black px-7 py-3.5 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors shrink-0">
            Connect to Sahatna
          </button>
        </div>

        {/* Updates table */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-black">Latest updates</h3>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-black hover:gap-3 transition-all">
            View all <ArrowRight size={16} />
          </a>
        </div>
        <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
          {updates.map((u, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 py-5 hover:bg-neutral-50 transition-colors px-2">
              <span className="text-xs uppercase tracking-widest text-[#2E8B57] font-semibold w-28 shrink-0">{u.tag}</span>
              <p className="text-sm lg:text-base text-black flex-1">{u.title}</p>
              <span className="text-xs text-neutral-500 sm:text-right">{u.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}