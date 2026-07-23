import type { Metadata } from "next";
import { profile } from "@/lib/content";

export const metadata: Metadata = { title: `Resume — ${profile.name}` };

export default function ResumePage() {
  const hasResume = Boolean(profile.resumeUrl);

  return (
    <section>
      <p className="font-mono text-xs uppercase tracking-widest text-moss">
        Resume
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        My resume
      </h1>

      {hasResume ? (
        <>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-pine px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Open in new tab
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="rounded-xl border border-line bg-card px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-moss"
            >
              Download PDF
            </a>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-card">
            <iframe
              src={profile.resumeUrl}
              title="Resume"
              className="h-[75vh] w-full"
            />
          </div>
        </>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-line bg-card p-8 text-center">
          <p className="text-4xl">📄</p>
          <p className="mt-3 font-medium text-ink">Resume coming soon</p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
            Send me your resume PDF and I&apos;ll add it here with a preview and a
            download button.
          </p>
        </div>
      )}
    </section>
  );
}
