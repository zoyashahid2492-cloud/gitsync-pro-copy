import React, { useState, useRef } from "react";
import { Sparkles, RefreshCw, Download, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const INK = "#1f3d2a", MUTED = "#6b7a70", GREEN = "#1D7945", BORDER = "#e0e5de";

const YEAR_GROUPS = ["Foundation (4–6)", "Lower Primary (7–8)", "Upper Primary (9–11)", "Secondary (12–17)"];
const ALLERGENS = ["Nuts", "Dairy", "Gluten", "Eggs", "Seafood", "Soy"];
const DIET_NEEDS = ["Vegetarian", "Vegan", "Low-sugar"];
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const COMPARTMENTS = [
  { key: "main", label: "Main", emoji: "🍱", bg: "#E6F2EC", ink: "#1f3d2a" },
  { key: "veg", label: "Veg", emoji: "🥕", bg: "#F0E8D6", ink: "#5a4a2a" },
  { key: "fruit", label: "Fruit", emoji: "🍎", bg: "#F5E0E0", ink: "#5a2a2a" },
  { key: "snack", label: "Snack", emoji: "🍪", bg: "#ECE3F0", ink: "#4a3a5a" },
  { key: "drink", label: "Drink", emoji: "💧", bg: "#DDE8F0", ink: "#2a3a5a" },
  { key: "treat", label: "Treat", emoji: "🍇", bg: "#F0E6E0", ink: "#5a3a2a" },
];

const FALLBACK = [
  { day: "Monday", main: "Chicken & Salad Wrap", main_desc: "Wholegrain wrap, grilled chicken, lettuce, tomato.", veg: "Cucumber sticks", veg_desc: "With hummus.", fruit: "Apple slices", fruit_desc: "Fresh & crisp.", snack: "Oat bar", snack_desc: "Low-sugar.", drink: "Water", treat: "Grapes" },
  { day: "Tuesday", main: "Falafel Hummus Pita", main_desc: "Wholemeal pita, falafel, hummus.", veg: "Cherry tomatoes", veg_desc: "On the side.", fruit: "Orange wedges", fruit_desc: "Juicy & sweet.", snack: "Yoghurt pot", snack_desc: "Low-fat.", drink: "Milk", treat: "Dates" },
  { day: "Wednesday", main: "Veg Rice & Beans Bowl", main_desc: "Brown rice, black beans, corn, avocado.", veg: "Carrot ribbons", veg_desc: "Crunchy.", fruit: "Banana", fruit_desc: "Ripe.", snack: "Rice cakes", snack_desc: "Light.", drink: "Water", treat: "Berries" },
  { day: "Thursday", main: "Egg & Spinach Muffin", main_desc: "Baked egg muffin with spinach & tomato.", veg: "Pepper strips", veg_desc: "Colourful.", fruit: "Pear", fruit_desc: "Sliced.", snack: "Cheese cubes", snack_desc: "Mild cheddar.", drink: "Water", treat: "Melon" },
  { day: "Friday", main: "Tuna Pasta Salad", main_desc: "Wholegrain pasta, tuna, sweetcorn, peppers.", veg: "Sweetcorn", veg_desc: "In the salad.", fruit: "Watermelon", fruit_desc: "Chilled.", snack: "Trail mix", snack_desc: "Nut-free.", drink: "Milk", treat: "Fruit kebab" },
];

function getWeekSeed() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = (now - start) / 86400000;
  const week = Math.ceil((diff + start.getDay() + 1) / 7);
  return `${now.getFullYear()}-W${week}`;
}

