import React from "react";
import { Camera, ScanLine } from "lucide-react";
import SahatnaButton from "@/components/healthy-living/SahatnaButton";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import ClosingSections from "@/components/healthy-living/ClosingSections";

const INK = "#1f3d2a", MUTED = "#6b7a70", GREEN = "#1D7945", BORDER = "#e0e5de";

export default function FoodScanner() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Wellness Lab"
        title="Food & Label Scanner"
        subtitle="Scan packaged foods to view nutrition, ingredients, and healthier alternatives."
      >
        <span className="inline-flex items-center rounded-full px-4 py-2 text-xs font-heading font-semibold" style={{ background: "#FBF3E8", color: "#b8743a" }}>
          Phase 2 — computer vision & health database integration
        </span>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="rounded-2xl p-10 text-center" style={{ background: "#F7F6F2", border: `1px solid ${BORDER}` }}>
            <span className="mx-auto flex items-center justify-center rounded-full mb-6" style={{ width: 72, height: 72, background: "#D9E4D9" }}>
              <ScanLine size={32} strokeWidth={1.5} style={{ color: "#5e7062" }} />
            </span>
            <h2 className="font-heading font-bold text-xl mb-2" style={{ color: INK }}>Point your camera at the nutrition label</h2>
            <p className="font-heading font-light text-sm max-w-md mx-auto mb-8" style={{ color: MUTED }}>
              We'll read the label and show you nutrition, ingredients, and healthier alternatives at a glance.
            </p>
            <button
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: GREEN }}
            >
              <Camera size={16} /> Take Photo
            </button>
            <p className="text-[11px] font-heading font-light mt-5" style={{ color: "#9aa39c" }}>
              Scanning features require computer vision and health database integrations — available now in Sahatna.
            </p>
          </div>

          <div className="mt-10 rounded-2xl p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4" style={{ background: "#E6F2EC" }}>
            <div>
              <h3 className="font-heading font-bold text-base mb-1" style={{ color: INK }}>Full scanning experience in Sahatna</h3>
              <p className="text-sm font-heading font-light" style={{ color: MUTED }}>Barcode scan, food recognition, and health history.</p>
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