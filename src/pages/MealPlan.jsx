import React, { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";

const INK = "#1f3d2a", GREEN = "#1D7945", GREEN_BG = "#E6F2EC", BG_ALT = "#F7F6F2", MUTED = "#6b7a70", BORDER = "#e0e5de";

const GOALS = ["Balanced health", "Weight management", "Muscle building", "Energy boost"];
const DIETS = ["No restriction", "Vegetarian", "Vegan", "Halal", "Low-sugar"];

const FALLBACK = [
  { label: "Breakfast", name: "Labneh & Za'atar Flatbread", desc: "Wholegrain khubz with labneh, za'atar, olive oil and tomatoes.", macros: { p: 14, c: 38, f: 8 } },
  { label: "Lunch", name: "Chicken Machboos Bowl", desc: "Lean chicken on saffron rice with fresh salad.", macros: { p: 38, c: 52, f: 12 } },
  { label: "Snack", name: "Dates, Nuts & Yoghurt", desc: "Two Medjool dates, mixed nuts and low-fat yoghurt.", macros: { p: 10, c: 28, f: 9 } },
  { label: "Dinner", name: "Grilled Hammour & Vegetables", desc: "Spiced grilled fish with roasted root vegetables.", macros: { p: 36, c: 30, f: 11 } },
];

function Chip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-xs font-heading font-bold rounded-full transition-all"
      style={{
        background: active ? GREEN_BG : "#fff",
        color: active ? GREEN : MUTED,
        border: `1px solid ${active ? GREEN : BORDER}`,
      }}
    >
      {label}
    </button>
  );
}

export default function MealPlan() {
  const [goal, setGoal] = useState("Balanced health");
  const [activity, setActivity] = useState("Moderate");
  const [diet, setDiet] = useState("No restriction");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState(null);

  const generate = async () => {
    setLoading(true);
    setPlan(null);
    try {
      const prompt = `You are a nutritionist for the Abu Dhabi Healthy Living initiative. Create a single-day meal plan for a person with: goal "${goal}", activity level "${activity}", dietary preference "${diet}"${age ? `, age ${age}` : ""}${height ? `, height ${height}` : ""}${weight ? `, weight ${weight}` : ""}. Return exactly 4 meals in order: Breakfast, Lunch, Snack, Dinner. Use balanced, culturally relevant options. For each meal provide a short name, a one-line description, and macros in grams (protein p, carbs c, fat f).`;
      const res = await base44.integrations.Core.InvokeLLM({
        prompt,
        response_json_schema: {
          type: "object",
          properties: {
            meals: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  label: { type: "string" },
                  name: { type: "string" },
                  desc: { type: "string" },
                  macros: {
                    type: "object",
                    properties: { p: { type: "number" }, c: { type: "number" }, f: { type: "number" } },
                    required: ["p", "c", "f"],
                  },
                },
                required: ["label", "name", "desc", "macros"],
              },
            },
          },
          required: ["meals"],
        },
      });
      setPlan((res?.meals?.length ? res.meals : FALLBACK));
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
        title="Meal Plan Generator."
        subtitle="Personalised in seconds · No account needed · Nothing saved."
      />

      <section className="py-16 md:py-20" style={{ background: "#F7F6F2" }}>
        <div className="max-w-xl mx-auto px-6">
          {!plan ? (
            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-[0.1em] mb-3 font-heading font-medium" style={{ color: MUTED }}>Goal</label>
                <div className="flex flex-wrap gap-2">
                  {GOALS.map((g) => <Chip key={g} label={g} active={goal === g} onClick={() => setGoal(g)} />)}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { k: "age", l: "Age", ph: "28", v: age, set: setAge },
                  { k: "height", l: "Height", ph: "175 cm", v: height, set: setHeight },
                  { k: "weight", l: "Weight", ph: "70 kg", v: weight, set: setWeight },
                ].map((f) => (
                  <div key={f.k}>
                    <label className="block text-xs uppercase tracking-[0.1em] mb-2 font-heading font-medium" style={{ color: MUTED }}>{f.l}</label>
                    <input
                      value={f.v}
                      onChange={(e) => f.set(e.target.value)}
                      placeholder={f.ph}
                      className="w-full px-3 py-2.5 text-sm focus:outline-none rounded-xl font-heading"
                      style={{ background: "#fff", border: `1px solid ${BORDER}`, color: INK }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.1em] mb-3 font-heading font-medium" style={{ color: MUTED }}>Activity Level</label>
                <div className="flex rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
                  {["Low", "Moderate", "High"].map((a, i) => (
                    <button
                      key={a}
                      onClick={() => setActivity(a)}
                      className="flex-1 py-3 text-sm font-heading font-bold transition-all"
                      style={{
                        background: activity === a ? GREEN : "transparent",
                        color: activity === a ? "#fff" : MUTED,
                        borderRight: i < 2 ? `1px solid ${BORDER}` : "none",
                      }}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.1em] mb-3 font-heading font-medium" style={{ color: MUTED }}>Dietary Preference</label>
                <div className="flex flex-wrap gap-2">
                  {DIETS.map((d) => <Chip key={d} label={d} active={diet === d} onClick={() => setDiet(d)} />)}
                </div>
              </div>

              <button
                onClick={generate}
                disabled={loading}
                className="w-full py-3.5 text-sm font-heading font-bold rounded-full text-white transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                style={{ background: GREEN }}
              >
                {loading ? (<><Loader2 size={16} className="animate-spin" /> Generating…</>) : (<>Generate Meal Plan <ArrowRight size={16} /></>)}
              </button>
            </div>
          ) : (
            <div>
              {plan.map((m, i) => (
                <div key={i} className="p-5 rounded-2xl mb-3" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                  <span className="inline-block text-[10px] uppercase tracking-[0.12em] font-heading font-bold px-2.5 py-1 rounded-full mb-2" style={{ background: GREEN_BG, color: GREEN }}>{m.label}</span>
                  <div className="font-heading font-bold text-base mb-1" style={{ color: INK }}>{m.name}</div>
                  <p className="font-heading font-light text-sm leading-relaxed mb-3" style={{ color: MUTED }}>{m.desc}</p>
                  <div className="flex gap-4 text-xs font-mono font-bold">
                    <span style={{ color: GREEN }}>P {m.macros.p}g</span>
                    <span style={{ color: "#cb7d5d" }}>C {m.macros.c}g</span>
                    <span style={{ color: MUTED }}>F {m.macros.f}g</span>
                  </div>
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