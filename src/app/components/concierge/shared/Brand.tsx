// Simplified rendering of the TriageHome mark: a cross with a running figure
// and an accent dot, per brand guidelines section 3.0. Swap for the real
// exported SVG/PNG logo asset when available.

export function TriageLogomark({ className = "w-8 h-8", color = "#ffffff" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <path
        d="M16 6h8v8h8v8h-6l10 14-8 6-9-13-9 13H10l10-16H8v-8h8V6z"
        stroke={color}
        strokeWidth="2.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="30" cy="15" r="2.4" fill="#aa7130" />
    </svg>
  );
}

export function TriageWordmark({ light = true }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <TriageLogomark className="w-7 h-7" color={light ? "#ffffff" : "#02385a"} />
      <span className={`font-raleway font-bold tracking-[0.14em] text-sm uppercase ${light ? "text-white" : "text-[#02385a]"}`}>
        Triage <span className="font-light opacity-70">Home</span>
      </span>
    </div>
  );
}