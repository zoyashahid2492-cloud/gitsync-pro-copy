import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export default function AiChatBubble() {
  return (
    <Link
      to="/ai"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full pl-3 pr-4 py-2.5 text-white shadow-lg hover:opacity-95 active:scale-95 transition-all"
      style={{ background: "#1f3d2a", boxShadow: "0 8px 24px rgba(31,61,42,0.35)" }}
      aria-label="Ask AI"
    >
      <span
        className="flex items-center justify-center rounded-full"
        style={{ width: 28, height: 28, background: "#B0D5B5", color: "#1A2A1A" }}
      >
        <Sparkles size={15} />
      </span>
      <span className="text-[11px] font-heading font-bold tracking-[0.14em] uppercase whitespace-nowrap">
        Ask AI
      </span>
    </Link>
  );
}