import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FlaskConical, Calendar, Send } from "lucide-react";

const INK = "#1f3d2a", GREEN = "#1D7945", GREEN_BG = "#E6F2EC", BG_ALT = "#F7F6F2", MUTED = "#6b7a70", BORDER = "#e0e5de";

const EXPERIMENTS = [
  { title: "No screens after 9 PM", status: "Active", desc: "7-day sleep improvement experiment." },
  { title: "Add a vegetable to lunch", status: "Suggested", desc: "Try for 5 days and notice energy." },
  { title: "Morning sunlight 10 min", status: "Completed", desc: "Done · reported better focus (+12%)." },
];

const COMING_UP = [
  { day: "Today", title: "Festival of Health Walk", where: "Umm Al Emarat Park · 5:30 PM" },
  { day: "Tomorrow", title: "Family Yoga", where: "Corniche · 6:30 AM" },
  { day: "Saturday", title: "Cycling Mornings", where: "Al Hudayriat · 7:00 AM" },
];

const CHIPS = ["How do I sleep better?", "Easy high-protein snacks", "Build a 20-minute workout", "Manage work stress"];

export default function WellnessExperiments() {
  const navigate = useNavigate();
  const [ask, setAsk] = useState("");

  return (
    <>
      <section className="py-16 md:py-24" style={{ background: BG_ALT }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: GREEN }}>Wellness Experiments</p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8" style={{ color: INK }}>Try a small experiment, see what sticks</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {EXPERIMENTS.map((e) => {
              const color = e.status === "Active" ? GREEN : e.status === "Suggested" ? "#cb7d5d" : MUTED;
              return (
                <div key={e.title} className="rounded-2xl p-6" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] font-heading font-bold px-2.5 py-1 rounded-full mb-4" style={{ background: BG_ALT, color }}>
                    <FlaskConical size={11} /> {e.status}
                  </span>
                  <h3 className="font-heading font-bold text-base mb-1.5" style={{ color: INK }}>{e.title}</h3>
                  <p className="font-heading font-light text-sm" style={{ color: MUTED }}>{e.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: GREEN }}>Coming Up</p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8" style={{ color: INK }}>Your wellness week ahead</h2>
          <div className="space-y-3">
            {COMING_UP.map((c) => (
              <div key={c.title} className="flex items-center gap-4 p-5 rounded-xl" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                <span className="flex items-center justify-center rounded-full shrink-0" style={{ width: 44, height: 44, background: GREEN_BG }}>
                  <Calendar size={20} style={{ color: GREEN }} />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-heading font-semibold" style={{ color: INK }}>{c.title}</p>
                  <p className="text-xs font-heading font-light" style={{ color: MUTED }}>{c.where}</p>
                </div>
                <span className="text-[10px] uppercase tracking-[0.14em] font-heading font-bold px-3 py-1.5 rounded-full" style={{ background: GREEN_BG, color: GREEN }}>{c.day}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "#1f3d2a" }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: "#82D1A3" }}>Ask Your Wellness Coach</p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-6">Ask anything about your wellness</h2>
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              value={ask}
              onChange={(e) => setAsk(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") navigate("/ai"); }}
              placeholder="Ask about sleep, nutrition, movement…"
              className="flex-1 rounded-full px-5 py-3 text-sm font-heading outline-none"
              style={{ background: "#fff", color: INK }}
            />
            <button
              onClick={() => navigate("/ai")}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-bold transition-all hover:opacity-90"
              style={{ background: "#B0D5B5", color: "#1A2A1A" }}
            >
              <Send size={14} /> Ask
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {CHIPS.map((c) => (
              <button
                key={c}
                onClick={() => navigate("/ai")}
                className="text-xs px-3.5 py-2 rounded-full font-heading font-medium text-white/85 transition-all hover:bg-white/10"
                style={{ border: "1px solid #ffffff33" }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}