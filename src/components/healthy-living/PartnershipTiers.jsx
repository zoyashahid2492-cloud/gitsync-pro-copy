import React from "react";
import { Check, ArrowRight } from "lucide-react";

const INK = "#1f3d2a", GREEN = "#1D7945", MUTED = "#6b7a70", BORDER = "#e0e5de", GREEN_BG = "#E6F2EC";

const TIERS = [
  {
    name: "Activation Partner",
    price: "From AED 50,000 / year",
    perks: [
      "Branded presence at 2 community events",
      "Nutri-Mark product eligibility review",
      "Co-branded social content (4 posts/year)",
      "Annual impact report",
    ],
    featured: false,
  },
  {
    name: "Programme Partner",
    price: "From AED 150,000 / year",
    perks: [
      "All Activation benefits",
      "Dedicated initiative co-branding",
      "Employee wellness programme access",
      "Festival of Health sponsorship tier",
      "Quarterly strategy sessions",
    ],
    featured: true,
  },
  {
    name: "Strategic Partner",
    price: "Custom engagement",
    perks: [
      "All Programme benefits",
      "Joint press & media opportunities",
      "Steering committee seat",
      "Custom initiative design",
      "Priority Nutri-Mark certification",
      "Dedicated partnership manager",
    ],
    featured: false,
  },
];

export default function PartnershipTiers() {
  return (
    <section className="py-16 md:py-24" style={{ background: "#F7F6F2" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: GREEN }}>Partnership Tiers</p>
        <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: INK }}>Choose your level of commitment.</h2>
        <p className="font-heading font-light text-sm mb-12 max-w-2xl" style={{ color: MUTED }}>
          All tiers subject to approval. Government entities may qualify for non-commercial partnerships.
        </p>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-7 relative"
              style={{
                background: "#fff",
                border: t.featured ? `2px solid ${GREEN}` : `1px solid ${BORDER}`,
                boxShadow: t.featured ? "0 12px 40px -16px rgba(29,121,69,0.35)" : "none",
              }}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full px-4 py-1 text-[10px] uppercase tracking-[0.14em] font-heading font-bold text-white" style={{ background: GREEN }}>
                  Most Popular
                </span>
              )}
              <h3 className="font-heading font-bold text-lg mb-1" style={{ color: INK }}>{t.name}</h3>
              <p className="font-heading font-bold text-sm mb-6" style={{ color: GREEN }}>{t.price}</p>
              <ul className="space-y-3 mb-7">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <span className="flex items-center justify-center rounded-full shrink-0 mt-0.5" style={{ width: 18, height: 18, background: GREEN_BG }}>
                      <Check size={11} style={{ color: GREEN }} />
                    </span>
                    <span className="font-heading font-light text-sm leading-snug" style={{ color: INK }}>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#partner-form"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-heading font-bold transition-all hover:opacity-90 active:scale-95"
                style={t.featured ? { background: GREEN, color: "#fff" } : { background: GREEN_BG, color: GREEN }}
              >
                Apply Now <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}