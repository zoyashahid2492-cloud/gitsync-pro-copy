import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const INK = "#1f3d2a", GREEN = "#1D7945", MUTED = "#6b7a70", BORDER = "#e0e5de", GREEN_BG = "#E6F2EC";

const PARTNERS = [
  { name: "Department of Health – Abu Dhabi", sector: "Government", tier: "Founding" },
  { name: "Abu Dhabi Sports Council", sector: "Government", tier: "Founding" },
  { name: "Cleveland Clinic Abu Dhabi", sector: "Healthcare", tier: "Strategic" },
  { name: "Mubadala Health", sector: "Healthcare", tier: "Strategic" },
  { name: "Carrefour UAE", sector: "Retail", tier: "Programme" },
  { name: "LuLu Hypermarket", sector: "Retail", tier: "Programme" },
  { name: "adidas Middle East", sector: "Sport", tier: "Activation" },
  { name: "Burjeel Holdings", sector: "Healthcare", tier: "Strategic" },
  { name: "Abu Dhabi Media Office", sector: "Government", tier: "Founding" },
  { name: "ADEK", sector: "Education", tier: "Programme" },
  { name: "Abu Dhabi Cycling Club", sector: "Community", tier: "Activation" },
  { name: "UAE Jiu-Jitsu Federation", sector: "Sport", tier: "Activation" },
];

const TIERS = ["All", "Founding", "Strategic", "Programme", "Activation"];

const TIER_COLOR = {
  Founding: "#1D7945",
  Strategic: "#2f5d8a",
  Programme: "#b8862f",
  Activation: "#a35a6e",
};

export default function PartnerCoalition() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? PARTNERS : PARTNERS.filter((p) => p.tier === filter);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: GREEN }}>Our Partners</p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl" style={{ color: INK }}>A coalition built for impact.</h2>
          </div>
          <a href="#partner-form" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-heading font-bold text-white transition-all hover:opacity-90 w-fit" style={{ background: GREEN }}>
            Join the coalition <ArrowRight size={14} />
          </a>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {TIERS.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className="px-4 py-2 rounded-full text-xs font-heading font-bold transition-all"
              style={filter === t
                ? { background: INK, color: "#fff" }
                : { background: "#fff", color: INK, border: `1px solid ${BORDER}` }}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {list.map((p) => (
            <div key={p.name} className="rounded-2xl p-5 flex flex-col justify-between min-h-[130px]" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
              <div>
                <p className="font-heading font-bold text-sm leading-tight" style={{ color: INK }}>{p.name}</p>
                <p className="text-[11px] font-heading font-light mt-1" style={{ color: MUTED }}>{p.sector}</p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] font-heading font-bold px-2.5 py-1 rounded-full w-fit" style={{ background: GREEN_BG, color: TIER_COLOR[p.tier] }}>
                {p.tier}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}