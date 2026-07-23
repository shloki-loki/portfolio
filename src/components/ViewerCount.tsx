"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Live visitor counter backed by the free, no-auth Abacus hit counter
 * (https://abacus.jasoncameron.dev). Renders "You are the Nth visitor".
 */
const COUNTER_URL = "https://abacus.jasoncameron.dev/hit/shlok-portfolio/home";

function ordinalSuffix(n: number): string {
  const rem100 = n % 100;
  if (rem100 >= 11 && rem100 <= 13) return "th";
  switch (n % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export default function ViewerCount() {
  const [count, setCount] = useState<number | null>(null);
  const hit = useRef(false);

  useEffect(() => {
    if (hit.current) return; // guard React 18 dev double-invoke
    hit.current = true;
    fetch(COUNTER_URL)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) => setCount(data.value))
      .catch(() => setCount(null));
  }, []);

  return (
    <p className="text-center text-lg leading-relaxed text-ink sm:text-left">
      {count === null ? (
        <span className="text-muted">You are a visitor here</span>
      ) : (
        <>
          You are the{" "}
          <span className="font-bold text-pine">
            {count.toLocaleString()}
            <sup className="text-xs">{ordinalSuffix(count)}</sup>
          </span>{" "}
          visitor
        </>
      )}
    </p>
  );
}
