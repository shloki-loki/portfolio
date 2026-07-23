"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-canvas/80 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-pine font-mono text-sm font-bold text-white"
          aria-label="Home"
        >
          {profile.name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)}
        </Link>

        <ul className="flex items-center gap-1 text-sm sm:gap-2">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-md px-2.5 py-1.5 transition-colors sm:px-3 ${
                    active
                      ? "bg-pine/10 font-medium text-pine"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
