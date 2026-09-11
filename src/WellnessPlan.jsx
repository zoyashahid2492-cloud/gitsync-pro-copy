import React, { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

const questions = [
  { id: "sleep", q: "How did you sleep?", options: ["Poor", "Okay", "Great"] },
  { id: "energy", q: "How is your energy?", options: ["Low", "Normal", "High"] },
  { id: "stress", q: "How stressed you feel?", options: ["Low", "Medium", "High"] },
];

export default function WellnessPlan() {
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState(null);

  const allAnswered = questions.every((q) => answers[q.id]);

  const handleSelect = (qid, opt) => {
    setAnswers((prev) => ({ ...prev, [qid]: opt }));
  };

  const handleCreate = async () => {
    if (!allAnswered || loading) return;
    setLoading(true);
    setPlan(null);
    try {
      const prompt = `You are a wellness coach for the Abu Dhabi Healthy Living initiative. Based on the user's check-in, create a concise, actionable "Today's wellness plan". Keep it warm and motivating. Use short bullet points grouped under 3 headings: Movement, Nutrition, Mind. End with one encouraging sentence.

User check-in:
- Sleep: ${answers.sleep}
- Energy: ${answers.energy}
- Stress: ${answers.stress}`;

      const res = await base44.integrations.Core.InvokeLLM({ prompt });
      setPlan(typeof res === "string" ? res : res.response || JSON.stringify(res));
    } catch (e) {
      setPlan("Sorry, we couldn't generate your plan right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f7f2] flex items-center justify-center p-5 lg:p-10">
      <div className="w-full max-w-md">
        <div className="bg-[#f9f7f2] rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.18)] p-7 lg:p-9">
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
                            ? "bg-[#cce8dd] text-[#2d2d2d] border-[#cce8dd]"
                            : "bg-white text-[#4A4A4A] border-[#E0E0E0] hover:border-[#2d2d2d] hover:text-[#1A1A1A]"
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
            disabled={!allAnswered || loading}
            className={`mt-8 w-full py-3.5 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-all ${
              allAnswered && !loading
                ? "bg-[#cce8dd] text-[#2d2d2d] hover:bg-[#b9dccd]"
                : "bg-[#E0E0E0] text-[#757575] cursor-not-allowed"
            }`}
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Creating your plan...
              </>
            ) : (
              <>
                Create My Plan <ArrowRight size={16} />
              </>
            )}
          </button>
        </div>

        {plan && (
          <div className="mt-5 bg-[#f9f7f2] rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.18)] p-7 lg:p-9">
            <h2 className="text-lg font-bold text-[#1A1A1A] mb-3">Your plan</h2>
            <div className="text-sm text-[#4A4A4A] leading-relaxed whitespace-pre-line">{plan}</div>
          </div>
        )}
      </div>
    </div>
  );
}