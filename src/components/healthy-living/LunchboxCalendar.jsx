import React, { useState, useRef } from "react";
import { Sparkles, Download, Loader2, Heart, Leaf, Smile, ThumbsUp, ArrowRight, Printer } from "lucide-react";
import { base44 } from "@/api/base44Client";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const INK = "#1f3d2a", MUTED = "#6b7a70", GREEN = "#1D7945", SAGE = "#8DB594", CREAM = "#F5F7F4", BORDER = "#e0e5de", SAGE_BG = "#EAF1EC";

const AGE_BANDS = ["3-5", "6-8", "9-12"];
const DIET_NEEDS = ["Nut-free", "Dairy-free", "Gluten-free", "Vegetarian", "No sesame", "Low sugar"];
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const COMPARTMENTS = [
  { key: "main", label: "Main", emoji: "🥪", bg: "#EAF1EC", ink: "#1f3d2a" },
  { key: "veg", label: "Veg", emoji: "🥕", bg: "#F0E8D6", ink: "#5a4a2a" },
  { key: "fruit", label: "Fruit", emoji: "🍎", bg: "#F5E0E0", ink: "#5a2a2a" },
  { key: "snack", label: "Snack", emoji: "🍇", bg: "#ECE3F0", ink: "#4a3a5a" },
  { key: "treat", label: "Treat", emoji: "🍪", bg: "#F0E6E0", ink: "#5a3a2a" },
  { key: "drink", label: "Drink", emoji: "💧", bg: "#DDE8F0", ink: "#2a3a5a" },
];

const BADGES = [
  { Icon: Leaf, label: "Balanced nutrition" },
  { Icon: ThumbsUp, label: "Kid-approved" },
  { Icon: Smile, label: "Healthier habits" },
];

const FALLBACK = [
  { day: "Monday", main: "Wholegrain cheese sandwich", main_desc: "Soft, smiley-cut.", veg: "Cucumber stars", veg_desc: "Crunchy & fun.", fruit: "Apple slices", fruit_desc: "Fresh & crisp.", snack: "Berry mix", snack_desc: "Antioxidant-rich.", drink: "Water", treat: "Oat bar" },
  { day: "Tuesday", main: "Falafel hummus pita", main_desc: "Wholemeal, warm.", veg: "Carrot sticks", veg_desc: "With hummus dip.", fruit: "Orange wedges", fruit_desc: "Juicy & sweet.", snack: "Cheese cubes", snack_desc: "Mild cheddar.", drink: "Water", treat: "Dates" },
  { day: "Wednesday", main: "Veg rice & beans bowl", main_desc: "Brown rice, beans.", veg: "Pepper strips", veg_desc: "Colourful.", fruit: "Banana", fruit_desc: "Ripe.", snack: "Rice cakes", snack_desc: "Light.", drink: "Water", treat: "Grapes" },
  { day: "Thursday", main: "Egg & spinach muffin", main_desc: "Baked, fluffy.", veg: "Cherry tomatoes", veg_desc: "On the side.", fruit: "Pear", fruit_desc: "Sliced.", snack: "Yoghurt pot", snack_desc: "Low-fat.", drink: "Water", treat: "Melon" },
  { day: "Friday", main: "Tuna pasta salad", main_desc: "Wholegrain pasta.", veg: "Sweetcorn", veg_desc: "In the salad.", fruit: "Watermelon", fruit_desc: "Chilled.", snack: "Trail mix", snack_desc: "Nut-free.", drink: "Water", treat: "Fruit kebab" },
];

