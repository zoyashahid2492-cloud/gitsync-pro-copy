import React from "react";
import { BarChart3, Brain, Globe, FlaskConical, FileText, Target } from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import CardGrid from "@/components/healthy-living/CardGrid";
import FocusBand from "@/components/healthy-living/FocusBand";
import ClosingSections from "@/components/healthy-living/ClosingSections";

const CARDS = [
  { Icon: BarChart3, title: "Data & Insight", desc: "Live data on diet, activity and wellbeing across Abu Dhabi, guiding where effort is needed most." },
  { Icon: Brain, title: "Behavioural Science", desc: "Evidence-based nudges that make the healthier choice the easier, default choice." },
  { Icon: Globe, title: "Global Benchmark", desc: "Setting a reference standard for population-level prevention, measured against the world." },
  { Icon: FlaskConical, title: "Research Partnerships", desc: "Collaborating with universities and institutions to keep practice grounded in evidence." },
];

const HIGHLIGHTS = [
  { Icon: Target, title: "25 Strategic Initiatives", desc: "Endorsed under Abu Dhabi's Healthy Living Strategy (Nov 2025), the first phase focuses on food and physical activity." },
  { Icon: FileText, title: "National Health & Nutrition Survey", desc: "MoHAP's 2024–2025 survey provides the baseline data guiding where prevention effort is needed most." },
];

export default function GlobalResearch() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Evidence & Insight"
        title="Setting a global benchmark."
        subtitle="Data, behavioural science and evidence guide every action — helping Healthy Living focus where it is needed most and build a model the world can learn from."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: "#1f3d2a" }}>
            Prevention, grounded in evidence
          </h2>
          <p className="font-heading font-light max-w-3xl leading-relaxed mb-12" style={{ color: "#6b7a70" }}>
            We translate research into practical change — measuring outcomes, understanding behaviour, and sharing what works so healthier living can scale beyond Abu Dhabi.
          </p>
          <CardGrid items={CARDS} columns={4} />
        </div>
      </section>

      <FocusBand
        eyebrow="In focus"
        title="Evidence that scales."
        desc="What we learn in Abu Dhabi informs prevention far beyond — a model built to travel, measured against the best in the world."
      />

      <section className="py-16 md:py-24" style={{ background: "#F7F6F2" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: "#1D7945" }}>
            Research highlights
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-12" style={{ color: "#1f3d2a" }}>
            What's guiding our work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {HIGHLIGHTS.map((h) => {
              const Icon = h.Icon;
              return (
                <div key={h.title} className="flex items-start gap-4 rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #e0e5de" }}>
                  <span className="flex items-center justify-center rounded-full shrink-0" style={{ width: 48, height: 48, background: "#D9E4D9" }}>
                    <Icon size={22} strokeWidth={1.5} style={{ color: "#5e7062" }} />
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-1" style={{ color: "#1f3d2a" }}>{h.title}</h3>
                    <p className="font-heading font-light text-sm leading-relaxed" style={{ color: "#6b7a70" }}>{h.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "linear-gradient(135deg, #eef3e8 0%, #d8e8d8 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-6" style={{ color: "#1D7945" }}>
            A whole-of-society effort
          </p>
          <p
            className="font-heading font-light leading-[1.4]"
            style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)", color: "#1f3d2a" }}
          >
            "Government, private sector partners, communities and individuals are working together to make healthy living the easy choice for all."
          </p>
        </div>
      </section>

      <ClosingSections />
      <Footer />
    </div>
  );
}