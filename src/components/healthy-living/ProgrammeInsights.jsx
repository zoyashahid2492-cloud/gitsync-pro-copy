import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const INK = "#1f3d2a", MUTED = "#6b7a70", GREEN = "#1D7945", BORDER = "#e0e5de";

const GROUPS = [
  { label: "Students", reach: "455,000+ students reached", rows: [
    { k: "Programme awareness", v: "92%" },
    { k: "Active participants", v: "78%" },
    { k: "Reported behaviour change", v: "64%" },
    { k: "Daily physical activity (60 min+)", v: "57%" },
  ]},
  { label: "Families", reach: "180,000+ families engaged", rows: [
    { k: "Programme awareness", v: "84%" },
    { k: "Active participants", v: "66%" },
    { k: "Reported behaviour change", v: "59%" },
    { k: "Daily physical activity (60 min+)", v: "49%" },
  ]},
  { label: "Schools", reach: "466 schools onboarded", rows: [
    { k: "Programme awareness", v: "98%" },
    { k: "Active participants", v: "91%" },
    { k: "Reported behaviour change", v: "72%" },
    { k: "Daily physical activity (60 min+)", v: "63%" },
  ]},
];

const TRENDS = [
  { label: "Fruit & veg consumption", delta: "+18%", up: true },
  { label: "Screen time", delta: "-12%", up: false },
  { label: "Sport participation", delta: "+24%", up: true },
  { label: "Water intake", delta: "+31%", up: true },
];

function Bar({ value }) {
  const pct = parseInt(value, 10);
  return (
    <div className="h-1.5 rounded-full flex-1" style={{ background: "#EFEFEC" }}>
      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: GREEN }} />
    </div>
  );
}

export default function ProgrammeInsights() {
  return (
    <section className="py-16 md:py-24" style={{ background: "#F7F6F2" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: GREEN }}>
          Programme Insights
        </p>
        <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: INK }}>
          How the programme is performing
        </h2>
        <p className="font-heading font-light max-w-3xl leading-relaxed mb-12" style={{ color: MUTED }}>
          Tracking participation, awareness and behaviour change across students, families and schools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {GROUPS.map((g) => (
            <div key={g.label} className="rounded-2xl p-6" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
              <h3 className="font-heading font-bold text-lg mb-1" style={{ color: INK }}>{g.label}</h3>
              <p className="text-xs font-heading font-light mb-5" style={{ color: MUTED }}>{g.reach}</p>
              <div className="space-y-3.5">
                {g.rows.map((r) => (
                  <div key={r.k}>
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-[11px] font-heading font-light" style={{ color: MUTED }}>{r.k}</p>
                      <p className="text-xs font-heading font-bold" style={{ color: INK }}>{r.v}</p>
                    </div>
                    <Bar value={r.v} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-7" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
          <h3 className="font-heading font-bold text-lg mb-1" style={{ color: INK }}>Year-on-Year Trends</h3>
          <p className="text-xs font-heading font-light mb-6" style={{ color: MUTED }}>Change in healthy behaviours over the past year.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {TRENDS.map((t) => (
              <div key={t.label} className="p-4 rounded-xl" style={{ background: "#F7F6F2" }}>
                <div className="flex items-center gap-1.5 mb-2" style={{ color: t.up ? GREEN : "#c0563a" }}>
                  {t.up ? <TrendingUp size={15} /> : <TrendingDown size={15} />}
                  <span className="font-heading font-bold text-base">{t.delta}</span>
                </div>
                <p className="text-xs font-heading font-light leading-snug" style={{ color: MUTED }}>{t.label}</p>
              </div>
            ))}
          </div>
          <p className="text-[11px] font-heading font-light mt-5" style={{ color: "#9aa39c" }}>
            Figures are illustrative sample data.
          </p>
        </div>
      </div>
    </section>
  );
}