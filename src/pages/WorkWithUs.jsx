import React from "react";
import { Link } from "react-router-dom";
import { Landmark, Building2, Users, User, ArrowRight } from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import CardGrid from "@/components/healthy-living/CardGrid";
import ClosingSections from "@/components/healthy-living/ClosingSections";

const CARDS = [
  { Icon: Landmark, title: "Government", desc: "Align policy, regulation and public assets to make healthier environments the default." },
  { Icon: Building2, title: "Business", desc: "Reformulate products, reshape marketing and support healthier choices at scale." },
  { Icon: Users, title: "Communities", desc: "Bring healthier living into neighbourhoods, schools, mosques and public spaces." },
  { Icon: User, title: "Individuals", desc: "Simple, evidence-based guidance to build healthier habits into everyday life." },
];

export default function WorkWithUs() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Partner With Us"
        title="Build a healthier future, together."
        subtitle="Healthy Living unites government, businesses and communities. Whatever your role, there's a way to help make the healthier choice the easy choice across Abu Dhabi."
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95"
          style={{ background: "#1D7945" }}
        >
          Get in touch <ArrowRight size={14} />
        </Link>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: "#1f3d2a" }}>
            Ways to get involved
          </h2>
          <p className="font-heading font-light max-w-3xl leading-relaxed mb-12" style={{ color: "#6b7a70" }}>
            Prevention is built into everyday life through partnership. Explore how your sector can contribute to a healthier Abu Dhabi.
          </p>
          <CardGrid items={CARDS} columns={4} />
        </div>
      </section>

      <section className="py-16" style={{ background: "#1f3d2a" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
            Ready to partner?
          </h2>
          <p className="font-heading font-light text-white/80 mb-8 max-w-2xl mx-auto">
            Tell us how you'd like to collaborate and our team will get back to you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-heading font-bold transition-all hover:opacity-90 active:scale-95"
            style={{ background: "#B0D5B5", color: "#1A2A1A" }}
          >
            Contact us <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <ClosingSections />
      <Footer />
    </div>
  );
}