import React, { useState } from "react";
import { X, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function SahatnaSignInModal({ open, onClose }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    setErr("");
    if (!identifier.trim() || !password.trim()) {
      setErr("Please enter your Emirates ID or email and password.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 900);
  };

  const reset = () => {
    setDone(false);
    setIdentifier("");
    setPassword("");
    setErr("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0" style={{ background: "rgba(15,25,21,0.55)" }} onClick={reset} />
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-7"
        style={{ boxShadow: "0 24px 70px -20px rgba(0,0,0,0.45)" }}
      >
        <button
          onClick={reset}
          className="absolute top-4 right-4 rounded-full p-1.5 hover:bg-black/5 transition-colors"
          aria-label="Close"
        >
          <X size={18} style={{ color: "#6b7a70" }} />
        </button>

        {done ? (
          <div className="text-center py-4">
            <div
              className="mx-auto flex items-center justify-center rounded-full mb-5"
              style={{ width: 56, height: 56, background: "#E6F2EC" }}
            >
              <ShieldCheck size={26} style={{ color: "#1D7945" }} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-2" style={{ color: "#1f3d2a" }}>
              Connected to Sahatna
            </h3>
            <p className="font-heading font-light text-sm leading-relaxed mb-7" style={{ color: "#6b7a70" }}>
              Your health data and preferences are now synced.
            </p>
            <button
              onClick={reset}
              className="w-full py-3 rounded-full text-sm font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: "#1D7945" }}
            >
              Continue
            </button>
          </div>
        ) : (
          <>
            <p className="text-[11px] uppercase tracking-[0.18em] font-heading font-medium mb-2" style={{ color: "#1D7945" }}>
              Abu Dhabi Health Platform
            </p>
            <h3 className="font-heading font-bold text-xl mb-1.5" style={{ color: "#1f3d2a" }}>
              Connect to Sahatna
            </h3>
            <p className="font-heading font-light text-sm mb-6" style={{ color: "#6b7a70" }}>
              Sign in to sync your health data and preferences.
            </p>

            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-xs font-heading font-medium mb-1.5" style={{ color: "#1f3d2a" }}>
                  Emirates ID or Email
                </label>
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="Your Emirates ID or email"
                  className="w-full rounded-xl px-4 py-3 text-sm font-heading outline-none"
                  style={{ border: "1px solid #e0e5de", color: "#1f3d2a" }}
                />
              </div>
              <div>
                <label className="block text-xs font-heading font-medium mb-1.5" style={{ color: "#1f3d2a" }}>
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  className="w-full rounded-xl px-4 py-3 text-sm font-heading outline-none"
                  style={{ border: "1px solid #e0e5de", color: "#1f3d2a" }}
                />
              </div>

              {err && <p className="text-xs font-heading" style={{ color: "#c0563a" }}>{err}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-full text-sm font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-60 flex items-center justify-center gap-2"
                style={{ background: "#1D7945" }}
              >
                {loading ? "Connecting…" : (<>Sign in with Sahatna <ArrowUpRight size={15} /></>)}
              </button>
            </form>

            <p className="text-xs font-heading font-light text-center mt-4" style={{ color: "#6b7a70" }}>
              No account? <span className="font-medium" style={{ color: "#1D7945" }}>Register on Sahatna</span>
            </p>
            <p className="text-[11px] font-heading font-light text-center mt-3 leading-relaxed" style={{ color: "#9aa39c" }}>
              Your health data is protected under UAE data regulations.
            </p>
          </>
        )}
      </div>
    </div>
  );
}