import React from "react";
import { Link } from "react-router-dom";
import {
  Apple, ClipboardCheck, Activity, Users, ArrowRight,
  Megaphone, Target, PartyPopper, Tag,
  GraduationCap, Building2, CheckCircle2, Lock,
} from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import CardGrid from "@/components/healthy-living/CardGrid";
import FocusBand from "@/components/healthy-living/FocusBand";
import ClosingSections from "@/components/healthy-living/ClosingSections";
import ProgrammeInsights from "@/components/healthy-living/ProgrammeInsights";
import SchoolChallenges from "@/components/healthy-living/SchoolChallenges";
import LunchboxCalendar from "@/components/healthy-living/LunchboxCalendar";

const CARDS = [
  { Icon: Apple, title: "School Meals", desc: "Nutritious, balanced meals that meet unified nutrition guidelines across every school cafeteria." },
  { Icon: ClipboardCheck, title: "Nutrition Guidelines", desc: "A single, evidence-based standard covering what's served and sold in schools." },
  { Icon: Activity, title: "Active Schools", desc: "Daily movement built into the school day — from break-time activity to PE." },
  { Icon: Users, title: "Parent Resources", desc: "Practical tools and guidance to help families build healthier habits at home." },
];

const INITIATIVES = [
  { Icon: Megaphone, title: "OOH Healthy Policy", desc: "Removing unhealthy food and drink advertising from public-facing spaces across Abu Dhabi." },
  { Icon: Target, title: "Degayeg Initiative", desc: "Precise, data-led targets that help producers cut sugar and salt in key product categories." },
  { Icon: PartyPopper, title: "Festival of Health", desc: "An annual city-wide celebration of healthier living for families and communities." },
  { Icon: Tag, title: "Nutri-Mark Label", desc: "Front-of-pack labelling that makes healthier choices clearer at a glance." },
];

const STATS = [
  { value: "466+", label: "Schools on unified nutrition guidelines" },
  { value: "455,000+", label: "Students reached every day" },
  { value: "13", label: "Priority districts" },
  { value: "100%", label: "School meals meeting guidelines" },
];

