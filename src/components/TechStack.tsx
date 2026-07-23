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
      <div className="mt-4 grid grid-cols-5 gap-3 sm:grid-cols-8 sm:gap-4">
        {techStack.map(({ key, label }) => {
          const entry = ICONS[key];
          return (
            <div
              key={key}
              title={label}
              className="group flex aspect-square items-center justify-center rounded-xl border border-dashed border-line bg-card transition-colors hover:border-moss"
            >
              {entry ? (
                <entry.Icon
                  className="h-6 w-6 transition-transform group-hover:scale-110"
                  style={{ color: entry.color }}
                  aria-label={label}
                />
              ) : (
                <span className="px-1 text-center text-[10px] font-medium text-muted">
                  {label}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
