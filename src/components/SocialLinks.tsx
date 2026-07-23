import type { IconType } from "react-icons";
import { SiGithub, SiLinkedin, SiX, SiPeerlist } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { socials } from "@/lib/content";

type Item = { key: string; href: string; label: string; Icon: IconType };

// Order requested: LinkedIn, GitHub, Twitter, Peerlist, Mail.
const ITEMS: Item[] = [
  { key: "linkedin", href: socials.linkedin, label: "LinkedIn", Icon: SiLinkedin },
  { key: "github", href: socials.github, label: "GitHub", Icon: SiGithub },
  { key: "twitter", href: socials.twitter, label: "Twitter / X", Icon: SiX },
  { key: "peerlist", href: socials.peerlist, label: "Peerlist", Icon: SiPeerlist },
  { key: "email", href: socials.email, label: "Email", Icon: MdOutlineEmail },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {ITEMS.map(({ key, href, label, Icon }) => {
        const active = Boolean(href);
        const isExternal = href.startsWith("http");
        return (
          <div key={key} className="group relative">
            {active ? (
              <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-card text-muted transition-colors hover:border-moss hover:text-pine"
              >
                <Icon className="h-4 w-4" />
              </a>
            ) : (
              <span
                aria-label={`${label} (coming soon)`}
                className="flex h-9 w-9 cursor-default items-center justify-center rounded-lg border border-dashed border-line bg-card text-line"
              >
                <Icon className="h-4 w-4" />
              </span>
            )}

            {/* hover tooltip */}
            <span className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100">
              {active ? label : `${label} · soon`}
            </span>
          </div>
        );
      })}
    </div>
  );
}
