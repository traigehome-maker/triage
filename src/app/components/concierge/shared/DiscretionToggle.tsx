export function DiscretionModeToggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="group inline-flex items-center gap-3 rounded-full border border-white/20 hover:border-[#aa7130]/60 bg-white/[0.04] backdrop-blur-sm px-4 py-2 transition-colors"
      aria-pressed={on}
    >
      <span className="font-raleway font-semibold text-[11px] tracking-[0.18em] uppercase text-white/70">
        Discretion Mode
      </span>
      <span
        className="relative w-9 h-5 rounded-full transition-colors duration-200"
        style={{ background: on ? "#aa7130" : "rgba(255,255,255,0.15)" }}
      >
        <span
          className="absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-200"
          style={{ left: on ? "18px" : "2px" }}
        />
      </span>
      <span
        className="font-raleway font-bold text-[11px] tracking-[0.1em] uppercase"
        style={{ color: on ? "#d4a050" : "rgba(255,255,255,0.4)" }}
      >
        {on ? "On" : "Off"}
      </span>
    </button>
  );
}