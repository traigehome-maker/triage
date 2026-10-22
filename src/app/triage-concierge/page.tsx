"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import DiscretionBanner from "../components/concierge/DiscretionBanner";
import Hero from "../components/concierge/Hero";
import WhoWeServe from "../components/concierge/WhoWeServe";
import AbsoluteDiscretion from "../components/concierge/AbsoluteDiscretion";
import PMRep from "../components/concierge/PMRep";
import Journey from "../components/concierge/Journey";
import WhyConcierge from "../components/concierge/WhyConcierge";

// Dynamic component splitting: load heavy below-the-fold modules asynchronously
const GlobalReach = dynamic(() => import("../components/concierge/GlobalReach"), {
  ssr: false,
  loading: () => <div className="h-96 w-full bg-white" />,
});
const AccessPlans = dynamic(() => import("../components/concierge/AccessPlans"), {
  loading: () => <div className="h-96 w-full bg-white" />,
});
const PrivateClientProtocol = dynamic(() => import("../components/concierge/PrivateClientProtocol"), {
  loading: () => <div className="h-96 w-full bg-white" />,
});
const SnapshotTeaser = dynamic(() => import("../components/concierge/SnapshotTeaser"), {
  loading: () => <div className="h-72 w-full bg-white" />,
});
const FinalCTA = dynamic(() => import("../components/concierge/FinalCTA"), {
  loading: () => <div className="h-72 w-full bg-white" />,
});
const FooterCTA = dynamic(() => import("../components/concierge/FooterCTA"), {
  loading: () => <div className="h-64 w-full bg-white" />,
});

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