import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import ClosingSections from "@/components/healthy-living/ClosingSections";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar solid />
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        subtitle="Have a question, a partnership idea or want to learn more? We'd love to hear from you."
      />

      <section className="py-16 md:py-24" style={{ background: "#F7F6F2" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: "#1f3d2a" }}>
              Let's talk
            </h2>
            <p className="font-heading font-light leading-relaxed mb-10" style={{ color: "#6b7a70" }}>
              Reach out and our team will get back to you. Whether you're a government partner, a business, a community group or an individual — there's a way to get involved.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center rounded-full shrink-0" style={{ width: 44, height: 44, background: "#D9E4D9" }}>
                  <Mail size={20} strokeWidth={1.5} style={{ color: "#5e7062" }} />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] font-heading font-bold" style={{ color: "#8c9d94" }}>Email</p>
                  <p className="font-heading font-light text-sm mt-0.5" style={{ color: "#1f3d2a" }}>info@healthyliving.abudhabi</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center rounded-full shrink-0" style={{ width: 44, height: 44, background: "#D9E4D9" }}>
                  <MapPin size={20} strokeWidth={1.5} style={{ color: "#5e7062" }} />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] font-heading font-bold" style={{ color: "#8c9d94" }}>Address</p>
                  <p className="font-heading font-light text-sm mt-0.5" style={{ color: "#1f3d2a" }}>Abu Dhabi Department of Health, UAE</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-7" style={{ border: "1px solid #e0e5de" }}>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <CheckCircle2 size={40} style={{ color: "#1D7945" }} />
                <p className="font-heading font-bold text-lg mt-4" style={{ color: "#1f3d2a" }}>Thank you!</p>
                <p className="font-heading font-light text-sm mt-2 max-w-xs" style={{ color: "#6b7a70" }}>
                  Your message has been received. Our team will be in touch shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full px-5 py-2 text-[12px] font-heading font-bold uppercase tracking-[0.14em] text-white"
                  style={{ background: "#1f3d2a" }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div>
                  <label className="text-[11px] uppercase tracking-[0.14em] font-heading font-bold" style={{ color: "#8c9d94" }}>Name</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full mt-1.5 rounded-xl px-4 py-3 text-sm font-heading font-light outline-none"
                    style={{ background: "#f7f9f6", border: "1px solid #e0e5de", color: "#2a3a2e" }}
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-[0.14em] font-heading font-bold" style={{ color: "#8c9d94" }}>Email</label>
                  <input
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full mt-1.5 rounded-xl px-4 py-3 text-sm font-heading font-light outline-none"
                    style={{ background: "#f7f9f6", border: "1px solid #e0e5de", color: "#2a3a2e" }}
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-[0.14em] font-heading font-bold" style={{ color: "#8c9d94" }}>Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full mt-1.5 rounded-xl px-4 py-3 text-sm font-heading font-light outline-none resize-none"
                    style={{ background: "#f7f9f6", border: "1px solid #e0e5de", color: "#2a3a2e" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95"
                  style={{ background: "#1D7945" }}
                >
                  Send message <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <ClosingSections />
      <Footer />
    </div>
  );
}