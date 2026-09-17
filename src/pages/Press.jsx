import React, { useState } from "react";
import { Download } from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import ClosingSections from "@/components/healthy-living/ClosingSections";

const INK = "#1f3d2a", GREEN = "#1D7945", GREEN_BG = "#E6F2EC", BG_ALT = "#F7F6F2", MUTED = "#6b7a70", BORDER = "#e0e5de";

const RELEASES = [
  ["Healthy Living Reaches 120,000 Registered Residents", "10 Jul 2026", "1.2 MB"],
  ["Festival of Health 2025 Official Press Release", "5 May 2025", "0.8 MB"],
  ["Nutri-Mark Label Expansion Announcement", "3 Jul 2026", "1.1 MB"],
];

export default function Press() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Press"
        title="Press & Media."
        subtitle="Resources and contacts for media professionals covering Healthy Living."
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.18em] mb-5 font-heading font-medium" style={{ color: MUTED }}>Press Releases</p>
            {RELEASES.map(([t, d, s]) => (
              <div key={t} className="flex items-center gap-4 py-4" style={{ borderBottom: `1px solid ${BORDER}` }}>
                <div className="flex-1">
                  <div className="text-sm font-heading font-semibold mb-0.5" style={{ color: INK }}>{t}</div>
                  <div className="text-xs font-heading font-light" style={{ color: MUTED }}>{d} · {s}</div>
                </div>
                <button className="flex items-center gap-1.5 text-xs rounded-full px-3 py-1.5 font-heading" style={{ background: BG_ALT, color: MUTED }}>
                  <Download size={11} /> PDF
                </button>
              </div>
            ))}
          </div>

          <div>
            <div className="p-6 rounded-2xl" style={{ background: BG_ALT, border: `1px solid ${BORDER}` }}>
              <p className="text-xs uppercase tracking-[0.15em] mb-4 font-heading font-medium" style={{ color: MUTED }}>Media Contact</p>
              {sent ? (
                <div className="py-4">
                  <div className="text-sm font-heading font-bold mb-1" style={{ color: INK }}>Message sent.</div>
                  <p className="text-xs font-heading font-light" style={{ color: MUTED }}>We will respond within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                  {[
                    { l: "Name", v: name, set: setName, p: "Your name" },
                    { l: "Email", v: email, set: setEmail, p: "your@email.com" },
                  ].map((f) => (
                    <div key={f.l}>
                      <label className="block text-xs uppercase tracking-[0.1em] mb-1.5 font-heading font-medium" style={{ color: MUTED }}>{f.l}</label>
                      <input
                        value={f.v}
                        onChange={(e) => f.set(e.target.value)}
                        placeholder={f.p}
                        required
                        className="w-full px-3 py-2.5 text-sm focus:outline-none rounded-lg font-heading"
                        style={{ background: "#fff", border: `1px solid ${BORDER}`, color: INK }}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.1em] mb-1.5 font-heading font-medium" style={{ color: MUTED }}>Message</label>
                    <textarea
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      rows={4}
                      placeholder="Your enquiry…"
                      className="w-full px-3 py-2.5 text-sm focus:outline-none resize-none rounded-lg font-heading"
                      style={{ background: "#fff", border: `1px solid ${BORDER}`, color: INK }}
                    />
                  </div>
                  <button className="w-full py-3 text-sm rounded-full font-heading font-bold text-white transition-all hover:opacity-90" style={{ background: GREEN }}>Send</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <ClosingSections withStats={false} />
      <Footer />
    </div>
  );
}