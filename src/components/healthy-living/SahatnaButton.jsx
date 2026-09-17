import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SahatnaSignInModal from "./SahatnaSignInModal";

export default function SahatnaButton({ label = "Connect to Sahatna", dark = true }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-bold text-white whitespace-nowrap transition-all hover:opacity-90 active:scale-95"
        style={{ background: dark ? "#0E1D13" : "#1D7945" }}
      >
        {label} <ArrowUpRight size={15} />
      </button>
      <SahatnaSignInModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}