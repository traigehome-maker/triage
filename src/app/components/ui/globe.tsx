"use client";

import React, { useEffect, useRef } from "react";
import {
  Color,
  Scene,
  Fog,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
  PointLight,
} from "three";
import ThreeGlobe from "three-globe";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export interface GlobeConfig {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: { lat: number; lng: number };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
}

export interface Position {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
}

export interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

// In-memory cache so we only fetch and parse geojson once
let cachedCountriesFeatures: any[] | null = null;
let isFetchingCountries = false;
const countryListeners: ((features: any[]) => void)[] = [];

function loadCountries(callback: (features: any[]) => void) {
  if (cachedCountriesFeatures) {
    callback(cachedCountriesFeatures);
    return;
  }
  countryListeners.push(callback);
  if (isFetchingCountries) return;

  isFetchingCountries = true;
  fetch("https://unpkg.com/three-globe/example/country-polygons/ne_110m_admin_0_countries.geojson")
    .then((res) => res.json())
    .then((data) => {
      cachedCountriesFeatures = data.features || [];
      countryListeners.forEach((cb) => cb(cachedCountriesFeatures!));
      countryListeners.length = 0;
    })
    .catch(() => {
      // Graceful fallback: render without country polygons
      countryListeners.length = 0;
    })
    .finally(() => {
      isFetchingCountries = false;
    });
}

export function World({ globeConfig, data }: WorldProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    // Scene with soft luxury fog
    const scene = new Scene();
    scene.fog = new Fog(0x02172b, 450, 1800);

    // Camera setup
    const camera = new PerspectiveCamera(45, width / height, 180, 1800);
    camera.position.set(0, 40, 360);

    // Renderer: capped to max 1.5 pixelRatio for silky smooth 60fps performance
    const renderer = new WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = globeConfig.autoRotate ?? true;
    controls.autoRotateSpeed = globeConfig.autoRotateSpeed ?? 0.6;
    controls.minPolarAngle = Math.PI / 3.6;
    controls.maxPolarAngle = Math.PI - Math.PI / 3.2;

    // Lighting
    const ambientLight = new AmbientLight(globeConfig.ambientLight || "#38bdf8", 0.9);
    scene.add(ambientLight);

    const dirLeftLight = new DirectionalLight(globeConfig.directionalLeftLight || "#ffffff", 1.2);
    dirLeftLight.position.set(-400, 350, 300);
    scene.add(dirLeftLight);

    const dirTopLight = new DirectionalLight(globeConfig.directionalTopLight || "#ffffff", 1.0);
    dirTopLight.position.set(200, 500, 200);
    scene.add(dirTopLight);

    const pointLight = new PointLight(globeConfig.pointLight || "#ffffff", 1.0);
    pointLight.position.set(-200, 500, 200);
    scene.add(pointLight);

    // Instantiate ThreeGlobe
    const globe = new ThreeGlobe({
      waitForGlobeReady: true,
      animateIn: false, // Disabling initial heavy entrance transition for instant responsiveness
    });

    const globeMaterial = globe.globeMaterial() as any;
    if (globeMaterial) {
      globeMaterial.color = new Color(globeConfig.globeColor || "#062056");
      globeMaterial.emissive = new Color(globeConfig.emissive || "#02172b");
      globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity ?? 0.15;
      globeMaterial.shininess = globeConfig.shininess ?? 0.9;
    }

    if (globeConfig.showAtmosphere) {
      globe.showAtmosphere(true);
      globe.atmosphereColor(globeConfig.atmosphereColor || "#ffffff");
      globe.atmosphereAltitude(globeConfig.atmosphereAltitude ?? 0.12);
    }

    // High performance hex polygons: resolution 2 (instead of 3) computes in ~30ms vs 2500ms
    loadCountries((features) => {
      globe
        .hexPolygonsData(features)
        .hexPolygonResolution(2)
        .hexPolygonMargin(0.68)
        .hexPolygonColor(() => globeConfig.polygonColor || "rgba(255, 255, 255, 0.7)");
    });

    // Render Arcs
    globe
      .arcsData(data)
      .arcStartLat((d: any) => d.startLat)
      .arcStartLng((d: any) => d.startLng)
      .arcEndLat((d: any) => d.endLat)
      .arcEndLng((d: any) => d.endLng)
      .arcColor((d: any) => d.color)
      .arcAltitude((d: any) => d.arcAlt || 0.25)
      .arcStroke(0.6)
      .arcDashLength(globeConfig.arcLength ?? 0.9)
      .arcDashInitialGap((d: any) => d.order || 1)
      .arcDashGap(15)
      .arcDashAnimateTime(globeConfig.arcTime ?? 1000);

    // Render Pin Points
    const pointsMap = new Map<string, { lat: number; lng: number; color: string }>();
    data.forEach((d) => {
      pointsMap.set(`${d.startLat},${d.startLng}`, { lat: d.startLat, lng: d.startLng, color: d.color });
      pointsMap.set(`${d.endLat},${d.endLng}`, { lat: d.endLat, lng: d.endLng, color: d.color });
    });
    const points = Array.from(pointsMap.values());

    globe
      .pointsData(points)
      .pointColor((d: any) => d.color)
      .pointAltitude(0.005)
      .pointRadius(globeConfig.pointSize ?? 1.5);

    // Render Pulse Rings
    const rings = data.map((d) => ({
      lat: d.endLat,
      lng: d.endLng,
      color: d.color,
    }));

    globe
      .ringsData(rings)
      .ringColor((d: any) => (t: number) => d.color)
      .ringMaxRadius(globeConfig.maxRings ?? 3)
      .ringPropagationSpeed(2.5)
      .ringRepeatPeriod((globeConfig.arcTime ?? 1000) / (globeConfig.rings ?? 1));

    scene.add(globe);

    // Responsive resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop with IntersectionObserver
    // Pauses 100% of rendering when scrolled outside viewport!
    let animId: number | null = null;
    let isVisible = false;

    const animate = () => {
      if (!isVisible) return;
      controls.update();
      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible;
        isVisible = entry.isIntersecting;
        if (isVisible && !wasVisible) {
          animate();
        } else if (!isVisible && animId) {
          cancelAnimationFrame(animId);
          animId = null;
        }
      },
      { rootMargin: "150px" }
    );

    observer.observe(container);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [globeConfig, data]);

  return <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />;
}
