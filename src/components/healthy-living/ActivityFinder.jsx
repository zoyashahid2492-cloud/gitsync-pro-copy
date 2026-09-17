import React, { useState } from "react";
import { MapPin, Clock, Navigation, ExternalLink, ChevronDown, Accessibility } from "lucide-react";

const INK = "#1f3d2a", GREEN = "#1D7945", GREEN_BG = "#E6F2EC", BG_ALT = "#F7F6F2", MUTED = "#6b7a70", BORDER = "#e0e5de";

const INTERESTS = ["Yoga", "Running", "Cycling", "Swimming", "Football", "CrossFit", "Martial Arts", "Tennis", "Water Sports"];
const AREAS = ["Any area", "Abu Dhabi Corniche", "Al Reem Island", "Al Hudayriat", "Yas Island", "Zayed Sports City", "Eastern Mangroves", "Saadiyat Island", "Al Maryah Island", "Khalifa City", "Masdar City"];
const LEVELS = ["Any level", "Beginner", "Intermediate", "Advanced"];

const ACTIVITIES = [
  { name: "Zaya Yoga Studio", interest: "Yoga", area: "Al Reem Island", level: "Beginner", time: "Daily · 7:00 AM & 6:30 PM", website: "https://www.zayayoga.com" },
  { name: "Bodytree Studio", interest: "Yoga", area: "Al Maryah Island", level: "Intermediate", time: "Daily · 9:00 AM", website: "https://bodytreestudio.com" },
  { name: "Inspire Yoga & Wellness", interest: "Yoga", area: "Khalifa City", level: "Beginner", time: "Mon–Sat · 8:00 AM", website: "https://inspireyoga.ae" },
  { name: "Abu Dhabi Striders Run Club", interest: "Running", area: "Abu Dhabi Corniche", level: "Any level", time: "Tue & Thu · 6:00 AM", website: "https://abudhabistriders.com" },
  { name: "ADNOC Abu Dhabi Marathon Route", interest: "Running", area: "Abu Dhabi Corniche", level: "Advanced", time: "Daily · open route", website: "https://abudhabimarathon.com" },
  { name: "Yas Marina Circuit — TrainYAS", interest: "Running", area: "Yas Island", level: "Any level", time: "Tue · 6:00 PM", website: "https://www.yasmarinacircuit.com" },
  { name: "Al Hudayriat Cycling Track", interest: "Cycling", area: "Al Hudayriat", level: "Any level", time: "Daily · 24 hrs", website: "https://www.ad.gov.ae" },
  { name: "Yas Marina Cycle Loop", interest: "Cycling", area: "Yas Island", level: "Intermediate", time: "Tue & Sun · 6:00 PM", website: "https://www.yasmarinacircuit.com" },
  { name: "Abu Dhabi Swimming Academy", interest: "Swimming", area: "Zayed Sports City", level: "Beginner", time: "Daily · 6:00 AM", website: "https://adsc.ae" },
  { name: "Zayed Sports City Pool", interest: "Swimming", area: "Zayed Sports City", level: "Any level", time: "Daily · 6:00 AM – 9:00 PM", website: "https://www.zsc.ae" },
  { name: "Zayed Sports City Football Pitches", interest: "Football", area: "Zayed Sports City", level: "Any level", time: "Daily · 4:00 PM – 11:00 PM", website: "https://www.zsc.ae" },
  { name: "Abu Dhabi Football Academy", interest: "Football", area: "Khalifa City", level: "Beginner", time: "Sat & Wed · 5:00 PM", website: "https://adfa.ae" },
  { name: "Desert CrossFit", interest: "CrossFit", area: "Al Reem Island", level: "Intermediate", time: "Daily · 6:00 AM", website: "https://desertcrossfit.com" },
  { name: "CrossFit LifeStar", interest: "CrossFit", area: "Khalifa City", level: "Beginner", time: "Mon–Fri · 7:00 AM", website: "https://crossfitlifestar.com" },
  { name: "Abu Dhabi Martial Arts Center", interest: "Martial Arts", area: "Zayed Sports City", level: "Any level", time: "Daily · 5:00 PM", website: "https://adsc.ae" },
  { name: "UAE Jiu-Jitsu Federation Dojo", interest: "Martial Arts", area: "Al Maryah Island", level: "Intermediate", time: "Sun–Thu · 6:00 PM", website: "https://www.uaejjf.com" },
  { name: "Zayed Sports City Tennis Academy", interest: "Tennis", area: "Zayed Sports City", level: "Any level", time: "Daily · 7:00 AM – 10:00 PM", website: "https://www.zsc.ae" },
  { name: "Abu Dhabi Tennis Academy", interest: "Tennis", area: "Khalifa City", level: "Beginner", time: "Sat & Tue · 5:00 PM", website: "https://adtennis.ae" },
  { name: "Noukhada Mangrove Kayaking", interest: "Water Sports", area: "Eastern Mangroves", level: "Beginner", time: "Daily · 7:00 AM", website: "https://www.noukhada.ae" },
  { name: "Abu Dhabi Sailing Academy", interest: "Water Sports", area: "Yas Island", level: "Intermediate", time: "Fri & Sat · 8:00 AM", website: "https://adsailing.ae" },
];

const mapsLink = (name, area) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, ${area}, Abu Dhabi, UAE`)}`;

