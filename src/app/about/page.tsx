import type { Metadata } from "next";
import { profile } from "@/lib/content";

export const metadata: Metadata = { title: `About — ${profile.name}` };

export default function AboutPage() {
  return (
    <section>
      <p className="font-mono text-xs uppercase tracking-widest text-moss">
        About
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        A little about me
      </h1>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
        {/* PLACEHOLDER — this is where your real story goes. You mentioned you
            have a lot to write here; send it over and I'll drop it in. */}
        <p>
          I&apos;m {profile.name} — a {profile.headline.toLowerCase()}. I like
          building things that are equal parts useful and fun, and I care as
          much about the business behind a product as the code that runs it.
        </p>
        <p>
          I studied at IIT Guwahati and have since worked across product and
          business roles. These days I&apos;m {profile.availability.toLowerCase()},
          tinkering with side projects and figuring out what I want to build
          next.
        </p>
        <p className="rounded-xl border border-dashed border-line bg-card p-4 text-sm text-muted">
          ✍️ This page is a placeholder. Share the bio you want here (your
          story, what you love about the mountains, what you&apos;re looking for)
          and I&apos;ll replace this text.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <InfoCard label="Location" value={profile.location} />
        <InfoCard label="Status" value={profile.availability} />
        <InfoCard label="Education" value="IIT Guwahati" />
        <InfoCard label="Loves" value="The mountains 🏔️" />
      </div>
    </section>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-line bg-card p-4">
      <p className="font-mono text-xs uppercase tracking-widest text-moss">
        {label}
      </p>
      <p className="mt-1 text-ink">{value}</p>
    </div>
  );
}
