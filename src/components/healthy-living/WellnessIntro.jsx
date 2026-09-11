import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const questions = [
  { q: "How did you sleep?", options: ["Poor", "Okay", "Great"] },
  { q: "How is your energy?", options: ["Low", "Normal", "High"] },
  { q: "How stressed you feel?", options: ["Low", "Medium", "High"] },
];

export default function WellnessIntro() {
  const [answers, setAnswers] = useState({});

  return (
    <section className="bg-[#E6F3E6] py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-black">
            Health is shaped by everyday life, not healthcare alone.
          </h2>
          <p className="mt-6 text-base lg:text-lg text-[#4A4A4A] leading-relaxed max-w-lg">
            We work across schools, workplaces and communities to make healthier choices easier, more
            accessible and a natural part of everyday life for everyone in Abu Dhabi.
          </p>
        </div>

        {/* Wellness Plan Widget */}
        <div className="bg-[#f9f7f2] rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.18)] p-7 lg:p-8">
          <h3 className="text-lg font-bold text-black mb-6">Today's wellness plan</h3>
          <div className="space-y-5">
            {questions.map((item, i) => (
              <div key={i}>
                <p className="text-sm font-medium text-black mb-2.5">{item.q}</p>
                <div className="flex gap-2">
                  {item.options.map((opt) => {
                    const active = answers[i] === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => setAnswers((p) => ({ ...p, [i]: opt }))}
                        className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                          active
                            ? "bg-[#cce8dd] text-[#2d2d2d] border-[#cce8dd]"
                            : "bg-white text-[#2d2d2d] border-[#E0E0E0] hover:border-[#2d2d2d]"
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
          <button className="mt-7 w-full bg-[#cce8dd] text-[#2d2d2d] py-3.5 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#b9dccd] transition-colors">
            Create My Plan <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}