export default function LunchboxCalendar() {
  const [age, setAge] = useState("6-8");
  const [diets, setDiets] = useState(["Nut-free"]);
  const [likes, setLikes] = useState("");
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [activeDay, setActiveDay] = useState(0);
  const previewRef = useRef(null);
  const exportRef = useRef(null);

  const toggle = (val) => setDiets((arr) => (arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]));

  const generate = async () => {
    setLoading(true);
    try {
      const res = await base44.integrations.Core.InvokeLLM({
        prompt: `You are a children's school lunchbox nutritionist for Abu Dhabi's Healthy Living programme. Generate a full 5-day (Monday to Friday) balanced school lunchbox plan for a child aged ${age}. All meals are Halal by default. Dietary requirements: ${diets.join(", ") || "none"}. Child likes/dislikes: ${likes || "none"}. For each day return 6 bento compartments: main (name + short desc), veg (name + short desc), fruit (name + short desc), snack (name + short desc), drink (name), treat (name). Keep portions kid-friendly, colourful, balanced, and varied across the week. Make food names cute (e.g. "cucumber stars"). Descriptions are one short phrase.`,
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
      setActiveDay(0);
    } catch {
      setPlan(FALLBACK);
      setActiveDay(0);
    } finally {
      setLoading(false);
    }
  };

  const download = async () => {
    const target = exportRef.current;
    if (!target) return;
    setDownloading(true);
    try {
      target.style.display = "block";
      const canvas = await html2canvas(target, { scale: 2, backgroundColor: "#ffffff", useCORS: true });
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const w = pdf.internal.pageSize.getWidth();
      const h = (canvas.height * w) / canvas.width;
      pdf.addImage(img, "PNG", 0, 0, w, h);
      pdf.save(`lunchbox-parent-sheet.pdf`);
      target.style.display = "none";
    } catch {
      if (exportRef.current) exportRef.current.style.display = "none";
    } finally {
      setDownloading(false);
    }
  };

  const day = plan ? plan[activeDay] : null;

  return (
    <div className="w-full" style={{ background: CREAM }}>
      {/* HERO */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] font-heading font-bold mb-4" style={{ color: GREEN }}>
              Healthy kids. Brighter tomorrows.
            </p>
            <h1 className="font-heading font-black leading-[1.05] tracking-tight mb-5" style={{ fontSize: "clamp(2rem, 4.4vw, 3.2rem)", color: INK }}>
              Smarter lunch boxes.<br />Happier little eaters.
            </h1>
            <p className="font-heading font-light leading-relaxed max-w-md mb-8" style={{ color: MUTED, fontSize: "clamp(15px, 1.3vw, 17px)" }}>
              Select your child's age and nutritional needs to generate a balanced, cute lunchbox idea and a downloadable sheet for home.
            </p>
            <div className="flex flex-wrap gap-4">
              {BADGES.map((b) => {
                const Icon = b.Icon;
                return (
                  <div key={b.label} className="flex items-center gap-2">
                    <span className="flex items-center justify-center rounded-full" style={{ width: 32, height: 32, background: SAGE_BG }}>
                      <Icon size={16} style={{ color: GREEN }} />
                    </span>
                    <span className="text-xs font-heading font-semibold" style={{ color: INK }}>{b.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Bento illustration */}
          <div className="flex items-center justify-center">
            <div className="relative" style={{ maxWidth: 360 }}>
              <div className="rounded-[2rem] p-5 shadow-sm" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                <div className="grid grid-cols-3 gap-2.5">
                  {COMPARTMENTS.slice(0, 5).map((c, i) => (
                    <div key={c.key} className="rounded-2xl p-3 flex flex-col items-center text-center" style={{ background: c.bg, minHeight: i === 0 ? 96 : 72 }}>
                      <span style={{ fontSize: 22 }}>{c.emoji}</span>
                      <span className="text-[9px] uppercase tracking-[0.12em] font-heading font-bold mt-1" style={{ color: c.ink }}>{c.label}</span>
                    </div>
                  ))}
                  <div className="rounded-2xl flex items-center justify-center" style={{ background: COMPARTMENTS[5].bg, minHeight: 72 }}>
                    <span style={{ fontSize: 26 }}>💧</span>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] font-heading font-bold" style={{ background: SAGE_BG, color: GREEN }}>
                    <Sparkles size={12} /> Balanced & cute
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GENERATOR + PREVIEW */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-6">
          {/* Generator (left) */}
          <div className="md:col-span-5 rounded-3xl p-7 md:p-8 h-fit" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
            <h2 className="font-heading font-bold text-xl md:text-2xl mb-6" style={{ color: INK }}>Build your lunch box plan</h2>

            {/* Age segmented control */}
            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-[0.14em] font-heading font-bold mb-2.5" style={{ color: MUTED }}>Child's age</p>
              <div className="flex gap-2">
                {AGE_BANDS.map((a) => {
                  const active = age === a;
                  return (
                    <button key={a} onClick={() => setAge(a)}
                      className="flex-1 py-2.5 rounded-xl text-sm font-heading font-bold transition-all"
                      style={active ? { background: INK, color: "#fff", border: `1px solid ${INK}` } : { background: "#fff", color: INK, border: `1px solid ${BORDER}` }}>
                      {a}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dietary needs */}
            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-[0.14em] font-heading font-bold mb-2.5" style={{ color: MUTED }}>Dietary needs</p>
              <div className="flex flex-wrap gap-2">
                {DIET_NEEDS.map((d) => {
                  const active = diets.includes(d);
                  return (
                    <button key={d} onClick={() => toggle(d)}
                      className="px-3.5 py-1.5 rounded-full text-xs font-heading font-semibold transition-all"
                      style={active ? { background: GREEN, color: "#fff", border: `1px solid ${GREEN}` } : { background: "#fff", color: INK, border: `1px solid ${BORDER}` }}>
                      {d}
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] font-heading font-light mt-2" style={{ color: MUTED }}>All ideas are Halal by default.</p>
            </div>

            {/* Likes & dislikes */}
            <div className="mb-7">
              <p className="text-[11px] uppercase tracking-[0.14em] font-heading font-bold mb-2.5" style={{ color: MUTED }}>Likes & dislikes (optional)</p>
              <textarea
                value={likes}
                onChange={(e) => setLikes(e.target.value)}
                placeholder="E.g. likes carrots, doesn't like tomatoes..."
                rows={2}
                className="w-full rounded-xl px-4 py-3 text-sm font-heading outline-none resize-none"
                style={{ background: SAGE_BG, border: `1px solid ${BORDER}`, color: INK }}
              />
            </div>

            <button
              onClick={generate}
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-60"
              style={{ background: INK }}>
              {loading ? (<><Loader2 size={15} className="animate-spin" /> Generating…</>) : (<>Generate Lunch Box <ArrowRight size={15} /></>)}
            </button>
            <button
              onClick={download}
              disabled={!plan || downloading}
              className="w-full mt-3 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-heading font-bold transition-all hover:opacity-90 disabled:opacity-50"
              style={{ background: "#fff", color: INK, border: `1.5px solid ${INK}` }}>
              {downloading ? <Loader2 size={15} className="animate-spin" /> : <Download size={15} />} Download Parent Sheet
            </button>

            <p className="text-[11px] font-heading font-light mt-5 text-center flex items-center justify-center gap-1.5" style={{ color: MUTED }}>
              <Heart size={11} style={{ color: GREEN }} /> Designed for parents. Backed by nutrition experts.
            </p>
          </div>

          {/* Preview (right) */}
          <div className="md:col-span-7 rounded-3xl p-7 md:p-8" style={{ background: "#fff", border: `1px solid ${BORDER}` }} ref={previewRef}>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <h3 className="font-heading font-bold text-xl" style={{ color: INK }}>Today's lunch box</h3>
              {plan && (
                <div className="flex gap-1.5">
                  {DAYS.map((d, i) => (
                    <button key={d} onClick={() => setActiveDay(i)}
                      className="px-2.5 py-1.5 rounded-lg text-[11px] font-heading font-bold transition-all"
                      style={i === activeDay ? { background: INK, color: "#fff" } : { background: SAGE_BG, color: INK }}>
                      {d.slice(0, 3)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Labels */}
            <div className="flex flex-wrap gap-2 mb-5">
              {diets.map((d) => (
                <span key={d} className="inline-flex items-center rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.12em] font-heading font-bold" style={{ background: SAGE_BG, color: GREEN }}>{d}</span>
              ))}
              <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.12em] font-heading font-bold" style={{ background: SAGE_BG, color: GREEN }}>Age {age}</span>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.12em] font-heading font-bold" style={{ background: SAGE_BG, color: GREEN }}>Balanced</span>
            </div>

            {day ? (
              <div className="grid grid-cols-5 gap-3">
                <div className="col-span-3 row-span-2 rounded-2xl p-4 flex flex-col justify-between" style={{ background: COMPARTMENTS[0].bg, minHeight: 180 }}>
                  <div className="flex items-center gap-1.5">
                    <span style={{ fontSize: 26 }}>{COMPARTMENTS[0].emoji}</span>
                    <span className="text-[10px] uppercase tracking-[0.14em] font-heading font-bold opacity-70" style={{ color: COMPARTMENTS[0].ink }}>Main</span>
                  </div>
                  <div>
                    <p className="font-heading font-bold leading-tight text-lg" style={{ color: COMPARTMENTS[0].ink }}>{day.main}</p>
                    {day.main_desc && <p className="font-heading font-light leading-snug text-sm" style={{ color: COMPARTMENTS[0].ink, opacity: 0.8 }}>{day.main_desc}</p>}
                  </div>
                </div>
                {[
                  { c: COMPARTMENTS[1], item: day.veg, desc: day.veg_desc },
                  { c: COMPARTMENTS[2], item: day.fruit, desc: day.fruit_desc },
                  { c: COMPARTMENTS[3], item: day.snack, desc: day.snack_desc },
                  { c: COMPARTMENTS[4], item: day.treat, desc: null },
                ].map(({ c, item, desc }, i) => (
                  <div key={i} className="col-span-2 rounded-2xl p-3 flex flex-col justify-between" style={{ background: c.bg, minHeight: 86 }}>
                    <div className="flex items-center gap-1.5">
                      <span style={{ fontSize: 18 }}>{c.emoji}</span>
                      <span className="text-[9px] uppercase tracking-[0.14em] font-heading font-bold opacity-70" style={{ color: c.ink }}>{c.label}</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold leading-tight text-sm" style={{ color: c.ink }}>{item}</p>
                      {desc && <p className="font-heading font-light leading-snug text-[11px]" style={{ color: c.ink, opacity: 0.8 }}>{desc}</p>}
                    </div>
                  </div>
                ))}
                {/* Water bottle strip */}
                <div className="col-span-5 rounded-2xl p-4 flex items-center gap-3" style={{ background: COMPARTMENTS[5].bg }}>
                  <span style={{ fontSize: 26 }}>💧</span>
                  <div>
                    <p className="font-heading font-bold text-sm" style={{ color: COMPARTMENTS[5].ink }}>{day.drink}</p>
                    <p className="font-heading font-light text-[11px]" style={{ color: COMPARTMENTS[5].ink, opacity: 0.8 }}>Water keeps me strong!</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl py-16 flex flex-col items-center justify-center text-center" style={{ background: SAGE_BG }}>
                <div className="text-5xl mb-3">🍱</div>
                <p className="font-heading font-bold text-base mb-1" style={{ color: INK }}>Your lunch box awaits</p>
                <p className="text-sm font-heading font-light max-w-xs" style={{ color: MUTED }}>
                  Set your child's age and needs, then generate a balanced bento idea — Monday to Friday.
                </p>
              </div>
            )}

            {/* Printable version box */}
            <div className="mt-6 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between" style={{ background: SAGE_BG }}>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center rounded-full shrink-0" style={{ width: 40, height: 40, background: "#fff" }}>
                  <Printer size={18} style={{ color: INK }} />
                </span>
                <div>
                  <p className="font-heading font-bold text-sm" style={{ color: INK }}>Want a printable version?</p>
                  <p className="text-xs font-heading font-light" style={{ color: MUTED }}>Download the full week's plan to stick on the fridge.</p>
                </div>
              </div>
              <button onClick={download} disabled={!plan || downloading}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-heading font-bold text-white transition-all hover:opacity-90 disabled:opacity-50 shrink-0"
                style={{ background: INK }}>
                {downloading ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />} Download Parent Sheet
              </button>
            </div>
            <p className="text-[11px] font-heading font-light mt-3 text-center" style={{ color: MUTED }}>A4 • Print-friendly • Share with family</p>
          </div>
        </div>
      </section>

      {/* INFO BAND */}
      <section className="py-16 md:py-20" style={{ background: INK }}>
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.24em] font-heading font-bold mb-4" style={{ color: SAGE }}>Why lunch boxes matter</p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 text-white">Healthy choices today. Brighter tomorrows.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="font-heading font-light leading-relaxed text-white/80">
              A well-balanced lunch box fuels focus, energy and growth through the school day. Colour, variety and familiar flavours help children enjoy healthier choices — without the fuss.
            </p>
            <p className="font-heading font-light leading-relaxed text-white/80">
              Small daily habits add up. When good nutrition becomes routine at home and at school, children build a foundation for lifelong health and brighter, more active tomorrows.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM LIFESTYLE HERO */}
      <section className="py-20 md:py-28 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4" style={{ color: INK }}>A healthier tomorrow together.</h2>
          <p className="font-heading font-light leading-relaxed mb-8" style={{ color: MUTED }}>
            Tools, support and trusted information for every step of your family's journey.
          </p>
          <button
            onClick={() => window.location.assign("/schools")}
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-heading font-bold transition-all hover:opacity-90 active:scale-95"
            style={{ background: "transparent", color: INK, border: `1.5px solid ${INK}` }}>
            Explore Family Health <ArrowRight size={15} />
          </button>
        </div>
      </section>

      {/* Hidden full-week export */}
      <div ref={exportRef} style={{ display: "none", padding: 32, background: "#fff", width: 800 }}>
        <p style={{ fontFamily: "Apercu, sans-serif", fontWeight: 800, fontSize: 22, color: INK, marginBottom: 4 }}>Healthy Living — Lunch Box Parent Sheet</p>
        <p style={{ fontFamily: "Apercu, sans-serif", fontSize: 12, color: MUTED, marginBottom: 20 }}>Age {age} · {diets.join(", ") || "No special requirements"} · Halal</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {(plan || FALLBACK).map((d, i) => (
            <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 16, padding: 14 }}>
              <p style={{ fontFamily: "Apercu, sans-serif", fontWeight: 700, fontSize: 13, color: INK, marginBottom: 8 }}>{d.day || DAYS[i]}</p>
              <p style={{ fontSize: 12, color: INK, marginBottom: 2 }}><b>Main:</b> {d.main} — {d.main_desc}</p>
              <p style={{ fontSize: 12, color: INK, marginBottom: 2 }}><b>Veg:</b> {d.veg} — {d.veg_desc}</p>
              <p style={{ fontSize: 12, color: INK, marginBottom: 2 }}><b>Fruit:</b> {d.fruit} — {d.fruit_desc}</p>
              <p style={{ fontSize: 12, color: INK, marginBottom: 2 }}><b>Snack:</b> {d.snack} — {d.snack_desc}</p>
              <p style={{ fontSize: 12, color: INK, marginBottom: 2 }}><b>Treat:</b> {d.treat}</p>
              <p style={{ fontSize: 12, color: INK }}><b>Drink:</b> {d.drink}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}