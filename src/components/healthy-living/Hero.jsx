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
        style={{ objectPosition: "60% center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

      <div className="relative z-10 flex-1 flex flex-col justify-end px-10 pb-10 pt-16">
        <h1
          className="font-heading font-black text-white leading-[1.05]"
          style={{ fontSize: "clamp(2.8rem, 5.8vw, 6rem)" }}
        >
          Healthier choices.<br />
          Healthier lives.<br />
          <span style={{ color: "#b3dbbb" }}>Healthier futures.</span>
        </h1>

        <div className="flex flex-wrap gap-3 mt-8">
          <button className="bg-[#1c2b1c]/90 text-white font-heading font-bold px-7 py-3 rounded-full text-sm border border-white/20 hover:bg-[#253926] active:scale-95 transition-all backdrop-blur-sm">
            Choose healthier, every day
          </button>
          <button className="bg-transparent text-white font-heading font-bold px-7 py-3 rounded-full text-sm border border-white/60 hover:bg-white/10 active:scale-95 transition-all">
            How we work
          </button>
        </div>

        <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] mt-5 font-heading font-light">
          Led by the Abu Dhabi Department of Health
        </p>
      </div>

      <div className="relative z-10 border-t border-white/15 bg-black/35 backdrop-blur-md px-10 py-4 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-white text-sm font-heading leading-snug">
          <span className="font-heading font-black">Personal health tracking, device sync &amp; health records</span>
          <span className="text-white/65"> Continue your health journey in </span>
          <span className="font-heading font-bold">Sahatna</span>
        </p>
        <button
          onClick={() => window.open("https://sahatna.ae", "_blank")}
          className="flex items-center gap-2 bg-[#b3dbbb] text-[#1c2b1c] font-heading font-bold text-sm px-6 py-2.5 rounded-full hover:bg-[#9fcca7] active:scale-95 transition-all whitespace-nowrap"
        >
          Connect to Sahatna
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12L12 2M12 2H6M12 2V8" stroke="#1c2b1c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}