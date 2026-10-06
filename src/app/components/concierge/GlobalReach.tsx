"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { WHATSAPP } from "./shared/config";
import { Icons } from "./shared/icons";
import { FadeUp, FadeIn } from "./shared/motion";

const EASE = [0.22, 1, 0.36, 1] as const;

interface GlobeCity {
  name: string;
  lat: number;
  lng: number;
  primary?: boolean;
  country: string;
  timezone: string;
  activeSpecialists: string;
  focus: string;
}

const GLOBE_CITIES: GlobeCity[] = [
  {
    name: "Lagos",
    lat: 6.5244,
    lng: 3.3792,
    primary: true,
    country: "Nigeria",
    timezone: "WAT (UTC+1)",
    activeSpecialists: "24/7 Dedicated Operational Desk",
    focus: "Primary care coordination center, clinical dispatch, and emergency escalation.",
  },
  {
    name: "Abuja",
    lat: 9.0765,
    lng: 7.3986,
    country: "Nigeria",
    timezone: "WAT (UTC+1)",
    activeSpecialists: "Executive Care Wing",
    focus: "VIP home health, executive wellness, and specialist consultations in the capital.",
  },
  {
    name: "London",
    lat: 51.5074,
    lng: -0.1278,
    country: "United Kingdom",
    timezone: "GMT / BST (UTC+0/+1)",
    activeSpecialists: "Diaspora Family Office Support",
    focus: "Seamless overseas oversight for family health, chronic condition monitoring, and instant medical reporting.",
  },
  {
    name: "Houston",
    lat: 29.7604,
    lng: -95.3698,
    country: "United States (Texas)",
    timezone: "CST (UTC-6)",
    activeSpecialists: "Medical Diaspora Coordination",
    focus: "Connecting US-based diaspora professionals with verified in-home clinical care for aging parents in Nigeria.",
  },
  {
    name: "Atlanta",
    lat: 33.749,
    lng: -84.388,
    country: "United States (Georgia)",
    timezone: "EST (UTC-5)",
    activeSpecialists: "Private Client Oversight",
    focus: "Real-time vital sign tracking, scheduled clinical check-ins, and digital TriageSnapshot delivery.",
  },
  {
    name: "Toronto",
    lat: 43.6532,
    lng: -79.3832,
    country: "Canada",
    timezone: "EST (UTC-5)",
    activeSpecialists: "North American Diaspora Desk",
    focus: "Transparent health reporting, medication adherence tracking, and remote consultation scheduling.",
  },
  {
    name: "Doha",
    lat: 25.2854,
    lng: 51.531,
    country: "Qatar",
    timezone: "AST (UTC+3)",
    activeSpecialists: "Gulf Region Liaison",
    focus: "Direct line for Gulf-based executives managing household healthcare in Nigeria with complete discretion.",
  },
  {
    name: "Dubai",
    lat: 25.2048,
    lng: 55.2708,
    country: "United Arab Emirates",
    timezone: "GST (UTC+4)",
    activeSpecialists: "HNI & Family Office Desk",
    focus: "Executive wellness coordination, private clinical matching, and priority medical logistics.",
  },
  {
    name: "New Delhi",
    lat: 28.6139,
    lng: 77.209,
    country: "India",
    timezone: "IST (UTC+5:30)",
    activeSpecialists: "Specialist Care Bridge",
    focus: "Cross-border medical collaboration, post-treatment recovery oversight, and continuous doctor liaison.",
  },
  {
    name: "Johannesburg",
    lat: -26.2041,
    lng: 28.0473,
    country: "South Africa",
    timezone: "SAST (UTC+2)",
    activeSpecialists: "Pan-African Concierge Desk",
    focus: "Regional healthcare oversight, seamless travel coordination, and structured post-op rehabilitation.",
  },
];

