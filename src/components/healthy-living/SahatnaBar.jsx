import React from "react";
import { ExternalLink } from "lucide-react";

export default function SahatnaBar() {
  return (
    <section className="bg-white py-12 lg:py-16 px-5 lg:px-10 border-y border-neutral-200">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-5">
        <p className="text-base lg:text-lg text-[#1A2621] font-medium text-center lg:text-left">
          Personal health tracking, device sync &amp; health records.
        </p>
        <button className="inline-flex items-center gap-2 bg-[#2B5B49] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#234c3d] transition-colors">
          Connect to Sahatna <ExternalLink size={15} />
        </button>
      </div>
    </section>
  );
}