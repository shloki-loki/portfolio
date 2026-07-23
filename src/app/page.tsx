import Link from "next/link";
import { profile, skills } from "@/lib/content";
import SocialLinks from "@/components/SocialLinks";

export default function HomePage() {
  return (
    <section>
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-pine">
        <span className="h-1.5 w-1.5 rounded-full bg-moss" />
        {profile.availability}
      </p>

      <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-2 font-mono text-lg text-moss sm:text-xl">
        {profile.headline}
      </p>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
        {profile.tagline}
      </p>

      <div className="mt-6">
        <SocialLinks />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-line bg-card px-3 py-1.5 text-sm text-ink"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="rounded-xl bg-pine px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          See my projects
        </Link>
        <Link
          href="/about"
          className="rounded-xl border border-line bg-card px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-moss"
        >
          More about me
        </Link>
      </div>

      <p className="mt-10 text-sm text-muted">
        Say hi →{" "}
        <a
          href={`mailto:${profile.email}`}
          className="font-medium text-pine underline-offset-4 hover:underline"
        >
          {profile.email}
        </a>
      </p>
    </section>
  );
}
