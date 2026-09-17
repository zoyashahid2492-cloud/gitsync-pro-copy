import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import ClosingSections from "@/components/healthy-living/ClosingSections";

const INK = "#1f3d2a", GREEN = "#1D7945", GREEN_BG = "#E6F2EC", BG_ALT = "#F7F6F2", MUTED = "#6b7a70", BORDER = "#e0e5de";

const FAQ_DATA = [
  {
    cat: "About the Programme",
    qa: [
      ["What is Healthy Living?", "Healthy Living is Abu Dhabi's government-led commitment to prevention and wellbeing — enabling longer, healthier, and more fulfilling lives by making healthier choices easier, more accessible, and part of everyday life. Led by the Abu Dhabi Department of Health, it brings together government entities, the private sector, and communities to shape the everyday environments and conditions that influence how people live, move, eat, and connect."],
      ["What is the Healthy Living Unit (HLU)?", "HLU is a whole-of-government delivery unit within the Department of Health Abu Dhabi. It orchestrates the cross-sectoral Healthy Living Strategy, provides intelligence and insights, accelerates initiative delivery, and develops policy — in service of the vision: the most active population, supported by a healthy food system, within a health-conscious society."],
      ["What is Sahatna?", "Sahatna is the primary platform for personal health management, tracking, monitoring, and device integrations. The Healthy Living website focuses on discovery, education, and engagement. For tracking and personalisation, continue in Sahatna."],
    ],
  },
  {
    cat: "Research & Collaboration",
    qa: [
      ["How do I access research publications?", "Visit the Global & Research section to browse peer-reviewed papers, policy briefs, and case studies by topic. Most are available as free PDF downloads."],
      ["How do I collaborate with Healthy Living?", "Use the Collaborate With Us form to submit your organisation's details and area of interest. We typically respond within 5 working days."],
    ],
  },
  {
    cat: "Schools & Children",
    qa: [
      ["How does my school get involved?", "Contact us via the Collaborate With Us page. Select 'Schools & Children' as the area of interest."],
    ],
  },
];

export default function FAQ() {
  const [openCat, setOpenCat] = useState(FAQ_DATA[0].cat);
  const [openQ, setOpenQ] = useState(null);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked."
        subtitle="Common questions about the Healthy Living programme."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          {FAQ_DATA.map((c) => (
            <div key={c.cat} className="mb-2">
              <button
                onClick={() => setOpenCat(openCat === c.cat ? null : c.cat)}
                className="w-full flex items-center justify-between p-4 rounded-xl text-left transition-colors"
                style={{ background: openCat === c.cat ? GREEN_BG : BG_ALT }}
              >
                <span className="text-sm font-heading font-bold" style={{ color: INK }}>{c.cat}</span>
                <ChevronDown size={15} style={{ color: MUTED, transform: openCat === c.cat ? "rotate(180deg)" : "none", transition: "transform .2s" }} />
              </button>
              <AnimatePresence initial={false}>
                {openCat === c.cat && (
                  <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                    <div className="pt-2 pl-2 space-y-2 pb-2">
                      {c.qa.map(([question, answer]) => (
                        <div key={question} className="rounded-xl overflow-hidden" style={{ background: BG_ALT }}>
                          <button
                            onClick={() => setOpenQ(openQ === question ? null : question)}
                            className="w-full flex items-center justify-between px-4 py-4 text-left"
                          >
                            <span className="text-sm pr-4 font-heading font-medium" style={{ color: INK }}>{question}</span>
                            <ChevronDown size={13} style={{ color: MUTED, transform: openQ === question ? "rotate(180deg)" : "none", transition: "transform .2s", flexShrink: 0 }} />
                          </button>
                          <AnimatePresence initial={false}>
                            {openQ === question && (
                              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                <p className="px-4 pb-4 text-sm font-heading font-light leading-relaxed" style={{ color: MUTED }}>{answer}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <div className="pt-10 flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm font-heading font-light" style={{ color: MUTED }}>Still have a question?</p>
            <Link
              to="/ask-ai"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm rounded-full font-heading font-bold transition-all hover:opacity-90"
              style={{ background: GREEN_BG, color: GREEN }}
            >
              Ask our AI <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}