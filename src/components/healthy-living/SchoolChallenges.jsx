import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Trophy } from "lucide-react";

const INK = "#1f3d2a", MUTED = "#6b7a70", GREEN = "#1D7945", BORDER = "#e0e5de";

const CHALLENGES = [
  { cat: "Movement", name: "30-Day Active School Challenge", status: "Active", days: "30 days", participants: "12,400", schools: "42" },
  { cat: "Nutrition", name: "Hydration Hero Challenge", status: "Active", days: "14 days", participants: "8,200", schools: "31" },
  { cat: "Movement", name: "Walk to School Week", status: "Upcoming", days: "5 days", participants: null, schools: null },
  { cat: "Nutrition", name: "Sugar-Smart Classroom", status: "Upcoming", days: "21 days", participants: null, schools: null },
  { cat: "Movement", name: "Spring Fitness Cup", status: "Completed", days: "4 weeks", participants: "15,600", schools: "58" },
  { cat: "Nutrition", name: "Veggie Variety Month", status: "Completed", days: "30 days", participants: "9,800", schools: "36" },
];

const FILTERS = ["All", "Active", "Upcoming", "Completed"];

const statusStyle = (s) => {
  if (s === "Active") return { bg: "#E6F2EC", fg: "#1D7945" };
  if (s === "Upcoming") return { bg: "#FBF3E8", fg: "#b8743a" };
  return { bg: "#EFEFEC", fg: "#6b7a70" };
};

export default function SchoolChallenges() {
  const [filter, setFilter] = useState("All");
  const [joined, setJoined] = useState({});
  const list = filter === "All" ? CHALLENGES : CHALLENGES.filter((c) => c.status === filter);

  return (
    <section className="py-16 md:py-24" style={{ background: "#F7F6F2" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: GREEN }}>
          School Challenges
        </p>
        <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: INK }}>
          Join a school challenge
        </h2>
        <p className="font-heading font-light max-w-3xl leading-relaxed mb-8" style={{ color: MUTED }}>
          Friendly, goal-driven challenges that get students and families moving and eating well together.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-4 py-2 rounded-full text-xs font-heading font-semibold transition-all"
              style={
                filter === f
                  ? { background: "#1f3d2a", color: "#fff", border: "1px solid #1f3d2a" }
                  : { background: "#fff", color: INK, border: `1px solid ${BORDER}` }
              }
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {list.map((c) => {
            const st = statusStyle(c.status);
            const isJoined = joined[c.name];
            const isDone = c.status === "Completed";
            return (
              <div key={c.name} className="rounded-2xl p-6 flex flex-col" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] uppercase tracking-[0.14em] font-heading font-bold" style={{ color: GREEN }}>
                    {c.cat}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-heading font-semibold" style={{ background: st.bg, color: st.fg }}>
                    {c.status}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg mb-1" style={{ color: INK }}>{c.name}</h3>
                <p className="text-xs font-heading font-light mb-4" style={{ color: MUTED }}>{c.days}</p>
                {(c.participants || c.schools) && (
                  <div className="flex gap-6 mb-5">
                    {c.participants && (
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.12em] font-heading font-medium" style={{ color: MUTED }}>Participants</p>
                        <p className="font-heading font-bold text-base" style={{ color: INK }}>{c.participants}</p>
                      </div>
                    )}
                    {c.schools && (
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.12em] font-heading font-medium" style={{ color: MUTED }}>Schools</p>
                        <p className="font-heading font-bold text-base" style={{ color: INK }}>{c.schools}</p>
                      </div>
                    )}
                  </div>
                )}
                <button
                  onClick={() => !isDone && setJoined((j) => ({ ...j, [c.name]: true }))}
                  disabled={isDone || isJoined}
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-heading font-bold transition-all active:scale-95 disabled:opacity-80"
                  style={
                    isDone
                      ? { background: "#EFEFEC", color: MUTED }
                      : isJoined
                        ? { background: "#E6F2EC", color: GREEN }
                        : { background: "#1f3d2a", color: "#fff" }
                  }
                >
                  {isDone ? (<><Trophy size={14} /> View Results</>)
                    : isJoined ? (<><CheckCircle2 size={14} /> Joined</>)
                    : (<>Join Challenge <ArrowRight size={14} /></>)}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}