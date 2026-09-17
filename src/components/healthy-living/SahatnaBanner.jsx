import React from "react";

export default function SahatnaBanner({ label, desc }) {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 flex items-center justify-between gap-8 flex-wrap">
        <div>
          <p className="font-heading font-bold text-[#1A1A1A] text-xl leading-snug">
            {label || "Personal health tracking, device sync and health records."}
          </p>
          <p className="font-heading font-normal text-sm mt-1.5" style={{ color: "#757575" }}>
            {desc || "Continue your health journey in Sahatna."}
          </p>
        </div>
        <a
          href="https://sahatna.gov.ae"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-white font-heading font-medium text-sm px-7 py-3 rounded-full hover:opacity-90 active:scale-95 transition-all whitespace-nowrap"
          style={{ background: "#0E1D13" }}
        >
          Connect to Sahatna
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 2H2v10h10V9" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 2h4v4M12 2L6.5 7.5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}