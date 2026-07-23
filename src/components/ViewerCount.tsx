"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Live visitor counter backed by the free, no-auth Abacus hit counter
 * (https://abacus.jasoncameron.dev). Each page load bumps the count by one.
 * If the service is unreachable, the card simply hides itself.
 */
const COUNTER_URL = "https://abacus.jasoncameron.dev/hit/shlok-portfolio/home";

export default function ViewerCount() {
  const [count, setCount] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);
  const hit = useRef(false);

  useEffect(() => {
    if (hit.current) return; // guard React 18 dev double-invoke
    hit.current = true;

    fetch(COUNTER_URL)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) => setCount(data.value))
      .catch(() => setFailed(true));
  }, []);

  if (failed) return null;

  return (
    <div className="rounded-2xl border border-line bg-card px-5 py-4 text-center">
      <p className="font-mono text-2xl font-bold text-pine">
        {count === null ? "—" : count.toLocaleString()}
      </p>
      <p className="mt-1 text-xs uppercase tracking-widest text-muted">
        {count === null ? "counting…" : "visitors so far"}
      </p>
    </div>
  );
}
