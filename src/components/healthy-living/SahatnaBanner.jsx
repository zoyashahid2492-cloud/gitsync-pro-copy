import React from "react";

export default function SahatnaBanner() {
  return (
    <section className="bg-[#f0f3ec]">
      <div className="max-w-6xl mx-auto px-10 py-14 flex items-center justify-between gap-8 flex-wrap">
        <div>
          <p className="font-heading font-black text-[#253926] text-xl leading-snug">
            Personal health tracking, device sync and health records.
          </p>
          <p className="font-heading font-light text-[#253926]/50 text-sm mt-1">
            Continue your health journey in Sahatna
          </p>
        </div>
        <button
          onClick={() => window.open("https://sahatna.ae", "_blank")}
          className="flex items-center gap-2 border border-[#253926] text-[#253926] font-heading font-bold text-sm px-7 py-3 rounded-full hover:bg-[#253926] hover:text-white active:scale-95 transition-all whitespace-nowrap"
        >
          Connect to Sahatna →
        </button>
      </div>
    </section>
  );
}