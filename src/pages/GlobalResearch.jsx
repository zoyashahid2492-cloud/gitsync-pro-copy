import React, { useState } from "react";
import { FileText, ArrowRight, Download } from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import ClosingSections from "@/components/healthy-living/ClosingSections";

const INK = "#1f3d2a", GREEN = "#1D7945", GREEN_BG = "#E6F2EC", BG_ALT = "#F7F6F2", MUTED = "#6b7a70", BORDER = "#e0e5de";

const TOPICS = ["All", "Nutrition", "Physical Activity", "Children & Schools", "Mental Wellbeing", "Policy", "Public Health", "Healthy Cities", "Population Health"];

const PUBLICATIONS = [
  { title: "Abu Dhabi Healthy Living Strategy: Baseline Evidence Review", topic: "Policy", date: "Nov 2025" },
  { title: "School Meal Nutrition Guidelines: Impact on Student Outcomes", topic: "Children & Schools", date: "Sep 2025" },
  { title: "Degayeg Reformulation Targets: Sugar & Sodium Reduction", topic: "Nutrition", date: "Jul 2025" },
  { title: "Everyday Movement: Embedding Activity in Public Spaces", topic: "Physical Activity", date: "May 2025" },
  { title: "Mental Wellbeing and the Built Environment", topic: "Mental Wellbeing", date: "Mar 2025" },
  { title: "Population Health Trends in Abu Dhabi: 2024 Survey", topic: "Population Health", date: "Feb 2025" },
  { title: "Healthy Cities Index: A Benchmarking Framework", topic: "Healthy Cities", date: "Dec 2024" },
  { title: "Out-of-Home Advertising Policy & Food Choice", topic: "Public Health", date: "Oct 2024" },
];

export default function GlobalResearch() {
  const [topic, setTopic] = useState("All");
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const list = topic === "All" ? PUBLICATIONS : PUBLICATIONS.filter((p) => p.topic === topic);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Evidence & Insight"
        title="Global & Research."
        subtitle="Data, behavioural science and evidence guide every action — helping Healthy Living focus where it is needed most and build a model the world can learn from."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-4 gap-10">
          {/* Topics sidebar */}
          <aside className="lg:col-span-1">
            <p className="text-[11px] uppercase tracking-[0.18em] font-heading font-medium mb-4" style={{ color: MUTED }}>Topics</p>
            <div className="flex lg:flex-col gap-2 flex-wrap">
              {TOPICS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTopic(t)}
                  className="text-left text-sm px-4 py-2 rounded-full lg:rounded-xl font-heading font-medium transition-all whitespace-nowrap"
                  style={{
                    background: topic === t ? GREEN : BG_ALT,
                    color: topic === t ? "#fff" : INK,
                  }}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Stay Updated */}
            <div className="mt-8 p-5 rounded-2xl" style={{ background: GREEN_BG, border: `1px solid ${BORDER}` }}>
              <p className="text-xs uppercase tracking-[0.14em] font-heading font-bold mb-2" style={{ color: GREEN }}>Stay Updated</p>
              <p className="text-xs font-heading font-light mb-3" style={{ color: MUTED }}>Get new research and publications as they're published.</p>
              {subscribed ? (
                <p className="text-sm font-heading font-bold" style={{ color: INK }}>You're subscribed — thank you!</p>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }}
                  className="flex flex-col gap-2"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="px-3 py-2.5 text-sm rounded-lg font-heading outline-none"
                    style={{ background: "#fff", border: `1px solid ${BORDER}`, color: INK }}
                  />
                  <button className="py-2.5 text-sm rounded-full font-heading font-bold text-white transition-all hover:opacity-90" style={{ background: GREEN }}>
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </aside>

          {/* Publications */}
          <div className="lg:col-span-3">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: INK }}>Publications</h2>
            <p className="font-heading font-light max-w-2xl leading-relaxed mb-8" style={{ color: MUTED }}>
              Peer-reviewed papers, policy briefs and case studies — filter by topic, download as PDF.
            </p>
            <div className="space-y-3">
              {list.map((p) => (
                <div key={p.title} className="flex items-center gap-4 py-5 rounded-xl px-5" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                  <span className="flex items-center justify-center rounded-full shrink-0" style={{ width: 40, height: 40, background: BG_ALT }}>
                    <FileText size={18} style={{ color: MUTED }} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm md:text-base font-heading font-semibold" style={{ color: INK }}>{p.title}</div>
                    <div className="text-xs font-heading font-light mt-0.5" style={{ color: MUTED }}>{p.topic} · {p.date}</div>
                  </div>
                  <button className="flex items-center gap-1.5 text-xs rounded-full px-3 py-1.5 font-heading font-medium shrink-0" style={{ background: GREEN_BG, color: GREEN }}>
                    <Download size={11} /> PDF
                  </button>
                </div>
              ))}
              {list.length === 0 && (
                <p className="text-sm font-heading font-light" style={{ color: MUTED }}>No publications in this topic yet.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: "#1f3d2a" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">Contribute research</h2>
          <p className="font-heading font-light text-white/80 mb-8 max-w-2xl mx-auto">
            Collaborating with universities and institutions keeps our practice grounded in evidence. Tell us how you'd like to collaborate.
          </p>
          <a
            href="/work-with-us"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-heading font-bold transition-all hover:opacity-90 active:scale-95"
            style={{ background: "#B0D5B5", color: "#1A2A1A" }}
          >
            Collaborate on research with us <ArrowRight size={14} />
          </a>
        </div>
      </section>

      <ClosingSections withStats={false} />
      <Footer />
    </div>
  );
}