import React, { useState } from "react";
import { Moon, Droplets, Footprints, Brain } from "lucide-react";

const INK = "#1f3d2a", GREEN = "#1D7945", GREEN_BG = "#E6F2EC", MUTED = "#6b7a70", BORDER = "#e0e5de";

// Each dimension: weight = contribution to score; current slider default (effort already in place)
const DIMS = [
  { key: "sleep", label: "Sleep", Icon: Moon, weight: 0.12, value: 60 },
  { key: "water", label: "Water", Icon: Droplets, weight: 0.06, value: 55 },
  { key: "movement", label: "Movement", Icon: Footprints, weight: 0.10, value: 50 },
  { key: "stress", label: "Stress", Icon: Brain, weight: 0.08, value: 45 },
];

const BASE = 53; // baseline so projected lands at 72 with default sliders

export default function WellnessScore() {
  const [sliders, setSliders] = useState(() => DIMS.reduce((a, d) => ({ ...a, [d.key]: d.value }), {}));

  const projected = Math.min(100, Math.round(BASE + DIMS.reduce((s, d) => s + sliders[d.key] * d.weight, 0)));
  const biggest = DIMS.reduce((m, d) => (sliders[d.key] * d.weight > sliders[m.key] * m.weight ? d : m), DIMS[0]);

  return (
    <section className="py-16 md:py-24" style={{ background: "#F7F6F2" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-5 gap-6">
        {/* Wellness Score card */}
        <div className="lg:col-span-2 rounded-2xl p-8 flex flex-col justify-between" style={{ background: "#1f3d2a" }}>
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-4" style={{ color: "#82D1A3" }}>Wellness Score</p>
            <p className="font-heading font-black text-white leading-none" style={{ fontSize: "clamp(4rem,8vw,6rem)" }}>{projected}</p>
            <p className="font-heading font-light text-sm text-white/70 mt-3">Out of 100 — a snapshot across sleep, water, movement and stress.</p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/15">
            <p className="text-[11px] uppercase tracking-[0.14em] font-heading font-bold mb-1" style={{ color: "#82D1A3" }}>Biggest opportunity</p>
            <p className="font-heading font-bold text-lg text-white">{biggest.label}</p>
            <p className="font-heading font-light text-xs text-white/60 mt-1">Improving {biggest.label.toLowerCase()} would lift your score most.</p>
          </div>
        </div>

        {/* What-If Simulator */}
        <div className="lg:col-span-3 rounded-2xl p-8" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-1" style={{ color: GREEN }}>What-If Simulator</p>
          <h3 className="font-heading font-bold text-xl mb-6" style={{ color: INK }}>See how small changes shift your score</h3>
          <div className="space-y-5">
            {DIMS.map((d) => {
              const Icon = d.Icon;
              return (
                <div key={d.key}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-2 text-sm font-heading font-medium" style={{ color: INK }}>
                      <Icon size={15} style={{ color: MUTED }} /> {d.label}
                    </span>
                    <span className="text-xs font-heading font-bold" style={{ color: GREEN }}>{sliders[d.key]}%</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={sliders[d.key]}
                    onChange={(e) => setSliders((s) => ({ ...s, [d.key]: Number(e.target.value) }))}
                    className="w-full accent-[#1D7945]"
                  />
                </div>
              );
            })}
          </div>
          <div className="mt-6 pt-5 border-t flex items-center justify-between" style={{ borderColor: BORDER }}>
            <div>
              <p className="text-xs font-heading font-light" style={{ color: MUTED }}>Projected score</p>
              <p className="font-heading font-black text-3xl" style={{ color: INK }}>{projected}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-heading font-light" style={{ color: MUTED }}>Biggest impact</p>
              <p className="font-heading font-bold text-lg" style={{ color: GREEN }}>{biggest.label}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}