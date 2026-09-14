import React from "react";

export default function CardGrid({ items, columns = 3 }) {
  const cols =
    { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4" }[columns] || "md:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 ${cols} gap-5`}>
      {items.map((it) => {
        const Icon = it.Icon;
        return (
          <div
            key={it.title}
            className="rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            style={{ background: "#fff", border: "1px solid #e0e5de" }}
          >
            <span
              className="flex items-center justify-center rounded-full mb-4"
              style={{ width: 48, height: 48, background: "#D9E4D9" }}
            >
              <Icon size={22} strokeWidth={1.5} style={{ color: "#5e7062" }} />
            </span>
            <h3 className="font-heading font-bold text-lg mb-2" style={{ color: "#1f3d2a" }}>
              {it.title}
            </h3>
            <p className="font-heading font-light text-sm leading-relaxed" style={{ color: "#6b7a70" }}>
              {it.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}