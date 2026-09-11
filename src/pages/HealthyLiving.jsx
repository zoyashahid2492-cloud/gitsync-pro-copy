import React from "react";
import Navbar from "@/components/healthy-living/Navbar";
import Hero from "@/components/healthy-living/Hero";
import WellnessIntro from "@/components/healthy-living/WellnessIntro";
import MovementHero from "@/components/healthy-living/MovementHero";
import StatsRibbon from "@/components/healthy-living/StatsRibbon";
import Footer from "@/components/healthy-living/Footer";

export default function HealthyLiving() {
  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden font-body">
      <Navbar />
      <main>
        <Hero />
        <WellnessIntro />
        <MovementHero />
        <StatsRibbon />
        <Footer />
      </main>
    </div>
  );
}