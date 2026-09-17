import React from "react";
import { Link } from "react-router-dom";
import { Salad, Dumbbell, ClipboardCheck, ArrowRight } from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import ClosingSections from "@/components/healthy-living/ClosingSections";

const TOOLS = [
  {
    to: "/tools/meal-plan",
    Icon: Salad,
    title: "Meal Plan Generator",
    desc: "Enter your goal, dietary preference and lifestyle — get a personalised day's meal plan with macros. No account needed.",
    cta: "Generate a Meal Plan",
  },
  {
    to: "/tools/workout",
    Icon: Dumbbell,
    title: "Workout Planner",
    desc: "Share your fitness goal, experience level and available days — receive a weekly workout schedule with exercises and guidance.",
    cta: "Build a Workout Plan",
  },
  {
    to: "/tools/wellness-check",
    Icon: ClipboardCheck,
    title: "Wellness Check",
    desc: "Answer a short set of questions and receive general recommendations across movement, nutrition, sleep and wellbeing.",
    cta: "Start Wellness Check",
  },
];

export default function Tools() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Tools"
        title="Wellness tools. No sign-up."
        subtitle="Lightweight, educational tools to help you eat, move and feel better — generated for you in seconds. For deeper personalisation, continue in Sahatna."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TOOLS.map((t) => {
              const Icon = t.Icon;
              return (
                <div key={t.title} className="flex flex-col rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #e0e5de" }}>
                  <span className="flex items-center justify-center rounded-full mb-4" style={{ width: 52, height: 52, background: "#E6F2EC" }}>
                    <Icon size={24} strokeWidth={1.5} style={{ color: "#1D7945" }} />
                  </span>
                  <h3 className="font-heading font-bold text-lg mb-2" style={{ color: "#1f3d2a" }}>{t.title}</h3>
                  <p className="font-heading font-light text-sm leading-relaxed flex-1 mb-5" style={{ color: "#6b7a70" }}>{t.desc}</p>
                  <Link
                    to={t.to}
                    className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95"
                    style={{ background: "#1D7945" }}
                  >
                    {t.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ClosingSections withStats={false} />
      <Footer />
    </div>
  );
}