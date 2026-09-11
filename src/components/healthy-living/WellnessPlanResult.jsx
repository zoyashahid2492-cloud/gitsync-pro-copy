import React from "react";

const INK = "#1f3d2a";
const ICON_BG = "#d9e4d9";
const ICON_FG = "#5e7062";
const FOCUS_BG = "#d8e8d8";
const CARD_BORDER = "#e0e5de";
const HELPER = "#8c9d94";

export default function WellnessPlanResult({ plan, onAskAi }) {
  const goals = plan?.goals || [];
  const focus = plan?.focus || "Balance";
  const tagline = plan?.tagline || "Maintain momentum and feel your best today.";

  return (
    <div>
      {/* Focus pill */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span
          className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.14em] font-heading font-bold"
          style={{ background: FOCUS_BG, color: INK }}
        >
          Today's Focus: {focus}
        </span>
        <span className="text-[13px] font-heading font-light" style={{ color: HELPER }}>
          {tagline}
        </span>
      </div>

      {/* Goal grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {goals.map((g, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-2xl p-4"
            style={{ border: `1px solid ${CARD_BORDER}`, background: "#fff" }}
          >
            <span
              className="flex items-center justify-center rounded-full shrink-0 font-heading font-bold text-sm"
              style={{ width: 40, height: 40, background: ICON_BG, color: ICON_FG }}
            >
              {(g.letter || g.category?.[0] || "•").toUpperCase()}
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-[0.14em] font-heading font-bold" style={{ color: HELPER }}>
                {g.category}
              </p>
              <p className="text-sm font-heading font-light leading-snug mt-0.5" style={{ color: INK }}>
                {g.action}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6 pt-5 border-t border-[#ECEEEC] flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            {goals.map((_, i) => (
              <span
                key={i}
                className="block rounded-full"
                style={{ width: 8, height: 8, background: "#c6ccc7" }}
              />
            ))}
          </div>
          <span className="text-[12px] font-heading font-light" style={{ color: HELPER }}>
            Today: 0 of {goals.length} goals completed
          </span>
        </div>
        <button
          onClick={onAskAi}
          className="text-[12px] font-heading font-medium hover:opacity-70 transition-opacity"
          style={{ color: INK }}
        >
          Ask AI About My Plan ↗
        </button>
      </div>
    </div>
  );
}