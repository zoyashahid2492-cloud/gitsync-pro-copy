import React from "react";

export default function FocusBand({ eyebrow, title, desc }) {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #1A2A1A 0%, #1f3d2a 55%, #2a4a30 100%)" }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
        {eyebrow && (
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/50 text-white text-[11px] uppercase tracking-[0.2em] font-heading font-light bg-white/10 mb-6">
            {eyebrow}
          </span>
        )}
        <h2
          className="font-heading font-black text-white leading-[1.05] tracking-tight max-w-3xl"
          style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
        >
          {title}
        </h2>
        {desc && (
          <p
            className="font-heading font-light text-white/85 mt-5 max-w-2xl"
            style={{ fontSize: "clamp(14px, 1.3vw, 17px)", lineHeight: 1.5 }}
          >
            {desc}
          </p>
        )}
      </div>
    </section>
  );
}