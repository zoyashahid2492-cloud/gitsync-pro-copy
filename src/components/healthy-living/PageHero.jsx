import React from "react";

export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f8faf5 0%, #eef3e8 45%, #d8e8d8 100%)",
        paddingTop: "128px",
        paddingBottom: "72px",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {eyebrow && (
          <p
            className="text-[11px] uppercase tracking-[0.22em] font-heading font-medium mb-5"
            style={{ color: "#1D7945" }}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className="font-heading font-black leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2.2rem, 4.6vw, 3.6rem)", color: "#1f3d2a" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="font-heading font-light mt-6 max-w-2xl"
            style={{ fontSize: "clamp(15px, 1.4vw, 19px)", lineHeight: 1.5, color: "#5a6b5e" }}
          >
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>}
      </div>
    </section>
  );
}