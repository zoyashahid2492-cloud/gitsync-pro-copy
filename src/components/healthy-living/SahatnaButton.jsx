import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function SahatnaButton({ label = "Connect to Sahatna", dark = true }) {
  return (
    <a
      href="https://sahatna.gov.ae"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-bold text-white whitespace-nowrap transition-all hover:opacity-90 active:scale-95"
      style={{ background: dark ? "#0E1D13" : "#1D7945" }}
    >
      {label} <ArrowUpRight size={15} />
    </a>
  );
}