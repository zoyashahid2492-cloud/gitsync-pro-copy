import React from "react";

const imgHeroBg =
  "https://table-polo-97158241.figma.site/assets/b31e5a73d7a1666a91e50d6641bad98ac3ad5efd-CPCMhZpw.png";

export default function Hero() {
  return (
    <section className="relative flex flex-col bg-[#1a2a1a] overflow-hidden" style={{ minHeight: "100svh" }}>
      <img
        src={imgHeroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "55% 22%" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.15) 45%, rgba(0,0,0,.45))" }}
      />

      {/* Hero content — first line cap top sits 408px from section top */}
      <div
        className="absolute left-0 right-0 z-10 flex flex-col items-center text-center px-10"
        style={{ top: 408 }}
      >
        <h1
          className="font-heading text-white whitespace-nowrap"
          style={{ fontSize: "100px", lineHeight: "94px", letterSpacing: "-0.02em", fontWeight: 900 }}
        >
          Healthier choices.<br />
          Healthier lives.<br />
          <span style={{ color: "#A8DCB8" }}>Healthier futures.</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button className="bg-transparent text-white font-heading font-bold px-8 py-3.5 rounded-full text-sm border border-white hover:bg-white/10 active:scale-95 transition-all">
            Choose healthier, every day
          </button>
          <button
            className="bg-transparent font-heading font-bold px-8 py-3.5 rounded-full text-sm hover:bg-white/10 active:scale-95 transition-all"
            style={{ color: "#A8DCB8", borderColor: "#A8DCB8", borderWidth: 1 }}
          >
            How we work
          </button>
        </div>

        <p
          className="font-heading uppercase"
          style={{ fontSize: "9px", fontWeight: 300, letterSpacing: ".18em", color: "rgba(255,255,255,.75)", marginTop: 40 }}
        >
          Led by the Abu Dhabi Department of Health
        </p>
      </div>

      {/* Divider + Sahatna footer bar */}
      <div className="relative z-10 px-10 mt-auto">
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
          className="flex items-center gap-2 bg-[#A8DCB8] text-[#1A1A1A] font-heading font-bold text-sm px-6 py-2.5 rounded-full hover:bg-[#97cfac] active:scale-95 transition-all whitespace-nowrap"
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