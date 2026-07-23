import type { Metadata } from "next";
import { projects, profile } from "@/lib/content";

export const metadata: Metadata = { title: `Projects — ${profile.name}` };

export default function ProjectsPage() {
  return (
    <section>
      <p className="font-mono text-xs uppercase tracking-widest text-moss">
        Projects
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Things I&apos;ve built
      </h1>
      <p className="mt-3 text-sm text-muted">
        A few of my favourite experiments. More coming soon.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-2xl border border-line bg-card p-5 transition-colors hover:border-moss"
          >
            <h2 className="text-lg font-semibold text-ink">{project.name}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-pine/10 px-2 py-0.5 text-xs font-medium text-pine"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-pine underline-offset-4 hover:underline"
              >
                View project →
              </a>
            ) : (
              <span className="mt-4 text-sm text-muted">Link coming soon</span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
