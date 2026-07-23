"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/content";

/**
 * MiniMe — a little LEGO version of Shlok fixed in the corner of every page.
 *
 * With art (profile.avatar / avatarBoard):
 *   - the FORWARD pose gently tilts toward the mouse cursor (whole-figure
 *     parallax, since a LEGO face has painted eyes that can't move)
 *   - every ~15s it cross-fades to the BOARD pose to "make a chess move",
 *     then fades back to the forward pose
 *
 * Without art (or if the images fail to load): a placeholder SVG face whose
 * pupils track the cursor.
 */

const EYES = [
  { cx: 78, cy: 95 },
  { cx: 122, cy: 95 },
];
const VIEWBOX = 200;
const PUPIL_MAX_TRAVEL = 6;

const GLANCE_EVERY = 15000; // ms between board glances
const GLANCE_FOR = 2600; // ms spent looking at the board

export default function MiniMe() {
  const hasArt = Boolean(profile.avatar);
  // Preload the art so we only switch to the image version once it's confirmed
  // loadable. Otherwise (missing file, 404) we keep the SVG face — this avoids
  // the browser's broken-image icon and the flaky <img onError> hydration race.
  const [status, setStatus] = useState<"loading" | "ok" | "failed">(
    hasArt ? "loading" : "failed"
  );

  useEffect(() => {
    if (!hasArt) return;
    const img = new window.Image();
    img.onload = () => setStatus("ok");
    img.onerror = () => setStatus("failed");
    img.src = profile.avatar;
  }, [hasArt]);

  return (
    <div
      className="pointer-events-none fixed bottom-4 left-4 z-40 select-none sm:bottom-6 sm:left-6"
      aria-hidden="true"
    >
      {status === "ok" ? <LegoMiniMe /> : <SvgMiniMe />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Image version: two poses, tilt-to-cursor + periodic board glance    */
/* ------------------------------------------------------------------ */

function LegoMiniMe() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, r: 0 });
  const [glancing, setGlancing] = useState(false);
  const hasBoard = Boolean(profile.avatarBoard);

  // Tilt the figure toward the cursor.
  useEffect(() => {
    const clamp = (v: number, m: number) => Math.max(-m, Math.min(m, v));
    const onMove = (e: MouseEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      setTilt({
        x: clamp(dx / 45, 7),
        y: clamp(dy / 60, 5),
        r: clamp(dx / 70, 6),
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Periodically glance at the board to "make a move".
  useEffect(() => {
    if (!hasBoard) return;
    let hide: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
      setGlancing(true);
      hide = setTimeout(() => setGlancing(false), GLANCE_FOR);
    }, GLANCE_EVERY);
    return () => {
      clearInterval(id);
      clearTimeout(hide);
    };
  }, [hasBoard]);

  return (
    <div ref={wrapRef} className="relative h-24 w-24 sm:h-28 sm:w-28">
      <div
        className="h-full w-full transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${tilt.x}px, ${tilt.y}px) rotate(${tilt.r}deg)`,
        }}
      >
        {/* forward pose (tracks cursor) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={profile.avatar}
          alt=""
          className={`absolute inset-0 h-full w-full rounded-2xl object-cover object-[50%_16%] drop-shadow-[0_8px_14px_rgba(28,43,37,0.22)] transition-opacity duration-500 ${
            glancing ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* board pose (the "move") */}
        {hasBoard && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profile.avatarBoard}
            alt=""
            className={`absolute inset-0 h-full w-full rounded-2xl object-cover object-[50%_16%] drop-shadow-[0_8px_14px_rgba(28,43,37,0.22)] transition-opacity duration-500 ${
              glancing ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Fallback SVG face with cursor-tracking pupils                       */
/* ------------------------------------------------------------------ */

function SvgMiniMe() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [offsets, setOffsets] = useState(EYES.map(() => ({ x: 0, y: 0 })));
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let ticking = false;

    const compute = () => {
      ticking = false;
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const next = EYES.map((eye) => {
        const screenX = rect.left + (eye.cx / VIEWBOX) * rect.width;
        const screenY = rect.top + (eye.cy / VIEWBOX) * rect.height;
        const angle = Math.atan2(mouse.y - screenY, mouse.x - screenX);
        const dist = Math.hypot(mouse.x - screenX, mouse.y - screenY);
        const travel = PUPIL_MAX_TRAVEL * Math.min(1, dist / 240);
        return { x: Math.cos(angle) * travel, y: Math.sin(angle) * travel };
      });
      setOffsets(next);
    };

    const schedule = () => {
      if (ticking) return;
      ticking = true;
      if (typeof document !== "undefined" && document.hidden) compute();
      else requestAnimationFrame(compute);
    };

    const onMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
      schedule();
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", schedule, { passive: true });
    compute();
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", schedule);
    };
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const loop = () => {
      timeout = setTimeout(() => {
        setBlink(true);
        setTimeout(() => setBlink(false), 140);
        loop();
      }, 2500 + Math.random() * 3500);
    };
    loop();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div ref={wrapRef} className="relative h-24 w-24 sm:h-28 sm:w-28">
      <svg
        viewBox="0 0 200 200"
        className="h-full w-full drop-shadow-[0_6px_10px_rgba(28,43,37,0.18)]"
      >
        <circle cx="100" cy="100" r="92" fill="#dff0e6" stroke="#bcdcc8" strokeWidth="3" />
        <path d="M40 150 L78 96 L104 132 L130 84 L165 150 Z" fill="#4c9a76" opacity="0.35" />
        <path d="M118 104 L130 84 L142 104 Z" fill="#ffffff" opacity="0.7" />
        <path d="M60 200 C60 168 78 150 100 150 C122 150 140 168 140 200 Z" fill="#2f6d49" />
        <rect x="96" y="150" width="8" height="18" fill="#2f6d49" />
        <circle cx="100" cy="98" r="46" fill="#f7d9b8" />
        <path d="M56 92 C56 60 78 48 100 48 C122 48 144 60 144 92 C144 78 126 70 100 70 C74 70 56 78 56 92 Z" fill="#2b2320" />
        <circle cx="72" cy="112" r="7" fill="#f2a9a0" opacity="0.65" />
        <circle cx="128" cy="112" r="7" fill="#f2a9a0" opacity="0.65" />
        {EYES.map((eye, i) => (
          <g key={i}>
            <ellipse cx={eye.cx} cy={eye.cy} rx="12" ry={blink ? 1.5 : 12} fill="#ffffff" stroke="#2b2320" strokeWidth="2.5" />
            {!blink && (
              <circle cx={eye.cx + offsets[i].x} cy={eye.cy + offsets[i].y} r="5.5" fill="#1c2b25" />
            )}
          </g>
        ))}
        <path d="M84 124 Q100 138 116 124" fill="none" stroke="#2b2320" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}
