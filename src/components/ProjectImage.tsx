"use client";

import { useEffect, useState } from "react";

/**
 * Renders a project screenshot once it's confirmed loadable. Dark UI shots sit
 * on a dark tile with object-contain so nothing is cropped. If the file is
 * missing, nothing renders (no broken-image icon).
 */
export default function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setOk(true);
    img.onerror = () => setOk(false);
    img.src = src;
  }, [src]);

  if (!ok) return null;

  return (
    <div className="mb-4 overflow-hidden rounded-xl border border-line bg-[#0e1512]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-40 w-full object-contain"
        loading="lazy"
      />
    </div>
  );
}
