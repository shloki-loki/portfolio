"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/content";

/**
 * Cycles through profile.roles with a quick fade, like the reference site's
 * rotating "AI Engineer / Full Stack Developer / ..." headline.
 */
export default function RotatingRole() {
  const roles = profile.roles;
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (roles.length <= 1) return;
    const HOLD = 2200; // time each role stays fully shown
    const FADE = 250; // fade duration

    const tick = setInterval(() => {
      setVisible(false); // start fade-out
      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setVisible(true); // fade the next one in
      }, FADE);
    }, HOLD);

    return () => clearInterval(tick);
  }, [roles.length]);

  return (
    <span
      className={`inline-block font-mono text-lg text-moss transition-all duration-200 sm:text-xl ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
      }`}
    >
      {roles[index]}
    </span>
  );
}
