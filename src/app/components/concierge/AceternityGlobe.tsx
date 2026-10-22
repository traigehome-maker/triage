"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { Position } from "../ui/globe";

const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});

export function AceternityGlobe() {
  const globeContainerRef = useRef<HTMLDivElement>(null);
  const isNearView = useInView(globeContainerRef, { once: true, margin: "250px" });
  // Custom Triage luxury brand color configuration
  const globeConfig = {
    pointSize: 3.5,
    globeColor: "#02253e",
    showAtmosphere: true,
    atmosphereColor: "#00b99d",
    atmosphereAltitude: 0.15,
    emissive: "#01172a",
    emissiveIntensity: 0.18,
    shininess: 0.9,
    polygonColor: "rgba(0, 185, 157, 0.72)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#c9e265",
    directionalTopLight: "#ffffff",
    pointLight: "#00b99d",
    arcTime: 1200,
    arcLength: 0.85,
    rings: 2,
    maxRings: 3,
    initialPosition: { lat: 9.082, lng: 8.6753 }, // Nigeria / Atlantic center
    autoRotate: true,
    autoRotateSpeed: 0.55,
  };

  // Triage palette: Teal (#00b99d), Lime (#c9e265), Sky (#38bdf8), Cyan (#06b6d4)
  const triageColors = ["#00b99d", "#c9e265", "#38bdf8", "#06b6d4", "#2dd4bf"];

  // Transcontinental client healthcare corridors centered on Nigeria + global diaspora
  const clientArcs: Position[] = [
    // 1. London (UK) <-> Lagos (Nigeria)
    {
      order: 1,
      startLat: 51.5074,
      startLng: -0.1278,
      endLat: 6.5244,
      endLng: 3.3792,
      arcAlt: 0.35,
      color: "#00b99d",
    },
    // 2. Houston (USA) <-> Lagos
    {
      order: 1,
      startLat: 29.7604,
      startLng: -95.3698,
      endLat: 6.5244,
      endLng: 3.3792,
      arcAlt: 0.55,
      color: "#c9e265",
    },
    // 3. Atlanta (USA) <-> Lagos
    {
      order: 2,
      startLat: 33.749,
      startLng: -84.388,
      endLat: 6.5244,
      endLng: 3.3792,
      arcAlt: 0.5,
      color: "#38bdf8",
    },
    // 4. Toronto (Canada) <-> Lagos
    {
      order: 2,
      startLat: 43.6532,
      startLng: -79.3832,
      endLat: 6.5244,
      endLng: 3.3792,
      arcAlt: 0.48,
      color: "#00b99d",
    },
    // 5. Dubai (UAE) <-> Lagos
    {
      order: 3,
      startLat: 25.2048,
      startLng: 55.2708,
      endLat: 6.5244,
      endLng: 3.3792,
      arcAlt: 0.35,
      color: "#c9e265",
    },
    // 6. Doha (Qatar) <-> Lagos
    {
      order: 3,
      startLat: 25.2854,
      startLng: 51.531,
      endLat: 6.5244,
      endLng: 3.3792,
      arcAlt: 0.32,
      color: "#38bdf8",
    },
    // 7. New Delhi (India) <-> Lagos
    {
      order: 4,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 6.5244,
      endLng: 3.3792,
      arcAlt: 0.45,
      color: "#00b99d",
    },
    // 8. Johannesburg (South Africa) <-> Lagos
    {
      order: 4,
      startLat: -26.2041,
      startLng: 28.0473,
      endLat: 6.5244,
      endLng: 3.3792,
      arcAlt: 0.28,
      color: "#c9e265",
    },
    // 9. Lagos <-> Abuja (Domestic Executive Wing)
    {
      order: 5,
      startLat: 6.5244,
      startLng: 3.3792,
      endLat: 9.0765,
      endLng: 7.3986,
      arcAlt: 0.12,
      color: "#38bdf8",
    },
    // 10. London <-> New York / North America Corridor
    {
      order: 5,
      startLat: 51.5074,
      startLng: -0.1278,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.28,
      color: "#00b99d",
    },
    // 11. Dubai <-> London
    {
      order: 6,
      startLat: 25.2048,
      startLng: 55.2708,
      endLat: 51.5074,
      endLng: -0.1278,
      arcAlt: 0.35,
      color: "#c9e265",
    },
    // 12. Houston <-> London
    {
      order: 6,
      startLat: 29.7604,
      startLng: -95.3698,
      endLat: 51.5074,
      endLng: -0.1278,
      arcAlt: 0.42,
      color: "#38bdf8",
    },
    // 13. Singapore <-> London
    {
      order: 7,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 51.5074,
      endLng: -0.1278,
      arcAlt: 0.45,
      color: "#00b99d",
    },
    // 14. Nairobi (Kenya) <-> Lagos
    {
      order: 7,
      startLat: -1.2921,
      startLng: 36.8219,
      endLat: 6.5244,
      endLng: 3.3792,
      arcAlt: 0.25,
      color: "#c9e265",
    },
    // 15. Paris <-> Lagos
    {
      order: 8,
      startLat: 48.8566,
      startLng: 2.3522,
      endLat: 6.5244,
      endLng: 3.3792,
      arcAlt: 0.32,
      color: "#38bdf8",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#edf3f8]" />
      <div className="absolute right-[-8%] top-[10%] h-80 w-80 rounded-full bg-[#02385a]/[0.05] blur-[120px]" />
      <div className="absolute left-[-6%] bottom-[-8%] h-80 w-80 rounded-full bg-[#00b99d]/[0.07] blur-[120px]" />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-triage-teal" />
            <p className="text-triage-navy font-raleway font-bold text-xs sm:text-sm tracking-[0.22em] uppercase">
              Global Coordination Network
            </p>
            <div className="w-8 h-[2px] bg-triage-teal" />
          </div>

          <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-triage-navy font-raleway tracking-tight max-w-3xl mx-auto leading-[1.18]">
            Coordinating care across continents.
          </h2>

          <p className="text-center text-base sm:text-lg font-medium text-slate-700 max-w-2xl mt-4 mx-auto font-nunito leading-relaxed">
            From London and Houston to Dubai and Toronto, our private clients manage family healthcare in Nigeria with continuous clinical oversight, real-time vital telemetrics, and priority medical escalation.
          </p>
        </motion.div>

        {/* 3D Aceternity World Globe Container (Lazy-mounted when user scrolls near) */}
        <div
          ref={globeContainerRef}
          className="relative w-full max-w-4xl h-[480px] sm:h-[560px] md:h-[620px] mx-auto flex items-center justify-center"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {isNearView ? (
              <World data={clientArcs} globeConfig={globeConfig} />
            ) : (
              <div className="w-52 h-52 sm:w-72 sm:h-72 rounded-full bg-[#02253e]/15 border border-[#00b99d]/20 animate-pulse" />
            )}
          </div>

          {/* Bottom fade out gradient */}
          <div className="absolute w-full bottom-0 inset-x-0 h-28 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none select-none z-10" />
        </div>

        {/* Quick Corridor Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-4 max-w-3xl mx-auto relative z-20">
          {[
            { city: "London", country: "UK", tag: "Diaspora Desk" },
            { city: "Houston", country: "USA", tag: "Clinical Care Bridge" },
            { city: "Atlanta", country: "USA", tag: "Private Client Oversight" },
            { city: "Toronto", country: "Canada", tag: "Family Office Support" },
            { city: "Dubai", country: "UAE", tag: "HNI Care Wing" },
            { city: "Lagos", country: "Hub", tag: "24/7 Operations Desk", primary: true },
          ].map((item) => (
            <div
              key={item.city}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-raleway font-bold transition-all ${
                item.primary
                  ? "bg-triage-navy text-white border-triage-navy shadow-sm"
                  : "bg-white/90 text-slate-700 border-slate-200/90 shadow-sm"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  item.primary ? "bg-triage-lime" : "bg-triage-teal"
                }`}
              />
              <span>{item.city}</span>
              <span className="text-[10px] opacity-70 font-normal">({item.tag})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AceternityGlobe;
