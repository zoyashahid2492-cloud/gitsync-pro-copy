import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import ClosingSections from "@/components/healthy-living/ClosingSections";

const INK = "#1f3d2a", GREEN = "#1D7945", GREEN_BG = "#E6F2EC", BG_ALT = "#F7F6F2", MUTED = "#6b7a70", BORDER = "#e0e5de";

const PARTNERS = {
  "Government Entities": [
    { name: "Department of Health – Abu Dhabi", role: "Lead health authority" },
    { name: "Abu Dhabi Media Office", role: "Communications and outreach" },
    { name: "Abu Dhabi Sports Council", role: "Active lifestyle programmes" },
    { name: "ADEK", role: "School health and nutrition" },
  ],
  Healthcare: [
    { name: "Cleveland Clinic Abu Dhabi", role: "Clinical expertise" },
    { name: "Mubadala Health", role: "Prevention-first care" },
    { name: "Burjeel Holdings", role: "Community health services" },
  ],
  "Private Sector": [
    { name: "Carrefour UAE", role: "Nutri-Mark stocking" },
    { name: "LuLu Hypermarket", role: "Healthy food labelling" },
    { name: "adidas Middle East", role: "Active lifestyle campaigns" },
  ],
};

export default function Partners() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Partners"
        title="Our Partners."
        subtitle="A coalition of government, healthcare, private sector, and community organisations working together on shared prevention priorities."
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-14">
          {Object.entries(PARTNERS).map(([cat, items]) => (
            <div key={cat}>
              <p className="text-xs uppercase tracking-[0.18em] mb-5 font-heading font-medium" style={{ color: MUTED }}>{cat}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map((p) => (
                  <div key={p.name} className="p-5 rounded-xl" style={{ background: BG_ALT, border: `1px solid ${BORDER}` }}>
                    <div className="font-heading font-bold text-sm mb-1" style={{ color: INK }}>{p.name}</div>
                    <div className="text-xs font-heading font-light leading-relaxed" style={{ color: MUTED }}>{p.role}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20" style={{ background: "#FDF1EC" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold tracking-tight mb-4" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", color: INK }}>Become a Partner</h2>
          <p className="font-heading font-light text-sm mb-6" style={{ color: MUTED }}>Join the coalition shaping healthier lives across Abu Dhabi.</p>
          <Link
            to="/work-with-us"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm rounded-full font-heading font-bold text-white transition-all hover:opacity-90"
            style={{ background: GREEN }}
          >
            Collaborate With Us <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}