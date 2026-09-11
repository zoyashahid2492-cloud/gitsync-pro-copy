import React from "react";
import { ExternalLink } from "lucide-react";

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
        <div className="mt-9 flex flex-col items-center gap-5">
          <button className="bg-[#B2D8C3] text-[#1A2621] px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#9fc9bd] transition-colors">
            Explore our plans
          </button>
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/85">
            Led by the Abu Dhabi Department of Health
          </p>
        </div>
      </div>

      {/* Footer strip */}
      <div className="relative bg-[#1A2621]">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-4 flex flex-col lg:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-white/75 text-center max-w-md lg:text-left">
            Personal health tracking, device sync &amp; health records — continue your health journey in Sahatna
          </p>
          <button className="inline-flex items-center gap-2 bg-[#B2D8C3] text-[#1A2621] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#9fc9bd] transition-colors">
            Connect to Sahatna <ExternalLink size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}