import React from "react";
import { Lightbulb, Sparkles } from "lucide-react";

const INK = "#1f3d2a", GREEN = "#1D7945", GREEN_BG = "#E6F2EC", BG_ALT = "#F7F6F2", MUTED = "#6b7a70", BORDER = "#e0e5de";

const INSIGHTS = [
  { title: "Sleep is your biggest lever", desc: "An extra hour of sleep consistently lifts mood, focus and movement the next day." },
  { title: "Small moves add up", desc: "Three 10-minute walks match one 30-minute session — and are easier to keep." },
  { title: "Hydration beats willpower", desc: "Keeping water visible doubles intake without thinking about it." },
];

const TRY_TODAY = [
  { title: "Drink a glass of water now", desc: "Start hydration before you feel thirsty." },
  { title: "Take a 10-minute walk", desc: "After your next meal — it aids digestion and energy." },
  { title: "One screen-free hour", desc: "Before bed to improve sleep onset." },
];

export default function WellnessInsights() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-10">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: GREEN }}>Key Insights</p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: INK }}>What your numbers are telling you</h2>
          <div className="space-y-4">
            {INSIGHTS.map((i) => (
              <div key={i.title} className="rounded-2xl p-5" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                <h3 className="font-heading font-bold text-base mb-1.5 flex items-center gap-2" style={{ color: INK }}>
                  <Lightbulb size={16} style={{ color: GREEN }} /> {i.title}
                </h3>
                <p className="font-heading font-light text-sm leading-relaxed" style={{ color: MUTED }}>{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: GREEN }}>Try This Today</p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: INK }}>Three small wins for today</h2>
          <div className="space-y-4">
            {TRY_TODAY.map((t) => (
              <div key={t.title} className="rounded-2xl p-5 flex items-start gap-4" style={{ background: GREEN_BG }}>
                <span className="flex items-center justify-center rounded-full shrink-0" style={{ width: 40, height: 40, background: "#fff" }}>
                  <Sparkles size={18} style={{ color: GREEN }} />
                </span>
                <div>
                  <h3 className="font-heading font-bold text-base mb-1" style={{ color: INK }}>{t.title}</h3>
                  <p className="font-heading font-light text-sm" style={{ color: MUTED }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}