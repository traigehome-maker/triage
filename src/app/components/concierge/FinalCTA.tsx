"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { WHATSAPP, CTA } from "./shared/config";
import { Icons } from "./shared/icons";
import { FadeUp } from "./shared/motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Replace the background gradient panel with real imagery when ready:
 * a PM Rep on a video call, or a care dashboard, kept subtle behind the
 * gold radial glow.
 *
 * This is the site's closing bookend to the hero, so it reuses the
 * hero's exact CTA family (magnetic pull, cursor-tracked light) rather
 * than inventing a new button style at the last moment. The one thing
 * unique to this section: the tagline is rendered in the brand book's
 * own documented "gradient slogan on primary colour" treatment, the one
 * place the brand guide itself shows the tagline this way.
 */
function MagneticPrimary({ children, href }: { children: React.ReactNode; href: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.5 });
  const glowRef = useRef<HTMLSpanElement>(null);

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    x.set((relX - rect.width / 2) * 0.2);
    y.set((relY - rect.height / 2) * 0.3);
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
      whileTap={{ scale: 0.96 }}
      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-10 py-4 font-raleway text-sm font-semibold text-white shadow-[0_20px_40px_rgba(170,113,48,0.3)] transition-shadow duration-500 hover:shadow-[0_24px_50px_rgba(170,113,48,0.5)]"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #aa7130, #8c5c22)" }}
      />
      <span ref={glowRef} aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
      <span className="relative">{children}</span>
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
    </motion.a>
  );
}

function SecondaryCTA({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--gx", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--gy", `${e.clientY - rect.top}px`);
      }}
      style={{ ["--gx" as string]: "50%", ["--gy" as string]: "50%" }}
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/20 px-10 py-4 font-raleway text-sm font-semibold text-white/80 transition-colors duration-300 hover:border-[#aa7130]/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(90px circle at var(--gx) var(--gy), rgba(255,255,255,0.12), transparent 70%)" }}
      />
      <span className="relative">
        {children}
        <span className="absolute left-1/2 -bottom-1 h-px w-0 bg-[#ffbf00] transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full" />
      </span>
    </a>
  );
}

export default function FinalCTA() {
  const reduce = !!useReducedMotion();

  return (
    <section className="relative min-h-[580px] flex items-center justify-center px-5 sm:px-6 py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c14] via-[#0a0c14] to-[#02385a]" />

        {/* a warm glow gathering low, rising behind the close, distinct from every other section's gradient shape */}
        <motion.div
          animate={reduce ? undefined : { scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 bottom-[-20%] h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[#aa7130]/20 blur-[130px]"
        />

        <motion.div
          animate={reduce ? undefined : { backgroundPosition: ["0px 0px", "60px 60px"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#aa7130 1px, transparent 1px), linear-gradient(90deg, #aa7130 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <svg className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay pointer-events-none" aria-hidden="true">
          <filter id="finalCtaGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#finalCtaGrain)" />
        </svg>

        <div className="hidden lg:block absolute bottom-6 right-6 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1.5">
          
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c14]/90 via-transparent to-[#0a0c14]/60" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <FadeUp>
          <div className="inline-flex items-center gap-3 mb-8">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              style={{ transformOrigin: "right" }}
              className="w-8 h-[1px] bg-[#aa7130]"
            />
            <span className="font-raleway font-semibold text-[11px] tracking-[0.22em] uppercase text-[#aa7130]">
              More Than Healthcare
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              style={{ transformOrigin: "left" }}
              className="w-8 h-[1px] bg-[#aa7130]"
            />
          </div>

          <h2
            className="font-raleway font-light leading-[1.08] mb-6 tracking-tight"
            style={{ fontSize: "clamp(34px, 5.5vw, 64px)" }}
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
              Peace of mind.
            </span>
          </h2>
          <p className="text-white/55 text-base sm:text-lg leading-[1.85] max-w-xl mx-auto mb-11 sm:mb-12 font-nunito">
            TriageConcierge is not about waiting until you are ill. It is about
            having an elite team standing behind you, while you focus on your
            work, your priorities, and your life.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <MagneticPrimary href={WHATSAPP}>{CTA.heroPrimary}</MagneticPrimary>
            
          </div>

          {/* the one place on the site rendered exactly as the brand book's own
              "Gradient Slogan on Primary Colour" example shows it */}
          <p
            className="text-xs font-raleway font-semibold tracking-[0.2em] uppercase"
            style={{
              background: "linear-gradient(90deg, #b745d8 0%, #aa7130 50%, #a6d200 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            #HomeHealth, Powered by People
          </p>
        </FadeUp>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
      `}</style>
    </section>
  );
}