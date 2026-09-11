import React from "react";

const moveImg = "https://media.base44.com/images/public/6aa3a64fa8d590a56698abe0/b7bfbd232_generated_image.png";

export default function MovementHero() {
  return (
    <section className="relative h-[80vh] min-h-[520px] w-full flex items-center justify-center overflow-hidden">
      <img src={moveImg} alt="Woman walking in park with cityscape" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative text-center px-5 max-w-2xl">
        <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-white/70 mb-5">
          Focus Area
        </p>
        <h2 className="text-white font-extrabold tracking-[0.35em] text-4xl sm:text-6xl lg:text-7xl">
          MOVEMENT
        </h2>
        <p className="mt-6 text-white/90 text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
          Healthy Living makes movement a natural and accessible part of everyday life, shifting
          activity beyond sport by embedding it into daily routines, neighbourhoods, workplaces,
          schools, and public spaces.
        </p>
      </div>
    </section>
  );
}