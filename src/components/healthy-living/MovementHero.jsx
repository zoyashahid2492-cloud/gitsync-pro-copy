import React from "react";

const imgMovementBg =
  "https://table-polo-97158241.figma.site/assets/38d3ad8f054fdf37cc38e1b3ea84379c57dc7e25-CQOOf-VL.png";

export default function MovementHero() {
  return (
    <section className="relative overflow-hidden w-full" style={{ height: "100vh" }}>
      <img
        src={imgMovementBg}
        alt="Movement — Abu Dhabi waterfront"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 20%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />

      <div className="absolute left-1/2 -translate-x-1/2 z-20" style={{ top: "38%" }}>
        <span className="inline-flex items-center px-5 py-1.5 rounded-full border border-white/70 text-white text-[11px] uppercase tracking-[0.2em] font-heading font-light bg-white/10 backdrop-blur-sm">
          Focus Area
        </span>
      </div>

      <div className="absolute left-0 right-0 z-10 text-center" style={{ top: "54%" }}>
        <span
          className="font-heading text-white uppercase block w-full"
          style={{
            fontSize: "clamp(4rem, 11.5vw, 11rem)",
            letterSpacing: "0.55em",
            lineHeight: 1,
            paddingLeft: "0.55em",
          }}
        >
          Movement
        </span>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 z-20 text-center" style={{ bottom: "8%" }}>
        <p
          className="font-heading font-light text-white/85 leading-relaxed"
          style={{ fontSize: "0.9rem", maxWidth: "640px" }}
        >
          Healthy Living makes movement a natural and accessible part of everyday life, shifting activity
          <br />
          beyond sport by embedding it into daily routines, neighbourhoods, workplaces, schools, and public spaces.
        </p>
      </div>
    </section>
  );
}