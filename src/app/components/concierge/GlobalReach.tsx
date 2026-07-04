"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CITIES, CONTINENTS, WHATSAPP } from "./shared/config";
import { Icons } from "./shared/icons";
import { FadeUp, FadeIn } from "./shared/motion";

const EASE = [0.22, 1, 0.36, 1] as const;

// The original map data lives on a 100 x 70 box. Scaling it up to fill a
// 100 x 100 square means it fully covers a circle cut from that square,
// so the globe never shows a gap at the edges regardless of rotation.
const SCALE = 100 / 70;
const TILE_W = 100 * SCALE; // width of one full "wrap" of the world, in the 100x100 viewBox
const ROTATE_SPEED = 6; // viewBox units per second

function getCityContent(city: { name: string; primary?: boolean }) {
  if (city.primary) {
    return {
      eyebrow: "The Hub",
      body: `Every TriageConcierge case originates in ${city.name}. Your PM Rep, clinical network, and 24/7 coordination desk are all based here, regardless of where you or your family are.`,
    };
  }
  return {
    eyebrow: "Client City",
    body: `Clients based in ${city.name} coordinate care for family back in Nigeria through the same PM Rep, verified providers, and real-time updates as every other TriageConcierge client. Distance changes nothing about how closely you're kept in the loop.`,
  };
}

/** One full copy of the world: ocean, continents, connecting lines, and
 *  city markers, all in the original 0-100 x 0-70 coordinate space. Two
 *  of these sit side by side so the globe can scroll seamlessly. */
