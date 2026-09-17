import React, { useState } from "react";
import { Sparkles, RefreshCw, FileDown, ArrowUpRight } from "lucide-react";
import { base44 } from "@/api/base44Client";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import ClosingSections from "@/components/healthy-living/ClosingSections";

const INK = "#1f3d2a", MUTED = "#6b7a70", GREEN = "#1D7945", BORDER = "#e0e5de";

const GOALS = ["Balanced health", "Weight management", "Muscle building", "Energy boost"];
const ACTIVITY = ["Low", "Moderate", "High"];
const DIETS = ["No restriction", "Vegetarian", "Vegan", "Halal", "Low-sugar"];

const FALLBACK = [
  { meal: "Breakfast", name: "Labneh & Za'atar Flatbread", detail: "Wholegrain khubz with labneh, za'atar, olive oil and tomatoes.", macros: "P 14g · C 38g · F 8g" },
  { meal: "Lunch", name: "Chicken Machboos Bowl", detail: "Lean chicken on saffron rice with fresh salad.", macros: "P 38g · C 52g · F 12g" },
  { meal: "Snack", name: "Dates, Nuts & Yoghurt", detail: "Two Medjool dates, mixed nuts and low-fat yoghurt.", macros: "P 10g · C 28g · F 9g" },
  { meal: "Dinner", name: "Grilled Hammour & Vegetables", detail: "Spiced grilled fish with roasted root vegetables.", macros: "P 36g · C 30g · F 11g" },
];

export default function MealPlanGenerator() {
  const [goal, setGoal] = useState(GOALS[0]);
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState(ACTIVITY[1]);
  const [diet, setDiet] = useState("Halal");
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    try {
      const res = await base44.integrations.Core.InvokeLLM({
        prompt: `Create a one-day healthy meal plan for a person with goal: ${goal}, age: ${age || "30"}, height: ${height || "170"}cm, weight: ${weight || "70"}kg, activity level: ${activity}, dietary preference: ${diet}. Use balanced, whole-food meals (Halal-friendly by default). Return 4 meals: Breakfast, Lunch, Snack, Dinner. For each give a short name, one-line detail, and macros (Protein, Carbs, Fat in grams). Keep it practical and UAE-friendly.`,
        response_json_schema: {
          type: "object",
          properties: {
            meals: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  meal: { type: "string" },
                  name: { type: "string" },
                  detail: { type: "string" },
                  macros: { type: "string" },
                },
              },
            },
          },
        },
      });
      setPlan(res.meals && res.meals.length ? res.meals : FALLBACK);
    } catch {
      setPlan(FALLBACK);
    } finally {
      setLoading(false);
    }
  };

  const Field = ({ label, children }) => (
    <div>
      <label className="block text-xs font-heading font-bold mb-1.5" style={{ color: INK }}>{label}</label>
      {children}
    </div>
  );
  const inputCls = "w-full rounded-xl px-4 py-2.5 text-sm font-heading outline-none";
  const inputStyle = { background: "#fff", border: `1px solid ${BORDER}`, color: INK };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Wellness Tools"
        title="Meal Plan Generator"
        subtitle="Personalised in seconds · No account needed · Nothing saved"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl p-7" style={{ background: "#F7F6F2", border: `1px solid ${BORDER}` }}>
            <h2 className="font-heading font-bold text-xl mb-6" style={{ color: INK }}>Your details</h2>
            <div className="space-y-5">
              <Field label="Goal">
                <select value={goal} onChange={(e) => setGoal(e.target.value)} className={inputCls} style={inputStyle}>
                  {GOALS.map((g) => <option key={g}>{g}</option>)}
                </select>
              </Field>
              <div className="grid grid-cols-3 gap-3">
                <Field label="Age"><input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="30" className={inputCls} style={inputStyle} /></Field>
                <Field label="Height (cm)"><input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="170" className={inputCls} style={inputStyle} /></Field>
                <Field label="Weight (kg)"><input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="70" className={inputCls} style={inputStyle} /></Field>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Activity Level">
                  <select value={activity} onChange={(e) => setActivity(e.target.value)} className={inputCls} style={inputStyle}>
                    {ACTIVITY.map((a) => <option key={a}>{a}</option>)}
                  </select>
                </Field>
                <Field label="Dietary Preference">
                  <select value={diet} onChange={(e) => setDiet(e.target.value)} className={inputCls} style={inputStyle}>
                    {DIETS.map((d) => <option key={d}>{d}</option>)}
                  </select>
                </Field>
              </div>
              <button
                onClick={generate}
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-60"
                style={{ background: GREEN }}
              >
                {loading ? "Generating…" : (<><Sparkles size={15} /> Generate Meal Plan</>)}
              </button>
            </div>
          </div>

          <div className="rounded-2xl p-7" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
            {plan ? (
              <>
                <h2 className="font-heading font-bold text-xl mb-6" style={{ color: INK }}>Your day's plan</h2>
                <div className="space-y-5">
                  {plan.map((m) => (
                    <div key={m.meal} className="pb-5" style={{ borderBottom: `1px solid ${BORDER}` }}>
                      <p className="text-[11px] uppercase tracking-[0.14em] font-heading font-bold mb-1" style={{ color: GREEN }}>{m.meal}</p>
                      <p className="font-heading font-bold text-base mb-0.5" style={{ color: INK }}>{m.name}</p>
                      <p className="text-sm font-heading font-light" style={{ color: MUTED }}>{m.detail}</p>
                      <p className="text-xs font-heading font-medium mt-1.5" style={{ color: INK }}>{m.macros}</p>
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
                  Track or personalise further in Sahatna <ArrowUpRight size={12} />
                </p>
              </>
            ) : (
              <div className="h-full flex items-center justify-center text-center">
                <p className="text-sm font-heading font-light max-w-xs" style={{ color: MUTED }}>
                  Enter your goal, a few details, and generate a personalised day's meal plan with macros — nothing is saved.
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