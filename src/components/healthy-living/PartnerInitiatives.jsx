import React from "react";
import { Play, ArrowRight } from "lucide-react";
import "./marquee.css";

const INK = "#1f3d2a", GREEN = "#1D7945", MUTED = "#6b7a70", BORDER = "#e0e5de";

const HERO_STATS = [
  ["25", "Strategic initiatives"],
  ["120K+", "Residents reached"],
  ["50K+", "Festival attendees"],
];

const STORIES = [
  { title: "Healthy Living — Our Story", time: "3 min 42 sec", img: "https://images.unsplash.com/photo-1526129314478-62edf7e43495?w=900&h=600&fit=crop&auto=format" },
  { title: "Festival of Health 2025", time: "2 min 18 sec", img: "https://images.unsplash.com/photo-1540039155739-5e0e5c4d0a8b?w=900&h=600&fit=crop&auto=format" },
  { title: "The Degayeg Initiative", time: "1 min 55 sec", img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&h=600&fit=crop&auto=format" },
];

const MARQUEE = [
  "Degayeg Initiative", "Festival of Health", "Nutri-Mark Label", "OOH Healthy Policy",
  "25 Strategic Initiatives", "120,000 Residents Connected",
];

const INITIATIVES = [
  {
    badge: "Active Lifestyles · 40K+ monthly users",
    title: "Degayeg Initiative",
    desc: "Abu Dhabi's flagship trail network — over 18km of walking and cycling paths connecting parks, communities, and coastline. Partner brands activate at trail nodes reaching 40,000+ monthly users.",
    img: "https://images.unsplash.com/photo-1502228306759-3946d9f9e4d7?w=1200&h=700&fit=crop&auto=format",
  },
  {
    badge: "Flagship Event · 50K+ attendees",
    title: "Festival of Health",
    desc: "The emirate's largest annual wellness event, drawing 50,000+ residents to the Corniche. Sponsor the main stage, run branded activations, or power the nutrition village.",
    img: "https://images.unsplash.com/photo-1573463908761-567b9356c64f?w=1200&h=700&fit=crop&auto=format",
  },
  {
    badge: "Healthy Eating · 500+ products",
    title: "Nutri-Mark Label",
    desc: "Abu Dhabi's official front-of-pack nutrition rating system. Products carrying the Nutri-Mark see measurable uplift in consumer trust and purchase intent across 500+ SKUs.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=700&fit=crop&auto=format",
  },
  {
    badge: "Policy · Government-mandated",
    title: "OOH Healthy Advertising",
    desc: "The UAE's first government-mandated healthy advertising policy, requiring out-of-home advertisers in Abu Dhabi to allocate inventory to public health messages.",
    img: "https://images.unsplash.com/photo-1556912172-6838-c80f2d6a35f?w=1200&h=700&fit=crop&auto=format",
  },
];

export default function PartnerInitiatives() {
  return (
    <>
      {/* Hero stats + stories */}
      <section className="pt-16 md:pt-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-heading font-bold text-3xl md:text-5xl leading-[1.05] max-w-3xl mb-4" style={{ color: INK }}>
            Partner with Abu Dhabi's health movement.
          </h2>
          <p className="font-heading font-light text-lg max-w-2xl leading-relaxed mb-8" style={{ color: MUTED }}>
            Healthy Living Abu Dhabi connects companies with 120,000+ residents through government-backed wellness initiatives, flagship events, and nutrition programmes.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <a href="#partner-form" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95" style={{ background: GREEN }}>
              Apply to Partner <ArrowRight size={15} />
            </a>
            <a href="#initiatives" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-bold transition-all" style={{ border: `1px solid ${INK}`, color: INK }}>
              Explore Initiatives
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 max-w-2xl">
            {HERO_STATS.map(([n, l]) => (
              <div key={l}>
                <p className="font-heading font-black text-3xl md:text-5xl leading-none" style={{ color: INK }}>{n}</p>
                <p className="text-[11px] md:text-xs font-heading font-medium mt-2" style={{ color: MUTED }}>{l}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {STORIES.map((s) => (
              <a key={s.title} href="#initiatives" className="group relative rounded-2xl overflow-hidden block" style={{ border: `1px solid ${BORDER}` }}>
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,37,32,0.78), transparent 60%)" }} />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-heading font-bold text-white" style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(4px)" }}>
                  <Play size={11} /> {s.time}
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-heading font-bold text-white text-sm leading-tight">{s.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-10 mt-8 overflow-hidden" style={{ background: "#1f3d2a" }}>
        <div className="flex whitespace-nowrap animate-marquee">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="mx-6 inline-flex items-center gap-6 text-base md:text-lg font-heading font-bold tracking-wide" style={{ color: "#E6F2EC" }}>
              {m} <span style={{ color: GREEN }}>◆</span>
            </span>
          ))}
        </div>
      </section>

      {/* Four platforms */}
      <section id="initiatives" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: GREEN }}>The Initiatives</p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-12" style={{ color: INK }}>Four platforms. One city-wide mission.</h2>
          <div className="space-y-5">
            {INITIATIVES.map((it) => (
              <div key={it.title} className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                <div className="aspect-[16/10] md:aspect-auto overflow-hidden order-1">
                  <img src={it.img} alt={it.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center order-2">
                  <p className="text-[11px] uppercase tracking-[0.14em] font-heading font-bold mb-3" style={{ color: GREEN }}>{it.badge}</p>
                  <h3 className="font-heading font-bold text-xl md:text-2xl mb-3" style={{ color: INK }}>{it.title}</h3>
                  <p className="font-heading font-light text-sm leading-relaxed mb-5" style={{ color: MUTED }}>{it.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    <a href="#partner-form" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-heading font-bold text-white transition-all hover:opacity-90" style={{ background: GREEN }}>
                      Partner on this <ArrowRight size={13} />
                    </a>
                    <button className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-heading font-bold transition-all" style={{ border: `1px solid ${INK}`, color: INK }}>
                      <Play size={12} /> Watch video
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}