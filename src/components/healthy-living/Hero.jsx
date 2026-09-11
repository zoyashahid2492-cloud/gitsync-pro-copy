import React from "react";

const heroImg = "https://media.base44.com/images/public/6aa3a64fa8d590a56698abe0/f2a279118_generated_image.png";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full flex flex-col">
      <div className="absolute inset-0">
        <img src={heroImg} alt="People walking outdoors in Abu Dhabi" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-5 pt-20">
        <h1 className="text-white font-extrabold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-7xl max-w-4xl">
          Healthier choices.
          <br />
          Healthier lives.
          <br />
          Healthier futures.
        </h1>
        <div className="mt-9 flex flex-col sm:flex-row gap-3">
          <button className="bg-[#cce8dd] text-[#2d2d2d] px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#b9dccd] transition-colors">
            Choose healthier, every day
          </button>
          <button className="border border-white text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors">
            How we work
          </button>
        </div>
      </div>

      {/* Footer strip */}
      <div className="relative bg-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-4 flex flex-col lg:flex-row items-center justify-between gap-3">
          <p className="text-[11px] uppercase tracking-wider font-semibold text-white/80">
            Led by the Abu Dhabi Department of Health
          </p>
          <p className="text-[13px] text-white/70 text-center max-w-md">
            Personal health tracking, device sync &amp; health records — continue your health journey in Sahatna
          </p>
          <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors">
            Connect to Sahatna
          </button>
        </div>
      </div>
    </section>
  );
}