export default function LunchboxCalendar() {
  const [year, setYear] = useState(YEAR_GROUPS[2]);
  const [allergens, setAllergens] = useState([]);
  const [diets, setDiets] = useState([]);
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [weekOffset, setWeekOffset] = useState(0);
  const planRef = useRef(null);

  const weekSeed = `${getWeekSeed()}${weekOffset ? `+${weekOffset}` : ""}`;

  const toggle = (val, arr, set) => set(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);

  const generate = async () => {
    setLoading(true);
    try {
      const res = await base44.integrations.Core.InvokeLLM({
        prompt: `You are a children's school lunchbox nutritionist for Abu Dhabi's Healthy Living programme. Generate a full 5-day (Monday to Friday) balanced school lunchbox plan for a child in year group: ${year}. All meals are Halal by default. Exclude these allergens: ${allergens.join(", ") || "none"}. Additional dietary requirements: ${diets.join(", ") || "none"}. Week identifier: ${weekSeed} — make this week's plan distinct and varied from other weeks. For each day return 6 bento compartments: main (name + short desc), veg (name + short desc), fruit (name + short desc), snack (name + short desc), drink (name), treat (name). Keep portions kid-friendly, colourful, balanced, and varied across the week. Descriptions should be one short phrase.`,
        response_json_schema: {
          type: "object",
          properties: {
            days: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  day: { type: "string" },
                  main: { type: "string" }, main_desc: { type: "string" },
                  veg: { type: "string" }, veg_desc: { type: "string" },
                  fruit: { type: "string" }, fruit_desc: { type: "string" },
                  snack: { type: "string" }, snack_desc: { type: "string" },
                  drink: { type: "string" }, treat: { type: "string" },
                },
                required: ["day", "main", "main_desc", "veg", "veg_desc", "fruit", "fruit_desc", "snack", "snack_desc", "drink", "treat"],
              },
            },
          },
          required: ["days"],
        },
      });
      const days = Array.isArray(res?.days) ? res.days.slice(0, 5) : null;
      setPlan(days && days.length ? days : FALLBACK);
    } catch {
      setPlan(FALLBACK);
    } finally {
      setLoading(false);
    }
  };

  const download = async () => {
    if (!planRef.current) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(planRef.current, { scale: 2, backgroundColor: "#ffffff", useCORS: true });
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const w = pdf.internal.pageSize.getWidth();
      const h = (canvas.height * w) / canvas.width;
      pdf.addImage(img, "PNG", 0, 0, w, h);
      pdf.save(`lunchbox-week-plan-${weekSeed}.pdf`);
    } catch {
      setPlan((p) => p);
    } finally {
      setDownloading(false);
    }
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

  const Compartment = ({ c, item, big }) => (
    <div
      className="rounded-2xl p-3 flex flex-col justify-between"
      style={{ background: c.bg, color: c.ink, minHeight: big ? 96 : 78 }}
    >
      <div className="flex items-center gap-1.5">
        <span style={{ fontSize: big ? 22 : 18 }}>{c.emoji}</span>
        <span className="text-[10px] uppercase tracking-[0.14em] font-heading font-bold opacity-70">{c.label}</span>
      </div>
      <div className="mt-1">
        <p className="font-heading font-bold leading-tight" style={{ fontSize: big ? 14 : 12.5 }}>{item[c.key]}</p>
        {item[`${c.key}_desc`] && (
          <p className="font-heading font-light leading-snug opacity-80" style={{ fontSize: 10.5 }}>{item[`${c.key}_desc`]}</p>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24" style={{ background: "#F7F6F2" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: GREEN }}>
          Bento Lunchbox Planner
        </p>
        <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: INK }}>
          A cute, balanced bento plan for the whole week
        </h2>
        <p className="font-heading font-light max-w-3xl leading-relaxed mb-10" style={{ color: MUTED }}>
          Each week a fresh plan — six compartments a day, tailored to your child's year group and dietary needs. Generate, then download your week.
        </p>

        <div className="grid md:grid-cols-12 gap-6">
          {/* Controls */}
          <div className="md:col-span-4 rounded-2xl p-6 h-fit" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
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
              <p className="text-xs font-heading font-bold mb-2.5" style={{ color: INK }}>Allergies to exclude</p>
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
              {loading ? (<><Loader2 size={15} className="animate-spin" /> Generating…</>) : (<><Sparkles size={15} /> Generate This Week</>)}
            </button>
            {plan && (
              <div className="mt-3 flex gap-2">
                <button
                  onClick={generate}
                  disabled={loading}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-heading font-bold transition-all"
                  style={{ background: "#E6F2EC", color: GREEN, border: `1px solid ${GREEN}` }}
                >
                  <RefreshCw size={13} /> New plan
                </button>
                <button
                  onClick={download}
                  disabled={downloading}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-heading font-bold text-white transition-all hover:opacity-90 disabled:opacity-60"
                  style={{ background: "#1f3d2a" }}
                >
                  {downloading ? <Loader2 size={13} className="animate-spin" /> : <Download size={13} />} Download
                </button>
              </div>
            )}
            <p className="text-[11px] font-heading font-light mt-4 text-center" style={{ color: MUTED }}>
              Week {weekSeed} · a new plan every week
            </p>
          </div>

          {/* Bento plan */}
          <div className="md:col-span-8">
            {plan ? (
              <div ref={planRef} className="grid sm:grid-cols-2 gap-4">
                {plan.map((day, i) => (
                  <div key={i} className="rounded-3xl p-4" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-heading font-bold text-sm" style={{ color: INK }}>{day.day || DAYS[i]}</h3>
                      <span className="text-[10px] uppercase tracking-[0.14em] font-heading font-bold px-2 py-1 rounded-full" style={{ background: "#E6F2EC", color: GREEN }}>
                        Day {i + 1}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <Compartment c={COMPARTMENTS[0]} item={day} big />
                      <Compartment c={COMPARTMENTS[1]} item={day} />
                      <Compartment c={COMPARTMENTS[2]} item={day} />
                      <Compartment c={COMPARTMENTS[3]} item={day} />
                      <Compartment c={COMPARTMENTS[4]} item={day} />
                      <Compartment c={COMPARTMENTS[5]} item={day} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="rounded-2xl p-10 h-full flex flex-col items-center justify-center text-center min-h-[320px]"
                style={{ background: "#fff", border: `1px solid ${BORDER}` }}
              >
                <div className="text-5xl mb-4">🍱</div>
                <p className="font-heading font-bold text-base mb-1" style={{ color: INK }}>Your bento week awaits</p>
                <p className="text-sm font-heading font-light max-w-sm" style={{ color: MUTED }}>
                  Pick your child's year group, exclude any allergens, then generate a full Monday–Friday bento lunchbox plan — and download it to keep.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}