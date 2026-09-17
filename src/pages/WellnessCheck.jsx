import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";

const INK = "#1f3d2a", GREEN = "#1D7945", GREEN_BG = "#E6F2EC", CORAL = "#cb7d5d", BORDER = "#e0e5de", MUTED = "#6b7a70";

const QUESTIONS = [
  { q: "How many days per week do you do at least 30 minutes of physical activity?", opts: ["0", "1–2", "3–4", "5+"], scores: [40, 60, 80, 95] },
  { q: "How would you describe your typical daily diet?", opts: ["Mostly processed", "Mixed", "Mostly whole foods", "Balanced & varied"], scores: [40, 60, 80, 90] },
  { q: "How many hours of sleep do you get on average?", opts: ["Less than 5", "5–6", "7–8", "More than 8"], scores: [40, 60, 90, 75] },
  { q: "How often do you feel stressed or overwhelmed?", opts: ["Daily", "Most days", "Sometimes", "Rarely"], scores: [40, 55, 75, 90] },
  { q: "How much water do you drink daily?", opts: ["Less than 1L", "1–2L", "2–3L", "3L+"], scores: [40, 65, 85, 90] },
];

const RECS = [
  { area: "Movement", icon: "🏃", rec: "Try adding two more active days. The Corniche walk or a community park class is a great start." },
  { area: "Nutrition", icon: "🥗", rec: "Aim to swap one processed meal per day for a whole-food option. Use the Meal Plan Generator for ideas." },
  { area: "Sleep", icon: "😴", rec: "Aim for 7–8 hours consistently. A regular wind-down routine can help improve sleep quality." },
  { area: "Wellbeing", icon: "🧘", rec: "Try 5–10 minutes of mindfulness or breathwork daily. Small habits compound over time." },
  { area: "Hydration", icon: "💧", rec: "You're on track. Aim to spread your water intake across the day rather than drinking in bursts." },
];

function scoreColor(s) {
  return s >= 75 ? GREEN : s >= 60 ? CORAL : "#dc2626";
}

export default function WellnessCheck() {
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);

  const allAnswered = QUESTIONS.every((_, i) => answers[i] !== undefined);
  const scores = QUESTIONS.map((q, i) => (answers[i] !== undefined ? q.scores[answers[i]] : 0));

  const reset = () => { setDone(false); setAnswers({}); };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Tools"
        title="Wellness Check."
        subtitle="Five quick questions. General wellness recommendations. No account needed."
      />

      <section className="py-16 md:py-20" style={{ background: "#F7F6F2" }}>
        <div className="max-w-xl mx-auto px-6">
          {!done ? (
            <div className="space-y-8">
              {QUESTIONS.map((item, i) => (
                <div key={i}>
                  <p className="text-sm font-heading font-semibold mb-3" style={{ color: INK }}>{item.q}</p>
                  <div className="space-y-2">
                    {item.opts.map((o, oi) => {
                      const active = answers[i] === oi;
                      return (
                        <button
                          key={o}
                          onClick={() => setAnswers((a) => ({ ...a, [i]: oi }))}
                          className="block w-full text-left px-4 py-3 text-sm rounded-xl transition-all font-heading"
                          style={{
                            background: active ? GREEN_BG : "#fff",
                            color: active ? GREEN : MUTED,
                            border: `1px solid ${active ? GREEN : BORDER}`,
                            fontWeight: active ? 700 : 400,
                          }}
                        >
                          {o}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
              <button
                onClick={() => allAnswered && setDone(true)}
                disabled={!allAnswered}
                className="w-full py-3.5 text-sm font-heading font-bold rounded-full text-white transition-all hover:opacity-90 disabled:opacity-40 flex items-center justify-center gap-2"
                style={{ background: GREEN }}
              >
                Get My Recommendations <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <div>
              <p className="text-xs uppercase tracking-[0.15em] mb-6 font-heading font-medium" style={{ color: MUTED }}>Your Wellness Snapshot</p>
              {RECS.map((r, i) => {
                const s = scores[i];
                const color = scoreColor(s);
                return (
                  <div key={r.area} className="p-5 rounded-2xl mb-3" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{r.icon}</span>
                        <span className="text-sm font-heading font-bold" style={{ color: INK }}>{r.area}</span>
                      </div>
                      <span className="text-sm font-mono font-bold" style={{ color }}>{s}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full mb-3" style={{ background: "#e0e5de" }}>
                      <div className="h-full rounded-full transition-all" style={{ width: `${s}%`, background: color }} />
                    </div>
                    <p className="font-heading font-light text-sm leading-relaxed" style={{ color: MUTED }}>{r.rec}</p>
                  </div>
                );
              })}
              <button onClick={reset} className="w-full py-3 text-sm font-heading rounded-full mt-4" style={{ background: "#fff", color: INK, border: `1px solid ${BORDER}` }}>Retake Check</button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}