import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import ClosingSections from "@/components/healthy-living/ClosingSections";

const INK = "#1f3d2a", GREEN = "#1D7945", GREEN_BG = "#E6F2EC", BG_ALT = "#F7F6F2", MUTED = "#6b7a70", BORDER = "#e0e5de";

const NEWS = [
  { id: 1, title: "Calorie Labels Mandatory on All Abu Dhabi Restaurant Menus from September 2026", date: "18 Aug 2026", tag: "Policy" },
  { id: 2, title: "Abu Dhabi Premium Food Label Launched for Fresh Poultry", date: "15 Aug 2026", tag: "Policy" },
  { id: 3, title: "WTO Notification Shared for Sugar, Sodium & Fat Limits on Key F&B Categories", date: "28 Apr 2026", tag: "Policy" },
  { id: 4, title: "Healthy Food Subsidy Pilot Launched with 1,200 Emirati Women", date: "10 Mar 2026", tag: "Community" },
  { id: 5, title: "Festival of Health Draws ~50,000 Visitors Across Abu Dhabi, Al Ain & Al Dhafra", date: "18 Dec 2025", tag: "Events" },
  { id: 6, title: "Degayeg Initiative: 724 Fitness Activations Across 19 Districts", date: "5 Oct 2025", tag: "Community" },
];

const CATS = ["All", "Policy", "Events", "Research", "Community"];

function tagColor(tag) {
  return tag === "Policy" ? { bg: "#eef3e8", fg: INK } : tag === "Events" ? { bg: GREEN_BG, fg: GREEN } : { bg: "#FDF1EC", fg: "#cb7d5d" };
}

export default function LatestUpdates() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? NEWS : NEWS.filter((n) => n.tag === filter);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Updates"
        title="Latest Updates."
        subtitle="News, announcements and stories from across the Healthy Living programme."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex gap-2 mb-10 flex-wrap">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className="text-xs uppercase tracking-[0.1em] px-4 py-2 rounded-full font-heading font-bold transition-all"
                style={{ background: filter === c ? GREEN : BG_ALT, color: filter === c ? "#fff" : MUTED }}
              >
                {c}
              </button>
            ))}
          </div>

          <AnimatePresence mode="popLayout">
            {filtered.map((n) => {
              const tc = tagColor(n.tag);
              return (
                <motion.div
                  key={n.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-4 md:gap-6 py-5 cursor-pointer group"
                  style={{ borderBottom: `1px solid ${BORDER}` }}
                >
                  <span className="inline-block text-[10px] uppercase tracking-[0.12em] font-heading font-bold px-2.5 py-1 rounded-full flex-shrink-0" style={{ background: tc.bg, color: tc.fg }}>{n.tag}</span>
                  <span className="flex-1 text-sm md:text-base font-heading font-semibold" style={{ color: INK }}>{n.title}</span>
                  <span className="text-xs flex-shrink-0 font-heading font-light" style={{ color: MUTED }}>{n.date}</span>
                  <ArrowRight size={14} style={{ color: MUTED, flexShrink: 0 }} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      <ClosingSections withStats={false} />
      <Footer />
    </div>
  );
}