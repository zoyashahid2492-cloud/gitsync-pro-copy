import React from "react";
import { ExternalLink } from "lucide-react";

export default function SahatnaBanner() {
  return (
    <section className="bg-white py-16 lg:py-20 px-5 lg:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
        <p className="text-lg lg:text-xl text-[#1A211D] max-w-2xl">
          Personal health tracking, device sync and health records. Continue your health journey in{" "}
          <span className="font-semibold">Sahatna</span>.
        </p>
        <button className="inline-flex items-center gap-2 bg-[#1A211D] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#1A211D]/90 transition-colors shrink-0">
          Connect to Sahatna <ExternalLink size={15} />
        </button>
      </div>
    </section>
  );
}