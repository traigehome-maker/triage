"use client";

import { useState } from "react";
import DiscretionBanner from "../components/concierge/DiscretionBanner";
import Hero from "../components/concierge/Hero";
import WhoWeServe from "../components/concierge/WhoWeServe";
import AbsoluteDiscretion from "../components/concierge/AbsoluteDiscretion";
import PMRep from "../components/concierge/PMRep";
import Journey from "../components/concierge/Journey";
import GlobalReach from "../components/concierge/GlobalReach";
import WhyConcierge from "../components/concierge/WhyConcierge";
import AccessPlans from "../components/concierge/AccessPlans";
import PrivateClientProtocol from "../components/concierge/PrivateClientProtocol";
import SnapshotTeaser from "../components/concierge/SnapshotTeaser";
import FinalCTA from "../components/concierge/FinalCTA";
import FooterCTA from "../components/concierge/FooterCTA";

export default function ConciergePage() {
  // Discretion Mode is the one piece of state that crosses section
  // boundaries: the toggle lives in the Hero, the banner renders above
  // every section here in the page shell.
  const [discretionMode, setDiscretionMode] = useState(false);

  return (
    <main className="relative overflow-x-hidden font-nunito bg-white text-[#0f172a]">
      <DiscretionBanner show={discretionMode} />

      <Hero discretionMode={discretionMode} onToggleDiscretion={() => setDiscretionMode((v) => !v)} />

      <WhoWeServe />
      <AbsoluteDiscretion />
      <PMRep />
      <Journey />
      <GlobalReach />
      <WhyConcierge />
      <AccessPlans />
      <PrivateClientProtocol />
      <SnapshotTeaser />
      <FinalCTA />
      <FooterCTA />
    </main>
  );
}