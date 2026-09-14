import React from "react";
import StatsRibbon from "./StatsRibbon";
import SahatnaBanner from "./SahatnaBanner";
import LatestUpdates from "./LatestUpdates";

export default function ClosingSections({ withStats = true }) {
  return (
    <>
      {withStats && <StatsRibbon />}
      <SahatnaBanner />
      <LatestUpdates />
    </>
  );
}