// High-precision geographic boundary polygons for true-to-life continent rendering
const AFRICA_POLY: [number, number][] = [
  [37.3, 9.8], [36.8, 10.8], [35.8, 10.6], [33.9, 10.1], [33.1, 11.6], [32.9, 13.2],
  [31.2, 16.5], [32.0, 20.0], [32.8, 22.0], [32.0, 24.0], [31.3, 27.2], [31.5, 31.5],
  [31.3, 32.5], [27.9, 34.3], [24.0, 35.6], [20.0, 37.2], [15.6, 39.5], [12.8, 42.9],
  [11.8, 43.5], [11.5, 49.0], [11.8, 51.3], [8.0, 50.0], [5.0, 48.5], [2.0, 45.3],
  [-0.5, 42.5], [-4.0, 39.6], [-6.8, 39.3], [-10.6, 40.6], [-15.0, 40.5], [-19.8, 35.0],
  [-23.8, 35.4], [-25.9, 32.6], [-28.8, 32.1], [-30.0, 31.0], [-33.0, 27.9], [-34.0, 25.6],
  [-34.8, 20.0], [-34.3, 18.5], [-33.9, 18.4], [-32.0, 18.3], [-28.6, 16.5], [-26.6, 15.1],
  [-22.9, 14.5], [-17.3, 11.8], [-12.5, 13.4], [-8.8, 13.2], [-6.0, 12.3], [-0.6, 9.0],
  [1.0, 9.4], [2.0, 9.8], [4.0, 9.2], [4.5, 7.0], [6.4, 3.4], [6.1, 1.2],
  [5.0, -1.0], [4.7, -2.1], [4.3, -7.5], [6.3, -10.8], [8.5, -13.3], [9.5, -13.7],
  [11.8, -16.0], [13.5, -16.7], [14.7, -17.5], [20.9, -17.0], [24.0, -15.8], [27.1, -13.2],
  [28.0, -12.3], [30.4, -9.6], [31.6, -9.0], [33.6, -7.6], [34.0, -6.8], [35.8, -5.8],
  [35.3, -2.0], [35.9, 0.1], [36.8, 3.0], [36.9, 7.8],
];

const MADAGASCAR_POLY: [number, number][] = [
  [-12.0, 49.3], [-15.5, 50.5], [-19.0, 49.0], [-22.0, 48.0], [-25.6, 45.2],
  [-23.5, 43.7], [-20.0, 44.0], [-16.0, 44.5], [-13.0, 48.5],
];

const EUROPE_POLY: [number, number][] = [
  [36.0, -5.5], [36.8, -2.1], [38.3, -0.5], [41.4, 2.2], [43.3, 3.5], [43.7, 7.3],
  [44.0, 10.0], [41.9, 12.5], [38.1, 15.6], [40.0, 18.5], [45.4, 12.3], [45.0, 14.5],
  [41.0, 19.5], [38.0, 21.5], [36.5, 23.0], [40.5, 23.0], [40.0, 26.0], [41.0, 29.0],
  [44.0, 29.0], [46.5, 31.0], [45.0, 35.5], [47.0, 39.0], [55.0, 38.0], [65.0, 40.0],
  [71.0, 28.0], [64.0, 10.0], [58.0, 6.0], [55.5, 8.5], [53.5, 7.5], [52.5, 5.0],
  [51.0, 2.5], [48.5, -4.5], [46.0, -1.2], [43.4, -1.5], [43.8, -8.0], [38.7, -9.5],
  [37.0, -9.0], [36.0, -5.5],
];

const UK_POLY: [number, number][] = [
  [50.0, -5.7], [50.8, -1.3], [51.3, 1.4], [52.8, 1.7], [54.0, -0.2], [56.0, -2.5],
  [58.6, -3.1], [58.0, -5.3], [55.8, -5.0], [53.4, -3.0], [51.5, -4.5],
];

const IRELAND_POLY: [number, number][] = [
  [51.4, -9.5], [52.0, -6.5], [54.0, -6.0], [55.4, -7.3], [54.0, -10.0], [52.0, -10.5],
];

const ARABIA_POLY: [number, number][] = [
  [30.0, 32.5], [28.0, 34.5], [20.0, 40.0], [16.8, 42.5], [12.6, 43.5], [12.8, 45.0],
  [14.5, 49.0], [17.0, 54.0], [22.5, 59.8], [23.6, 58.5], [26.2, 56.4], [25.3, 55.3],
  [24.5, 54.4], [25.3, 51.5], [26.5, 50.1], [29.4, 48.0], [30.0, 48.0], [31.0, 36.0],
  [31.5, 34.5], [33.5, 35.5], [36.0, 36.0], [31.0, 32.5],
];

