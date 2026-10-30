"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Briefcase, Users, TrendingUp, Globe } from "lucide-react";

/* -------------------------------------
   COUNTER HOOK
------------------------------------- */
function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    function animate(timestamp: number) {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(percentage * end));
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    }
    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
}

/* -------------------------------------
   MAIN SECTION
------------------------------------- */
export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative overflow-hidden bg-white py-40">
      {/* Orbit Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute h-[800px] w-[800px] rounded-full border border-black/5"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute h-[560px] w-[560px] rounded-full border border-black/10"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute h-[360px] w-[360px] rounded-full border border-black/15"
        />
      </div>

      <div
        ref={ref}
        className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl"
      >
        {/* Header */}
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-xs text-black/50">
            Our Impact
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-light leading-tight text-black">
            Measurable Results
            <span className="block mt-2 font-normal text-[#461248]">
              Built Across Industries
            </span>
          </h2>

          <p className="mt-8 text-lg text-black/70 leading-relaxed">
            We focus on outcomes, not activity. Every project, partnership, and
            engagement contributes to long term growth and measurable
            performance.
          </p>
        </div>

        {/* Counters */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <Stat
            icon={<Briefcase />}
            label="Projects Delivered"
            value={isInView ? 120 : 0}
            suffix="+"
          />
          <Stat
            icon={<Users />}
            label="Happy Clients"
            value={isInView ? 85 : 0}
            suffix="+"
          />
          <Stat
            icon={<TrendingUp />}
            label="Campaigns Executed"
            value={isInView ? 200 : 0}
            suffix="+"
          />
          <Stat
            icon={<Globe />}
            label="Industries Served"
            value={isInView ? 12 : 0}
            suffix=""
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------
   STAT CARD
------------------------------------- */
function Stat({
  icon,
  label,
  value,
  suffix,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix: string;
}) {
  const count = useCountUp(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl border border-black/10 bg-white/80 p-8 backdrop-blur-sm"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#461248]/10 text-[#461248]">
        {icon}
      </div>

      <div className="text-4xl font-light text-black">
        {count}
        {suffix}
      </div>

      <p className="mt-2 text-sm uppercase tracking-wide text-black/60">
        {label}
      </p>
    </motion.div>
  );
}
