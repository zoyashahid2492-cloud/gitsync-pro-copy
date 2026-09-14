import React from "react";
import { Sprout, ShieldCheck, HandHeart } from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import ClosingSections from "@/components/healthy-living/ClosingSections";

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
        subtitle="Healthy Living is transforming the environments that shape our everyday decisions, making healthier choices easier, more accessible and part of everyday life — while always preserving freedom of choice."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="font-heading font-light max-w-3xl leading-relaxed mb-16" style={{ color: "#6b7a70", fontSize: "clamp(15px,1.3vw,18px)" }}>
            By bringing together government, businesses and communities, Healthy Living is embedding prevention into everyday life — helping everyone in Abu Dhabi enjoy healthier, longer and more fulfilling lives, and building a healthier future for generations to come.
          </p>

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
                <div
                  key={p.title}
                  className="rounded-2xl p-6"
                  style={{ background: "#fff", border: "1px solid #e0e5de" }}
                >
                  <span
                    className="flex items-center justify-center rounded-full mb-4"
                    style={{ width: 48, height: 48, background: "#D9E4D9" }}
                  >
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

      <ClosingSections />
      <Footer />
    </div>
  );
}