import React from "react";

const endImg = "https://table-polo-97158241.figma.site/assets/d427d5f80c2da38cd17d03cff234151db968a532-CXQ6WKMZ.png";

export default function EndSection() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden bg-[#1A211D]">
      <img
        src={endImg}
        alt="Healthy living in Abu Dhabi"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#1A211D]" />
    </section>
  );
}