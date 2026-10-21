import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Tabs from "@/components/Tabs";
import { profile } from "@/lib/content";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: `${profile.name} — ${profile.title}`,
  description: profile.tagline,
  openGraph: { title: profile.name, description: profile.tagline, url: profile.site, type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Tabs />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
