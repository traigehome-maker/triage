// ─── Premium SVG Icons (no emoji, Apple/Stripe style) ─────────────────────────

export const Icons = {
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Globe: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Calendar: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  Pulse: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  Phone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" />
    </svg>
  ),
  Bell: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  UserShield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Home: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  ArrowRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Close: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  Expand: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M3 16v3a2 2 0 0 0 2 2h3" />
    </svg>
  ),
};

// ─── Discretion iconography, custom line illustrations (no locks, no clip art) ─

export const DiscretionIcons = {
  SilhouetteCircle: ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <circle cx="50" cy="50" r="46" fill="currentColor" opacity="0.05" />
      <path
        d="M50 30a12 12 0 1 1 0 24 12 12 0 0 1 0-24zM26 78c2-16 12-24 24-24s22 8 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  ),
  EyeSlash: ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 100 60" className={className}>
      <path
        d="M6 30c10-16 28-24 44-24s34 8 44 24c-10 16-28 24-44 24S16 46 6 30z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="50" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="14" y1="50" x2="86" y2="10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />
    </svg>
  ),
  ZeroLog: ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 100 70" className={className}>
      <path
        d="M28 46a16 16 0 0 1-2-31.8A22 22 0 0 1 68 16a15 15 0 0 1-2 30H28z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="52" r="3" fill="currentColor" />
      <circle cx="50" cy="52" r="14" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.7" />
    </svg>
  ),
  AnonymousMatch: ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 100 70" className={className}>
      <circle cx="34" cy="26" r="12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeDasharray="2.5 3.5" />
      <path d="M16 60c2-13 9-19 18-19s16 6 18 19" fill="none" stroke="currentColor" strokeWidth="1.6" strokeDasharray="2.5 3.5" strokeLinecap="round" />
      <circle cx="70" cy="26" r="12" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M52 60c2-13 9-19 18-19s16 6 18 19" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  DiscreetVisit: ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 100 70" className={className}>
      <path d="M20 62V34l30-20 30 20v28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M42 62V44a8 8 0 0 1 16 0v18" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="12" y1="62" x2="88" y2="62" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  NDA: ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v5h5" />
      <path d="M9 13l2 2 4-4" />
    </svg>
  ),
};

export type IconKey = keyof typeof Icons;
export type DiscretionIconKey = keyof typeof DiscretionIcons;