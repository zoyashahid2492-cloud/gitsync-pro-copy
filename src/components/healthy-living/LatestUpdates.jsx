import React from "react";

const NEWS = [
  { tag: "Events", title: "Festival of Health returns to Abu Dhabi for its largest edition yet", date: "16 Jun 2025" },
  { tag: "Policy", title: "Nutri-Mark front-of-pack labelling prepares for federal rollout", date: "16 Jun 2025" },
  { tag: "Programmes", title: "Healthy Living reaches 466 schools across Abu Dhabi", date: "05 Jun 2025" },
  {
    tag: "Policy",
    title: "Out-of-home advertising policy now covers all public-facing government assets",
    date: "16 Oct 2024",
  },
];

export default function LatestUpdates() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10 border-b border-[#dfe5d6] pb-6">
          <h2 className="font-heading font-black text-[#253926]" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)" }}>
            Latest updates
          </h2>
          <button className="text-[#253926] text-sm font-heading font-medium hover:text-[#b3dbbb] transition-colors">
            View all →
          </button>
        </div>
        <div className="divide-y divide-[#dfe5d6]">
          {NEWS.map((n) => (
            <button
              key={n.title}
              className="w-full text-left flex items-center gap-6 py-5 group hover:bg-[#f9faf7] -mx-3 px-3 rounded-lg transition-colors"
            >
              <span className="text-[10px] uppercase tracking-widest font-heading font-medium text-[#b3dbbb] min-w-[90px]">
                {n.tag}
              </span>
              <span className="flex-1 font-heading text-[#253926] text-sm group-hover:underline underline-offset-2">
                {n.title}
              </span>
              <span className="text-[#253926]/35 text-xs font-heading font-light whitespace-nowrap">{n.date}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}