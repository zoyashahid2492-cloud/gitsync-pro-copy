import React from "react";
import { Activity, Apple, ShieldCheck, Search, PenTool, Handshake, LineChart } from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import ClosingSections from "@/components/healthy-living/ClosingSections";

const INK = "#1f3d2a", GREEN = "#1D7945", GREEN_BG = "#E6F2EC", BG_ALT = "#F7F6F2", MUTED = "#6b7a70", BORDER = "#e0e5de";

const FOCUS = [
  { Icon: Activity, n: "01", title: "Active Lifestyles", desc: "Embedding movement into daily routines — at home, at work, in schools and across public spaces — so being active is the easy choice." },
  { Icon: Apple, n: "02", title: "Healthy Eating", desc: "Reshaping food environments so healthier options are more visible, affordable and clearly understood — from school meals to supermarket shelves." },
  { Icon: ShieldCheck, n: "03", title: "Prevention-First", desc: "Focusing on the everyday conditions that influence health over time, preventing disease before it starts rather than treating it later." },
];

const PROCESS = [
  { Icon: Search, title: "Understand", desc: "Use data and behavioural science to find where everyday choices are hardest." },
  { Icon: PenTool, title: "Design", desc: "Shape policy, environments and programmes that make the healthier choice the default." },
  { Icon: Handshake, title: "Partner", desc: "Work across government, private sector and communities to deliver at scale." },
  { Icon: LineChart, title: "Measure", desc: "Track outcomes and share evidence so what works can scale beyond Abu Dhabi." },
];

export default function OurApproach() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Our Approach"
        title="Our Approach."
        subtitle="Healthy Living enables healthier lives through everyday choices and conditions — led by the Abu Dhabi Department of Health, guided by evidence, and built through collaboration across government, partners and communities."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="font-heading font-light max-w-3xl leading-relaxed mb-14" style={{ color: MUTED, fontSize: "clamp(15px,1.3vw,18px)" }}>
            We focus on three connected areas of everyday life — moving more, eating better and preventing
            disease before it starts — and follow a clear process to turn evidence into practical change.
          </p>

          <div className="space-y-5">
            {FOCUS.map((f) => {
              const Icon = f.Icon;
              return (
                <div key={f.n} className="flex items-start gap-6 rounded-2xl p-7" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                  <span className="font-heading font-black shrink-0" style={{ color: GREEN_BG, fontSize: "2.4rem", lineHeight: 1, width: 48 }}>{f.n}</span>
                  <span className="flex items-center justify-center rounded-full shrink-0" style={{ width: 52, height: 52, background: GREEN_BG }}>
                    <Icon size={24} strokeWidth={1.5} style={{ color: GREEN }} />
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-1.5" style={{ color: INK }}>{f.title}</h3>
                    <p className="font-heading font-light text-sm leading-relaxed max-w-2xl" style={{ color: MUTED }}>{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: BG_ALT }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: GREEN }}>Our process</p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-12" style={{ color: INK }}>How we turn evidence into change</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map((p, i) => {
              const Icon = p.Icon;
              return (
                <div key={p.title} className="rounded-2xl p-6" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                  <div className="flex items-center justify-between mb-5">
                    <span className="flex items-center justify-center rounded-full" style={{ width: 44, height: 44, background: GREEN_BG }}>
                      <Icon size={20} strokeWidth={1.5} style={{ color: GREEN }} />
                    </span>
                    <span className="font-heading font-black" style={{ color: "#cdd9c4", fontSize: "1.6rem" }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-heading font-bold text-base mb-1.5" style={{ color: INK }}>{p.title}</h3>
                  <p className="font-heading font-light text-sm leading-relaxed" style={{ color: MUTED }}>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="p-8 md:p-10 rounded-2xl" style={{ background: GREEN_BG }}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-heading font-bold tracking-tight mb-4" style={{ fontSize: "clamp(1.5rem,2.6vw,2.2rem)", color: INK }}>
                  Healthy Living complements Sahatna
                </h2>
                <p className="font-heading font-light text-sm leading-relaxed" style={{ color: MUTED }}>
                  Healthy Living focuses on discovery, education and engagement — making healthier choices
                  easier. Sahatna focuses on personalisation, tracking and management — helping you monitor
                  your health over time. Together they support the whole journey.
                </p>
              </div>
              <div className="space-y-3">
                <div className="p-5 rounded-xl" style={{ background: "#fff" }}>
                  <div className="text-xs uppercase tracking-[0.12em] font-heading font-bold mb-2" style={{ color: GREEN }}>Healthy Living</div>
                  <div className="text-sm font-heading font-light" style={{ color: MUTED }}>Discovery → Education → Engagement</div>
                </div>
                <div className="p-5 rounded-xl" style={{ background: "#fff" }}>
                  <div className="text-xs uppercase tracking-[0.12em] font-heading font-bold mb-2" style={{ color: MUTED }}>Sahatna</div>
                  <div className="text-sm font-heading font-light" style={{ color: MUTED }}>Personalize → Track → Monitor → Manage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingSections withStats />
      <Footer />
    </div>
  );
}