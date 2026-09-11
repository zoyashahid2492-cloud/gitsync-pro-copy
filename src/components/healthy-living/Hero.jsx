import React from "react";
import { ExternalLink } from "lucide-react";

const heroImg = "https://media.base44.com/images/public/6aa3a64fa8d590a56698abe0/7fb860583_generated_image.png";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full flex flex-col">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="People walking on Abu Dhabi waterfront at sunset" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1109]/90 via-[#0b1109]/70 to-[#0b1109]/90" />
      </div>

      {/* Main content - centered */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-5 pt-20">
        <h1 className="text-white font-extrabold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-7xl">
          Healthier choices.
          <br />
          Healthier lives.
          <br />
          <span className="text-[#b4d1b8]">Healthier futures.</span>
        </h1>

        <div className="mt-9 flex flex-col sm:flex-row items-center gap-4">
          <button className="border border-white/80 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors">
            Choose healthier, every day
          </button>
          <button className="border border-white/80 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors">
            How we work
          </button>
        </div>
      </div>

      {/* Footer strip (Sahatna) */}
      <div className="relative">
        {/* LED BY text between two horizontal rules */}
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="flex items-center gap-4 py-5">
            <div className="h-px flex-1 bg-white/25" />
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/85 whitespace-nowrap">
              Led by the Abu Dhabi Department of Health
            </p>
            <div className="h-px flex-1 bg-white/25" />
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 pb-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-3 text-center lg:text-left">
            <p className="text-sm font-semibold text-white">
              Personal health tracking, device sync &amp; health records
            </p>
            <span className="hidden lg:inline text-white/30">•</span>
            <p className="text-sm text-white/70">
              Continue your health journey in <span className="text-white font-medium">Sahatna</span>
            </p>
          </div>
          <button className="inline-flex items-center gap-2 bg-[#85b5a2] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#74a591] transition-colors">
            Connect to Sahatna <ExternalLink size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}