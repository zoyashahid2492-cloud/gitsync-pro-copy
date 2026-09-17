import React from "react";
import { ArrowRight } from "lucide-react";

const INK = "#1f3d2a", GREEN = "#1D7945", MUTED = "#6b7a70", BORDER = "#e0e5de";

const SECURED = [
  "Department of Health – Abu Dhabi · Founding",
  "Abu Dhabi Sports Council · Founding",
  "Cleveland Clinic Abu Dhabi · Strategic",
  "Mubadala Health · Strategic",
  "Carrefour UAE · Programme",
];

export default function WhoIsNext() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: GREEN }}>Who Is Next?</p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4" style={{ color: INK }}>
              Could your company be shaping the healthiest city?
            </h2>
            <p className="font-heading font-light leading-relaxed mb-6" style={{ color: MUTED }}>
              We are actively expanding our partner network — looking for organisations committed to meaningful public health impact across Abu Dhabi.
            </p>
            <p className="text-sm font-heading font-medium mb-8" style={{ color: INK }}>
              Founding partners secured. Strategic and Programme tiers currently open.
            </p>
            <a href="#partner-form" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95" style={{ background: GREEN }}>
              Submit Partnership Application <ArrowRight size={15} />
            </a>
          </div>

          <div className="rounded-2xl p-6" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
            <div className="space-y-2.5">
              {SECURED.map((s) => (
                <div key={s} className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl" style={{ background: "#F7F6F2" }}>
                  <span className="text-sm font-heading font-medium" style={{ color: INK }}>{s}</span>
                  <span className="text-[10px] uppercase tracking-[0.14em] font-heading font-bold px-2 py-1 rounded-full" style={{ background: "#E6F2EC", color: GREEN }}>
                    Secured
                  </span>
                </div>
              ))}
              {["Open", "Open", "Open"].map((s, i) => (
                <div key={i} className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl" style={{ background: "#fff", border: `1px dashed ${GREEN}` }}>
                  <span className="text-sm font-heading font-medium" style={{ color: MUTED }}>Available partner slot</span>
                  <span className="text-[10px] uppercase tracking-[0.14em] font-heading font-bold px-2 py-1 rounded-full" style={{ background: GREEN, color: "#fff" }}>
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}