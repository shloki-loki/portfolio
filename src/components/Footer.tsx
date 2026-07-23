import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mx-auto mt-24 max-w-3xl px-5 pb-28 pt-10">
      <div className="border-t border-line/70 pt-6 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js, hosted
          on Vercel.
        </p>
      </div>
    </footer>
  );
}
