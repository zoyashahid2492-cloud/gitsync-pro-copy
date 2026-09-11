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