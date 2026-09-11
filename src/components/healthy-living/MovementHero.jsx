import React from "react";

const moveImg = "https://media.base44.com/images/public/6aa3a64fa8d590a56698abe0/b7bfbd232_generated_image.png";

export default function MovementHero() {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full flex items-center justify-center overflow-hidden">
      <img src={moveImg} alt="Woman walking in park with cityscape" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative text-center px-5">
        <span className="inline-block border border-white rounded-full px-5 py-1.5 text-[11px] uppercase tracking-widest font-medium text-white mb-6">
          Focus Area
        </span>
        <h2 className="text-white font-extrabold tracking-[0.4em] text-4xl sm:text-6xl lg:text-8xl">
          MOVEMENT
        </h2>
        <p className="mt-6 text-white/90 text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
          Healthy Living makes movement a natural and accessible part of everyday life — from
          neighbourhood walks to city-wide activations.
        </p>
      </div>
    </section>
  );
}