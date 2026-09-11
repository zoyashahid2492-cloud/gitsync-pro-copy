import React from "react";
import Navbar from "@/components/healthy-living/Navbar";
import Hero from "@/components/healthy-living/Hero";
import WellnessIntro from "@/components/healthy-living/WellnessIntro";
import MovementHero from "@/components/healthy-living/MovementHero";
import StatsRibbon from "@/components/healthy-living/StatsRibbon";
import UpdatesFooter from "@/components/healthy-living/UpdatesFooter";

export default function HealthyLiving() {
  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WellnessIntro />
        <MovementHero />
        <StatsRibbon />
        <UpdatesFooter />
      </main>
    </div>
  );
}