const INDIA_POLY: [number, number][] = [
  [24.0, 68.0], [21.0, 70.0], [19.0, 72.8], [15.0, 74.0], [10.0, 76.0], [8.1, 77.5],
  [10.0, 79.8], [13.0, 80.3], [16.0, 81.5], [20.0, 86.5], [22.0, 89.0], [25.0, 92.0],
  [28.0, 88.0], [35.0, 75.0], [30.0, 70.0], [25.0, 65.0],
];

const EAST_ASIA_POLY: [number, number][] = [
  [22.0, 89.0], [20.0, 93.0], [10.0, 98.5], [1.3, 103.8], [6.0, 102.0], [10.0, 105.0],
  [16.0, 108.0], [21.0, 108.0], [22.3, 114.2], [24.5, 118.5], [30.0, 122.0], [35.0, 119.5],
  [39.0, 118.0], [40.0, 124.0], [38.0, 126.0], [35.0, 129.0], [42.0, 131.0], [55.0, 135.0],
  [70.0, 140.0], [70.0, 70.0], [50.0, 85.0], [40.0, 80.0], [30.0, 90.0],
];

const NORTH_AMERICA_POLY: [number, number][] = [
  [15.0, -92.0], [16.0, -95.0], [19.0, -104.0], [23.0, -110.0], [32.0, -117.0], [37.8, -122.5],
  [48.0, -124.7], [55.0, -132.0], [60.0, -150.0], [65.0, -168.0], [71.0, -156.0], [70.0, -130.0],
  [65.0, -85.0], [55.0, -78.0], [58.0, -62.0], [47.0, -53.0], [44.0, -64.0], [41.0, -71.5],
  [35.0, -75.5], [30.0, -81.5], [25.0, -80.5], [30.0, -88.0], [29.5, -95.0], [26.0, -97.0],
  [22.0, -97.8], [19.0, -96.0], [19.0, -91.0], [21.5, -87.0], [18.5, -88.0], [15.5, -88.5], [15.0, -92.0],
];

const SOUTH_AMERICA_POLY: [number, number][] = [
  [11.0, -74.0], [10.5, -67.0], [8.0, -60.0], [5.0, -52.0], [0.0, -50.0], [-3.0, -40.0],
  [-5.5, -35.2], [-8.0, -35.0], [-13.0, -38.5], [-23.0, -43.0], [-24.0, -46.5], [-30.0, -50.0],
  [-35.0, -56.0], [-38.0, -57.5], [-45.0, -66.0], [-52.0, -68.0], [-55.0, -66.5], [-50.0, -75.0],
  [-40.0, -73.5], [-33.0, -71.5], [-23.5, -70.5], [-18.5, -70.3], [-12.0, -77.0], [-5.0, -81.0],
  [0.0, -80.0], [4.0, -77.5], [8.0, -77.0], [11.0, -74.0],
];

const AUSTRALIA_POLY: [number, number][] = [
  [-11.0, 142.5], [-17.0, 146.0], [-23.5, 151.0], [-28.0, 153.5], [-34.0, 151.2], [-38.0, 145.0],
  [-38.5, 140.5], [-35.0, 137.0], [-32.0, 132.0], [-34.0, 122.0], [-35.0, 117.8], [-32.0, 115.7],
  [-26.0, 113.0], [-22.0, 114.0], [-20.0, 119.0], [-18.0, 122.0], [-15.0, 128.0], [-12.4, 130.8],
  [-12.0, 136.5], [-15.0, 139.0], [-11.0, 142.5],
];

// Ray-casting point in polygon algorithm
function pointInPolygon(lat: number, lng: number, poly: [number, number][]): boolean {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][1];
    const yi = poly[i][0];
    const xj = poly[j][1];
    const yj = poly[j][0];
    const intersect = yi > lat !== yj > lat && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

