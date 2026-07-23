import type { Metadata } from "next";
import { experience, profile } from "@/lib/content";

export const metadata: Metadata = { title: `Experience — ${profile.name}` };

export default function ExperiencePage() {
  return (
    <section>
      <p className="font-mono text-xs uppercase tracking-widest text-moss">
        Experience
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Where I&apos;ve worked
      </h1>
      <p className="mt-3 text-sm text-muted">
        Placeholder roles below — send me the real titles, dates and details and
        I&apos;ll update them.
      </p>

      <ol className="mt-8 space-y-4">
        {experience.map((job) => (
          <li
            key={job.company}
            className="rounded-2xl border border-line bg-card p-5 transition-colors hover:border-moss"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="text-lg font-semibold text-ink">{job.company}</h2>
              <span className="font-mono text-xs text-muted">{job.period}</span>
            </div>
            <p className="mt-0.5 text-sm font-medium text-pine">{job.role}</p>
            <p className="mt-1 text-xs text-muted">{job.location}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {job.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
