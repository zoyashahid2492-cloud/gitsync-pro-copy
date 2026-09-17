import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import ClosingSections from "@/components/healthy-living/ClosingSections";

const INK = "#1f3d2a", GREEN = "#1D7945", GREEN_BG = "#E6F2EC", BG_ALT = "#F7F6F2", MUTED = "#6b7a70", BORDER = "#e0e5de";

const ITEMS = [
  { title: "Health Beyond Healthcare", body: "Health outcomes are shaped long before people enter healthcare settings — through the environments where they live, work, learn, and move. Healthy Living focuses on prevention by making healthier choices easier and shaping the conditions of daily life, rather than placing responsibility on individuals alone." },
  { title: "Movement in Everyday Life", body: "Healthy Living is shifting movement beyond just sport by embedding physical activity into daily routines, neighbourhoods, workplaces, schools, and public spaces. The Degayeg initiative has delivered 724 fitness activations across 19 districts, reaching over 11,000 attendees. New integrated fitness infrastructure is being rolled out across 20 priority districts identified through data." },
  { title: "A Healthier Food Environment", body: "Healthy Living is reshaping food environments so healthier choices are more visible and accessible. Key actions include mandatory healthy meals in schools (466+ schools, 455,000+ students), front-of-pack Nutri-Mark labelling, banning unhealthy F&B advertising on out-of-home media, supermarket layout policies, calorie labels on restaurant menus, and mandatory product reformulation targets for the 6 highest-priority food categories." },
  { title: "Cross-Sector Collaboration", body: "Healthy Living brings together 14+ government entities, the private sector, schools, businesses, and communities to deliver 28 active initiatives across infrastructure, programming, regulations, promotion, and medical care — all coordinated under a single cross-sectoral strategy endorsed by Abu Dhabi's Executive Council in November 2025." },
];

const PRINCIPLES = ["Intelligence-Led", "Prevention-First", "System-Enabled", "Measurable Impact"];

export default function OurApproach() {
  const [open, setOpen] = useState(0);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Healthy Living"
        title="Our Approach."
        subtitle="Healthy Living enables healthier lives through everyday choices and conditions — led by the Abu Dhabi Department of Health, guided by data-backed evidence, and built through collaboration across government, partners, and communities."
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div>
            {ITEMS.map((it, i) => (
              <div key={it.title} style={{ borderTop: `1px solid ${BORDER}` }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span className="font-heading font-bold tracking-tight" style={{ fontSize: "clamp(1.2rem,2.5vw,1.6rem)", color: INK }}>{it.title}</span>
                  <ChevronDown
                    size={18}
                    style={{ color: MUTED, transform: open === i ? "rotate(180deg)" : "none", transition: "transform .2s", flexShrink: 0, marginLeft: 16 }}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="pb-8 font-heading font-light leading-relaxed max-w-3xl" style={{ color: MUTED }}>{it.body}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <div style={{ borderTop: `1px solid ${BORDER}` }} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {PRINCIPLES.map((s, i) => (
              <div key={s} className="p-6 rounded-2xl" style={{ background: BG_ALT }}>
                <div className="text-3xl font-heading font-black mb-4" style={{ color: GREEN_BG === GREEN_BG ? "#cdd9c4" : GREEN_BG }}>0{i + 1}</div>
                <div className="font-heading font-bold" style={{ fontSize: "1.05rem", color: INK }}>{s}</div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl mt-12" style={{ background: GREEN_BG }}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-heading font-bold tracking-tight mb-4" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", color: INK }}>
                  Our purpose: to enable longer, healthier, more fulfilling lives.
                </h2>
                <p className="font-heading font-light text-sm leading-relaxed" style={{ color: MUTED }}>
                  Health is a shared responsibility. Healthy Living works to make healthier choices the easy choice for all — embedding prevention and wellbeing into everyday life through evidence-informed policy, partnerships, and community action.
                </p>
              </div>
              <div className="space-y-3">
                <div className="p-5 rounded-xl" style={{ background: "#fff" }}>
                  <div className="text-xs uppercase tracking-[0.12em] font-heading font-bold mb-2" style={{ color: GREEN }}>Healthy Living</div>
                  <div className="text-xs font-heading font-light" style={{ color: MUTED }}>Discover → Learn → Generate → Participate → Collaborate</div>
                </div>
                <div className="p-5 rounded-xl" style={{ background: "#fff" }}>
                  <div className="text-xs uppercase tracking-[0.12em] font-heading font-bold mb-2" style={{ color: MUTED }}>Sahatna</div>
                  <div className="text-xs font-heading font-light" style={{ color: MUTED }}>Personalize → Track → Monitor → Manage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingSections withStats />
      <Footer />
    </div>
  );
}