import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const questions = [
  { id: "sleep", q: "How did you sleep?", options: ["Poor", "Okay", "Great"] },
  { id: "energy", q: "How is your energy?", options: ["Low", "Normal", "High"] },
  { id: "stress", q: "How stressed you feel?", options: ["Low", "Medium", "High"] },
];

export default function WellnessPlan() {
  const [answers, setAnswers] = useState({});

  const allAnswered = questions.every((q) => answers[q.id]);

  const handleSelect = (qid, opt) => {
    setAnswers((prev) => ({ ...prev, [qid]: opt }));
  };

  const handleCreate = () => {
    if (!allAnswered) return;
    alert("Your wellness plan is being created!");
  };

  return (
    <div className="min-h-screen bg-[#E6F3E6] flex items-center justify-center p-5 lg:p-10">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.18)] p-7 lg:p-9">
          <h1 className="text-xl lg:text-2xl font-bold text-[#1A1A1A] mb-1">Today's wellness plan</h1>
          <p className="text-sm text-[#4A4A4A] mb-7">Answer a few questions to build your plan.</p>

          <div className="space-y-6">
            {questions.map((item) => (
              <div key={item.id}>
                <p className="text-sm font-medium text-[#1A1A1A] mb-3">{item.q}</p>
                <div className="flex flex-wrap gap-2">
                  {item.options.map((opt) => {
                    const active = answers[item.id] === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => handleSelect(item.id, opt)}
                        className={`px-4 py-2.5 rounded-full text-xs font-medium border transition-all flex items-center gap-1.5 ${
                          active
                            ? "bg-[#2E7D32] text-white border-[#2E7D32]"
                            : "bg-white text-[#4A4A4A] border-[#E0E0E0] hover:border-[#2E7D32] hover:text-[#1A1A1A]"
                        }`}
                      >
                        {active && <Check size={13} />}
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleCreate}
            disabled={!allAnswered}
            className={`mt-8 w-full py-3.5 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-all ${
              allAnswered
                ? "bg-[#2E7D32] text-white hover:bg-[#256628]"
                : "bg-[#E0E0E0] text-[#757575] cursor-not-allowed"
            }`}
          >
            Create My Plan <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}