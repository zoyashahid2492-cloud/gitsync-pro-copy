import React from "react";
import { ArrowRight } from "lucide-react";

const INK = "#1f3d2a", GREEN = "#1D7945", MUTED = "#6b7a70";

const STATS = [
  ["120,000+", "Registered residents", "Growing 8% month-on-month"],
  ["50,000+", "Festival attendees", "Festival of Health 2025"],
  ["18 km", "Active trail network", "Degayeg trail, Abu Dhabi"],
  ["500+", "Nutri-Mark products", "Across major supermarkets"],
  ["25", "Strategic initiatives", "Launched 2024–2026"],
  ["2.3M", "Steps logged monthly", "Connected device users"],
  ["3 years", "Programme track record", "Active since 2022"],
  ["AED 50K", "Entry partnership from", "Activation tier"],
];

export default function ProgrammeImpact() {
  return (
    <section className="py-16 md:py-24" style={{ background: "#1f3d2a" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: "#b3dbbb" }}>Programme Impact</p>
        <p className="font-heading font-light max-w-2xl leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
          Every organisation that partners with Healthy Living Abu Dhabi becomes part of a measurable, government-backed health movement with reach across the entire emirate.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map(([n, l, sub]) => (
            <div key={l} className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <p className="font-heading font-black text-2xl md:text-3xl leading-none" style={{ color: "#ffffff" }}>{n}</p>
              <p className="text-xs font-heading font-bold mt-3" style={{ color: "#b3dbbb" }}>{l}</p>
              <p className="text-[11px] font-heading font-light mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>{sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl">
          <p className="font-heading font-light text-lg md:text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
            "Health is our greatest wealth; it shapes how we live, work and care for our families and communities. Healthy Living Abu Dhabi exists to make healthier choices the easy choices — for every resident."
          </p>
          <p className="text-xs font-heading font-bold uppercase tracking-[0.14em] mt-4" style={{ color: "#b3dbbb" }}>
            Healthy Living Abu Dhabi — Official Programme Statement
          </p>
        </div>

        <a href="#partner-form" className="mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-bold transition-all hover:opacity-90 active:scale-95" style={{ background: "#ffffff", color: INK }}>
          Become a partner <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}