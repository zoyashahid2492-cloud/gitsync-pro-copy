import React from "react";
import { ExternalLink } from "lucide-react";

const columns = [
  {
    heading: "EXPLORE",
    links: ["Our Approach", "About", "Schools & Children", "Evidence & Insight"],
  },
  {
    heading: "FOCUS AREAS",
    links: ["Nutrition", "Movement", "Mental Health", "Sleep"],
  },
  {
    heading: "CONNECT",
    links: ["Work with us", "Partners", "Press", "FAQ"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F7F9F6] pt-20 lg:pt-28 pb-12 px-5 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand column */}
          <div className="lg:pr-8">
            <div className="flex flex-col leading-none mb-6">
              <span className="text-[15px] font-extrabold tracking-tight text-[#4A554A]">HEALTHY LIVING</span>
              <span className="text-[13px] font-medium text-[#4A554A] mt-1" dir="rtl">
                الحياة الصحية
              </span>
            </div>
            <p className="text-sm text-[#4A554A]/80 leading-relaxed max-w-sm">
              Healthy Living is led by the Abu Dhabi Department of Health. It brings together
              government entities, partners, and communities to make healthier choices easier, more
              accessible, and part of daily life.
            </p>
            <p className="mt-4 text-sm font-medium text-[#4A554A] italic max-w-sm">
              Making healthy living the easy choice for all.
            </p>
            <button className="mt-6 inline-flex items-center gap-2 bg-[#4A7C59] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#3d6949] transition-colors">
              Connect to Sahatna <ExternalLink size={15} />
            </button>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-[11px] font-bold tracking-[0.15em] text-[#888888] mb-5">{col.heading}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#4A554A] hover:text-[#4A7C59] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Floating accessibility + Ask AI */}
      <div className="max-w-[1400px] mx-auto mt-16 flex justify-end gap-3">
        <button
          aria-label="Accessibility"
          className="w-12 h-12 rounded-full bg-white border border-[#4A554A]/15 flex items-center justify-center text-[#4A554A] hover:bg-[#4A7C59] hover:text-white transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="4" r="2" />
            <path d="M12 6v6m-4 0a4 4 0 0 0 8 0m-8 0H4m12 0h4m-9 5l-3 5m6-5l3 5" />
          </svg>
        </button>
        <button className="inline-flex items-center gap-2 bg-[#4A7C59] text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-[#3d6949] transition-colors">
          Ask AI
        </button>
      </div>
    </footer>
  );
}