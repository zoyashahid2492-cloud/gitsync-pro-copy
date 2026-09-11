import React from "react";
import { ArrowRight } from "lucide-react";

const updates = [
  { tag: "EVENTS", title: "Festival of Health returns to Abu Dhabi for its largest edition yet", date: "10 Jul 2026" },
  { tag: "POLICY", title: "Nutri-Mark front-of-pack labelling prepares for federal rollout", date: "03 Jul 2026" },
  { tag: "PROGRAMME", title: "Healthy Living reaches 466 schools across Abu Dhabi", date: "28 Jun 2026" },
  { tag: "POLICY", title: "Out-of-home advertising policy now covers all public-facing government assets", date: "15 Jun 2026" },
];

export default function UpdatesFooter() {
  return (
    <section className="bg-white py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-black">Latest updates</h3>
          <button className="inline-flex items-center gap-2 text-sm font-medium text-black border border-black rounded-full px-5 py-2 hover:bg-black hover:text-white transition-colors">
            View all <ArrowRight size={16} />
          </button>
        </div>
        <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
          {updates.map((u, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 py-5 hover:bg-neutral-50 transition-colors px-2">
              <span className="text-xs text-neutral-500 w-24 shrink-0">{u.date}</span>
              <span className="text-xs uppercase tracking-widest text-[#232A21] font-semibold w-28 shrink-0">{u.tag}</span>
              <p className="text-sm lg:text-base text-black flex-1">{u.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}