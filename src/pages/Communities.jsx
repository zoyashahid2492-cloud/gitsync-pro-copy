import React, { useState } from "react";
import { MapPin, Users, Calendar } from "lucide-react";
import SahatnaButton from "@/components/healthy-living/SahatnaButton";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import ClosingSections from "@/components/healthy-living/ClosingSections";

const INK = "#1f3d2a", MUTED = "#6b7a70", GREEN = "#1D7945", BORDER = "#e0e5de";

const FILTERS = ["All", "Walking Groups", "Sports Clubs", "Nutrition Support", "Family & Kids", "Seniors"];

const GROUPS = [
  { cat: "Walking Groups", name: "Corniche Morning Walkers", desc: "Daily sunrise walks. All ages welcome.", area: "Corniche", members: "~120", when: "Daily 6 AM" },
  { cat: "Sports Clubs", name: "Al Reem Cycling Club", desc: "Weekend rides around Al Reem and beyond.", area: "Al Reem Island", members: "~85", when: "Sat & Sun 6 AM" },
  { cat: "Family & Kids", name: "Healthy Families Abu Dhabi", desc: "Family activities and cooking workshops.", area: "Various", members: "~200", when: "Weekly" },
  { cat: "Seniors", name: "Senior Wellness Circle", desc: "Gentle exercise and mindfulness for seniors.", area: "Khalifa Park", members: "~60", when: "Tue & Thu 8 AM" },
  { cat: "Nutrition Support", name: "Plant-Based Cooking Club", desc: "Share recipes using local ingredients.", area: "Online + IRL", members: "~95", when: "Biweekly" },
  { cat: "Sports Clubs", name: "Degayeg Trail Runners", desc: "Community runs on the Degayeg trail network.", area: "Degayeg", members: "~45", when: "Fri 5:30 AM" },
];

export default function Communities() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? GROUPS : GROUPS.filter((g) => g.cat === filter);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Wellness Lab"
        title="Find a Community"
        subtitle="Join a local wellness group — no account or sign-up required."
      >
        <span className="inline-flex items-center rounded-full px-4 py-2 text-xs font-heading font-semibold" style={{ background: "#FBF3E8", color: "#b8743a" }}>
          Phase 2 — deeper profiles & group management coming
        </span>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-4 py-2 rounded-full text-xs font-heading font-semibold transition-all"
                style={filter === f ? { background: "#1f3d2a", color: "#fff", border: "1px solid #1f3d2a" } : { background: "#fff", color: INK, border: `1px solid ${BORDER}` }}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {list.map((g) => (
              <div key={g.name} className="rounded-2xl p-6 flex flex-col" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                <span className="text-[11px] uppercase tracking-[0.14em] font-heading font-bold mb-3" style={{ color: GREEN }}>{g.cat}</span>
                <h3 className="font-heading font-bold text-lg mb-1.5" style={{ color: INK }}>{g.name}</h3>
                <p className="text-sm font-heading font-light mb-5" style={{ color: MUTED }}>{g.desc}</p>
                <div className="flex flex-wrap gap-4 mt-auto text-xs font-heading font-light" style={{ color: MUTED }}>
                  <span className="inline-flex items-center gap-1.5"><MapPin size={13} style={{ color: GREEN }} /> {g.area}</span>
                  <span className="inline-flex items-center gap-1.5"><Users size={13} style={{ color: GREEN }} /> {g.members} members</span>
                  <span className="inline-flex items-center gap-1.5"><Calendar size={13} style={{ color: GREEN }} /> {g.when}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4" style={{ background: "#E6F2EC" }}>
            <p className="text-sm font-heading font-light max-w-xl" style={{ color: MUTED }}>
              Community profiles and group management will be available with Sahatna integration in Phase 2.
            </p>
            <SahatnaButton />
          </div>
        </div>
      </section>

      <ClosingSections withStats={false} />
      <Footer />
    </div>
  );
}