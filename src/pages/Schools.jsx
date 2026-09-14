import React from "react";
import { Link } from "react-router-dom";
import { Apple, ClipboardCheck, Activity, Users, ArrowRight } from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import CardGrid from "@/components/healthy-living/CardGrid";

const CARDS = [
  { Icon: Apple, title: "School Meals", desc: "Nutritious, balanced meals that meet unified nutrition guidelines across every school cafeteria." },
  { Icon: ClipboardCheck, title: "Nutrition Guidelines", desc: "A single, evidence-based standard covering what's served and sold in schools." },
  { Icon: Activity, title: "Active Schools", desc: "Daily movement built into the school day — from break-time activity to PE." },
  { Icon: Users, title: "Parent Resources", desc: "Practical tools and guidance to help families build healthier habits at home." },
];

const STATS = [
  { value: "466+", label: "Schools on unified nutrition guidelines" },
  { value: "455,000+", label: "Students reached every day" },
  { value: "13", label: "Priority districts" },
  { value: "100%", label: "School meals meeting guidelines" },
];

export default function Schools() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Focus Area"
        title={<>Healthier schools.<br />Healthier children.</>}
        subtitle="Healthy Living brings unified nutrition guidelines, active school days and practical family resources into every classroom — making the healthier choice the easy choice for Abu Dhabi's children."
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95"
          style={{ background: "#1D7945" }}
        >
          Work with us <ArrowRight size={14} />
        </Link>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: "#1f3d2a" }}>
            How we're transforming schools
          </h2>
          <p className="font-heading font-light max-w-3xl leading-relaxed mb-12" style={{ color: "#6b7a70" }}>
            From the cafeteria to the playground, we're reshaping the environments that shape children's habits — so healthier eating and regular movement become part of every school day.
          </p>
          <CardGrid items={CARDS} columns={4} />
        </div>
      </section>

      <section className="py-16" style={{ background: "#0F1914" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-light text-center mb-10" style={{ color: "#6E7A75" }}>
            Real change, already underway
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.value} className="text-center">
                <p
                  className="font-heading font-bold mb-2 leading-none"
                  style={{ color: "#82D1A3", fontSize: "clamp(2.2rem,3.6vw,3.4rem)" }}
                >
                  {s.value}
                </p>
                <p className="font-heading font-normal text-sm text-white/85">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}