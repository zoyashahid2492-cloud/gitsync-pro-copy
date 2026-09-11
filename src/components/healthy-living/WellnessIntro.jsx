import React, { useState } from "react";
import { Moon, Zap, Flower2 } from "lucide-react";

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
  const done = !!(w.sleep && w.energy && w.stress);
  const answered = Object.values(w).filter(Boolean).length;

  const handleCreate = () => {
    setPlan(
      `Based on ${w.sleep.toLowerCase()} sleep, ${w.energy.toLowerCase()} energy, and ${w.stress.toLowerCase()} stress — we recommend light movement, mindful eating, and a short rest period today.`
    );
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
            <ProgressDots answered={answered} />
          </div>

          <div className="grid md:grid-cols-3 divide-x divide-[#ECEEEC] border-t border-[#ECEEEC] pt-8">
            {QUESTIONS.map(({ key, label, options, Icon }) => (
              <div key={key} className="px-6 first:pl-0 last:pr-0 flex flex-col items-center text-center">
                <Icon size={26} strokeWidth={1.5} style={{ color: ICON }} />
                <p className="font-heading font-bold text-[11px] uppercase tracking-[0.14em] mt-3 mb-5" style={{ color: INK }}>
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

          {plan && (
            <div
              className="mt-8 rounded-xl p-5 text-sm font-heading font-light leading-relaxed"
              style={{ background: "#F5F7F5", color: INK, border: `1px solid ${BORDER}` }}
            >
              <p className="font-heading font-bold mb-1 text-[10px] uppercase tracking-widest" style={{ color: HELPER }}>
                Your plan for today
              </p>
              {plan}
            </div>
          )}

          <div className="mt-8 flex items-center gap-4 flex-wrap">
            <button
              disabled={!done}
              onClick={handleCreate}
              className={`flex items-center gap-2 font-heading font-bold text-sm px-7 py-3 rounded-full transition-all ${
                done ? "hover:opacity-90 active:scale-95 cursor-pointer" : "opacity-40 cursor-not-allowed"
              }`}
              style={{ background: INK, color: "#fff" }}
            >
              Create My Plan →
            </button>
            {!done && (
              <span className="text-[13px] font-heading font-light" style={{ color: HELPER }}>
                Answer all 3 questions to continue
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}