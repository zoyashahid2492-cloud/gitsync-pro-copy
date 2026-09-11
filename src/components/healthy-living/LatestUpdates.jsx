import React from "react";
import { ArrowRight } from "lucide-react";

const updates = [
  { cat: "EVENTS", title: "Festival of Health returns to Abu Dhabi for its largest edition yet", date: "10 Jul 2026" },
  { cat: "POLICY", title: "Nutri-Mark front-of-pack labelling prepares for federal rollout", date: "3 Jul 2026" },
  { cat: "PROGRAMME", title: "Healthy Living reaches 466 schools across Abu Dhabi", date: "28 Jun 2026" },
  { cat: "POLICY", title: "Out-of-home advertising policy now covers all public-facing government assets", date: "15 Jun 2026" },
];

export default function LatestUpdates() {
  return (
    <section className="bg-[#F9FAF8] py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-[#1A211D]">
            Latest updates
          </h2>
          <button className="inline-flex items-center gap-2 text-[#1A211D] text-sm font-semibold hover:text-[#1A211D]/70 transition-colors">
            View all <ArrowRight size={16} />
          </button>
        </div>
        <div className="divide-y divide-[#1A211D]/10">
          {updates.map((u, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[140px_1fr_auto] items-center gap-3 md:gap-6 py-6 group cursor-pointer">
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#1A211D]/50">
                {u.cat}
              </p>
              <p className="text-lg lg:text-xl font-medium text-[#1A211D] group-hover:text-[#1A211D]/70 transition-colors">
                {u.title}
              </p>
              <p className="text-sm text-[#1A211D]/50 md:text-right whitespace-nowrap">{u.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}