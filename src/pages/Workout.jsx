import React, { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";

const INK = "#1f3d2a", GREEN = "#1D7945", GREEN_BG = "#E6F2EC", BORDER = "#e0e5de", MUTED = "#6b7a70";

const GOALS = ["General fitness", "Weight loss", "Muscle building", "Improve endurance"];
const EXPS = ["Beginner", "Intermediate", "Advanced"];
const LOCATIONS = ["Home", "Gym", "Outdoor", "Any"];

const FALLBACK = [
  { day: "Monday", focus: "Full Body Strength", exercises: [["Bodyweight Squats", "3×15"], ["Push-ups", "3×12"], ["Plank", "3×45s"], ["Lunges", "3×12 each"]] },
  { day: "Wednesday", focus: "Cardio & Core", exercises: [["Brisk Walk / Jog", "30 min"], ["Mountain Climbers", "3×20"], ["Bicycle Crunches", "3×20"], ["Dead Bug", "3×10"]] },
  { day: "Friday", focus: "Upper Body & Flex", exercises: [["Shoulder Press", "3×12"], ["Tricep Dips", "3×10"], ["Resistance Band Rows", "3×12"], ["Yoga Stretch", "10 min"]] },
];

function Chip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-xs font-heading font-bold rounded-full transition-all"
      style={{ background: active ? GREEN_BG : "#fff", color: active ? GREEN : MUTED, border: `1px solid ${active ? GREEN : BORDER}` }}
    >
      {label}
    </button>
  );
}

export default function Workout() {
  const [goal, setGoal] = useState("General fitness");
  const [exp, setExp] = useState("Beginner");
  const [days, setDays] = useState(3);
  const [location, setLocation] = useState("Home");
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState(null);

  const generate = async () => {
    setLoading(true);
    setPlan(null);
    try {
      const prompt = `You are a personal trainer for the Abu Dhabi Healthy Living initiative. Create a weekly workout plan for: goal "${goal}", experience level "${exp}", ${days} days per week, training location "${location}". Return an array of day objects (one per training day), each with a day name, a focus, and an exercises array of {name, reps}. Keep it practical and equipment-aware.`;
      const res = await base44.integrations.Core.InvokeLLM({
        prompt,
        response_json_schema: {
          type: "object",
          properties: {
            days: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  day: { type: "string" },
                  focus: { type: "string" },
                  exercises: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: { name: { type: "string" }, reps: { type: "string" } },
                      required: ["name", "reps"],
                    },
                  },
                },
                required: ["day", "focus", "exercises"],
              },
            },
          },
          required: ["days"],
        },
      });
      setPlan(res?.days?.length ? res.days : FALLBACK);
    } catch (e) {
      setPlan(FALLBACK);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => setPlan(null);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Tools"
        title="Workout Planner."
        subtitle="A simple weekly workout plan based on your goal and schedule. No equipment or gym required."
      />

      <section className="py-16 md:py-20" style={{ background: "#F7F6F2" }}>
        <div className="max-w-xl mx-auto px-6">
          {!plan ? (
            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-[0.1em] mb-3 font-heading font-medium" style={{ color: MUTED }}>Fitness Goal</label>
                <div className="flex flex-wrap gap-2">
                  {GOALS.map((g) => <Chip key={g} label={g} active={goal === g} onClick={() => setGoal(g)} />)}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.1em] mb-3 font-heading font-medium" style={{ color: MUTED }}>Experience Level</label>
                <div className="flex rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
                  {EXPS.map((e, i) => (
                    <button
                      key={e}
                      onClick={() => setExp(e)}
                      className="flex-1 py-3 text-sm font-heading font-bold transition-all"
                      style={{ background: exp === e ? GREEN : "transparent", color: exp === e ? "#fff" : MUTED, borderRight: i < 2 ? `1px solid ${BORDER}` : "none" }}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.1em] mb-3 font-heading font-medium" style={{ color: MUTED }}>Days Per Week: {days}</label>
                <input type="range" min={2} max={6} value={days} onChange={(e) => setDays(+e.target.value)} className="w-full accent-green-700" />
                <div className="flex justify-between text-xs mt-1 font-heading" style={{ color: MUTED }}><span>2</span><span>6</span></div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.1em] mb-3 font-heading font-medium" style={{ color: MUTED }}>Training Location</label>
                <div className="flex flex-wrap gap-2">
                  {LOCATIONS.map((l) => <Chip key={l} label={l} active={location === l} onClick={() => setLocation(l)} />)}
                </div>
              </div>

              <button
                onClick={generate}
                disabled={loading}
                className="w-full py-3.5 text-sm font-heading font-bold rounded-full text-white transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                style={{ background: GREEN }}
              >
                {loading ? (<><Loader2 size={16} className="animate-spin" /> Building your plan…</>) : (<>Generate Workout Plan <ArrowRight size={16} /></>)}
              </button>
            </div>
          ) : (
            <div>
              {plan.map((d, i) => (
                <div key={i} className="p-5 rounded-2xl mb-3" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block text-[10px] uppercase tracking-[0.12em] font-heading font-bold px-2.5 py-1 rounded-full" style={{ background: GREEN_BG, color: GREEN }}>{d.day}</span>
                    <span className="text-xs font-heading font-bold" style={{ color: INK }}>{d.focus}</span>
                  </div>
                  {d.exercises.map((ex, j) => {
                    const [name, reps] = Array.isArray(ex) ? ex : [ex.name, ex.reps];
                    return (
                      <div key={j} className="flex items-center justify-between py-2" style={{ borderBottom: `1px solid ${BORDER}` }}>
                        <span className="text-xs font-heading" style={{ color: INK }}>{name}</span>
                        <span className="text-xs font-mono font-bold" style={{ color: GREEN }}>{reps}</span>
                      </div>
                    );
                  })}
                </div>
              ))}
              <div className="flex gap-3 mt-5">
                <button onClick={generate} className="flex-1 py-3 text-sm font-heading rounded-full" style={{ background: "#fff", color: INK, border: `1px solid ${BORDER}` }}>Regenerate</button>
                <button onClick={reset} className="flex-1 py-3 text-sm font-heading font-bold rounded-full text-white" style={{ background: GREEN }}>New Plan</button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}