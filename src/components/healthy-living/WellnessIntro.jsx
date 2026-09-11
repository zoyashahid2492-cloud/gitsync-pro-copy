import React, { useState } from "react";
import { Moon, Zap, Flower2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import WellnessPlanResult from "./WellnessPlanResult";

const SLEEP = ["Poor", "Okay", "Great"];
const ENERGY = ["Low", "Normal", "High"];
const STRESS = ["Low", "Medium", "High"];

const INK = "#1f3d2a";
const MUTED = "#4a5d4f";
const ICON = "#5e7062";
const HELPER = "#8e968f";
const PROGRESS_TEXT = "#a0a8a2";
const BORDER = "#d1d6d2";
const DOT_EMPTY = "#c6ccc7";

const QUESTIONS = [
  { key: "sleep", label: "How did you sleep?", options: SLEEP, Icon: Moon },
  { key: "energy", label: "How is your energy?", options: ENERGY, Icon: Zap },
  { key: "stress", label: "How stressed you feel?", options: STRESS, Icon: Flower2 },
];

function Chip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full text-[13px] font-heading font-medium transition-all border ${
        active
          ? "bg-[#1f3d2a] text-white border-[#1f3d2a]"
          : "bg-white text-[#4a5d4f] border-[#d1d6d2] hover:border-[#5e7062]"
      }`}
    >
      {label}
    </button>
  );
}

function ProgressDots({ answered }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] uppercase tracking-[0.18em] font-heading font-medium" style={{ color: PROGRESS_TEXT }}>
        Answer 3 Questions
      </span>
      <div className="flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block rounded-full transition-all"
            style={{
              width: 9,
              height: 9,
              background: i < answered ? INK : "transparent",
              border: `1.5px solid ${i < answered ? INK : DOT_EMPTY}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function WellnessIntro() {
  const [w, setW] = useState({ sleep: "", energy: "", stress: "" });
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const done = !!(w.sleep && w.energy && w.stress);
  const answered = Object.values(w).filter(Boolean).length;

  const handleCreate = async () => {
    setLoading(true);
    setPlan(null);
    try {
      const prompt = `You are a wellness coach. The user feels: sleep ${w.sleep}, energy ${w.energy}, stress ${w.stress}. Create a personalized day plan. Return a one-word focus theme, a short encouraging tagline, and exactly 4 goals across Mindfulness, Nutrition, Hydration and Movement. Each goal: category name, a one-sentence action, and a single capital letter for its icon (M, N, H, M).`;
      const res = await base44.integrations.Core.InvokeLLM({
        prompt,
        response_json_schema: {
          type: "object",
          properties: {
            focus: { type: "string" },
            tagline: { type: "string" },
            goals: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  category: { type: "string" },
                  action: { type: "string" },
                  letter: { type: "string" },
                },
                required: ["category", "action", "letter"],
              },
            },
          },
          required: ["focus", "tagline", "goals"],
        },
      });
      setPlan(res);
    } catch (e) {
      setPlan({
        focus: "Balance",
        tagline: "Maintain momentum and feel your best today.",
        goals: [
          { category: "Mindfulness", action: "Try a 5-minute breathing exercise at midday.", letter: "M" },
          { category: "Nutrition", action: "Eat a balanced meal with plenty of vegetables.", letter: "N" },
          { category: "Hydration", action: "Aim for 8 glasses of water before tonight.", letter: "H" },
          { category: "Movement", action: "Take a 20-minute walk — even a short one counts.", letter: "M" },
        ],
      });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setPlan(null);
    setW({ sleep: "", energy: "", stress: "" });
  };

  return (
    <section
      style={{
        background: "radial-gradient(circle at 50% 38%, #f7f9f7 0%, #e2e8e0 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-10 pt-16 pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-14">
          <h2 style={{ color: INK, fontSize: "clamp(2.2rem, 4.2vw, 3.8rem)", lineHeight: 1.08 }}>
            <span className="font-heading font-black block">Health is shaped</span>
            <span className="font-heading font-black block">by everyday life,</span>
            <span className="font-heading font-light block">not healthcare alone.</span>
          </h2>
          <div className="font-heading font-light leading-relaxed pt-2" style={{ color: MUTED, fontSize: "0.95rem" }}>
            <p>
              Healthy Living transforms the environments behind our daily decisions, making the healthier choice the
              easier one, while always preserving freedom of choice.
            </p>
            <p className="mt-4">
              By uniting government, business and communities, we build prevention into everyday life so everyone in
              Abu Dhabi can live longer, healthier lives.
            </p>
          </div>
        </div>

        <div
          className="bg-white rounded-2xl p-8"
          style={{ boxShadow: "0 10px 40px 0 rgba(26,34,28,0.08), 0 2px 8px 0 rgba(26,34,28,0.04)" }}
        >
          <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
            <div>
              <h3 className="font-heading font-bold text-xl" style={{ color: INK }}>
                Today's wellness plan
              </h3>
              <p className="text-[13px] font-heading font-light mt-0.5" style={{ color: HELPER }}>
                A simple plan based on how you're feeling today.
              </p>
            </div>
            {plan ? (
              <button
                onClick={handleReset}
                className="rounded-full px-4 py-1.5 text-[11px] font-heading font-bold uppercase tracking-[0.14em] text-white"
                style={{ background: "#5e7062" }}
              >
                New check-in
              </button>
            ) : (
              <ProgressDots answered={answered} />
            )}
          </div>

          {plan ? (
            <WellnessPlanResult plan={plan} onAskAi={() => window.alert("AI assistant coming soon")} />
          ) : (
            <>
              <div className="grid md:grid-cols-3 divide-x divide-[#ECEEEC] border-t border-[#ECEEEC] pt-8">
                {QUESTIONS.map(({ key, label, options, Icon }) => (
                  <div key={key} className="px-6 first:pl-0 last:pr-0 flex flex-col items-center text-center">
                    <span
                      className="flex items-center justify-center rounded-full"
                      style={{ width: 56, height: 56, background: "#D9E4D9" }}
                    >
                      <Icon size={26} strokeWidth={1.5} style={{ color: ICON }} />
                    </span>
                    <p className="font-heading font-bold text-[11px] uppercase tracking-[0.14em] mt-4 mb-5" style={{ color: INK }}>
                      {label}
                    </p>
                    <div className="flex gap-2 flex-wrap justify-center">
                      {options.map((o) => (
                        <Chip key={o} label={o} active={w[key] === o} onClick={() => setW((s) => ({ ...s, [key]: o }))} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4 flex-wrap">
                <button
                  disabled={!done || loading}
                  onClick={handleCreate}
                  className={`flex items-center gap-2 font-heading font-bold text-sm px-7 py-3 rounded-full transition-all ${
                    done && !loading ? "hover:opacity-90 active:scale-95 cursor-pointer" : "opacity-40 cursor-not-allowed"
                  }`}
                  style={{ background: INK, color: "#fff" }}
                >
                  {loading ? "Creating…" : "Create My Plan →"}
                </button>
                {!done && (
                  <span className="text-[13px] font-heading font-light" style={{ color: HELPER }}>
                    Answer all 3 questions to continue
                  </span>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}