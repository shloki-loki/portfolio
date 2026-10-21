"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/content";

const tabs = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Resume" },
];

export default function Tabs() {
  const pathname = usePathname();
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link href="/" className="brand" aria-label={`${profile.name}, home`}>
          {profile.name}
        </Link>
        <span className="availability"><span aria-hidden="true" />{profile.availability}</span>
        <nav className="tabs" aria-label="Primary">
          {tabs.map((tab) => (
            <Link key={tab.href} href={tab.href} className="tab" aria-current={pathname === tab.href ? "page" : undefined}>
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
