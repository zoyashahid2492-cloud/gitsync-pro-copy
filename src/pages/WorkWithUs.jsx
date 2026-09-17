import React, { useState } from "react";
import { GraduationCap, School, Landmark, Stethoscope, Building2, Users, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import PartnerInitiatives from "@/components/healthy-living/PartnerInitiatives";
import ProgrammeImpact from "@/components/healthy-living/ProgrammeImpact";
import PartnerCoalition from "@/components/healthy-living/PartnerCoalition";
import PartnershipTiers from "@/components/healthy-living/PartnershipTiers";
import WhoIsNext from "@/components/healthy-living/WhoIsNext";

const INK = "#1f3d2a", GREEN = "#1D7945", GREEN_BG = "#E6F2EC", BG_ALT = "#F7F6F2", MUTED = "#6b7a70", BORDER = "#e0e5de";

const AUDIENCES = [
  { Icon: GraduationCap, title: "Universities", desc: "Research partnerships, evidence reviews and joint programmes." },
  { Icon: School, title: "Schools", desc: "Nutrition guidelines, active school days and family resources." },
  { Icon: Landmark, title: "Government", desc: "Policy alignment and shared delivery across entities." },
  { Icon: Stethoscope, title: "Healthcare", desc: "Prevention-first care and clinical expertise." },
  { Icon: Building2, title: "Private Sector", desc: "Reformulation, retail and healthier product environments." },
  { Icon: Users, title: "Community", desc: "Neighbourhoods, mosques and local activation." },
];

const AREAS = ["Nutrition", "Physical Activity", "Children & Schools", "Mental Wellbeing", "Policy", "Research"];
const TYPES = ["Research Partnership", "Programme Delivery", "Policy", "Funding", "Other"];

export default function WorkWithUs() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", org: "", role: "", area: AREAS[0], type: TYPES[0], message: "", contact: "" });

  const set = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Collaborate With Us"
        title="Build a healthier future, together."
        subtitle="Healthy Living unites government, businesses, healthcare, academia and communities to shape the everyday environments that make healthier choices the default."
      />

      <PartnerInitiatives />
      <ProgrammeImpact />
      <PartnerCoalition />
      <PartnershipTiers />
      <WhoIsNext />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: INK }}>Who can collaborate?</h2>
          <p className="font-heading font-light max-w-3xl leading-relaxed mb-12" style={{ color: MUTED }}>
            Whatever your sector, there's a way to help make healthy living easier for everyone in Abu Dhabi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {AUDIENCES.map((a) => {
              const Icon = a.Icon;
              return (
                <div key={a.title} className="rounded-2xl p-6" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                  <span className="flex items-center justify-center rounded-full mb-4" style={{ width: 48, height: 48, background: GREEN_BG }}>
                    <Icon size={22} strokeWidth={1.5} style={{ color: GREEN }} />
                  </span>
                  <h3 className="font-heading font-bold text-base mb-1.5" style={{ color: INK }}>{a.title}</h3>
                  <p className="font-heading font-light text-sm leading-relaxed" style={{ color: MUTED }}>{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="partner-form" className="py-16 md:py-24" style={{ background: BG_ALT }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: GREEN }}>Start the conversation</p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-10" style={{ color: INK }}>Tell us how you'd like to collaborate</h2>

          {sent ? (
            <div className="rounded-2xl p-10 text-center" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
              <span className="flex items-center justify-center rounded-full mx-auto mb-5" style={{ width: 56, height: 56, background: GREEN_BG }}>
                <CheckCircle2 size={28} style={{ color: GREEN }} />
              </span>
              <h3 className="font-heading font-bold text-xl mb-2" style={{ color: INK }}>Message received.</h3>
              <p className="font-heading font-light text-sm" style={{ color: MUTED }}>We will be in touch within 5 working days.</p>
              <button
                onClick={() => { setSent(false); setForm({ name: "", org: "", role: "", area: AREAS[0], type: TYPES[0], message: "", contact: "" }); }}
                className="mt-6 text-sm font-heading font-bold rounded-full px-6 py-2.5 transition-all hover:opacity-90"
                style={{ background: GREEN_BG, color: GREEN }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-2xl p-6 md:p-8 space-y-4"
              style={{ background: "#fff", border: `1px solid ${BORDER}` }}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Name" value={form.name} onChange={set("name")} placeholder="Your name" />
                <Field label="Organisation" value={form.org} onChange={set("org")} placeholder="Organisation" />
                <Field label="Role" value={form.role} onChange={set("role")} placeholder="Your role" />
                <Select label="Area of Interest" value={form.area} onChange={set("area")} options={AREAS} />
                <Select label="Type of Collaboration" value={form.type} onChange={set("type")} options={TYPES} />
                <Field label="Contact Details" value={form.contact} onChange={set("contact")} placeholder="Email or phone" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.1em] mb-1.5 font-heading font-medium" style={{ color: MUTED }}>Message</label>
                <textarea
                  required
                  value={form.message}
                  onChange={set("message")}
                  rows={4}
                  placeholder="Tell us how you'd like to collaborate…"
                  className="w-full px-3 py-2.5 text-sm focus:outline-none resize-none rounded-lg font-heading"
                  style={{ background: BG_ALT, border: `1px solid ${BORDER}`, color: INK }}
                />
              </div>
              <button className="w-full py-3 text-sm rounded-full font-heading font-bold text-white transition-all hover:opacity-90" style={{ background: GREEN }}>
                Send message
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.1em] mb-1.5 font-heading font-medium" style={{ color: MUTED }}>{label}</label>
      <input
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2.5 text-sm focus:outline-none rounded-lg font-heading"
        style={{ background: BG_ALT, border: `1px solid ${BORDER}`, color: INK }}
      />
    </div>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.1em] mb-1.5 font-heading font-medium" style={{ color: MUTED }}>{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2.5 text-sm focus:outline-none rounded-lg font-heading"
        style={{ background: BG_ALT, border: `1px solid ${BORDER}`, color: INK }}
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}