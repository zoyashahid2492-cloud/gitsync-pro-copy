import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import Navbar from "@/components/healthy-living/Navbar";
import Footer from "@/components/healthy-living/Footer";
import PageHero from "@/components/healthy-living/PageHero";
import { base44 } from "@/api/base44Client";

const WELCOME =
  "Hi! I'm your Healthy Living wellness assistant. Ask me anything about nutrition, movement, sleep or stress — or how to build healthier habits into your day.";

export default function AskAi() {
  const [messages, setMessages] = useState([{ role: "assistant", content: WELCOME }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const history = next
        .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
        .join("\n");
      const res = await base44.integrations.Core.InvokeLLM({
        prompt: `You are a friendly, evidence-based wellness coach for the Healthy Living Abu Dhabi initiative. Keep answers concise, practical and encouraging. Conversation so far:\n${history}\n\nAssistant:`,
      });
      const reply =
        typeof res === "string"
          ? res
          : res?.content || "I'm here to help — try asking about sleep, nutrition, movement or stress.";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch (e) {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "Sorry, I couldn't reach the assistant right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col">
      <Navbar solid />
      <PageHero
        eyebrow="Ask AI"
        title="Your wellness assistant."
        subtitle="A conversational guide to healthier choices — ask about sleep, energy, nutrition, movement or stress any time."
      />

      <section className="flex-1 py-10 md:py-16" style={{ background: "#F7F6F2" }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div
            className="bg-white rounded-2xl flex flex-col"
            style={{ height: "60vh", boxShadow: "0 10px 40px 0 rgba(26,34,28,0.08)", border: "1px solid #e0e5de" }}
          >
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm font-heading font-light leading-relaxed ${
                      m.role === "user" ? "text-white" : "text-[#2a3a2e]"
                    }`}
                    style={
                      m.role === "user"
                        ? { background: "#1f3d2a" }
                        : { background: "#eef3e8", border: "1px solid #e0e5de" }
                    }
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl px-4 py-3" style={{ background: "#eef3e8", border: "1px solid #e0e5de" }}>
                    <span className="inline-flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5e7062] animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5e7062] animate-bounce" style={{ animationDelay: "0.15s" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5e7062] animate-bounce" style={{ animationDelay: "0.3s" }} />
                    </span>
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            <div className="p-4 border-t border-[#e0e5de]">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") send();
                  }}
                  placeholder="Ask about sleep, nutrition, movement…"
                  className="flex-1 rounded-full px-5 py-3 text-sm font-heading font-light outline-none"
                  style={{ background: "#f7f9f6", border: "1px solid #e0e5de", color: "#2a3a2e" }}
                />
                <button
                  onClick={send}
                  disabled={loading}
                  className="flex items-center justify-center rounded-full w-11 h-11 shrink-0 transition-all hover:opacity-90 active:scale-95"
                  style={{ background: "#1f3d2a", color: "#fff" }}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}