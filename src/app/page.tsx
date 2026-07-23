import Link from "next/link";
import { profile, experience, projects, quote } from "@/lib/content";
import SocialLinks from "@/components/SocialLinks";
import RotatingRole from "@/components/RotatingRole";
import StatusCards from "@/components/StatusCards";
import TechStack from "@/components/TechStack";
import ViewerCount from "@/components/ViewerCount";

export default function HomePage() {
  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section>
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-pine">
          <span className="h-1.5 w-1.5 rounded-full bg-moss" />
          {profile.availability}
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {profile.name}
        </h1>
        <div className="mt-2 h-7">
          <RotatingRole />
        </div>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
          {profile.tagline}
        </p>

        <div className="mt-6">
          <SocialLinks />
        </div>

        <StatusCards />
      </section>

      {/* ---------- Tech stack ---------- */}
      <TechStack />

      {/* ---------- Experience ---------- */}
      <section className="mt-14">
        <div className="flex items-baseline justify-between">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
            Experience
          </h2>
          <Link
            href="/experience"
            className="text-xs font-medium text-pine hover:underline"
          >
            View all
          </Link>
        </div>
        <ol className="mt-4 space-y-3">
          {experience.map((job) => (
            <li
              key={job.company}
              className="rounded-2xl border border-line bg-card p-5 transition-colors hover:border-moss"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-semibold text-ink">
                  {job.company}
                </h3>
                <span className="font-mono text-xs text-muted">
                  {job.period}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-pine">{job.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {job.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- Featured projects ---------- */}
      <section className="mt-14">
        <div className="flex items-baseline justify-between">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-xs font-medium text-pine hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-2xl border border-line bg-card p-5 transition-colors hover:border-moss"
            >
              <h3 className="text-base font-semibold text-ink">
                {project.name}
              </h3>
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
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-pine underline-offset-4 hover:underline"
                >
                  View project →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Quote + viewer count ---------- */}
      <section className="mt-14 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-stretch">
        <figure className="rounded-2xl border border-line bg-card p-6">
          <blockquote className="text-lg leading-relaxed text-ink">
            <span className="mr-1 font-serif text-2xl text-moss">“</span>
            {quote.text}
          </blockquote>
          <figcaption className="mt-3 text-sm text-muted">
            — {quote.author}
          </figcaption>
        </figure>
        <div className="flex sm:w-48">
          <div className="flex w-full items-center justify-center">
            <ViewerCount />
          </div>
        </div>
      </section>
    </div>
  );
}