export default function ActivityFinder() {
  const [selected, setSelected] = useState(["Yoga", "Running"]);
  const [area, setArea] = useState("Any area");
  const [level, setLevel] = useState("Any level");
  const [results, setResults] = useState(ACTIVITIES);
  const [searched, setSearched] = useState(false);

  const toggleInterest = (i) =>
    setSelected((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));

  const find = () => {
    setSearched(true);
    setResults(
      ACTIVITIES.filter((a) => {
        const interestOk = selected.length === 0 || selected.includes(a.interest);
        const areaOk = area === "Any area" || a.area === area;
        const levelOk = level === "Any level" || a.level === level || a.level === "Any level";
        return interestOk && areaOk && levelOk;
      })
    );
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="rounded-3xl p-6 md:p-10 relative" style={{ background: "#F7FAF7", border: `1px solid ${BORDER}` }}>
          {/* Header */}
          <div className="mb-8">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.16em] font-heading font-bold mb-4" style={{ background: GREEN_BG, color: GREEN }}>
              New
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-2" style={{ color: INK }}>
              Find an Activity Near You
            </h2>
            <p className="font-heading font-light max-w-2xl leading-relaxed" style={{ color: MUTED }}>
              Tell us what you enjoy and where you are — we will show you exactly where to go, with directions and details.
            </p>
          </div>

          {/* Interests */}
          <div className="mb-8">
            <p className="text-[11px] uppercase tracking-[0.14em] font-heading font-bold mb-3" style={{ color: MUTED }}>
              What are you interested in? (pick one or more)
            </p>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((i) => {
                const active = selected.includes(i);
                return (
                  <button
                    key={i}
                    onClick={() => toggleInterest(i)}
                    className="px-4 py-2 rounded-full text-sm font-heading font-semibold transition-all"
                    style={active
                      ? { background: INK, color: "#fff", border: `1px solid ${INK}` }
                      : { background: "#fff", color: INK, border: `1px solid ${BORDER}` }}
                  >
                    {i}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Area + Level row */}
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] font-heading font-bold mb-2.5" style={{ color: MUTED }}>Preferred area</p>
              <div className="relative">
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full appearance-none rounded-xl px-4 py-3 text-sm font-heading outline-none pr-10"
                  style={{ background: "#fff", border: `1px solid ${BORDER}`, color: INK }}
                >
                  {AREAS.map((a) => <option key={a}>{a}</option>)}
                </select>
                <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: MUTED }} />
              </div>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] font-heading font-bold mb-2.5 flex items-center gap-2" style={{ color: MUTED }}>
                Your level
                <span className="inline-block rounded-full" style={{ width: 7, height: 7, background: "#E53E3E" }} />
              </p>
              <div className="flex flex-wrap gap-2">
                {LEVELS.map((l) => {
                  const active = level === l;
                  return (
                    <button
                      key={l}
                      onClick={() => setLevel(l)}
                      className="px-4 py-2.5 rounded-xl text-sm font-heading font-semibold transition-all"
                      style={active
                        ? { background: GREEN, color: "#fff", border: `1px solid ${GREEN}` }
                        : { background: "#fff", color: INK, border: `1px solid ${BORDER}` }}
                    >
                      {l}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Find button */}
          <button
            onClick={find}
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-heading font-bold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: GREEN }}
          >
            Find Activities
          </button>

          {/* Results */}
          {searched && (
            <div className="mt-10">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-heading font-bold" style={{ color: INK }}>
                  {results.length} activit{results.length === 1 ? "y" : "ies"} found
                </p>
                <p className="text-xs font-heading font-light" style={{ color: MUTED }}>
                  {selected.length ? selected.join(" · ") : "All interests"} · {area} · {level}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.map((r) => (
                  <div key={r.name} className="rounded-2xl p-5 flex flex-col" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <span className="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] font-heading font-bold mb-2" style={{ background: GREEN_BG, color: GREEN }}>
                          {r.interest}
                        </span>
                        <h3 className="font-heading font-bold text-base leading-tight" style={{ color: INK }}>{r.name}</h3>
                      </div>
                      <span className="flex items-center justify-center rounded-full shrink-0" style={{ width: 38, height: 38, background: GREEN_BG }}>
                        <MapPin size={18} style={{ color: GREEN }} />
                      </span>
                    </div>
                    <p className="text-xs font-heading font-light flex items-center gap-1.5 mb-1" style={{ color: MUTED }}>
                      <MapPin size={12} /> {r.area}
                    </p>
                    <p className="text-xs font-heading font-light flex items-center gap-1.5 mb-1" style={{ color: MUTED }}>
                      <Navigation size={12} /> {r.level}
                    </p>
                    <p className="text-xs font-heading font-bold flex items-center gap-1.5 mb-4" style={{ color: GREEN }}>
                      <Clock size={12} /> {r.time}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <a
                        href={mapsLink(r.name, r.area)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-heading font-bold transition-all hover:opacity-90"
                        style={{ background: INK, color: "#fff" }}
                      >
                        <Navigation size={12} /> Directions
                      </a>
                      {r.website && (
                        <a
                          href={r.website}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-heading font-bold transition-all hover:opacity-90"
                          style={{ background: GREEN_BG, color: GREEN }}
                        >
                          <ExternalLink size={12} /> Register
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {results.length === 0 && (
                <p className="text-sm font-heading font-light text-center py-10" style={{ color: MUTED }}>
                  No activities match — try widening your filters.
                </p>
              )}
            </div>
          )}

          {/* Floating accessibility hint */}
          <span className="hidden md:flex absolute right-6 top-6 items-center justify-center rounded-full" style={{ width: 44, height: 44, background: "#fff", border: `1px solid ${BORDER}` }} title="Accessibility">
            <Accessibility size={18} style={{ color: INK }} />
          </span>
        </div>
      </div>
    </section>
  );
}