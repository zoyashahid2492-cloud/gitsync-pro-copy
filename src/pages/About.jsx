import React from "react";
import { Activity, Apple, ShieldCheck, Sprout, HandHeart, Compass, BookOpen, Users } from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import ClosingSections from "@/components/healthy-living/ClosingSections";

const PRIORITIES = [
  { Icon: Activity, title: "Active Lifestyles", desc: "Designing everyday spaces that support movement at home, at work and across communities." },
  { Icon: Apple, title: "Healthy Eating", desc: "Shaping food environments that make healthier and safer options more visible, accessible and part of daily life." },
  { Icon: ShieldCheck, title: "Prevention-First", desc: "Focusing on prevention by addressing the everyday conditions that influence health over time." },
];

const PILLARS = [
  { Icon: Sprout, title: "Healthier Choices", desc: "Creating environments that make healthier choices easier, more accessible and part of everyday life." },
  { Icon: ShieldCheck, title: "Prevention", desc: "Prevention begins with the everyday habits and environments that shape our health." },
  { Icon: HandHeart, title: "Healthier Together", desc: "Working together to build a healthier future through understanding and collaboration." },
];

export default function About() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="About"
        title="About Healthy Living."
        subtitle="Healthy Living is Abu Dhabi's government-led program designed to empower every citizen and resident to live longer, healthier and more fulfilling lives — by making the healthy choice the easy choice."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="font-heading font-light max-w-3xl leading-relaxed mb-16" style={{ color: "#6b7a70", fontSize: "clamp(15px,1.3vw,18px)" }}>
            Health is our greatest wealth; it shapes how we live, work and care for our families and communities. By embedding movement, healthier food environments and supportive daily routines, we help make healthy living a natural part of daily life — driving lasting, collective change across society.
          </p>

          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: "#1D7945" }}>
            Our priorities
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-12" style={{ color: "#1f3d2a" }}>
            What guides our work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PRIORITIES.map((p) => {
              const Icon = p.Icon;
              return (
                <div key={p.title} className="rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #e0e5de" }}>
                  <span className="flex items-center justify-center rounded-full mb-4" style={{ width: 48, height: 48, background: "#D9E4D9" }}>
                    <Icon size={22} strokeWidth={1.5} style={{ color: "#5e7062" }} />
                  </span>
                  <h3 className="font-heading font-bold text-lg mb-2" style={{ color: "#1f3d2a" }}>{p.title}</h3>
                  <p className="font-heading font-light text-sm leading-relaxed" style={{ color: "#6b7a70" }}>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "#F7F6F2" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: "#1D7945" }}>Our role</p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: "#1f3d2a" }}>Discovery · Education · Engagement</h2>
          <p className="font-heading font-light max-w-3xl leading-relaxed mb-12" style={{ color: "#6b7a70" }}>
            Healthy Living's role is to help people discover, understand and take part in healthier living — making the healthy choice the easy choice.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { Icon: Compass, title: "Discovery", desc: "Helping people find what healthier living means and where to start." },
              { Icon: BookOpen, title: "Education", desc: "Translating evidence into simple, practical guidance everyone can use." },
              { Icon: Users, title: "Engagement", desc: "Bringing programmes into everyday settings so participation is easy." },
            ].map((r) => {
              const Icon = r.Icon;
              return (
                <div key={r.title} className="rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #e0e5de" }}>
                  <span className="flex items-center justify-center rounded-full mb-4" style={{ width: 48, height: 48, background: "#D9E4D9" }}>
                    <Icon size={22} strokeWidth={1.5} style={{ color: "#5e7062" }} />
                  </span>
                  <h3 className="font-heading font-bold text-lg mb-2" style={{ color: "#1f3d2a" }}>{r.title}</h3>
                  <p className="font-heading font-light text-sm leading-relaxed" style={{ color: "#6b7a70" }}>{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "#F7F6F2" }} data-milestones>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: "#1f3d2a" }}>
            Three pillars. One shared goal.
          </h2>
          <p className="font-heading font-light max-w-2xl leading-relaxed mb-12" style={{ color: "#6b7a70" }}>
            Our work is organised around three connected pillars that together create lasting change.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PILLARS.map((p) => {
              const Icon = p.Icon;
              return (
                <div key={p.title} className="rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #e0e5de" }}>
                  <span className="flex items-center justify-center rounded-full mb-4" style={{ width: 48, height: 48, background: "#D9E4D9" }}>
                    <Icon size={22} strokeWidth={1.5} style={{ color: "#5e7062" }} />
                  </span>
                  <h3 className="font-heading font-bold text-lg mb-2" style={{ color: "#1f3d2a" }}>{p.title}</h3>
                  <p className="font-heading font-light text-sm leading-relaxed" style={{ color: "#6b7a70" }}>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "linear-gradient(135deg, #eef3e8 0%, #d8e8d8 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p
            className="font-heading font-light leading-[1.4]"
            style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)", color: "#1f3d2a" }}
          >
            "A whole-of-society effort. Government, private sector partners, communities, and individuals are working together to make healthy living the easy choice for all."
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: "#1D7945" }}>Milestones</p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-12" style={{ color: "#1f3d2a" }}>Our journey so far</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { year: "2022", title: "Foundations laid", desc: "Cross-government commitment to a prevention-first agenda established." },
              { year: "2024", title: "Evidence & scale", desc: "National health & nutrition survey sets the baseline; school meals scaled." },
              { year: "2025", title: "Strategy endorsed", desc: "Abu Dhabi's Healthy Living Strategy endorsed by the Executive Council (Nov)." },
              { year: "2026", title: "Everyday impact", desc: "25 initiatives underway across food and physical activity, city-wide." },
            ].map((m, i) => (
              <div key={m.year} className="rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #e0e5de" }}>
                <div className="font-heading font-black mb-3" style={{ color: "#1D7945", fontSize: "1.8rem", lineHeight: 1 }}>{m.year}</div>
                <h3 className="font-heading font-bold text-sm mb-1.5" style={{ color: "#1f3d2a" }}>{m.title}</h3>
                <p className="font-heading font-light text-xs leading-relaxed" style={{ color: "#6b7a70" }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingSections />
      <Footer />
    </div>
  );
}