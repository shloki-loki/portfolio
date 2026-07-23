"use client";

import { useEffect, useState } from "react";
import { nowPlaying } from "@/lib/content";

/** The "Last played" + local time cards, echoing the reference layout. */
export default function StatusCards() {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
      <NowPlayingCard />
      <TimeCard />
    </div>
  );
}

function NowPlayingCard() {
  return (
    <a
      href={nowPlaying.url}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 rounded-2xl border border-line bg-card p-3 transition-colors hover:border-moss"
    >
      {/* album-art placeholder */}
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ink text-white">
        <MusicIcon />
      </div>
      <div className="min-w-0">
        <p className="flex items-center gap-1.5 text-xs text-muted">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-moss" />
          Last played
        </p>
        <p className="truncate text-sm font-semibold text-ink">
          {nowPlaying.song}
        </p>
        <p className="truncate text-xs text-muted">{nowPlaying.artist}</p>
      </div>
      <SpotifyIcon />
    </a>
  );
}

function TimeCard() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000 * 15);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-center rounded-2xl border border-line bg-card px-5 py-3">
      <p className="text-center">
        <span className="block text-sm font-semibold text-ink">
          {time || "—"}
        </span>
        <span className="block text-xs text-muted">IST · my time</span>
      </p>
    </div>
  );
}

function MusicIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M9 17.5a2.5 2.5 0 1 1-2-2.45V6l10-2v9.5a2.5 2.5 0 1 1-2-2.45V6.28L9 7.5v10Z" />
    </svg>
  );
}

function SpotifyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="ml-auto h-5 w-5 shrink-0 text-[#1DB954]"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.59 14.44a.62.62 0 0 1-.86.21c-2.35-1.44-5.31-1.76-8.79-.96a.62.62 0 1 1-.28-1.22c3.81-.87 7.08-.5 9.72 1.11.3.18.39.57.21.86Zm1.22-2.72a.78.78 0 0 1-1.07.26c-2.69-1.65-6.79-2.13-9.98-1.17a.78.78 0 1 1-.45-1.5c3.64-1.09 8.16-.55 11.24 1.34.37.22.49.71.26 1.07Zm.1-2.83C14.79 8.96 9.4 8.78 6.3 9.72a.94.94 0 1 1-.54-1.8c3.56-1.08 9.5-.87 13.25 1.35a.94.94 0 0 1-.96 1.62Z" />
    </svg>
  );
}
