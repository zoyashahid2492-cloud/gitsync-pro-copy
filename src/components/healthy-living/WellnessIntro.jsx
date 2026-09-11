import React, { useState } from "react";
import { ArrowRight, Moon, Zap, MessageCircle } from "lucide-react";

const questions = [
  { q: "How did you sleep?", icon: Moon, options: ["Poor", "Okay", "Great"] },
  { q: "How is your energy?", icon: Zap, options: ["Low", "Normal", "High"] },
  { q: "How stressed you feel?", icon: MessageCircle, options: ["Low", "Medium", "High"] },
];

export default function WellnessIntro() {
  const [answers, setAnswers] = useState({});
  const allAnswered = questions.every((_, i) => answers[i]);

  return (
    <section className="bg-white py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#1A2621]">
            Health is shaped by everyday life, not healthcare alone.
          </h2>
          <p className="mt-6 text-base lg:text-lg text-[#555] leading-relaxed max-w-lg">
            We work across schools, workplaces and communities to make healthier choices easier, more
            accessible and a natural part of everyday life for everyone in Abu Dhabi.
          </p>
          <p className="mt-4 text-base lg:text-lg text-[#555] leading-relaxed max-w-lg">
            From the food we eat to the spaces we move through, the environment around us shapes our
            health long before we ever need care.
          </p>
        </div>

        {/* Wellness Plan Widget */}
        <div className="bg-[#f9f7f2] rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.18)] p-7 lg:p-8">
          <h3 className="text-lg font-bold text-[#1A2621] mb-6">Today's wellness plan</h3>
          <div className="space-y-5">
            {questions.map((item, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 mb-2.5">
                  <item.icon size={16} className="text-[#2B5B49]" />
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#1A2621]">{item.q}</p>
                </div>
                <div className="flex gap-2">
                  {item.options.map((opt) => {
                    const active = answers[i] === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => setAnswers((p) => ({ ...p, [i]: opt }))}
                        className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                          active
                            ? "bg-[#B2D8C3] text-[#1A2621] border-[#B2D8C3]"
                            : "bg-white text-[#333] border-[#E0E0E0] hover:border-[#1A2621]"
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
          <button
            disabled={!allAnswered}
            className={`mt-7 w-full py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
              allAnswered ? "bg-[#2B5B49] text-white hover:bg-[#234c3d]" : "bg-[#E0E0E0] text-[#888] cursor-not-allowed"
            }`}
          >
            Create My Plan <ArrowRight size={16} />
          </button>
          {!allAnswered && (
            <p className="mt-3 text-center text-xs text-[#888]">Answer all 3 questions to continue</p>
          )}
        </div>
      </div>
    </section>
  );
}