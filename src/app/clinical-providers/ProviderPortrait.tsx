"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Provider } from "./providersData";

const AVATAR_EXTENSIONS = [".jpg", ".png", ".webp", ".jpeg"];

const GRADIENT_PAIRS: [string, string][] = [
  ["#02385a", "#00b99d"],
  ["#aa7130", "#02385a"],
  ["#00b99d", "#a6d200"],
  ["#b745d8", "#02385a"],
  ["#02385a", "#aa7130"],
  ["#00b99d", "#02385a"],
  ["#aa7130", "#00b99d"],
  ["#a6d200", "#02385a"],
];

function getGradient(id: number): string {
  const pair = GRADIENT_PAIRS[(id - 1) % GRADIENT_PAIRS.length];
  return `linear-gradient(135deg, ${pair[0]} 0%, ${pair[1]} 100%)`;
}

export function ProviderPortrait({
  provider,
  sizes = "(max-width: 768px) 100vw, 400px",
  className = "",
  priority = false,
}: {
  provider: Provider;
  sizes?: string;
  className?: string;
  priority?: boolean;
}) {
  const [extIndex, setExtIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setExtIndex(0);
    setImgError(false);
  }, [provider.imageSlug]);

  const hasExt = /\.(jpg|jpeg|png|webp)$/i.test(provider.imageSlug);
  const imageSrc = hasExt
    ? `/images/providers/${provider.imageSlug}`
    : `/images/providers/${provider.imageSlug}${AVATAR_EXTENSIONS[extIndex]}`;

  const handleImgError = () => {
    if (!hasExt && extIndex < AVATAR_EXTENSIONS.length - 1) {
      setExtIndex((prev) => prev + 1);
    } else {
      setImgError(true);
    }
  };

  if (imgError) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center ${className}`}
        style={{ background: getGradient(provider.id) }}
      >
        <span className="font-raleway text-5xl font-bold tracking-wider text-white">
          {provider.initials}
        </span>
      </div>
    );
  }

  return (
    <Image
      key={imageSrc}
      src={imageSrc}
      alt={`${provider.fullName} headshot`}
      fill
      priority={priority}
      sizes={sizes}
      onError={handleImgError}
      className={`object-cover object-top ${className}`}
    />
  );
}
