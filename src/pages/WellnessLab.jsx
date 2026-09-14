import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Heart, ArrowRight } from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import WellnessCheckIn from "@/components/healthy-living/WellnessCheckIn";

const FEATURES = [
  { Icon: Sparkles, title: "AI-personalised", desc: "A plan built around how you feel today — not a one-size-fits-all routine." },
  { Icon: Heart, title: "Four pillars", desc: "Mindfulness, nutrition, hydration and movement in one simple check-in." },
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

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((f) => {
            const Icon = f.Icon;
            return (
              <div
                key={f.title}
                className="flex items-start gap-4 rounded-2xl p-6"
                style={{ background: "#fff", border: "1px solid #e0e5de" }}
              >
                <span
                  className="flex items-center justify-center rounded-full shrink-0"
                  style={{ width: 48, height: 48, background: "#D9E4D9" }}
                >
                  <Icon size={22} strokeWidth={1.5} style={{ color: "#5e7062" }} />
                </span>
                <div>
                  <h3 className="font-heading font-bold text-lg" style={{ color: "#1f3d2a" }}>{f.title}</h3>
                  <p className="font-heading font-light text-sm leading-relaxed mt-1" style={{ color: "#6b7a70" }}>{f.desc}</p>
                </div>
              </div>
            );
          })}
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

      <Footer />
    </div>
  );
}