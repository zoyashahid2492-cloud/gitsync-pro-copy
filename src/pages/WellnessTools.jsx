import React from "react";
import { Link } from "react-router-dom";
import { Salad, Dumbbell, HeartPulse, ArrowRight } from "lucide-react";
import SahatnaButton from "@/components/healthy-living/SahatnaButton";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import ClosingSections from "@/components/healthy-living/ClosingSections";

const INK = "#1f3d2a", MUTED = "#6b7a70", GREEN = "#1D7945", BORDER = "#e0e5de";

const TOOLS = [
  { Icon: Salad, title: "Meal Plan Generator", desc: "Enter your goal, dietary preference, and lifestyle. Get a personalised day's meal plan with macros — no account needed.", cta: "Generate a Meal Plan", to: "/meal-plans" },
  { Icon: Dumbbell, title: "Workout Planner", desc: "Share your fitness goal, experience level, and available days. Receive a weekly workout schedule with exercises and guidance.", cta: "Build a Workout Plan", to: "/workout" },
  { Icon: HeartPulse, title: "Wellness Check", desc: "Answer a short set of questions and receive general recommendations across movement, nutrition, sleep, and wellbeing.", cta: "Start Wellness Check", to: "/wellness-check" },
];

export default function WellnessTools() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Wellness Lab"
        title="Wellness Tools"
        subtitle="Lightweight, educational tools. No account or sign-up required. For deeper personalization, continue in Sahatna."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TOOLS.map((t) => {
              const Icon = t.Icon;
              return (
                <div key={t.title} className="rounded-2xl p-7 flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                  <span className="flex items-center justify-center rounded-full mb-5" style={{ width: 52, height: 52, background: "#D9E4D9" }}>
                    <Icon size={24} strokeWidth={1.5} style={{ color: "#5e7062" }} />
                  </span>
                  <h3 className="font-heading font-bold text-lg mb-2" style={{ color: INK }}>{t.title}</h3>
                  <p className="font-heading font-light text-sm leading-relaxed mb-6 flex-1" style={{ color: MUTED }}>{t.desc}</p>
                  <Link to={t.to} className="inline-flex items-center gap-2 text-sm font-heading font-bold transition-colors" style={{ color: GREEN }}>
                    {t.cta} <ArrowRight size={15} />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5" style={{ background: "#E6F2EC" }}>
            <div>
              <h3 className="font-heading font-bold text-xl mb-1.5" style={{ color: INK }}>Personalized tracking & saved plans in Sahatna</h3>
              <p className="font-heading font-light text-sm max-w-xl" style={{ color: MUTED }}>
                Continue your wellness journey with full personalization, progress tracking, and health history.
              </p>
            </div>
            <SahatnaButton />
          </div>
        </div>
      </section>

      <ClosingSections withStats={false} />
      <Footer />
    </div>
  );
}