function MapTile({
  xOffset,
  lagos,
  others,
  onSelect,
  reduce,
}: {
  xOffset: number;
  lagos: { name: string; x: number; y: number; primary?: boolean };
  others: { name: string; x: number; y: number; primary?: boolean }[];
  onSelect: (name: string) => void;
  reduce: boolean;
}) {
  return (
    <g transform={`translate(${xOffset}, 0) scale(${SCALE})`}>
      <rect x={0} y={0} width={100} height={70} fill="#02385a" />

      {CONTINENTS.map((c) => (
        <path key={c.name} d={c.d} fill="#c98f52" stroke="#01283f" strokeWidth={0.35} strokeLinejoin="round" />
      ))}

      {others.map((city) => {
        const midX = (lagos.x + city.x) / 2;
        const midY = Math.min(lagos.y, city.y) - 6;
        return (
          <path
            key={`line-${city.name}`}
            d={`M${lagos.x},${lagos.y} Q${midX},${midY} ${city.x},${city.y}`}
            fill="none"
            stroke="#ffbf00"
            strokeWidth={0.28}
            strokeDasharray="1 1.2"
            opacity={0.55}
          />
        );
      })}

      <g style={{ cursor: "pointer" }} onClick={() => onSelect(lagos.name)}>
        <motion.circle
          cx={lagos.x}
          cy={lagos.y}
          r={1.7}
          fill="rgba(170,113,48,0.3)"
          animate={reduce ? undefined : { scale: [1, 1.7, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: `${lagos.x}px ${lagos.y}px` }}
        />
        <circle cx={lagos.x} cy={lagos.y} r={1.1} fill="#aa7130" />
        <text x={lagos.x + 2.2} y={lagos.y + 0.7} fontSize={2.6} fontWeight={700} fill="#ffffff">
          {lagos.name}
        </text>
      </g>

      {others.map((city) => (
        <g key={city.name} style={{ cursor: "pointer" }} onClick={() => onSelect(city.name)}>
          <circle cx={city.x} cy={city.y} r={0.85} fill="#ffffff" />
          <text x={city.x + 1.8} y={city.y + 0.6} fontSize={2.2} fontWeight={500} fill="rgba(255,255,255,0.85)">
            {city.name}
          </text>
        </g>
      ))}
    </g>
  );
}

export default function GlobalReach() {
  const reduce = !!useReducedMotion();
  const lagos = CITIES.find((c) => c.primary)!;
  const others = CITIES.filter((c) => !c.primary);

  const [offset, setOffset] = useState(20);
  const [modalCity, setModalCity] = useState<string | null>(null);
  const draggingRef = useRef(false);
  const hoveringRef = useRef(false);
  const lastXRef = useRef(0);

  useEffect(() => {
    if (reduce) return;
    let raf: number;
    let last = performance.now();
    function tick(now: number) {
      const dt = (now - last) / 1000;
      last = now;
      if (!draggingRef.current && !hoveringRef.current && !modalCity) {
        setOffset((o) => (o + dt * ROTATE_SPEED) % TILE_W);
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce, modalCity]);

  useEffect(() => {
    if (!modalCity) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setModalCity(null);
    }
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [modalCity]);

  function handlePointerDown(e: React.PointerEvent<SVGSVGElement>) {
    draggingRef.current = true;
    lastXRef.current = e.clientX;
    (e.target as Element).setPointerCapture?.(e.pointerId);
  }
  function handlePointerMove(e: React.PointerEvent<SVGSVGElement>) {
    if (!draggingRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    setOffset((o) => (((o - dx * 0.3) % TILE_W) + TILE_W) % TILE_W);
  }
  function handlePointerUp() {
    draggingRef.current = false;
  }

  const selectedCity = CITIES.find((c) => c.name === modalCity);

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 px-5 sm:px-6">
      {/* white dominant, a whisper of navy and warmth, nothing more */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#eef3f8]" />
      <motion.div
        animate={reduce ? undefined : { x: [0, 22, 0], y: [0, -18, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-8%] top-[6%] h-80 w-80 rounded-full bg-[#02385a]/[0.05] blur-[120px]"
      />
      <motion.div
        animate={reduce ? undefined : { x: [0, -18, 0], y: [0, 18, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-6%] bottom-[-8%] h-80 w-80 rounded-full bg-[#aa7130]/[0.07] blur-[120px]"
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.02] mix-blend-multiply pointer-events-none" aria-hidden="true">
        <filter id="globeGrainLight">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#globeGrainLight)" />
      </svg>

      <div className="relative max-w-6xl mx-auto">
        <FadeUp className="text-center mb-14 sm:mb-16">
          <p className="text-[#aa7130] font-raleway font-semibold text-[11px] tracking-[0.22em] uppercase mb-4">
            Global Reach
          </p>
          <h2
            className="font-raleway font-light leading-[1.15] mx-auto mb-5 tracking-tight"
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              maxWidth: 600,
              background: "linear-gradient(90deg, #02385a 0%, #aa7130 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Supporting clients across continents.
          </h2>
          <p className="text-slate-500 text-[15px] sm:text-[16px] max-w-xl mx-auto font-nunito">
            Many of our clients live abroad while coordinating care for someone in Nigeria.
            TriageConcierge bridges that distance.
          </p>
        </FadeUp>

        <FadeIn className="flex flex-col items-center">
          <p className="mb-5 font-nunito text-[11px] tracking-[0.1em] uppercase text-slate-400">
            Drag the globe to explore &middot; click a city
          </p>

          <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-square">
            <div className="absolute inset-0 rounded-full shadow-[0_35px_70px_-20px_rgba(2,56,90,0.35)] ring-1 ring-slate-900/5 overflow-hidden bg-[#02385a]">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full cursor-grab active:cursor-grabbing touch-none"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={() => {
                  handlePointerUp();
                  hoveringRef.current = false;
                }}
                onPointerEnter={() => {
                  hoveringRef.current = true;
                }}
              >
                <MapTile xOffset={0 - offset} lagos={lagos} others={others} onSelect={setModalCity} reduce={reduce} />
                <MapTile xOffset={TILE_W - offset} lagos={lagos} others={others} onSelect={setModalCity} reduce={reduce} />
              </svg>

              {/* sphere shading: light falling from the upper left, shadow lower right */}
              <div
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.22), transparent 42%), radial-gradient(circle at 70% 76%, rgba(2,10,20,0.4), transparent 60%)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{ boxShadow: "inset 0 0 24px rgba(2,10,20,0.5)" }}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5 justify-center mt-9 max-w-2xl">
            {CITIES.map((city) => (
              <button
                key={city.name}
                type="button"
                onClick={() => setModalCity(city.name)}
                className="group flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aa7130]"
                style={{
                  background: city.primary ? "rgba(170,113,48,0.08)" : "rgba(2,56,90,0.03)",
                  borderColor: city.primary ? "rgba(170,113,48,0.3)" : "rgba(2,56,90,0.1)",
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-200 group-hover:scale-125"
                  style={{ background: city.primary ? "#aa7130" : "#02385a" }}
                />
                <span
                  className="text-[12px] font-semibold font-raleway"
                  style={{ color: city.primary ? "#aa7130" : "#02385a" }}
                >
                  {city.name}
                </span>
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* city detail modal */}
      <AnimatePresence>
        {selectedCity && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedCity.name} coordination details`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#02120a]/60 backdrop-blur-sm px-5 sm:px-6"
            onClick={() => setModalCity(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.35, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-[#02385a] to-[#061428] px-7 py-7">
                {!reduce && (
                  <motion.div
                    animate={{ x: ["-30%", "130%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  />
                )}
                <div className="relative flex items-start justify-between">
                  <div>
                    <p className="font-raleway font-semibold text-[11px] tracking-[0.18em] uppercase text-[#ffbf00] mb-2">
                      {getCityContent(selectedCity).eyebrow}
                    </p>
                    <h3 className="font-raleway font-light text-2xl text-white tracking-tight">{selectedCity.name}</h3>
                  </div>
                  <motion.button
                    onClick={() => setModalCity(null)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="text-white/60 hover:text-white"
                    aria-label="Close"
                  >
                    <Icons.Close />
                  </motion.button>
                </div>
              </div>

              <div className="p-7 flex flex-col gap-6">
                <p className="text-slate-500 text-[14px] leading-relaxed font-nunito">
                  {getCityContent(selectedCity).body}
                </p>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--gx", `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty("--gy", `${e.clientY - rect.top}px`);
                  }}
                  style={{ ["--gx" as string]: "50%", ["--gy" as string]: "50%" }}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#aa7130] px-6 py-3.5 font-raleway text-sm font-semibold text-white shadow-[0_6px_18px_-6px_rgba(170,113,48,0.55)] transition-shadow duration-500 hover:shadow-[0_12px_28px_-6px_rgba(170,113,48,0.85)]"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "radial-gradient(100px circle at var(--gx) var(--gy), rgba(255,255,255,0.3), transparent 70%)" }}
                  />
                  <span className="relative">Talk to a Rep About {selectedCity.name}</span>
                  <motion.span
                    className="relative flex"
                    initial={false}
                    variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                    animate="rest"
                    whileHover="hover"
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  >
                    <Icons.ArrowRight />
                  </motion.span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}