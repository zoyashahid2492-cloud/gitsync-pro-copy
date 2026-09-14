import React from "react";
import { Link } from "react-router-dom";
import {
  Landmark, Building2, Users, User, ArrowRight,
  Dumbbell, Brain, Apple, Moon,
  Megaphone, Target, PartyPopper, Tag,
} from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import CardGrid from "@/components/healthy-living/CardGrid";
import ClosingSections from "@/components/healthy-living/ClosingSections";

const PARTNERS = [
  { Icon: Landmark, title: "Government", desc: "Align policy, regulation and public assets to make healthier environments the default." },
  { Icon: Building2, title: "Business", desc: "Reformulate products, reshape marketing and support healthier choices at scale." },
  { Icon: Users, title: "Communities", desc: "Bring healthier living into neighbourhoods, schools, mosques and public spaces." },
  { Icon: User, title: "Individuals", desc: "Simple, evidence-based guidance to build healthier habits into everyday life." },
];

const PILLARS = [
  { Icon: Dumbbell, title: "Physical Activity", desc: "When movement is part of daily routines, it supports better health, higher energy and an improved quality of life." },
  { Icon: Brain, title: "Mental Well-being", desc: "Prioritising mental well-being strengthens overall health — shaped by how we cope, connect and manage stress." },
  { Icon: Apple, title: "Nutrition", desc: "Healthier eating becomes easier when nutritious food is affordable, available and clearly understood." },
  { Icon: Moon, title: "Sleep", desc: "Good sleep supports physical health, focus and resilience, helping other healthy routines stay consistent." },
];

const LEVERS = [
  { Icon: Building2, title: "Infrastructure & Facilities", desc: "Designing spaces so movement and healthier routines are easier to choose, close to where people live, learn and work." },
  { Icon: null, title: "Policy", desc: "Supporting healthier defaults through practical, data-led policies across multiple sectors." },
  { Icon: null, title: "Programmes", desc: "Bringing initiatives into everyday settings — making participation simple, inclusive and sustainable." },
  { Icon: null, title: "Health Literacy", desc: "Strengthening awareness so people can make informed choices with confidence." },
  { Icon: null, title: "Access to Services", desc: "Making it easier to access services and interventions that support prevention and well-being." },
];

const INITIATIVES = [
  { Icon: Megaphone, title: "OOH Healthy Policy", desc: "Removing unhealthy food and drink advertising from public-facing spaces across Abu Dhabi." },
  { Icon: Target, title: "Degayeg Initiative", desc: "Precise, data-led targets that help producers cut sugar and salt in key product categories." },
  { Icon: PartyPopper, title: "Festival of Health", desc: "An annual city-wide celebration of healthier living for families and communities." },
  { Icon: Tag, title: "Nutri-Mark Label", desc: "Front-of-pack labelling that makes healthier choices clearer at a glance." },
];

export default function WorkWithUs() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Partner With Us"
        title="Build a healthier future, together."
        subtitle="Healthy Living removes barriers to everyday healthy behaviours by creating environments where the healthy choice becomes the default choice — uniting government, businesses and communities."
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95"
          style={{ background: "#1D7945" }}
        >
          Get in touch <ArrowRight size={14} />
        </Link>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: "#1f3d2a" }}>
            Ways to get involved
          </h2>
          <p className="font-heading font-light max-w-3xl leading-relaxed mb-12" style={{ color: "#6b7a70" }}>
            We're working across government, private sector partners, communities and individuals to shape systems, policies and infrastructure that positively influence health.
          </p>
          <CardGrid items={PARTNERS} columns={4} />
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "#F7F6F2" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: "#1D7945" }}>
            One integrated approach
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: "#1f3d2a" }}>
            Four pillars
          </h2>
          <p className="font-heading font-light max-w-3xl leading-relaxed mb-12" style={{ color: "#6b7a70" }}>
            Healthy living depends on addressing four interconnected pillars together, not in isolation.
          </p>
          <CardGrid items={PILLARS} columns={4} />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: "#1D7945" }}>
            How we deliver
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: "#1f3d2a" }}>
            Five levers that shape daily life
          </h2>
          <p className="font-heading font-light max-w-3xl leading-relaxed mb-12" style={{ color: "#6b7a70" }}>
            To make healthier living easier at scale, we focus on five levers that shape everyday life.
          </p>
          <ol className="space-y-4">
            {LEVERS.map((l, i) => (
              <li key={l.title} className="flex items-start gap-5 rounded-2xl p-5" style={{ background: "#fff", border: "1px solid #e0e5de" }}>
                <span className="font-heading font-bold shrink-0" style={{ color: "#1D7945", fontSize: "1.6rem", lineHeight: 1, width: 34 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading font-bold text-base" style={{ color: "#1f3d2a" }}>{l.title}</h3>
                  <p className="font-heading font-light text-sm leading-relaxed mt-1" style={{ color: "#6b7a70" }}>{l.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "#F7F6F2" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: "#1D7945" }}>
            Our initiatives
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: "#1f3d2a" }}>
            25 strategic initiatives underway
          </h2>
          <p className="font-heading font-light max-w-3xl leading-relaxed mb-12" style={{ color: "#6b7a70" }}>
            Following the endorsement of Abu Dhabi's Healthy Living Strategy in November 2025, 25 strategic initiatives are underway to make healthy living easier in everyday life. The first phase focuses on food and physical activity.
          </p>
          <CardGrid items={INITIATIVES} columns={4} />
        </div>
      </section>

      <section className="py-16" style={{ background: "#1f3d2a" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
            Be part of Healthy Living
          </h2>
          <p className="font-heading font-light text-white/80 mb-8 max-w-2xl mx-auto">
            A whole-of-society commitment to healthier living drives Abu Dhabi forward. Tell us how you'd like to collaborate and our team will get back to you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-heading font-bold transition-all hover:opacity-90 active:scale-95"
            style={{ background: "#B0D5B5", color: "#1A2A1A" }}
          >
            Contact us <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <ClosingSections />
      <Footer />
    </div>
  );
}