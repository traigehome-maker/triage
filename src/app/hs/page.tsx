import type { Metadata } from "next";
import SnapshotHero from "../components/health-snapshot/SnapshotHero";
import VisitInclusions from "../components/health-snapshot/VisitInclusions";
import BookingProcess from "../components/health-snapshot/BookingProcess";
import ContinuityJourney from "../components/health-snapshot/ContinuityJourney";
import SnapshotFAQ from "../components/health-snapshot/SnapshotFAQ";
import FinalBookingCTA from "../components/health-snapshot/FinalBookingCTA";
import StickyMobileBooking from "../components/health-snapshot/StickyMobileBooking";

export const metadata: Metadata = {
  title: "TriageHealth SnapShot | Know Your Numbers, Protect Your Health",
  description:
    "Certified Registered Nurse in-home wellness check and 13 essential clinical screenings. Receive a permanent thermal receipt and 24-hour Digital Health Snapshot.",
  openGraph: {
    title: "TriageHealth SnapShot | Know Your Numbers, Protect Your Health",
    description:
      "13 vital checks, blood glucose, malaria screening, and clinical guidance delivered at your doorstep. Get your 24-hour Digital Health Snapshot.",
    url: "https://triage-home.com/hs",
    siteName: "TriageHome Healthcare",
    images: [
      {
        url: "/images/hero/snap-hero.webp",
        width: 1200,
        height: 630,
        alt: "TriageHealth SnapShot Screening",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
};

export default function HealthSnapshotPage() {
  return (
    <main className="relative overflow-x-hidden font-nunito bg-white text-[#0f172a]">
      <SnapshotHero />

      <VisitInclusions />

      <BookingProcess />

      <ContinuityJourney />

      <SnapshotFAQ />

      <FinalBookingCTA />

      <StickyMobileBooking />
    </main>
  );
}
