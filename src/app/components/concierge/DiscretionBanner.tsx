"use client";

import { AnimatePresence, motion } from "framer-motion";
import { DiscretionIcons } from "./shared/icons";

// Appears when the visitor toggles Discretion Mode in the Hero.
// This is a trust signal, not a technical claim about analytics;
// wire it to your actual consent/analytics layer before shipping.

export default function DiscretionBanner({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed top-0 inset-x-0 z-[60] bg-[#0a0f1e] border-b border-[#aa7130]/30"
        >
          <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-center gap-2.5">
            <div className="w-3.5 h-3.5 text-[#aa7130]">
              <DiscretionIcons.EyeSlash className="w-full h-full" />
            </div>
            <p className="text-white/70 text-[12px] font-raleway font-medium tracking-wide">
              Browsing is private. No cookies, no tracking, no session recording on this device.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}