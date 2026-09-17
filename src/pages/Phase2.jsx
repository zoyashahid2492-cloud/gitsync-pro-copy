import React from "react";
import { Link } from "react-router-dom";
import { Lock, ArrowRight } from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";

const TOOLS = [
  "Wellness Tools",
  "Meal Plan Generator",
  "Workout Planner",
  "Wellness Check",
  "Rewards",
  "Communities",
  "Food & Label Scanner",
];

export default function Phase2() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Coming Soon"
        title="Coming in Phase 2."
        subtitle="A richer set of personal wellness tools is on the way — interactive planners, trackers and community features designed to help you turn healthier choices into everyday habits."
      />

      <section className="py-16 md:py-24" style={{ background: "#F7F6F2" }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.16em] font-heading font-bold mb-8"
            style={{ background: "#E6F2EC", color: "#1D7945" }}
          >
            <Lock size={12} /> Phase 2 — in development
          </span>
          <p className="font-heading font-light leading-relaxed mb-10" style={{ color: "#6b7a70" }}>
            These features are currently being built and will be available in the next phase of Healthy
            Living. In the meantime, explore what's live today.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
            {TOOLS.map((t) => (
              <div
                key={t}
                className="rounded-xl px-4 py-4 text-sm font-heading font-medium flex items-center gap-2 justify-center"
                style={{ background: "#fff", border: "1px solid #e0e5de", color: "#8e968f" }}
              >
                <Lock size={12} style={{ color: "#b9c2bc" }} /> {t}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/wellness-lab"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: "#1D7945" }}
            >
              Explore the Wellness Lab <ArrowRight size={14} />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-bold transition-all hover:opacity-90 active:scale-95"
              style={{ background: "#fff", color: "#1f3d2a", border: "1px solid #e0e5de" }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}