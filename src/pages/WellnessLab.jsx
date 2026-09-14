import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Dumbbell, Brain, Apple, Moon } from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import WellnessCheckIn from "@/components/healthy-living/WellnessCheckIn";
import ClosingSections from "@/components/healthy-living/ClosingSections";

const PILLARS = [
  { Icon: Dumbbell, title: "Physical Activity", desc: "When movement is part of daily routines, it supports better health, higher energy and an improved quality of life." },
  { Icon: Brain, title: "Mental Well-being", desc: "Prioritising mental well-being strengthens overall health — shaped by how we cope, connect and manage stress." },
  { Icon: Apple, title: "Nutrition", desc: "Healthier eating becomes easier when nutritious food is affordable, available and clearly understood." },
  { Icon: Moon, title: "Sleep", desc: "Good sleep supports physical health, focus and resilience, helping other healthy routines stay consistent." },
];

export default function WellnessLab() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Wellness Lab"
        title="Your daily wellness lab."
        subtitle="Answer three quick questions about how you're feeling today and get a personalised plan across mindfulness, nutrition, hydration and movement — powered by AI."
      />

      <section className="py-16 md:py-20" style={{ background: "#F7F6F2" }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <WellnessCheckIn onAskAi={() => navigate("/ask-ai")} />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: "#1D7945" }}>
            One integrated approach
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: "#1f3d2a" }}>
            Built on four pillars
          </h2>
          <p className="font-heading font-light max-w-3xl leading-relaxed mb-12" style={{ color: "#6b7a70" }}>
            Your plan draws on the four interconnected pillars of healthy living — addressed together, not in isolation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PILLARS.map((p) => {
              const Icon = p.Icon;
              return (
                <div key={p.title} className="rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #e0e5de" }}>
                  <span className="flex items-center justify-center rounded-full mb-4" style={{ width: 48, height: 48, background: "#D9E4D9" }}>
                    <Icon size={22} strokeWidth={1.5} style={{ color: "#5e7062" }} />
                  </span>
                  <h3 className="font-heading font-bold text-base mb-2" style={{ color: "#1f3d2a" }}>{p.title}</h3>
                  <p className="font-heading font-light text-sm leading-relaxed" style={{ color: "#6b7a70" }}>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: "#1f3d2a" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="font-heading font-light text-white/85 mb-5">Want to go deeper with a conversation?</p>
          <button
            onClick={() => navigate("/ask-ai")}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-bold transition-all hover:opacity-90 active:scale-95"
            style={{ background: "#B0D5B5", color: "#1A2A1A" }}
          >
            Ask AI <ArrowRight size={14} />
          </button>
        </div>
      </section>

      <ClosingSections />
      <Footer />
    </div>
  );
}