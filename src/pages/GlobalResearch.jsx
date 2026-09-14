import React from "react";
import { BarChart3, Brain, Globe, FlaskConical } from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import CardGrid from "@/components/healthy-living/CardGrid";

const CARDS = [
  { Icon: BarChart3, title: "Data & Insight", desc: "Live data on diet, activity and wellbeing across Abu Dhabi, guiding where effort is needed most." },
  { Icon: Brain, title: "Behavioural Science", desc: "Evidence-based nudges that make the healthier choice the easier, default choice." },
  { Icon: Globe, title: "Global Benchmark", desc: "Setting a reference standard for population-level prevention, measured against the world." },
  { Icon: FlaskConical, title: "Research Partnerships", desc: "Collaborating with universities and institutions to keep practice grounded in evidence." },
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

      <Footer />
    </div>
  );
}