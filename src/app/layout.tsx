import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MiniMe from "@/components/MiniMe";
import { profile } from "@/lib/content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.headline}`,
  description: profile.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Nav />
        <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-10 sm:py-14">
          {children}
        </main>
        <Footer />
        <MiniMe />
      </body>
    </html>
  );
}
