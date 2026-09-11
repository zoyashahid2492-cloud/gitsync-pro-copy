import React from "react";

const imgMovementBg =
  "https://media.base44.com/images/public/6aa3a64fa8d590a56698abe0/c879eedb6_generated_image.png";

export default function MovementHero() {
  return (
    <section className="relative overflow-hidden w-full" style={{ height: "118vh" }}>
      <img
        src={imgMovementBg}
        alt="Movement — Abu Dhabi waterfront"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 20%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />

      <div className="absolute left-1/2 -translate-x-1/2 z-20" style={{ top: "32%" }}>
        <span className="inline-flex items-center px-5 py-1.5 rounded-full border border-white/70 text-white text-[11px] uppercase tracking-[0.2em] font-heading font-light bg-white/10 backdrop-blur-sm">
          Focus Area
        </span>
      </div>

      <div className="absolute left-0 right-0 z-10 text-center" style={{ top: "46%" }}>
        <span
          className="font-heading font-light text-white uppercase w-full text-center"
          style={{
            fontSize: "clamp(2rem, 7vw, 6rem)",
            letterSpacing: "clamp(0.5em, 2.6vw, 0.95em)",
            lineHeight: 1,
            display: "inline-block",
            paddingLeft: "clamp(0.5em, 2.6vw, 0.95em)",
          }}
        >
          Movement
        </span>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 z-20 text-center w-full px-6" style={{ bottom: "9%" }}>
        <p
          className="font-heading font-normal text-white leading-snug mx-auto"
          style={{ fontSize: "0.92rem", maxWidth: "620px" }}
        >
          Healthy Living makes movement a natural and accessible part of everyday life, shifting activity
          <br />
          beyond sport by embedding it into daily routines, neighbourhoods, workplaces, schools, and public spaces.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20" style={{ height: 28, background: "#1A201A" }} />
    </section>
  );
}