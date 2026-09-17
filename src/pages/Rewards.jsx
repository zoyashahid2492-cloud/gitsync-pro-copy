import React from "react";
import { Footprints, Activity, Moon, PartyPopper, CalendarCheck, UserPlus } from "lucide-react";
import SahatnaButton from "@/components/healthy-living/SahatnaButton";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import ClosingSections from "@/components/healthy-living/ClosingSections";

const INK = "#1f3d2a", MUTED = "#6b7a70", GREEN = "#1D7945", BORDER = "#e0e5de";

const TIERS = ["Getting Started", "Building Momentum", "Community Leader", "Wellness Champion"];
const EARN = [
  { Icon: Footprints, pts: "+50 pts", label: "Daily Steps Goal", desc: "Complete 10,000 steps" },
  { Icon: Activity, pts: "+75 pts", label: "Weekly Active Minutes", desc: "Reach 150 active minutes" },
  { Icon: Moon, pts: "+60 pts", label: "Sleep Consistency", desc: "Log 7+ hours for 5 nights" },
  { Icon: PartyPopper, pts: "+100 pts", label: "Festival of Health Event", desc: "Attend any Healthy Living event" },
  { Icon: CalendarCheck, pts: "+30 pts", label: "Daily Check-in", desc: "Complete your daily check-in" },
  { Icon: UserPlus, pts: "+200 pts", label: "Refer a Friend", desc: "Invite a resident to join" },
];
const REDEEM = [
  { pts: "500 pts", label: "Community Gym Pass", desc: "One free session at a partnered gym" },
  { pts: "300 pts", label: "Festival of Health Entry", desc: "Free entry to a ticketed event" },
  { pts: "700 pts", label: "Wellness Voucher", desc: "AED 50 towards wellness products" },
  { pts: "250 pts", label: "Fitness Class Pass", desc: "Free outdoor class at a public park" },
];

export default function Rewards() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Wellness Lab"
        title="Rewards"
        subtitle="Every healthy choice earns you points. Redeem them for real community rewards."
      >
        <span className="inline-flex items-center rounded-full px-4 py-2 text-xs font-heading font-semibold" style={{ background: "#FBF3E8", color: "#b8743a" }}>
          Phase 2 — requires Sahatna account integration
        </span>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="rounded-2xl p-7 mb-14" style={{ background: "#0F1914" }}>
            <p className="text-[11px] uppercase tracking-[0.18em] font-heading font-medium mb-4" style={{ color: "#82D1A3" }}>Your progress</p>
            <div className="flex flex-wrap items-end gap-3 mb-6">
              <p className="font-heading font-black leading-none" style={{ fontSize: "clamp(2.4rem,5vw,3.6rem)", color: "#fff" }}>1,350</p>
              <p className="text-sm font-heading font-light pb-2" style={{ color: "#AAB0AD" }}>points · 1,150 pts to Community Leader</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {TIERS.map((t, i) => {
                const current = i === 1;
                return (
                  <div key={t} className="rounded-xl p-4" style={{ background: current ? "#1D3326" : "rgba(255,255,255,0.04)", border: current ? "1px solid #82D1A3" : "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="text-[10px] uppercase tracking-[0.12em] font-heading font-bold mb-1" style={{ color: current ? "#82D1A3" : "#6E7A75" }}>Tier {i + 1}</p>
                    <p className="font-heading font-bold text-sm" style={{ color: current ? "#fff" : "#AAB0AD" }}>{t}{current ? " (current)" : ""}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <h2 className="font-heading font-bold text-2xl mb-2" style={{ color: INK }}>Ways to Earn</h2>
          <p className="font-heading font-light mb-8" style={{ color: MUTED }}>Earn points for everyday healthy actions.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {EARN.map((e) => {
              const Icon = e.Icon;
              return (
                <div key={e.label} className="rounded-2xl p-6" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center justify-center rounded-full" style={{ width: 44, height: 44, background: "#D9E4D9" }}>
                      <Icon size={20} strokeWidth={1.5} style={{ color: "#5e7062" }} />
                    </span>
                    <span className="font-heading font-bold text-base" style={{ color: GREEN }}>{e.pts}</span>
                  </div>
                  <p className="font-heading font-bold text-base mb-1" style={{ color: INK }}>{e.label}</p>
                  <p className="text-sm font-heading font-light" style={{ color: MUTED }}>{e.desc}</p>
                </div>
              );
            })}
          </div>

          <h2 className="font-heading font-bold text-2xl mb-2" style={{ color: INK }}>Redeem Points</h2>
          <p className="font-heading font-light mb-8" style={{ color: MUTED }}>Turn points into real community rewards.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {REDEEM.map((r) => (
              <div key={r.label} className="rounded-2xl p-6 flex items-center justify-between gap-4" style={{ background: "#F7F6F2", border: `1px solid ${BORDER}` }}>
                <div>
                  <p className="font-heading font-bold text-base mb-0.5" style={{ color: INK }}>{r.label}</p>
                  <p className="text-sm font-heading font-light" style={{ color: MUTED }}>{r.desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-heading font-bold text-sm mb-2" style={{ color: GREEN }}>{r.pts}</p>
                  <button className="rounded-full px-4 py-2 text-xs font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95" style={{ background: "#1f3d2a" }}>
                    Redeem
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4" style={{ background: "#E6F2EC" }}>
            <p className="text-sm font-heading font-light max-w-xl" style={{ color: MUTED }}>
              Track points and manage rewards in Sahatna — sync your activity data for automatic point calculations.
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