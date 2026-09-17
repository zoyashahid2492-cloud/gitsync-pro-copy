import React, { useState, useRef } from "react";
import { Download, Loader2, Heart, Leaf, Smile, ThumbsUp, ArrowRight, Printer, Check, Sandwich, Carrot, Apple, Grape, Cookie, Droplet, Utensils } from "lucide-react";
import { base44 } from "@/api/base44Client";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const FOREST = "#1D3627", SAGE = "#A0B9A7", SAGE_DEEP = "#7d9a86";
const OFFWHITE = "#FDFDFB", LIGHTSAGE = "#EAF1EB", INK = "#1D3627", MUTED = "#6b7a70", BORDER = "#E3E9E4";

const BENTO_PHOTO =
  "https://media.base44.com/images/public/6aa3a64fa8d590a56698abe0/8a75a06c1_generated_image.png";

const AGE_BANDS = ["3-5", "6-8", "9-12", "13+"];
const DIET_NEEDS = ["Nut-free", "Dairy-free", "Gluten-free", "Vegetarian", "No sesame", "Low sugar"];
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

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

/* Hand-drawn annotation arrow — a wobbly curved line with an arrowhead, rotated per corner. */
function ScribbleArrow({ rotate = 0, color = FOREST }) {
  return (
    <svg
      width="48"
      height="30"
      viewBox="0 0 48 30"
      fill="none"
      style={{ transform: `rotate(${rotate}deg)`, display: "block" }}
    >
      <path
        d="M3 25 C 12 7, 30 5, 43 9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M43 9 L 35 6 M43 9 L 40 17"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function PhotoAnnotation({ label, pos, rotate }) {
  return (
    <div className="absolute" style={pos}>
      <p
        className="font-hand leading-none"
        style={{ fontSize: 21, color: INK, textShadow: "0 1px 0 rgba(253,253,251,0.9)" }}
      >
        {label}
      </p>
      <ScribbleArrow rotate={rotate} />
    </div>
  );
}

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
        prompt: `You are a children's school lunchbox nutritionist for Abu Dhabi's Healthy Living programme. Generate a full 5-day (Monday to Friday) balanced school lunchbox plan for a child aged ${age}. All meals are Halal by default. Dietary requirements: ${diets.join(", ") || "none"}.\n\nIMPORTANT — personal preferences (MUST follow strictly):\n${likes.trim() ? `- The child LIKES or wants: ${likes.trim()}. You MUST feature these liked ingredients/flavours across the week — include them in main meals, snacks, or sides on most days.\n- If the child dislikes something, NEVER include that ingredient in any compartment. Read the dislikes carefully and exclude them entirely.` : "- No specific likes or dislikes given; use a balanced kid-friendly variety."}\n\nFor each day return 6 bento compartments: main (name + short desc), veg (name + short desc), fruit (name + short desc), snack (name + short desc), drink (name), treat (name). Keep portions kid-friendly, colourful, balanced, and varied across the week. Make food names cute (e.g. "cucumber stars"). Descriptions are one short phrase.`,
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

  const meals = day
    ? [
        { Icon: Sandwich, cat: "Main", name: day.main, desc: day.main_desc },
        { Icon: Carrot, cat: "Veg", name: day.veg, desc: day.veg_desc },
        { Icon: Apple, cat: "Fruit", name: day.fruit, desc: day.fruit_desc },
        { Icon: Grape, cat: "Snack", name: day.snack, desc: day.snack_desc },
        { Icon: Cookie, cat: "Treat", name: day.treat, desc: null },
        { Icon: Droplet, cat: "Drink", name: day.drink, desc: "Water keeps me strong!" },
      ]
    : [];

  return (
    <div className="w-full" style={{ background: OFFWHITE }}>
      {/* HERO */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] font-heading font-bold mb-4" style={{ color: SAGE_DEEP }}>
              Healthy kids. Brighter tomorrows.
            </p>
            <h1 className="font-heading font-black leading-[1.05] tracking-tight mb-5" style={{ fontSize: "clamp(2rem, 4.4vw, 3.2rem)", color: INK }}>
              Smarter lunch boxes.<br />Happier little eaters.
            </h1>
            <p className="font-heading font-light leading-relaxed max-w-md mb-8" style={{ color: MUTED, fontSize: "clamp(15px, 1.3vw, 17px)" }}>
              Select your child's age and nutritional needs to generate a balanced, cute lunchbox idea and a downloadable sheet for home.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {BADGES.map((b) => {
                const Icon = b.Icon;
                return (
                  <span
                    key={b.label}
                    className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.14em] font-heading font-bold"
                    style={{ border: `1px solid ${SAGE}`, color: INK, background: OFFWHITE }}
                  >
                    <Icon size={12} strokeWidth={1.7} style={{ color: SAGE_DEEP }} />
                    {b.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Annotated bento photo */}
          <div className="flex items-center justify-center">
            <div className="relative w-full" style={{ maxWidth: 420 }}>
              <div className="rounded-[2rem] p-3 shadow-sm" style={{ background: OFFWHITE, border: `1px solid ${BORDER}` }}>
                <div className="relative rounded-[1.4rem] overflow-hidden">
                  <img src={BENTO_PHOTO} alt="A balanced children's bento lunch box" className="w-full block" />
                  <PhotoAnnotation label="wholegrain sandwich" pos={{ top: "6%", left: "4%" }} rotate={42} />
                  <PhotoAnnotation label="cucumber stars" pos={{ top: "8%", right: "4%" }} rotate={138} />
                  <PhotoAnnotation label="fresh apple" pos={{ bottom: "10%", left: "5%" }} rotate={-44} />
                  <PhotoAnnotation label="water" pos={{ bottom: "12%", right: "6%" }} rotate={-140} />
                </div>
                <p className="font-hand text-center mt-3 mb-1" style={{ fontSize: 24, color: INK }}>
                  a balanced bento, made with love
                </p>
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
                      style={active ? { background: FOREST, color: "#fff", border: `1px solid ${FOREST}` } : { background: "#fff", color: INK, border: `1px solid ${BORDER}` }}>
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
                      style={active ? { background: FOREST, color: "#fff", border: `1px solid ${FOREST}` } : { background: "#fff", color: INK, border: `1px solid ${BORDER}` }}>
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
                style={{ background: LIGHTSAGE, border: `1px solid ${BORDER}`, color: INK }}
              />
            </div>

            <button
              onClick={generate}
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-60"
              style={{ background: FOREST }}>
              {loading ? (<><Loader2 size={15} className="animate-spin" /> Generating…</>) : (<>Generate Lunch Box <ArrowRight size={15} /></>)}
            </button>
            <button
              onClick={download}
              disabled={!plan || downloading}
              className="w-full mt-3 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-heading font-bold transition-all hover:opacity-90 disabled:opacity-50"
              style={{ background: "#fff", color: INK, border: `1.5px solid ${FOREST}` }}>
              {downloading ? <Loader2 size={15} className="animate-spin" /> : <Download size={15} />} Download Parent Sheet
            </button>

            <p className="text-[11px] font-heading font-light mt-5 text-center flex items-center justify-center gap-1.5" style={{ color: MUTED }}>
              <Heart size={11} style={{ color: SAGE_DEEP }} /> Designed for parents. Backed by nutrition experts.
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
                      style={i === activeDay ? { background: FOREST, color: "#fff" } : { background: LIGHTSAGE, color: INK }}>
                      {d.slice(0, 3)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Status badges — thin-bordered pills with small line icons */}
            <div className="flex flex-wrap gap-2 mb-5">
              {diets.map((d) => (
                <span key={d} className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.14em] font-heading font-bold"
                  style={{ border: `1px solid ${SAGE}`, color: INK, background: OFFWHITE }}>
                  <Leaf size={11} strokeWidth={1.7} style={{ color: SAGE_DEEP }} /> {d}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.14em] font-heading font-bold"
                style={{ border: `1px solid ${SAGE}`, color: INK, background: OFFWHITE }}>
                Age {age}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.14em] font-heading font-bold"
                style={{ border: `1px solid ${SAGE}`, color: INK, background: OFFWHITE }}>
                <Check size={11} strokeWidth={1.7} style={{ color: SAGE_DEEP }} /> Balanced
              </span>
            </div>

            {day ? (
              <>
                {/* Bento photo header with handwritten caption */}
                <div className="relative rounded-2xl overflow-hidden mb-5">
                  <img src={BENTO_PHOTO} alt="Today's bento lunch box" className="w-full block" style={{ maxHeight: 240, objectFit: "cover", objectPosition: "center" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(29,54,39,0.55), rgba(29,54,39,0) 55%)" }} />
                  <p className="absolute bottom-3 left-4 font-hand leading-none" style={{ fontSize: 26, color: "#fff" }}>
                    {day.day}'s bento
                  </p>
                </div>

                {/* Editorial meal list with handwritten names + small line icons */}
                <div className="divide-y" style={{ borderColor: BORDER }}>
                  {meals.map(({ Icon, cat, name, desc }, i) => (
                    <div key={i} className="flex items-start gap-3.5 py-3.5">
                      <span className="flex items-center justify-center rounded-xl shrink-0" style={{ width: 40, height: 40, background: LIGHTSAGE }}>
                        <Icon size={18} strokeWidth={1.6} style={{ color: SAGE_DEEP }} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[9px] uppercase tracking-[0.18em] font-heading font-bold" style={{ color: SAGE_DEEP }}>{cat}</p>
                        <p className="font-hand leading-tight" style={{ fontSize: 23, color: INK }}>{name}</p>
                        {desc && <p className="font-heading font-light text-xs leading-snug" style={{ color: MUTED }}>{desc}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="rounded-2xl py-16 flex flex-col items-center justify-center text-center" style={{ background: LIGHTSAGE }}>
                <span className="flex items-center justify-center rounded-full mb-4" style={{ width: 64, height: 64, background: "#fff", border: `1px solid ${SAGE}` }}>
                  <Utensils size={26} strokeWidth={1.5} style={{ color: SAGE_DEEP }} />
                </span>
                <p className="font-heading font-bold text-base mb-1" style={{ color: INK }}>Your lunch box awaits</p>
                <p className="text-sm font-heading font-light max-w-xs" style={{ color: MUTED }}>
                  Set your child's age and needs, then generate a balanced bento idea — Monday to Friday.
                </p>
              </div>
            )}

            {/* Printable version box */}
            <div className="mt-6 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between" style={{ background: LIGHTSAGE }}>
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
                style={{ background: FOREST }}>
                {downloading ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />} Download Parent Sheet
              </button>
            </div>
            <p className="text-[11px] font-heading font-light mt-3 text-center" style={{ color: MUTED }}>A4 • Print-friendly • Share with family</p>
          </div>
        </div>
      </section>

      {/* INFO BAND */}
      <section className="py-16 md:py-20" style={{ background: FOREST }}>
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
            style={{ background: "transparent", color: INK, border: `1.5px solid ${FOREST}` }}>
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