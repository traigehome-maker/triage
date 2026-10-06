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
          className="fixed bottom-0 inset-x-0 z-[60] bg-[#012644] border-b border-[#aa7130]/40 shadow-2xl py-1"
        >
          <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-center gap-2.5">
            <div className="w-4 h-4 text-[#d4a050] flex-shrink-0">
              <DiscretionIcons.EyeSlash className="w-full h-full" />
            </div>
            <p className="text-white/90 text-xs sm:text-sm font-raleway font-semibold tracking-wide">
              Browsing is private. No cookies, no tracking, no session recording on this device.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}