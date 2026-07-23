import type { IconType } from "react-icons";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiVercel,
  SiOpenai,
  SiFigma,
  SiPostgresql,
  SiMongodb,
  SiDocker,
} from "react-icons/si";
import { techStack } from "@/lib/content";

// Map content keys → brand icon + official-ish colour.
const ICONS: Record<string, { Icon: IconType; color: string }> = {
  python: { Icon: SiPython, color: "#3776AB" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  react: { Icon: SiReact, color: "#61DAFB" },
  nextjs: { Icon: SiNextdotjs, color: "#1c2b25" },
  tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  nodejs: { Icon: SiNodedotjs, color: "#5FA04E" },
  git: { Icon: SiGit, color: "#F05032" },
  github: { Icon: SiGithub, color: "#1c2b25" },
  vercel: { Icon: SiVercel, color: "#1c2b25" },
  openai: { Icon: SiOpenai, color: "#2f6d49" },
  figma: { Icon: SiFigma, color: "#F24E1E" },
  postgres: { Icon: SiPostgresql, color: "#4169E1" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },
  docker: { Icon: SiDocker, color: "#2496ED" },
};

export default function TechStack() {
  return (
    <section className="mt-14">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
        Tech Stack
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {techStack.map(({ key, label }) => {
          const entry = ICONS[key];
          return (
            <div key={key} className="group relative">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-card transition-colors hover:border-moss">
                {entry ? (
                  <entry.Icon
                    className="h-4 w-4"
                    style={{ color: entry.color }}
                    aria-label={label}
                  />
                ) : (
                  <span className="px-0.5 text-center text-[8px] font-medium text-muted">
                    {label}
                  </span>
                )}
              </div>
              {/* hover tooltip, matching the social row */}
              <span className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100">
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
