import React, { useState } from "react";
import { MapPin, Clock } from "lucide-react";

const INK = "#1f3d2a", GREEN = "#1D7945", GREEN_BG = "#E6F2EC", BG_ALT = "#F7F6F2", MUTED = "#6b7a70", BORDER = "#e0e5de";

const INTERESTS = ["Walking", "Yoga", "Cycling", "Swimming", "Football", "Running"];
const LEVELS = ["Beginner", "Intermediate", "Advanced"];

const ACTIVITIES = [
  { name: "Corniche Sunset Walk", area: "Abu Dhabi Corniche", interest: "Walking", level: "Beginner", time: "Daily · 6:00 PM" },
  { name: "Sunrise Yoga at Marina", area: "Al Reem Island", interest: "Yoga", level: "Beginner", time: "Sat · 6:30 AM" },
  { name: "Mangrove Kayak Loop", area: "Eastern Mangroves", interest: "Cycling", level: "Intermediate", time: "Fri · 7:00 AM" },
  { name: "Community Swim Lanes", area: "Zayed Sports City", interest: "Swimming", level: "Intermediate", time: "Daily · 6:00 AM" },
];

const EVENTS = {
  "Abu Dhabi": [
    { title: "Festival of Health Walk", where: "Umm Al Emarat Park", when: "Today · 5:30 PM" },
    { title: "Family Yoga in the Park", where: "Abu Dhabi Corniche", when: "Tomorrow · 6:30 AM" },
    { title: "Cycling Mornings", where: "Al Hudayriat", when: "Saturday · 7:00 AM" },
  ],
  Dubai: [
    { title: "Kite Beach Run Club", where: "Kite Beach", when: "Today · 6:00 PM" },
    { title: "Safa Park Yoga", where: "Safa Park", when: "Tomorrow · 7:00 AM" },
    { title: "Al Qudra Cycling", where: "Al Qudra Track", when: "Saturday · 6:30 AM" },
  ],
};

export default function ActivityFinder() {
  const [interest, setInterest] = useState("Walking");
  const [area, setArea] = useState("");
  const [level, setLevel] = useState(LEVELS[0]);
  const [results, setResults] = useState(ACTIVITIES);
  const [city, setCity] = useState("Abu Dhabi");

  const find = () => {
    setResults(
      ACTIVITIES.filter(
        (a) =>
          (!interest || a.interest === interest) &&
          (!level || a.level === level) &&
          (!area || a.area.toLowerCase().includes(area.toLowerCase()))
      )
    );
  };

  return (
    <>
      {/* Find an Activity Near You */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-3" style={{ color: GREEN }}>Find an Activity Near You</p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8" style={{ color: INK }}>Move more, close to home</h2>

          <div className="rounded-2xl p-6 md:p-8" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
            <div className="flex flex-wrap gap-2 mb-5">
              {INTERESTS.map((i) => (
                <button
                  key={i}
                  onClick={() => setInterest(i)}
                  className="text-xs uppercase tracking-[0.1em] px-4 py-2 rounded-full font-heading font-bold transition-all"
                  style={{ background: interest === i ? GREEN : BG_ALT, color: interest === i ? "#fff" : MUTED }}
                >
                  {i}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-5">
              <input
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="Your area (e.g. Al Reem)"
                className="px-4 py-3 text-sm rounded-lg font-heading outline-none"
                style={{ background: BG_ALT, border: `1px solid ${BORDER}`, color: INK }}
              />
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="px-4 py-3 text-sm rounded-lg font-heading outline-none"
                style={{ background: BG_ALT, border: `1px solid ${BORDER}`, color: INK }}
              >
                {LEVELS.map((l) => <option key={l}>{l}</option>)}
              </select>
              <button onClick={find} className="py-3 text-sm rounded-full font-heading font-bold text-white transition-all hover:opacity-90" style={{ background: GREEN }}>
                Find activities
              </button>
            </div>
            <div className="space-y-3">
              {results.map((r) => (
                <div key={r.name} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: BG_ALT, border: `1px solid ${BORDER}` }}>
                  <span className="flex items-center justify-center rounded-full shrink-0" style={{ width: 40, height: 40, background: GREEN_BG }}>
                    <MapPin size={18} style={{ color: GREEN }} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-heading font-semibold" style={{ color: INK }}>{r.name}</p>
                    <p className="text-xs font-heading font-light" style={{ color: MUTED }}>{r.area} · {r.interest} · {r.level}</p>
                  </div>
                  <span className="text-xs font-heading font-light shrink-0" style={{ color: MUTED }}>{r.time}</span>
                </div>
              ))}
              {results.length === 0 && <p className="text-sm font-heading font-light" style={{ color: MUTED }}>No activities match — try another filter.</p>}
            </div>
          </div>
        </div>
      </section>

      {/* Around You */}
      <section className="py-16 md:py-24" style={{ background: BG_ALT }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-2" style={{ color: GREEN }}>Around You</p>
              <h2 className="font-heading font-bold text-2xl md:text-3xl" style={{ color: INK }}>What's happening near you</h2>
            </div>
            <div className="flex gap-2">
              {Object.keys(EVENTS).map((c) => (
                <button
                  key={c}
                  onClick={() => setCity(c)}
                  className="text-xs uppercase tracking-[0.1em] px-4 py-2 rounded-full font-heading font-bold transition-all"
                  style={{ background: city === c ? GREEN : "#fff", color: city === c ? "#fff" : MUTED, border: `1px solid ${BORDER}` }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {EVENTS[city].map((e) => (
              <div key={e.title} className="rounded-2xl p-6" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                <h3 className="font-heading font-bold text-base mb-1.5" style={{ color: INK }}>{e.title}</h3>
                <p className="text-xs font-heading font-light flex items-center gap-1.5 mb-3" style={{ color: MUTED }}>
                  <MapPin size={12} /> {e.where}
                </p>
                <p className="text-xs font-heading font-bold inline-flex items-center gap-1.5" style={{ color: GREEN }}>
                  <Clock size={12} /> {e.when}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}