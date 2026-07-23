import { socials } from "@/lib/content";

type Item = { href: string; label: string; icon: React.ReactNode };

const GitHub = (
  <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
);
const LinkedIn = (
  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C21.4 8.65 22 11 22 14.1V21h-4v-6.1c0-1.46-.03-3.33-2.03-3.33-2.03 0-2.34 1.58-2.34 3.22V21h-4V9Z" />
);
const Twitter = (
  <path d="M18.9 2H22l-7.5 8.6L23 22h-6.9l-5.4-7-6.2 7H1.4l8-9.2L1 2h7.1l4.9 6.5L18.9 2Zm-2.4 18h1.9L7.6 4H5.6l10.9 16Z" />
);
const Mail = (
  <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2 8-5.2H4l8 5.2ZM4 8.2V18h16V8.2l-8 5.2-8-5.2Z" />
);

function iconWrap(path: React.ReactNode) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      {path}
    </svg>
  );
}

export default function SocialLinks() {
  const items: Item[] = [
    { href: socials.github, label: "GitHub", icon: iconWrap(GitHub) },
    { href: socials.linkedin, label: "LinkedIn", icon: iconWrap(LinkedIn) },
    socials.twitter
      ? { href: socials.twitter, label: "Twitter / X", icon: iconWrap(Twitter) }
      : null,
    { href: socials.email, label: "Email", icon: iconWrap(Mail) },
  ].filter(Boolean) as Item[];

  return (
    <div className="flex items-center gap-2">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={item.label}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-card text-muted transition-colors hover:border-moss hover:text-pine"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
