"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from "./shared/config";

export default function StickyMobileBooking() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky mobile bar once user scrolls past top 200px
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 p-3 bg-triage-navy/95 backdrop-blur-lg border-t border-white/15 shadow-2xl transition-transform duration-300">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        <a
          href={`tel:${WHATSAPP_NUMBER}`}
          className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center flex-shrink-0 active:scale-95 transition"
          aria-label="Call TriageHome"
        >
          <Phone className="w-5 h-5 text-triage-lime" />
        </a>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-12 rounded-full bg-triage-orange hover:bg-[#8c5c27] text-white font-nunito font-medium text-sm flex items-center justify-center gap-2 shadow-lg active:scale-95 transition"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span>Book a Session</span>
        </a>
      </div>
    </div>
  );
}
