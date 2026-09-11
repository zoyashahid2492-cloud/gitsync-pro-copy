import React from "react";

const imgHeroBg =
  "https://media.base44.com/images/public/6aa3a64fa8d590a56698abe0/d8cd6fd09_welnessinADshore.png";

export default function Hero() {
  return (
    <section className="relative flex flex-col bg-[#1a2a1a] overflow-hidden" style={{ minHeight: "100svh" }}>
      <img
        src={imgHeroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center top", transform: "scale(1.3) translateY(-14%)", transformOrigin: "center top" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/60" />

      {/* Hero content — centered in the torso gap, below the subjects' faces */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-start text-center px-10 pt-[41vh]">
        <h1
          className="font-heading font-black text-white leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2.7rem, 5.6vw, 5.8rem)" }}
        >
          Healthier choices.<br />
          Healthier lives.<br />
          <span style={{ color: "#B0D5B5" }}>Healthier futures.</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
          <button className="bg-transparent text-white font-heading font-medium px-5 py-2 rounded-full text-[12px] border border-white hover:bg-white/10 active:scale-95 transition-all">
            Choose healthier, every day
          </button>
          <button className="bg-transparent font-heading font-medium px-5 py-2 rounded-full text-[12px] border border-white hover:bg-white/10 active:scale-95 transition-all" style={{ color: "#B0D0B5" }}>
            How we work
          </button>
        </div>

        <p className="text-white text-[11px] uppercase tracking-[0.25em] mt-10 font-heading font-light">
          Led by the Abu Dhabi Department of Health
        </p>
      </div>

      {/* Divider + Sahatna footer bar */}
      <div className="relative z-10 px-10">
        <div className="h-px w-full bg-white/25 max-w-3xl mx-auto" />
      </div>
      <div className="relative z-10 px-10 py-6 flex flex-col items-center gap-4 text-center">
        <p className="text-white text-sm font-heading leading-snug max-w-2xl">
          <span className="font-bold">Personal health tracking, device sync &amp; health records</span>
          <span className="text-white/75"> Continue your health journey in </span>
          <span className="font-bold">Sahatna</span>
        </p>
        <button
          onClick={() => window.open("https://sahatna.ae", "_blank")}
          className="flex items-center gap-2 bg-[#B0D5B5] text-[#1A1A1A] font-heading font-bold text-sm px-6 py-2.5 rounded-full hover:bg-[#a3c9a8] active:scale-95 transition-all whitespace-nowrap"
        >
          Connect to Sahatna
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12L12 2M12 2H6M12 2V8" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}