import React from "react";
import Navbar from "@/components/healthy-living/Navbar";
import Hero from "@/components/healthy-living/Hero";
import WellnessIntro from "@/components/healthy-living/WellnessIntro";
import ThreePillars from "@/components/healthy-living/ThreePillars";
import MovementHero from "@/components/healthy-living/MovementHero";
import FocusAreas from "@/components/healthy-living/FocusAreas";
import StatsRibbon from "@/components/healthy-living/StatsRibbon";
import SahatnaBanner from "@/components/healthy-living/SahatnaBanner";
import LatestUpdates from "@/components/healthy-living/LatestUpdates";

export default function HealthyLiving() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <section className="py-16 md:py-20" style={{ background: "#F7F6F2" }}>
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
            <p
              className="font-heading font-light leading-[1.35]"
              style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.1rem)", color: "#1f3d2a" }}
            >
              Health is shaped by everyday life, not healthcare alone.
            </p>
            <p className="font-heading font-light mt-5 max-w-2xl mx-auto leading-relaxed" style={{ color: "#6b7a70" }}>
              Healthy Living makes healthier choices easier, more accessible and part of everyday life —
              across schools, workplaces, public spaces and communities.
            </p>
          </div>
        </section>
        <WellnessIntro />
        <ThreePillars />
        <MovementHero />
        <FocusAreas />
        <StatsRibbon />
        <SahatnaBanner />
        <LatestUpdates />
      </main>
    </div>
  );
}