// Generates geographically precise point-matrix continent mesh
function generateContinentPoints(): [number, number][] {
  const points: [number, number][] = [];
  const allPolygons = [
    { poly: AFRICA_POLY, step: 1.4 }, // Dense step for distinct African contours
    { poly: MADAGASCAR_POLY, step: 1.3 },
    { poly: EUROPE_POLY, step: 1.6 },
    { poly: UK_POLY, step: 1.4 },
    { poly: IRELAND_POLY, step: 1.4 },
    { poly: ARABIA_POLY, step: 1.6 },
    { poly: INDIA_POLY, step: 1.6 },
    { poly: EAST_ASIA_POLY, step: 2.0 },
    { poly: NORTH_AMERICA_POLY, step: 2.0 },
    { poly: SOUTH_AMERICA_POLY, step: 1.8 },
    { poly: AUSTRALIA_POLY, step: 1.8 },
  ];

  allPolygons.forEach(({ poly, step }) => {
    let minLat = 90;
    let maxLat = -90;
    let minLng = 180;
    let maxLng = -180;

    poly.forEach(([lat, lng]) => {
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
      if (lng < minLng) minLng = lng;
      if (lng > maxLng) maxLng = lng;
    });

    for (let lat = minLat; lat <= maxLat; lat += step) {
      for (let lng = minLng; lng <= maxLng; lng += step) {
        if (pointInPolygon(lat, lng, poly)) {
          points.push([lat, lng]);
        }
      }
    }
  });

  return points;
}

