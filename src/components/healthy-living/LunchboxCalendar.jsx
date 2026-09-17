import React, { useState } from "react";
import { Sparkles, RefreshCw, ArrowUpRight } from "lucide-react";

const INK = "#1f3d2a", MUTED = "#6b7a70", GREEN = "#1D7945", BORDER = "#e0e5de";

const YEAR_GROUPS = ["Foundation (4–6)", "Lower Primary (7–8)", "Upper Primary (9–11)", "Secondary (12–17)"];
const ALLERGENS = ["Nuts", "Dairy", "Gluten", "Eggs", "Seafood", "Soy"];
const DIETS = ["Halal", "Vegetarian", "Vegan", "Low-sugar"];

const IDEAS = [
  { name: "Chicken & Salad Wrap", detail: "Wholegrain wrap, grilled chicken, lettuce, tomato.", snack: "Fruit + water.", diets: ["Halal"], allergens: ["Gluten"] },
  { name: "Falafel Hummus Pita", detail: "Wholemeal pita, falafel, hummus, cucumber.", snack: "Dates + yoghurt.", diets: ["Halal", "Vegetarian"], allergens: ["Gluten"] },
  { name: "Veg Rice & Beans Bowl", detail: "Brown rice, black beans, corn, avocado.", snack: "Orange wedges.", diets: ["Halal", "Vegetarian", "Vegan", "Low-sugar"], allergens: [] },
  { name: "Egg & Spinach Muffin", detail: "Baked egg muffin with spinach & tomato.", snack: "Apple slices.", diets: ["Halal", "Vegetarian", "Low-sugar"], allergens: ["Eggs"] },
  { name: "Cheese & Tomato Pitta", detail: "Toasted pitta, cheddar, tomato, cucumber.", snack: "Grapes + water.", diets: ["Halal", "Vegetarian"], allergens: ["Dairy", "Gluten"] },
  { name: "Tuna Pasta Salad", detail: "Wholegrain pasta, tuna, sweetcorn, peppers.", snack: "Watermelon.", diets: ["Halal"], allergens: ["Gluten", "Seafood"] },
  { name: "Lentil & Veg Stew", detail: "Lentils, carrot, tomato with wholegrain bread.", snack: "Banana.", diets: ["Halal", "Vegetarian", "Vegan", "Low-sugar"], allergens: ["Gluten"] },
  { name: "Yoghurt Granola Pot", detail: "Low-fat yoghurt, oats, berries.", snack: "Cucumber sticks.", diets: ["Halal", "Vegetarian"], allergens: ["Dairy"] },
  { name: "Soy Noodle Stir-fry", detail: "Rice noodles, tofu, greens, soy sauce.", snack: "Pear.", diets: ["Halal", "Vegetarian", "Vegan"], allergens: ["Soy", "Gluten"] },
  { name: "Quinoa & Chickpea Salad", detail: "Quinoa, chickpeas, tomato, parsley, lemon.", snack: "Fruit pot.", diets: ["Halal", "Vegetarian", "Vegan", "Low-sugar"], allergens: [] },
];

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const DIET_NEEDS = ["Vegetarian", "Vegan", "Low-sugar"]; // selectable extra requirements beyond Halal default