export default function Schools() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Focus Area"
        title={<>Healthier schools.<br />Healthier children.</>}
        subtitle="Healthy Living brings unified nutrition guidelines, active school days and practical family resources into every classroom — making the healthier choice the easy choice for Abu Dhabi's children."
      >
        <Link
          to="/collaborate"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95"
          style={{ background: "#1D7945" }}
        >
          Get involved <ArrowRight size={14} />
        </Link>
      </PageHero>

      <section className="py-12 md:py-14" style={{ background: "#E6F2EC" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ["455,000+", "Students reached"],
            ["466", "Schools onboarded"],
            ["92%", "Programme awareness"],
            ["64%", "Behaviour change"],
          ].map(([v, l]) => (
            <div key={l}>
              <p className="font-heading font-black mb-1 leading-none" style={{ color: "#1D7945", fontSize: "clamp(1.8rem,3vw,2.6rem)" }}>{v}</p>
              <p className="text-xs md:text-sm font-heading font-medium" style={{ color: "#1f3d2a" }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: "#1f3d2a" }}>
            How we're transforming schools
          </h2>
          <p className="font-heading font-light max-w-3xl leading-relaxed mb-12" style={{ color: "#6b7a70" }}>
            From the cafeteria to the playground, we're reshaping the environments that shape children's habits — so healthier eating and regular movement become part of every school day.
          </p>
          <CardGrid items={CARDS} columns={4} />
        </div>
      </section>

      <FocusBand
        eyebrow="In practice"
        title="Active learning, every day."
        desc="Break-time activity, daily PE and walk-to-school routes bring movement naturally into the school day — so healthier habits start young."
      />

      <section className="py-16 md:py-24" style={{ background: "#F7F6F2" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: "#1D7945" }}>
            Related initiatives
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: "#1f3d2a" }}>
            Initiatives supporting healthier schools
          </h2>
          <p className="font-heading font-light max-w-3xl leading-relaxed mb-12" style={{ color: "#6b7a70" }}>
            Part of 25 strategic initiatives underway across Abu Dhabi — the first phase focusing on food and physical activity.
          </p>
          <CardGrid items={INITIATIVES} columns={4} />
        </div>
      </section>

      <ProgrammeInsights />
      <SchoolChallenges />
      <LunchboxCalendar />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: "#1D7945" }}>Areas of Engagement</p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-12" style={{ color: "#1f3d2a" }}>Reaching everyone in the school community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { Icon: GraduationCap, title: "Students", desc: "Healthy meals, active school days and challenges that build lifelong habits." },
              { Icon: Users, title: "Families", desc: "Practical resources, lunchbox ideas and guidance to support healthier homes." },
              { Icon: Building2, title: "Schools", desc: "Unified nutrition guidelines, staff support and measurable programme insight." },
            ].map((e) => {
              const Icon = e.Icon;
              return (
                <div key={e.title} className="rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #e0e5de" }}>
                  <span className="flex items-center justify-center rounded-full mb-4" style={{ width: 48, height: 48, background: "#D9E4D9" }}>
                    <Icon size={22} strokeWidth={1.5} style={{ color: "#5e7062" }} />
                  </span>
                  <h3 className="font-heading font-bold text-lg mb-2" style={{ color: "#1f3d2a" }}>{e.title}</h3>
                  <p className="font-heading font-light text-sm leading-relaxed" style={{ color: "#6b7a70" }}>{e.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "#F7F6F2" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: "#1D7945" }}>Influence & Mobilization</p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4" style={{ color: "#1f3d2a" }}>Are we changing behaviours?</h2>
          <p className="font-heading font-light leading-relaxed mb-8" style={{ color: "#6b7a70" }}>
            Awareness has reached 92% across students, with 64% reporting real behaviour change. The
            programme is shifting everyday habits — what children eat, how they move, and how families
            plan the week — at scale.
          </p>
          <div className="flex flex-wrap gap-3">
            {["92% awareness", "64% behaviour change", "78% active participation", "57% meeting daily activity goals"].map((s) => (
              <span key={s} className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-heading font-medium" style={{ background: "#fff", border: "1px solid #e0e5de", color: "#1f3d2a" }}>
                <CheckCircle2 size={14} style={{ color: "#1D7945" }} /> {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl p-8" style={{ background: "#1f3d2a" }}>
            <h3 className="font-heading font-bold text-xl text-white mb-3">Is your school involved?</h3>
            <p className="font-heading font-light text-sm text-white/80 mb-6">Join the programme and bring unified nutrition guidelines and active school days to your students.</p>
            <Link to="/collaborate" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-bold transition-all hover:opacity-90" style={{ background: "#B0D5B5", color: "#1A2A1A" }}>
              Get your school involved <ArrowRight size={14} />
            </Link>
          </div>
          <div className="rounded-2xl p-8" style={{ background: "#E6F2EC" }}>
            <h3 className="font-heading font-bold text-xl mb-3" style={{ color: "#1f3d2a" }}>School research</h3>
            <p className="font-heading font-light text-sm mb-6" style={{ color: "#6b7a70" }}>Partner with us on school health research and evaluation.</p>
            <Link to="/research" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-bold text-white transition-all hover:opacity-90" style={{ background: "#1D7945" }}>
              Explore research <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: "#0F1914" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.16em] font-heading font-bold mb-5" style={{ background: "#1C2A24", color: "#82D1A3" }}>
            <Lock size={12} /> Coming in Phase 2
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3">Deeper analytics in Sahatna</h2>
          <p className="font-heading font-light text-white/70 max-w-2xl mx-auto">
            Richer school-level dashboards and personalised insights will be available in Sahatna in the next phase.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ background: "#0F1914" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-light text-center mb-10" style={{ color: "#6E7A75" }}>
            Real change, already underway
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.value} className="text-center">
                <p
                  className="font-heading font-bold mb-2 leading-none"
                  style={{ color: "#82D1A3", fontSize: "clamp(2.2rem,3.6vw,3.4rem)" }}
                >
                  {s.value}
                </p>
                <p className="font-heading font-normal text-sm text-white/85">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingSections withStats={false} />
      <Footer />
    </div>
  );
}