export default function GlobalReach() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduce = !!useReducedMotion();
  const [modalCity, setModalCity] = useState<string | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  // Globe rotation state (centered on Nigeria / Atlantic hemisphere initially)
  const rotXRef = useRef(-0.1);
  const rotYRef = useRef(0.18);
  const targetRotXRef = useRef<number | null>(null);
  const targetRotYRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const lastPointerRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0.0016, y: 0 });

  const continentPoints = useMemo(() => generateContinentPoints(), []);
  const lagosCity = GLOBE_CITIES.find((c) => c.primary)!;
  const destinationCities = useMemo(() => GLOBE_CITIES.filter((c) => !c.primary), []);

  // Smoothly center the globe on a selected city
  const focusOnCity = useCallback((cityName: string) => {
    const city = GLOBE_CITIES.find((c) => c.name === cityName);
    if (!city) return;
    targetRotXRef.current = -((city.lng * Math.PI) / 180) - Math.PI / 2;
    targetRotYRef.current = ((city.lat * Math.PI) / 180) * 0.65;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      time += 0.016;
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const globeRadius = Math.min(width, height) * 0.42;

      ctx.clearRect(0, 0, width, height);

      // Smooth rotation / inertia handling
      if (targetRotXRef.current !== null && targetRotYRef.current !== null) {
        rotXRef.current += (targetRotXRef.current - rotXRef.current) * 0.08;
        rotYRef.current += (targetRotYRef.current - rotYRef.current) * 0.08;

        if (
          Math.abs(targetRotXRef.current - rotXRef.current) < 0.002 &&
          Math.abs(targetRotYRef.current - rotYRef.current) < 0.002
        ) {
          targetRotXRef.current = null;
          targetRotYRef.current = null;
        }
      } else if (!isDraggingRef.current) {
        if (!isHoveredRef.current && !modalCity && !reduce) {
          rotXRef.current += velocityRef.current.x;
        }
      }

      const rotX = rotXRef.current;
      const rotY = rotYRef.current;

      // 1. Draw outer atmospheric glow & halo
      const atmosGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        globeRadius * 0.88,
        centerX,
        centerY,
        globeRadius * 1.25
      );
      atmosGrad.addColorStop(0, "rgba(0, 185, 157, 0.25)");
      atmosGrad.addColorStop(0.35, "rgba(2, 56, 90, 0.28)");
      atmosGrad.addColorStop(0.7, "rgba(166, 210, 0, 0.1)");
      atmosGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = atmosGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 1.25, 0, Math.PI * 2);
      ctx.fill();

      // 2. Base 3D Sphere gradient fill (Triage Luxury Navy)
      const sphereGrad = ctx.createRadialGradient(
        centerX - globeRadius * 0.35,
        centerY - globeRadius * 0.35,
        globeRadius * 0.1,
        centerX,
        centerY,
        globeRadius
      );
      sphereGrad.addColorStop(0, "#084b77");
      sphereGrad.addColorStop(0.45, "#02385a");
      sphereGrad.addColorStop(0.85, "#012644");
      sphereGrad.addColorStop(1, "#00172c");

      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2);
      ctx.fillStyle = sphereGrad;
      ctx.fill();

      // 3. Latitude & Longitude 3D Graticule Grid
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2);
      ctx.clip();

      const project3D = (
        lat: number,
        lng: number,
        rFactor = 1
      ): { x: number; y: number; z: number; visible: boolean } => {
        const phi = (lat * Math.PI) / 180;
        const theta = (lng * Math.PI) / 180 + rotX;
        const r = globeRadius * rFactor;

        // Base 3D spherical coords
        const x0 = r * Math.cos(phi) * Math.sin(theta);
        const y0 = -r * Math.sin(phi);
        const z0 = r * Math.cos(phi) * Math.cos(theta);

        // Pitch tilt around X axis
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x = x0;
        const y = y0 * cosY - z0 * sinY;
        const z = y0 * sinY + z0 * cosY;

        return {
          x: centerX + x,
          y: centerY + y,
          z: z / globeRadius,
          visible: z > -0.05,
        };
      };

      // Draw 3D latitude parallels
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1;
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        let first = true;
        for (let lng = -180; lng <= 180; lng += 8) {
          const pt = project3D(lat, lng);
          if (pt.visible) {
            if (first) {
              ctx.moveTo(pt.x, pt.y);
              first = false;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      }

      // Draw 3D longitude meridians
      for (let lng = -180; lng < 180; lng += 45) {
        ctx.beginPath();
        let first = true;
        for (let lat = -80; lat <= 80; lat += 6) {
          const pt = project3D(lat, lng);
          if (pt.visible) {
            if (first) {
              ctx.moveTo(pt.x, pt.y);
              first = false;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      }

      // 4. Render 3D High-Definition Continent Point Mesh
      for (let i = 0; i < continentPoints.length; i++) {
        const [lat, lng] = continentPoints[i];
        const pt = project3D(lat, lng);
        if (pt.z > 0) {
          const alpha = Math.min(1, Math.max(0.12, Math.pow(pt.z, 1.3)));
          const size = 1.15 + pt.z * 1.35;

          ctx.fillStyle = `rgba(0, 185, 157, ${alpha * 0.9})`;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, size, 0, Math.PI * 2);
          ctx.fill();

          // Highlight core for front-facing points
          if (pt.z > 0.45) {
            ctx.fillStyle = `rgba(166, 210, 0, ${pt.z * 0.65})`;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, size * 0.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // 5. Draw 3D Great-Circle Flight & Coordination Arcs
      const lagosPt = project3D(lagosCity.lat, lagosCity.lng);

      destinationCities.forEach((city, index) => {
        const numSteps = 36;
        const arcPoints: { x: number; y: number; z: number; visible: boolean }[] = [];

        // Great circle angle between Lagos and destination
        const lat1 = (lagosCity.lat * Math.PI) / 180;
        const lng1 = (lagosCity.lng * Math.PI) / 180;
        const lat2 = (city.lat * Math.PI) / 180;
        const lng2 = (city.lng * Math.PI) / 180;

        const dLng = lng2 - lng1;
        const angularDist = Math.acos(
          Math.max(-1, Math.min(1, Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(dLng)))
        );

        const maxElevation = 0.18 + Math.min(0.22, angularDist * 0.12);

        for (let s = 0; s <= numSteps; s++) {
          const t = s / numSteps;
          const A = Math.sin((1 - t) * angularDist) / Math.sin(angularDist);
          const B = Math.sin(t * angularDist) / Math.sin(angularDist);

          const xSph = A * Math.cos(lat1) * Math.cos(lng1) + B * Math.cos(lat2) * Math.cos(lng2);
          const ySph = A * Math.cos(lat1) * Math.sin(lng1) + B * Math.cos(lat2) * Math.sin(lng2);
          const zSph = A * Math.sin(lat1) + B * Math.sin(lat2);

          const curLat = (Math.atan2(zSph, Math.sqrt(xSph * xSph + ySph * ySph)) * 180) / Math.PI;
          const curLng = (Math.atan2(ySph, xSph) * 180) / Math.PI;

          const elevation = 1 + maxElevation * Math.sin(Math.PI * t);
          arcPoints.push(project3D(curLat, curLng, elevation));
        }

        // Draw the glowing 3D arc line
        ctx.beginPath();
        let isDrawing = false;
        arcPoints.forEach((p) => {
          if (p.visible) {
            if (!isDrawing) {
              ctx.moveTo(p.x, p.y);
              isDrawing = true;
            } else {
              ctx.lineTo(p.x, p.y);
            }
          } else {
            isDrawing = false;
          }
        });

        const isHovered = hoveredCity === city.name;
        ctx.strokeStyle = isHovered ? "rgba(201, 226, 101, 0.95)" : "rgba(0, 185, 157, 0.55)";
        ctx.lineWidth = isHovered ? 2.2 : 1.2;
        ctx.setLineDash([3, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Animated Traveling Energy Pulse
        const pulseSpeed = 0.45 + (index % 3) * 0.1;
        const pulseT = (time * pulseSpeed + index * 0.22) % 1;
        const pulseIdx = Math.floor(pulseT * (numSteps - 1));
        const pulsePoint = arcPoints[pulseIdx];

        if (pulsePoint && pulsePoint.visible && pulsePoint.z > 0) {
          const pulseGlow = ctx.createRadialGradient(
            pulsePoint.x,
            pulsePoint.y,
            0,
            pulsePoint.x,
            pulsePoint.y,
            8
          );
          pulseGlow.addColorStop(0, "#c9e265");
          pulseGlow.addColorStop(0.4, "rgba(0, 185, 157, 0.8)");
          pulseGlow.addColorStop(1, "rgba(0, 185, 157, 0)");

          ctx.fillStyle = pulseGlow;
          ctx.beginPath();
          ctx.arc(pulsePoint.x, pulsePoint.y, 8, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(pulsePoint.x, pulsePoint.y, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 6. Draw Lagos Radar Concentric Beacon Rings
      if (lagosPt.z > 0) {
        const radarPhase = (time * 1.5) % 1;
        const radarRadius = 6 + radarPhase * 18;
        const radarAlpha = (1 - radarPhase) * lagosPt.z;

        ctx.strokeStyle = `rgba(201, 226, 101, ${radarAlpha * 0.9})`;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.arc(lagosPt.x, lagosPt.y, radarRadius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = `rgba(0, 185, 157, ${radarAlpha * 0.6})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(lagosPt.x, lagosPt.y, radarRadius * 0.6, 0, Math.PI * 2);
        ctx.stroke();

        // Lagos Core Pin
        ctx.fillStyle = "#c9e265";
        ctx.beginPath();
        ctx.arc(lagosPt.x, lagosPt.y, 4.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1.6;
        ctx.stroke();
      }

      // 7. Draw Global City Nodes & Badges
      destinationCities.forEach((city) => {
        const pt = project3D(city.lat, city.lng);
        if (pt.z > 0.05) {
          const isHovered = hoveredCity === city.name;
          const alpha = Math.min(1, pt.z * 1.4);

          // Outer beacon ring
          ctx.strokeStyle = isHovered ? "#c9e265" : `rgba(0, 185, 157, ${alpha * 0.8})`;
          ctx.lineWidth = isHovered ? 1.8 : 1.2;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, isHovered ? 5.5 : 3.5, 0, Math.PI * 2);
          ctx.stroke();

          // Core node
          ctx.fillStyle = isHovered ? "#ffffff" : `rgba(255, 255, 255, ${alpha})`;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, isHovered ? 3.0 : 2.0, 0, Math.PI * 2);
          ctx.fill();

          // City Label Badge
          if (pt.z > 0.2) {
            ctx.font = `700 ${isHovered ? 12 : 11}px Raleway, sans-serif`;
            const text = city.name;
            const textWidth = ctx.measureText(text).width;
            const pillX = pt.x + 8;
            const pillY = pt.y - 8;

            ctx.fillStyle = isHovered ? "rgba(2, 56, 90, 0.95)" : "rgba(1, 38, 68, 0.85)";
            ctx.strokeStyle = isHovered ? "#c9e265" : "rgba(0, 185, 157, 0.45)";
            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.roundRect(pillX - 4, pillY - 11, textWidth + 8, 16, 4);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = isHovered ? "#c9e265" : "#ffffff";
            ctx.fillText(text, pillX, pillY + 1);
          }
        }
      });

      // Lagos Label Pill (Always prominent when facing front)
      if (lagosPt.z > 0.15) {
        ctx.font = "800 12px Raleway, sans-serif";
        const text = "Lagos";
        const textWidth = ctx.measureText(text).width;
        const pillX = lagosPt.x + 10;
        const pillY = lagosPt.y - 10;

        ctx.fillStyle = "rgba(2, 56, 90, 0.96)";
        ctx.strokeStyle = "#c9e265";
        ctx.lineWidth = 1.4;

        ctx.beginPath();
        ctx.roundRect(pillX - 5, pillY - 12, textWidth + 10, 18, 5);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#c9e265";
        ctx.fillText(text, pillX, pillY + 2);
      }

      ctx.restore();

      // 8. Lens reflection highlights for world-class glass finish
      const specGrad = ctx.createLinearGradient(
        centerX - globeRadius * 0.8,
        centerY - globeRadius * 0.8,
        centerX + globeRadius * 0.6,
        centerY + globeRadius * 0.6
      );
      specGrad.addColorStop(0, "rgba(255, 255, 255, 0.18)");
      specGrad.addColorStop(0.35, "rgba(255, 255, 255, 0.02)");
      specGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2);
      ctx.clip();
      ctx.fillStyle = specGrad;
      ctx.fill();

      // Inner limb rim lighting
      ctx.strokeStyle = "rgba(0, 185, 157, 0.4)";
      ctx.lineWidth = 2.5;
      ctx.stroke();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [continentPoints, destinationCities, hoveredCity, lagosCity, modalCity, reduce]);

  // Pointer drag event handlers for full 3D orbital control
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    lastPointerRef.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const globeRadius = Math.min(rect.width, rect.height) * 0.42;

      let found: string | null = null;
      for (const city of GLOBE_CITIES) {
        const phi = (city.lat * Math.PI) / 180;
        const theta = (city.lng * Math.PI) / 180 + rotXRef.current;
        const x0 = globeRadius * Math.cos(phi) * Math.sin(theta);
        const y0 = -globeRadius * Math.sin(phi);
        const z0 = globeRadius * Math.cos(phi) * Math.cos(theta);

        const cosY = Math.cos(rotYRef.current);
        const sinY = Math.sin(rotYRef.current);
        const x = x0;
        const y = y0 * cosY - z0 * sinY;
        const z = y0 * sinY + z0 * cosY;

        if (z > 0) {
          const screenX = centerX + x;
          const screenY = centerY + y;
          const dist = Math.hypot(mouseX - screenX, mouseY - screenY);
          if (dist < 18) {
            found = city.name;
            break;
          }
        }
      }
      setHoveredCity(found);
      return;
    }

    const deltaX = e.clientX - lastPointerRef.current.x;
    const deltaY = e.clientY - lastPointerRef.current.y;
    lastPointerRef.current = { x: e.clientX, y: e.clientY };

    rotXRef.current += deltaX * 0.007;
    rotYRef.current = Math.max(-0.85, Math.min(0.85, rotYRef.current + deltaY * 0.007));
    velocityRef.current = { x: deltaX * 0.0008, y: deltaY * 0.0008 };
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handleCanvasClick = () => {
    if (hoveredCity) {
      setModalCity(hoveredCity);
      focusOnCity(hoveredCity);
    }
  };

  const selectedCity = GLOBE_CITIES.find((c) => c.name === modalCity);

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 px-5 sm:px-6 border-b border-slate-100">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#eef3f8]" />
      <motion.div
        animate={reduce ? undefined : { x: [0, 22, 0], y: [0, -18, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-8%] top-[6%] h-80 w-80 rounded-full bg-[#02385a]/[0.06] blur-[120px]"
      />
      <motion.div
        animate={reduce ? undefined : { x: [0, -18, 0], y: [0, 18, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-6%] bottom-[-8%] h-80 w-80 rounded-full bg-[#00b99d]/[0.08] blur-[120px]"
      />

      <div className="relative max-w-6xl mx-auto">
        <FadeUp className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-triage-teal" />
            <p className="text-triage-navy font-raleway font-bold text-xs sm:text-sm tracking-[0.22em] uppercase">
              Global Reach
            </p>
            <div className="w-8 h-[2px] bg-triage-teal" />
          </div>
          <h2
            className="font-raleway font-extrabold leading-[1.15] mx-auto mb-5 tracking-tight text-3xl sm:text-4xl lg:text-5xl text-triage-navy"
            style={{ maxWidth: 680 }}
          >
            Supporting clients across continents.
          </h2>
          <p className="text-slate-700 text-base sm:text-lg max-w-2xl mx-auto font-nunito font-medium leading-relaxed">
            Many of our clients live in London, Houston, Atlanta, Dubai, or Toronto while coordinating care for parents and family in Nigeria. TriageConcierge seamlessly bridges that distance.
          </p>
        </FadeUp>

        <FadeIn className="flex flex-col items-center">
          <p className="mb-6 font-nunito text-xs sm:text-sm tracking-wider uppercase text-slate-500 font-semibold flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-triage-teal animate-ping" />
            <span>Interactive 3D Sphere &middot; Drag to rotate &middot; Click any city node</span>
          </p>

          {/* 3D Canvas Interactive Globe Container */}
          <div className="relative w-full max-w-[420px] sm:max-w-[520px] aspect-square flex items-center justify-center">
            {/* Outer ambient glow backlight */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-triage-teal/25 via-triage-navy/20 to-triage-lime/25 blur-2xl pointer-events-none" />

            <canvas
              ref={canvasRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onMouseEnter={() => {
                isHoveredRef.current = true;
              }}
              onMouseLeave={() => {
                isHoveredRef.current = false;
                setHoveredCity(null);
              }}
              onClick={handleCanvasClick}
              className={`relative z-10 w-full h-full cursor-${hoveredCity ? "pointer" : "grab active:cursor-grabbing"} touch-none select-none`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          {/* Interactive City Selector Pills */}
          <div className="flex flex-wrap gap-2.5 justify-center mt-10 max-w-4xl">
            {GLOBE_CITIES.map((city) => {
              const isSelected = selectedCity?.name === city.name;
              return (
                <button
                  key={city.name}
                  type="button"
                  onClick={() => {
                    setModalCity(city.name);
                    focusOnCity(city.name);
                  }}
                  onMouseEnter={() => setHoveredCity(city.name)}
                  onMouseLeave={() => setHoveredCity(null)}
                  className={`group flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full border transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-triage-teal ${
                    city.primary
                      ? "bg-triage-navy text-white border-triage-navy shadow-md"
                      : isSelected
                      ? "bg-triage-teal text-white border-triage-teal shadow-md"
                      : "bg-white text-slate-700 border-slate-200 hover:border-triage-teal/50 hover:bg-slate-50"
                  }`}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full flex-shrink-0 transition-transform duration-200 group-hover:scale-125 ${
                      city.primary ? "bg-triage-lime" : "bg-triage-teal"
                    }`}
                  />
                  <span className="text-xs sm:text-sm font-bold font-raleway">
                    {city.name}
                  </span>
                </button>
              );
            })}
          </div>
        </FadeIn>
      </div>

      {/* City Detail Telemetry Modal */}
      <AnimatePresence>
        {selectedCity && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedCity.name} coordination details`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-md px-5 sm:px-6"
            onClick={() => setModalCity(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.35, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-100"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-[#02385a] to-[#012644] p-7 sm:p-8">
                {!reduce && (
                  <motion.div
                    animate={{ x: ["-30%", "130%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  />
                )}
                <div className="relative flex items-start justify-between">
                  <div>
                    <span className="inline-block font-raleway font-bold text-xs tracking-wider uppercase text-triage-lime mb-1.5">
                      {selectedCity.primary ? "Care Coordination Center" : "International Care Corridor"}
                    </span>
                    <h3 className="font-raleway font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                      {selectedCity.name}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm font-nunito mt-0.5">{selectedCity.country}</p>
                  </div>
                  <motion.button
                    onClick={() => setModalCity(null)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="text-white/80 hover:text-white p-1 rounded-full bg-white/10"
                    aria-label="Close"
                  >
                    <Icons.Close />
                  </motion.button>
                </div>
              </div>

              <div className="p-7 sm:p-8 flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div>
                    <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider font-raleway">Time Zone</p>
                    <p className="text-triage-navy text-xs sm:text-sm font-bold font-nunito mt-0.5">{selectedCity.timezone}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider font-raleway">Coverage Status</p>
                    <p className="text-triage-teal text-xs sm:text-sm font-bold font-nunito mt-0.5 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-triage-teal" />
                      Active 24/7
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider font-raleway mb-1.5">
                    Operational Focus
                  </p>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-nunito">
                    {selectedCity.focus}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-triage-navy hover:bg-triage-navy/90 text-white font-raleway font-bold text-sm px-6 py-3.5 transition shadow-md hover:shadow-lg"
                  >
                    <span>Coordinate Care in {selectedCity.name}</span>
                    <Icons.ArrowRight />
                  </a>
                  <button
                    type="button"
                    onClick={() => setModalCity(null)}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold font-raleway transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}