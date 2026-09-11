import React, { useState } from "react";

const SLEEP = ["Poor", "Okay", "Great"];
const ENERGY = ["Low", "Normal", "High"];
const STRESS = ["Low", "Medium", "High"];

function Chip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full text-sm transition-all font-heading border-0 ${
        active ? "bg-[#253926] text-white" : "bg-[#e8ede4] text-[#253926] hover:bg-[#dde5d8]"
      }`}
    >
      {label}
    </button>
  );
}

function ProgressDots({ answered }) {
  return (
    <div className="flex items-center gap-0 text-[#253926]/40">
      <span className="text-[10px] uppercase tracking-[0.18em] font-heading font-light mr-3">Answer 3 Questions</span>
      {[0, 1, 2].map((i) => (
        <span key={i} className="flex items-center">
          {i > 0 && (
            <span
              className="block w-5 h-px mx-0.5"
              style={{ background: "#253926", opacity: i <= answered ? 0.5 : 0.2 }}
            />
          )}
          <span
            className="block rounded-full transition-all"
            style={{
              width: 8,
              height: 8,
              background: i < answered ? "#253926" : "transparent",
              border: `1.5px solid ${i < answered ? "#253926" : "#25392670"}`,
            }}
          />
        </span>
      ))}
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
    <section className="wellness-bg">
      <div className="max-w-6xl mx-auto px-10 pt-16 pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-14">
          <h2 className="text-[#253926] leading-[1.08]" style={{ fontSize: "clamp(2.2rem, 4.2vw, 3.8rem)" }}>
            <span className="font-heading font-black block">Health is shaped</span>
            <span className="font-heading font-black block">by everyday life,</span>
            <span className="font-heading font-light block">not healthcare alone.</span>
          </h2>
          <div
            className="text-[#253926] font-heading font-light leading-relaxed pt-2"
            style={{ fontSize: "0.95rem" }}
          >
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
          className="bg-white/85 backdrop-blur-sm rounded-2xl border border-white/60 p-8"
          style={{ boxShadow: "0 4px 32px 0 rgba(80,110,70,0.08), 0 1px 4px 0 rgba(80,110,70,0.06)" }}
        >
          <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
            <div>
              <h3 className="font-heading font-bold text-[#253926] text-xl">Today's wellness plan</h3>
              <p className="text-[#253926]/45 text-[13px] font-heading font-light mt-0.5">
                A simple plan based on how you're feeling today.
              </p>
            </div>
            <ProgressDots answered={answered} />
          </div>

          <div className="grid md:grid-cols-3 divide-x divide-[#e8ede5] border-t border-[#e8ede5] pt-6">
            <div className="pr-8">
              <p className="flex items-center gap-2 text-[#253926] font-heading font-bold text-[10.5px] uppercase tracking-[0.14em] mb-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.5 9.5A6 6 0 016 2a6 6 0 100 12 6 6 0 007.5-4.5z" fill="#253926" opacity=".7" />
                </svg>
                How did you sleep?
              </p>
              <div className="flex gap-2 flex-wrap">
                {SLEEP.map((o) => (
                  <Chip key={o} label={o} active={w.sleep === o} onClick={() => setW((s) => ({ ...s, sleep: o }))} />
                ))}
              </div>
            </div>
            <div className="px-8">
              <p className="flex items-center gap-2 text-[#253926] font-heading font-bold text-[10.5px] uppercase tracking-[0.14em] mb-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M9 2L4 9h5l-2 5 7-8H9l1-4z" fill="#253926" opacity=".7" />
                </svg>
                How is your energy?
              </p>
              <div className="flex gap-2 flex-wrap">
                {ENERGY.map((o) => (
                  <Chip key={o} label={o} active={w.energy === o} onClick={() => setW((s) => ({ ...s, energy: o }))} />
                ))}
              </div>
            </div>
            <div className="pl-8">
              <p className="flex items-center gap-2 text-[#253926] font-heading font-bold text-[10.5px] uppercase tracking-[0.14em] mb-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="#253926" strokeWidth="1.3" opacity=".7" />
                  <path
                    d="M6 6.5C6.3 5.5 7 5 8 5s2 .7 2 1.8c0 1.5-2 2.2-2 3.5"
                    stroke="#253926"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    opacity=".7"
                  />
                  <circle cx="8" cy="12" r="0.7" fill="#253926" opacity=".7" />
                </svg>
                How stressed you feel?
              </p>
              <div className="flex gap-2 flex-wrap">
                {STRESS.map((o) => (
                  <Chip key={o} label={o} active={w.stress === o} onClick={() => setW((s) => ({ ...s, stress: o }))} />
                ))}
              </div>
            </div>
          </div>

          {plan && (
            <div className="mt-6 bg-[#edf1e8] rounded-xl p-5 text-[#253926] text-sm font-heading font-light leading-relaxed border border-[#d8e0d4]">
              <p className="font-heading font-bold mb-1 text-[10px] uppercase tracking-widest text-[#253926]/50">
                Your plan for today
              </p>
              {plan}
            </div>
          )}

          <div className="mt-6 flex items-center gap-4 flex-wrap">
            <button
              disabled={!done}
              onClick={handleCreate}
              className={`flex items-center gap-2 font-heading font-bold text-sm px-7 py-3 rounded-full transition-all ${
                done
                  ? "bg-[#253926] text-white hover:bg-[#1a2a1a] active:scale-95 cursor-pointer"
                  : "bg-[#253926] text-white cursor-not-allowed opacity-50"
              }`}
            >
              Create My Plan →
            </button>
            {!done && (
              <span className="text-[#253926]/40 text-[13px] font-heading font-light">
                Answer all 3 questions to continue
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}