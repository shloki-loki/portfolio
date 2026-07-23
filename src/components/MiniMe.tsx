"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/content";

/**
 * MiniMe — a little version of Shlok fixed in the corner of every page.
 * Its eyes always track the mouse cursor across the whole screen.
 *
 * Right now this renders a cute placeholder SVG face. When you have your
 * Ghibli art, set `profile.avatar` to the image path in /public. The eye
 * positions below (EYES) can then be nudged to sit over your artwork's eyes.
 */

// Eye centres, expressed in the SVG's 200x200 viewBox coordinate space.
const EYES = [
  { cx: 78, cy: 95 },
  { cx: 122, cy: 95 },
];
const VIEWBOX = 200;
const PUPIL_MAX_TRAVEL = 6; // how far the pupil can slide, in viewBox units

export default function MiniMe() {
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
        // Convert the eye centre from viewBox units to screen pixels.
        const screenX = rect.left + (eye.cx / VIEWBOX) * rect.width;
        const screenY = rect.top + (eye.cy / VIEWBOX) * rect.height;
        const angle = Math.atan2(mouse.y - screenY, mouse.x - screenX);
        const dist = Math.hypot(mouse.x - screenX, mouse.y - screenY);
        // Ease travel so pupils don't slam to the edge for far-away cursors.
        const travel = PUPIL_MAX_TRAVEL * Math.min(1, dist / 240);
        return { x: Math.cos(angle) * travel, y: Math.sin(angle) * travel };
      });
      setOffsets(next);
    };

    // Throttle with rAF when the page is visible; fall back to a direct
    // compute when it isn't (rAF is paused on hidden tabs).
    const schedule = () => {
      if (ticking) return;
      ticking = true;
      if (typeof document !== "undefined" && document.hidden) {
        compute();
      } else {
        requestAnimationFrame(compute);
      }
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

  // Occasional blink for a bit of life.
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const loop = () => {
      const delay = 2500 + Math.random() * 3500;
      timeout = setTimeout(() => {
        setBlink(true);
        setTimeout(() => setBlink(false), 140);
        loop();
      }, delay);
    };
    loop();
    return () => clearTimeout(timeout);
  }, []);

  const hasArt = Boolean(profile.avatar);

  return (
    <div
      className="pointer-events-none fixed bottom-4 left-4 z-40 select-none sm:bottom-6 sm:left-6"
      aria-hidden="true"
    >
      <div ref={wrapRef} className="relative h-24 w-24 sm:h-28 sm:w-28">
        {hasArt ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profile.avatar}
            alt=""
            className="h-full w-full object-contain drop-shadow"
          />
        ) : (
          <PlaceholderFace offsets={offsets} blink={blink} />
        )}
      </div>
    </div>
  );
}

function PlaceholderFace({
  offsets,
  blink,
}: {
  offsets: { x: number; y: number }[];
  blink: boolean;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-full w-full drop-shadow-[0_6px_10px_rgba(28,43,37,0.18)]"
    >
      {/* little mountain badge behind the character */}
      <circle cx="100" cy="100" r="92" fill="#dff0e6" stroke="#bcdcc8" strokeWidth="3" />
      <path d="M40 150 L78 96 L104 132 L130 84 L165 150 Z" fill="#4c9a76" opacity="0.35" />
      <path d="M118 104 L130 84 L142 104 Z" fill="#ffffff" opacity="0.7" />

      {/* body / hoodie */}
      <path
        d="M60 200 C60 168 78 150 100 150 C122 150 140 168 140 200 Z"
        fill="#2f6d49"
      />
      <rect x="96" y="150" width="8" height="18" fill="#2f6d49" />

      {/* head */}
      <circle cx="100" cy="98" r="46" fill="#f7d9b8" />
      {/* hair */}
      <path
        d="M56 92 C56 60 78 48 100 48 C122 48 144 60 144 92 C144 78 126 70 100 70 C74 70 56 78 56 92 Z"
        fill="#2b2320"
      />
      <path d="M56 92 C58 74 70 66 70 66 C64 76 62 86 62 96 Z" fill="#2b2320" />

      {/* cheeks */}
      <circle cx="72" cy="112" r="7" fill="#f2a9a0" opacity="0.65" />
      <circle cx="128" cy="112" r="7" fill="#f2a9a0" opacity="0.65" />

      {/* eyes */}
      {EYES.map((eye, i) => (
        <g key={i}>
          <ellipse cx={eye.cx} cy={eye.cy} rx="12" ry={blink ? 1.5 : 12} fill="#ffffff" stroke="#2b2320" strokeWidth="2.5" />
          {!blink && (
            <circle
              cx={eye.cx + offsets[i].x}
              cy={eye.cy + offsets[i].y}
              r="5.5"
              fill="#1c2b25"
            />
          )}
        </g>
      ))}

      {/* smile */}
      <path
        d="M84 124 Q100 138 116 124"
        fill="none"
        stroke="#2b2320"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
