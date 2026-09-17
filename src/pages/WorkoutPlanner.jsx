import React, { useState } from "react";
import { Sparkles, RefreshCw, FileDown, ArrowUpRight } from "lucide-react";
import { base44 } from "@/api/base44Client";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import ClosingSections from "@/components/healthy-living/ClosingSections";

const INK = "#1f3d2a", MUTED = "#6b7a70", GREEN = "#1D7945", BORDER = "#e0e5de";

const GOALS = ["General fitness", "Weight loss", "Muscle building", "Improve endurance"];
const LEVELS = ["Beginner", "Intermediate", "Advanced"];
const LOCATIONS = ["Home", "Gym", "Outdoor", "Any"];

const FALLBACK = [
  { day: "Monday", name: "Full Body Strength", detail: "Bodyweight Squats 3×15; Push-ups 3×12; Plank 3×45s; Lunges 3×12 each" },
  { day: "Wednesday", name: "Cardio & Core", detail: "Brisk Walk / Jog 30 min; Mountain Climbers 3×20; Bicycle Crunches 3×20; Dead Bug 3×10" },
  { day: "Friday", name: "Upper Body & Flex", detail: "Shoulder Press 3×12; Tricep Dips 3×10; Resistance Band Rows 3×12; Yoga Stretch 10 min" },
];

export default function WorkoutPlanner() {
  const [goal, setGoal] = useState(GOALS[0]);
  const [level, setLevel] = useState(LEVELS[0]);
  const [days, setDays] = useState(3);
  const [location, setLocation] = useState(LOCATIONS[0]);
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    try {
      const res = await base44.integrations.Core.InvokeLLM({
        prompt: `Create a weekly workout plan for goal: ${goal}, experience level: ${level}, ${days} days per week, training location: ${location}. No equipment or gym required unless location is Gym. For each session give the day, a short session name, and the exercises with sets/reps. Return ${days} sessions spread across the week.`,
        response_json_schema: {
          type: "object",
          properties: {
            sessions: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  day: { type: "string" },
                  name: { type: "string" },
                  detail: { type: "string" },
                },
              },
            },
          },
        },
      });
      setPlan(res.sessions && res.sessions.length ? res.sessions : FALLBACK);
    } catch {
      setPlan(FALLBACK);
    } finally {
      setLoading(false);
    }
  };

  const inputCls = "w-full rounded-xl px-4 py-2.5 text-sm font-heading outline-none";
  const inputStyle = { background: "#fff", border: `1px solid ${BORDER}`, color: INK };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Wellness Tools"
        title="Workout Planner"
        subtitle="A simple weekly workout plan based on your goal and schedule. No equipment or gym required."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl p-7" style={{ background: "#F7F6F2", border: `1px solid ${BORDER}` }}>
            <h2 className="font-heading font-bold text-xl mb-6" style={{ color: INK }}>Your details</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-heading font-bold mb-1.5" style={{ color: INK }}>Fitness Goal</label>
                <select value={goal} onChange={(e) => setGoal(e.target.value)} className={inputCls} style={inputStyle}>
                  {GOALS.map((g) => <option key={g}>{g}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-heading font-bold mb-1.5" style={{ color: INK }}>Experience Level</label>
                <select value={level} onChange={(e) => setLevel(e.target.value)} className={inputCls} style={inputStyle}>
                  {LEVELS.map((l) => <option key={l}>{l}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-heading font-bold mb-1.5" style={{ color: INK }}>Days Per Week: {days}</label>
                <input type="range" min={2} max={6} value={days} onChange={(e) => setDays(Number(e.target.value))} className="w-full accent-emerald-700" />
              </div>
              <div>
                <label className="block text-xs font-heading font-bold mb-1.5" style={{ color: INK }}>Training Location</label>
                <select value={location} onChange={(e) => setLocation(e.target.value)} className={inputCls} style={inputStyle}>
                  {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
                </select>
              </div>
              <button
                onClick={generate}
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-60"
                style={{ background: GREEN }}
              >
                {loading ? "Generating…" : (<><Sparkles size={15} /> Generate Workout Plan</>)}
              </button>
            </div>
          </div>

          <div className="rounded-2xl p-7" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
            {plan ? (
              <>
                <h2 className="font-heading font-bold text-xl mb-6" style={{ color: INK }}>Your weekly plan</h2>
                <div className="space-y-4">
                  {plan.map((s) => (
                    <div key={s.day} className="flex gap-4 pb-4" style={{ borderBottom: `1px solid ${BORDER}` }}>
                      <div className="w-20 shrink-0">
                        <p className="text-[10px] uppercase tracking-[0.12em] font-heading font-bold" style={{ color: GREEN }}>{s.day}</p>
                      </div>
                      <div className="flex-1">
                        <p className="font-heading font-bold text-base mb-0.5" style={{ color: INK }}>{s.name}</p>
                        <p className="text-sm font-heading font-light leading-relaxed" style={{ color: MUTED }}>{s.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  <button onClick={generate} className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95" style={{ background: "#1f3d2a" }}>
                    <RefreshCw size={14} /> Regenerate
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-heading font-bold transition-all" style={{ background: "#F7F6F2", color: INK, border: `1px solid ${BORDER}` }}>
                    <FileDown size={14} /> Download PDF
                  </button>
                </div>
                <p className="text-xs font-heading font-light mt-5 flex items-center gap-1" style={{ color: MUTED }}>
                  Continue your fitness journey in Sahatna <ArrowUpRight size={12} />
                </p>
              </>
            ) : (
              <div className="h-full flex items-center justify-center text-center">
                <p className="text-sm font-heading font-light max-w-xs" style={{ color: MUTED }}>
                  Share your goal, level and availability to receive a weekly schedule with exercises and guidance.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <ClosingSections withStats={false} />
      <Footer />
    </div>
  );
}