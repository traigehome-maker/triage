"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { WHATSAPP, CTA } from "./shared/config";
import { Icons } from "./shared/icons";
import { DiscretionModeToggle } from "./shared/DiscretionToggle";

/**
 * Hero.
 *
 * Background image is art-directed by breakpoint, not just resized: mobile
 * gets /images/hero/tpm.png, lg and up gets /images/hero/pom.png. These
 * are two next/image <Image fill> elements toggled with Tailwind's
 * hidden/lg:block, not one image with responsive sizing, since the brief
 * is genuinely different artwork per breakpoint, not the same photo at a
 * different resolution.
 *
 * Honest tradeoff: because visibility here is CSS-driven (display:none),
 * not media-query-gated at the resource level, most browsers will still
 * fetch both images rather than only the one being shown. If that
 * bandwidth cost matters, swap this block for a native <picture> with
 * <source media="(min-width: 1024px)"> instead, at the cost of losing
 * next/image's automatic optimization for this element.
 *
 * Layout contract: capped at 100vh (h-screen). On lg+ the page splits
 * into two columns: copy on the left, the Continuity Line diagram as a
 * vertical timeline on the right, with a subtle mouse-tilt on the card.
 * Below lg there isn't room for a two-column read, so the diagram is
 * dropped in favour of a single condensed stat line under the CTAs.
 *
 * Every label in the vertical timeline triggers its own whileInView
 * animation rather than inheriting state from the parent card, so it
 * can never end up silently stuck at opacity 0.
 *
 * Discretion Mode state is owned by the page (see page.tsx), not here,
 * since the banner it triggers renders above every other section.
 *
 * Note: this component does NOT render its own logo or nav row. The site's
 * global navbar already owns that space above the hero; duplicating it
 * here caused the toggle to visually collide with the real nav. The
 * toggle lives inline in the hero's own content column instead.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

const columnStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// Vertical timeline: viewBox is 130 wide x 1000 tall. cy is the position
// down the line (time), cx is the small side-to-side deviation the line
// draws while it happens. Label "top" is derived from the same cy so a
// caption always sits level with its point on the line.
const CONTINUITY_MARKERS = [
  { cx: 96, cy: 170, label: "Daily support", caption: "Support team check-ins", tone: "orange" as const },
  { cx: 26, cy: 330, label: "Clinical visit", caption: "Verified provider dispatched", tone: "orange" as const },
  { cx: 78, cy: 525, label: "PM Rep follow-up", caption: "Your dedicated coordinator", tone: "orange" as const },
  { cx: 110, cy: 960, label: "Live monitoring", caption: "24/7", tone: "teal" as const },
];

const CONTINUITY_PATH =
  "M110,0 L110,120 Q110,140 100,150 Q90,160 110,170 L110,280 " +
  "Q110,300 60,312 Q20,322 26,332 Q32,342 60,352 L110,364 " +
  "L110,460 Q110,480 92,497 Q76,512 86,527 Q96,540 110,560 " +
  "L110,960";

function ContinuityLine({ reduce }: { reduce: boolean }) {
  return (
    <div className="relative flex h-[420px] xl:h-[480px] w-full flex-col rounded-3xl border border-white/15 bg-white/[0.06] backdrop-blur-md px-6 xl:px-8 py-6 xl:py-7 shadow-2xl">
      <div className="mb-1 flex items-baseline justify-between">
        <span className="font-raleway font-bold text-xs tracking-[0.2em] uppercase text-triage-lime">
          How Coordination Works
        </span>
      </div>
      <span className="mb-6 font-nunito text-xs tracking-wider uppercase text-white/70 font-medium">
        One Relationship &middot; Start to Finish
      </span>

      <div className="relative flex-1">
        <svg
          viewBox="0 0 130 1000"
          preserveAspectRatio="none"
          className="absolute left-0 top-0 h-full w-[64px] overflow-visible"
        >
          <defs>
            <linearGradient id="continuityGlowV" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#aa7130" stopOpacity="0" />
              <stop offset="65%" stopColor="#aa7130" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00b99d" stopOpacity="1" />
            </linearGradient>
          </defs>

          <motion.path
            d={CONTINUITY_PATH}
            fill="none"
            stroke="url(#continuityGlowV)"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={reduce ? { duration: 0.01 } : { duration: 1.4, ease: EASE }}
          />

          {CONTINUITY_MARKERS.map((m, i) => (
            <motion.circle
              key={m.label}
              cx={m.cx}
              cy={m.cy}
              r={i === CONTINUITY_MARKERS.length - 1 ? 5 : 4}
              fill={m.tone === "teal" ? "#00b99d" : "#aa7130"}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: reduce ? 0 : 1.4 + i * 0.16, duration: 0.35, ease: EASE }}
            />
          ))}

          {!reduce && (
            <motion.circle
              cx={CONTINUITY_MARKERS[3].cx}
              cy={CONTINUITY_MARKERS[3].cy}
              r={5}
              fill="none"
              stroke="#00b99d"
              strokeWidth={1.5}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0], scale: [1, 2.8, 3.4] }}
              transition={{ delay: 2.2, duration: 2.2, repeat: Infinity, ease: "easeOut" }}
              style={{ transformOrigin: `${CONTINUITY_MARKERS[3].cx}px ${CONTINUITY_MARKERS[3].cy}px` }}
            />
          )}
        </svg>

        {/* labels */}
        <div className="relative ml-[84px] h-full xl:ml-[96px]">
          {CONTINUITY_MARKERS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: reduce ? 0 : 1.5 + i * 0.16, duration: 0.5, ease: EASE }}
              className="absolute left-0 w-[160px] -translate-y-1/2 xl:w-[190px]"
              style={{ top: `${m.cy / 10}%` }}
            >
              <p
                className={`font-raleway font-bold text-sm xl:text-base leading-tight ${
                  m.tone === "teal" ? "text-triage-teal" : "text-white"
                }`}
              >
                {m.label}
              </p>
              <p className="mt-0.5 font-nunito text-xs xl:text-sm leading-snug text-white/70 font-medium">
                {m.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1.5 border-t border-white/10 pt-5">
        {[
          { v: "From ₦120K", l: "per month" },
          { v: "3", l: "access plans" },
          { v: "10+", l: "global cities" },
        ].map((s) => (
          <p key={s.l} className="font-nunito text-xs xl:text-sm text-white/70 font-medium">
            <span className="font-bold text-white">{s.v}</span> {s.l}
          </p>
        ))}
      </div>
    </div>
  );
}

