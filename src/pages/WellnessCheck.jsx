import React, { useState } from "react";
import { RotateCcw, ChevronRight } from "lucide-react";
import SahatnaButton from "@/components/healthy-living/SahatnaButton";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import ClosingSections from "@/components/healthy-living/ClosingSections";

const INK = "#1f3d2a", MUTED = "#6b7a70", GREEN = "#1D7945", BORDER = "#e0e5de";

const QUESTIONS = [
  { id: "activity", q: "How many days per week do you do at least 30 minutes of physical activity?", opts: ["0", "1–2", "3–4", "5+"] },
  { id: "diet", q: "How would you describe your typical daily diet?", opts: ["Mostly processed", "Mixed", "Mostly whole foods", "Balanced & varied"] },
  { id: "sleep", q: "How many hours of sleep do you get on average?", opts: ["Less than 5", "5–6", "7–8", "More than 8"] },
  { id: "stress", q: "How often do you feel stressed or overwhelmed?", opts: ["Daily", "Most days", "Sometimes", "Rarely"] },
  { id: "water", q: "How much water do you drink daily?", opts: ["Less than 1L", "1–2L", "2–3L", "3L+"] },
];

const RECS = [
  { area: "Movement", score: 72, note: "Try adding two more active days. The Corniche walk or a community park class is a great start." },
  { area: "Nutrition", score: 65, note: "Aim to swap one processed meal per day for a whole-food option. Use the Meal Plan Generator for ideas." },
  { area: "Sleep", score: 80, note: "Aim for 7–8 hours consistently. A regular wind-down routine can help improve sleep quality." },
  { area: "Wellbeing", score: 58, note: "Try 5–10 minutes of mindfulness or breathwork daily. Small habits compound over time." },
  { area: "Hydration", score: 85, note: "You're on track. Aim to spread your water intake across the day rather than drinking in bursts." },
];

function Bar({ value }) {
  return (
    <div className="h-1.5 rounded-full flex-1" style={{ background: "#EFEFEC" }}>
      <div className="h-full rounded-full" style={{ width: `${value}%`, background: GREEN }} />
    </div>
  );
}

export default function WellnessCheck() {
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);

  const setAns = (qid, val) => setAnswers((a) => ({ ...a, [qid]: val }));
  const allAnswered = QUESTIONS.every((q) => answers[q.id] !== undefined);

  if (done) {
    return (
      <div className="min-h-screen w-full overflow-x-hidden">
        <Navbar solid />
        <PageHero eyebrow="Wellness Tools" title="Your Wellness Snapshot" subtitle="General wellness recommendations based on your answers — no account needed." />
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <div className="space-y-5">
              {RECS.map((r) => (
                <div key={r.area} className="rounded-2xl p-6" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-heading font-bold text-base" style={{ color: INK }}>{r.area}</p>
                    <p className="font-heading font-bold text-base" style={{ color: GREEN }}>{r.score}%</p>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <Bar value={r.score} />
                  </div>
                  <p className="text-sm font-heading font-light leading-relaxed" style={{ color: MUTED }}>{r.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-2xl p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4" style={{ background: "#E6F2EC" }}>
              <p className="text-sm font-heading font-light max-w-xl" style={{ color: MUTED }}>
                Personalized wellness tracking in Sahatna — track progress, connect a device, and get AI-powered recommendations.
              </p>
              <SahatnaButton />
            </div>
            <div className="text-center mt-8">
              <button
                onClick={() => { setAnswers({}); setDone(false); }}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: GREEN }}
              >
                <RotateCcw size={15} /> Retake Check
              </button>
            </div>
          </div>
        </section>
        <ClosingSections withStats={false} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Wellness Tools"
        title="Wellness Check"
        subtitle="Five quick questions. General wellness recommendations. No account needed."
      />
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="rounded-2xl p-7" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
            <ol className="space-y-8">
              {QUESTIONS.map((q, i) => (
                <li key={q.id}>
                  <p className="font-heading font-bold text-sm mb-3" style={{ color: INK }}>
                    <span style={{ color: GREEN }}>{i + 1}.</span> {q.q}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {q.opts.map((o) => {
                      const active = answers[q.id] === o;
                      return (
                        <button
                          key={o}
                          onClick={() => setAns(q.id, o)}
                          className="px-4 py-2 rounded-full text-xs font-heading font-semibold transition-all"
                          style={active ? { background: "#1f3d2a", color: "#fff", border: "1px solid #1f3d2a" } : { background: "#F7F6F2", color: INK, border: `1px solid ${BORDER}` }}
                        >
                          {o}
                        </button>
                      );
                    })}
                  </div>
                </li>
              ))}
            </ol>
            <button
              onClick={() => setDone(true)}
              disabled={!allAnswered}
              className="w-full mt-10 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-50"
              style={{ background: GREEN }}
            >
              Get My Recommendations <ChevronRight size={16} />
            </button>
            {!allAnswered && <p className="text-xs font-heading font-light text-center mt-3" style={{ color: MUTED }}>Answer all 5 questions to continue</p>}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}