export default function LunchboxCalendar() {
  const [year, setYear] = useState(YEAR_GROUPS[2]);
  const [allergens, setAllergens] = useState([]);
  const [diets, setDiets] = useState([]);
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggle = (val, arr, set) => set(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);

  const generate = () => {
    setLoading(true);
    setTimeout(() => {
      const safe = IDEAS.filter(
        (idea) => !idea.allergens.some((a) => allergens.includes(a))
          && diets.every((d) => idea.diets.includes(d))
      );
      const pool = safe.length >= 5 ? safe : IDEAS;
      // deterministic shuffle by index offset for variety
      const shuffled = [...pool].sort((a, b) => (a.name.length - b.name.length));
      setPlan(shuffled.slice(0, 5));
      setLoading(false);
    }, 600);
  };

  const Chip = ({ active, onClick, children }) => (
    <button
      onClick={onClick}
      className="px-3 py-1.5 rounded-full text-xs font-heading font-semibold transition-all"
      style={active ? { background: "#1f3d2a", color: "#fff", border: "1px solid #1f3d2a" } : { background: "#fff", color: INK, border: `1px solid ${BORDER}` }}
    >
      {children}
    </button>
  );

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: GREEN }}>
          Weekly Lunchbox Calendar
        </p>
        <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: INK }}>
          A full week of balanced, swappable lunchbox ideas
        </h2>
        <p className="font-heading font-light max-w-3xl leading-relaxed mb-10" style={{ color: MUTED }}>
          Tailored to your child's year group and dietary needs — mix and match across the week.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl p-6" style={{ background: "#F7F6F2", border: `1px solid ${BORDER}` }}>
            <div className="mb-6">
              <p className="text-xs font-heading font-bold mb-2" style={{ color: INK }}>Year Group</p>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full rounded-xl px-4 py-2.5 text-sm font-heading outline-none"
                style={{ background: "#fff", border: `1px solid ${BORDER}`, color: INK }}
              >
                {YEAR_GROUPS.map((y) => <option key={y}>{y}</option>)}
              </select>
            </div>
            <div className="mb-6">
              <p className="text-xs font-heading font-bold mb-2.5" style={{ color: INK }}>Allergies / intolerances to exclude</p>
              <div className="flex flex-wrap gap-2">
                {ALLERGENS.map((a) => <Chip key={a} active={allergens.includes(a)} onClick={() => toggle(a, allergens, setAllergens)}>{a}</Chip>)}
              </div>
            </div>
            <div className="mb-7">
              <p className="text-xs font-heading font-bold mb-2.5" style={{ color: INK }}>Dietary requirements</p>
              <div className="flex flex-wrap gap-2">
                {DIET_NEEDS.map((d) => <Chip key={d} active={diets.includes(d)} onClick={() => toggle(d, diets, setDiets)}>{d}</Chip>)}
              </div>
              <p className="text-[11px] font-heading font-light mt-2" style={{ color: MUTED }}>All ideas are Halal by default.</p>
            </div>
            <button
              onClick={generate}
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-60"
              style={{ background: GREEN }}
            >
              {loading ? "Generating…" : (<><Sparkles size={15} /> Generate My Week Plan</>)}
            </button>
          </div>

          <div className="rounded-2xl p-6" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
            {plan ? (
              <>
                <div className="space-y-4">
                  {plan.map((idea, i) => (
                    <div key={idea.name} className="flex gap-3">
                      <div className="flex flex-col items-center pt-0.5">
                        <span className="text-[10px] uppercase tracking-[0.12em] font-heading font-bold" style={{ color: GREEN }}>{DAYS[i].slice(0, 3)}</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-heading font-bold text-sm" style={{ color: INK }}>{idea.name}</p>
                        <p className="text-xs font-heading font-light" style={{ color: MUTED }}>{idea.detail}</p>
                        <p className="text-[11px] font-heading font-light mt-0.5" style={{ color: MUTED }}>Snack: {idea.snack}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={generate}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-heading font-bold transition-colors"
                  style={{ color: GREEN }}
                >
                  <RefreshCw size={13} /> Regenerate week
                </button>
                <p className="text-[11px] font-heading font-light mt-4 flex items-center gap-1" style={{ color: MUTED }}>
                  Save & personalise in Sahatna <ArrowUpRight size={12} />
                </p>
              </>
            ) : (
              <div className="h-full flex items-center justify-center text-center">
                <p className="text-sm font-heading font-light" style={{ color: MUTED }}>
                  Select your child's year group, exclude any allergens, then generate a full Monday–Friday lunchbox plan.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}