/** Wraps ContinuityLine with a gentle perspective tilt that follows the
 *  cursor. Purely decorative, disabled entirely under reduced motion. */
function TiltCard({ reduce, children }: { reduce: boolean; children: React.ReactNode }) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-7, 7]), { stiffness: 150, damping: 18 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }
  function handleLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="w-full max-w-md"
    >
      {children}
    </motion.div>
  );
}

/** Primary CTA: magnetic pull toward the cursor, a soft light that
 *  actually follows the pointer (not a canned diagonal sweep), an
 *  arrow that eases out, and a shadow that blooms outward. */
function PrimaryCTA({ children, href }: { children: React.ReactNode; href: string }) {
  const glowRef = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.5 });

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    x.set((relX - rect.width / 2) * 0.2);
    y.set((relY - rect.height / 2) * 0.35);
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(120px circle at ${relX}px ${relY}px, rgba(255,255,255,0.4), transparent 70%)`;
    }
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.95 }}
      className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[#aa7130] px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-raleway font-bold tracking-wide text-white shadow-[0_6px_20px_-6px_rgba(170,113,48,0.55)] transition-shadow duration-500 ease-out hover:shadow-[0_16px_36px_-8px_rgba(170,113,48,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffbf00]"
    >
      <span
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
      />
      <span className="relative">{children}</span>
      <motion.span
        className="relative flex"
        initial={false}
        variants={{ rest: { x: 0, rotate: 0 }, hover: { x: 4, rotate: -4 } }}
        animate="rest"
        whileHover="hover"
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
      >
        <Icons.ArrowRight />
      </motion.span>
    </motion.a>
  );
}

/** Secondary CTA: quieter twin of the primary. */
function SecondaryCTA({ children, href }: { children: React.ReactNode; href: string }) {
  const glowRef = useRef<HTMLAnchorElement>(null);

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--glow-x", `${relX}px`);
    e.currentTarget.style.setProperty("--glow-y", `${relY}px`);
  }

  return (
    <a
      ref={glowRef}
      href={href}
      onMouseMove={handleMove}
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/20 px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-raleway font-bold tracking-wide text-white/90 transition-colors duration-300 hover:border-[#ffbf00]/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
      style={{ ["--glow-x" as string]: "50%", ["--glow-y" as string]: "50%" }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(90px circle at var(--glow-x) var(--glow-y), rgba(255,255,255,0.12), transparent 70%)" }}
      />
      <span className="relative">
        {children}
        <span className="absolute left-1/2 -bottom-1 h-px w-0 bg-[#ffbf00] transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full" />
      </span>
    </a>
  );
}

export default function Hero({
  discretionMode,
  onToggleDiscretion,
}: {
  discretionMode: boolean;
  onToggleDiscretion: () => void;
}) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const reduce = !!useReducedMotion();

  return (
    <section ref={heroRef} className="relative min-h-screen lg:min-h-[860px] xl:min-h-[920px] flex items-center overflow-hidden bg-[#02385a] pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pt-36 lg:pb-24">
      <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#012644] via-[#02385a] to-[#012644]" />

        {/* ambient glow drifting behind the headline */}
        <motion.div
          animate={reduce ? undefined : { x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[6%] top-[28%] h-72 w-72 rounded-full bg-[#aa7130]/25 blur-[110px]"
        />

        {/* ambient rings, slow and quiet */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <motion.div
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
            className="w-[420px] h-[420px] sm:w-[600px] sm:h-[600px] rounded-full border border-white/20"
          />
          <motion.div
            animate={reduce ? undefined : { rotate: -360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-full border border-white/10"
          />
        </div>

        {/* brand pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" aria-hidden="true">
          <defs>
            <pattern id="triageTile" width="72" height="72" patternUnits="userSpaceOnUse" patternTransform="rotate(6)">
              <path d="M20 8h8v10a10 10 0 0 0 14 9c4-2 4-8 0-8" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
              <circle cx="42" cy="19" r="2.2" fill="#aa7130" />
            </pattern>
          </defs>
          <motion.rect
            width="100%"
            height="100%"
            fill="url(#triageTile)"
            animate={reduce ? undefined : { x: [0, 72, 0], y: [0, 36, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* fine film grain */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035] mix-blend-overlay" aria-hidden="true">
          <filter id="heroGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#heroGrain)" />
        </svg>

        <div className="absolute inset-0 bg-gradient-to-r from-[#02385a]/95 via-[#02385a]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02385a]/85 via-transparent to-transparent" />
      </motion.div>

      {/* background photo */}
      <Image
        src="/images/hero/tpm.png"
        alt="TriageConcierge"
        fill
        className="object-cover object-center lg:hidden"
        priority
      />
      <Image
        src="/images/hero/pom.png"
        alt="TriageConcierge"
        fill
        className="hidden object-cover object-center lg:block"
        priority
      />
      <div className="absolute inset-0 bg-[#02385a]/70 z-[1]" />

      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 xl:gap-16 items-center my-auto"
      >
        <motion.div variants={columnStagger} initial="hidden" animate="show" className="max-w-2xl">
          <motion.div variants={rise} className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-7">
            <div className="inline-flex items-center gap-3">
              <div className="w-8 h-[2px] bg-triage-lime" />
              <span className="font-raleway font-bold text-xs sm:text-sm tracking-[0.22em] uppercase text-triage-lime">
                TriageConcierge
              </span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  {!reduce && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00b99d] opacity-75" />}
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#00b99d]" />
                </span>
                <span className="font-nunito text-xs sm:text-sm text-white/90 font-semibold">Coordinators active now</span>
              </div>
              <DiscretionModeToggle on={discretionMode} onToggle={onToggleDiscretion} />
            </div>
          </motion.div>

          <motion.h1
            variants={rise}
            className="text-4xl sm:text-5xl md:text-7xl font-raleway font-extrabold text-white leading-[1.08] tracking-tight mb-4 sm:mb-6"
          >
            <span
              style={{
                background: "linear-gradient(90deg, #ffffff 0%, #ffbf00 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              className={reduce ? "" : "animate-[shimmer_6s_ease-in-out_infinite]"}
            >
              Healthcare
              <br />
              coordinated.
            </span>
          </motion.h1>

          <motion.p variants={rise} className="font-nunito text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mb-6 sm:mb-8 font-medium">
            A dedicated coordinator. Verified providers. Real-time health updates.
            For individuals, executives, and organisations who need trusted oversight,
            whether across town or across the world.
          </motion.p>

          <motion.div variants={rise} className="flex flex-wrap gap-3 sm:gap-4">
            <PrimaryCTA href={WHATSAPP}>{CTA.heroPrimary}</PrimaryCTA>
          </motion.div>

          {/* condensed stats for mobile */}
          <motion.div variants={rise} className="flex lg:hidden flex-wrap gap-x-5 gap-y-1.5 mt-6">
            {[
              { v: "From ₦120K", l: "per month" },
              { v: "3", l: "access plans" },
              { v: "24/7", l: "monitoring" },
            ].map((s) => (
              <p key={s.l} className="font-nunito text-xs sm:text-sm text-white/70 font-medium">
                <span className="text-white font-bold">{s.v}</span> {s.l}
              </p>
            ))}
          </motion.div>
        </motion.div>

        {/* right column */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="hidden lg:flex justify-center"
        >
          <TiltCard reduce={reduce}>
            <ContinuityLine reduce={reduce} />
          </TiltCard>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
      `}</style>
    </section>
  );
}