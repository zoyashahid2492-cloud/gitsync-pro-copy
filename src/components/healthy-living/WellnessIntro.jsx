import React, { useState } from "react";
import { ArrowRight, Moon, Zap, Cloud } from "lucide-react";

const questions = [
  { q: "HOW DID YOU SLEEP?", icon: Moon, options: ["Poor", "Okay", "Great"] },
  { q: "HOW IS YOUR ENERGY?", icon: Zap, options: ["Low", "Normal", "High"] },
  { q: "HOW STRESSED YOU FEEL?", icon: Cloud, options: ["Low", "Medium", "High"] },
];

export default function WellnessIntro() {
  const [answers, setAnswers] = useState({});
  const answeredCount = questions.reduce((acc, _, i) => acc + (answers[i] ? 1 : 0), 0);
  const allAnswered = answeredCount === 3;

  return (
    <section className="bg-[#F4F5EF] py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-[1100px] mx-auto">
        {/* Text area */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-14 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#232A21]">
            Health is shaped by everyday life, not healthcare alone.
          </h2>
          <div className="flex flex-col gap-5 pt-2">
            <p className="text-base lg:text-lg text-[#484D48] leading-relaxed">
              Healthy Living transforms the environments behind our daily decisions, making the
              healthier choice the easier one, while always preserving freedom of choice.
            </p>
            <p className="text-base lg:text-lg text-[#484D48] leading-relaxed">
              By uniting government, business and communities, we build prevention into everyday
              life so everyone in Abu Dhabi can live longer, healthier lives.
            </p>
          </div>
        </div>

        {/* Wellness plan widget */}
        <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] p-7 lg:p-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8 lg:mb-10">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#232A21]">Today's wellness plan</h3>
              <p className="mt-1 text-sm text-[#888]">A simple plan based on how you're feeling today</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#232A21]">
                Answer 3 questions
              </span>
              <div className="flex items-center gap-1.5">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`block w-2.5 h-2.5 rounded-full ${
                      i < answeredCount ? "bg-[#232A21]" : "border border-[#232A21]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Three columns */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {questions.map((item, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="w-11 h-11 rounded-full bg-[#E2E6DE] flex items-center justify-center mb-4">
                  <item.icon size={18} className="text-[#232A21]" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#232A21] mb-3">
                  {item.q}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.options.map((opt) => {
                    const active = answers[i] === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => setAnswers((p) => ({ ...p, [i]: opt }))}
                        className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                          active
                            ? "bg-[#232A21] text-white border-[#232A21]"
                            : "bg-white text-[#333] border-[#D8D8D8] hover:border-[#232A21]"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              disabled={!allAnswered}
              className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all w-full sm:w-auto ${
                allAnswered
                  ? "bg-[#232A21] text-white hover:bg-[#1a201a]"
                  : "bg-[#E0E0E0] text-[#888] cursor-not-allowed"
              }`}
            >
              Create My Plan <ArrowRight size={16} />
            </button>
            {!allAnswered && (
              <p className="text-xs text-[#888]">Answer all 3 questions to continue</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}