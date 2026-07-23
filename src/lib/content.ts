/**
 * ============================================================
 *  EDIT YOUR PORTFOLIO CONTENT HERE
 * ------------------------------------------------------------
 *  Everything on the site reads from this one file.
 *  Values marked "PLACEHOLDER" are best guesses — replace them
 *  with your real details whenever you're ready.
 * ============================================================
 */

export const profile = {
  name: "Shlok Agrawal",
  headline: "Vibe Coder & Business Enthusiast",
  // Short one-liner shown under the name on the home page.
  tagline:
    "Building playful products at the intersection of code and business. IIT Guwahati grad. Currently open to work.",
  email: "111shlokagrawal@gmail.com",
  // Where the mini-me lives — you'll drop your Ghibli art here later.
  // Put the file in /public and update the path (e.g. "/mini-me.png").
  avatar: "", // empty = use the built-in placeholder face
  location: "India", // PLACEHOLDER
  availability: "Open to work",
  // Drop your resume PDF into /public (e.g. /public/resume.pdf) and set this
  // to "/resume.pdf". Leave empty to show the "coming soon" placeholder.
  resumeUrl: "",
};

export const socials = {
  github: "https://github.com/shloki-loki",
  linkedin: "https://www.linkedin.com/in/shlokagrawal/", // PLACEHOLDER — confirm your exact URL
  twitter: "", // PLACEHOLDER — add your X/Twitter URL or leave empty
  email: "mailto:111shlokagrawal@gmail.com",
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
};

// PLACEHOLDER experience — replace dates/descriptions with real ones.
export const experience: Experience[] = [
  {
    company: "Ola",
    role: "Business / Product (update title)",
    period: "20XX – 20XX", // PLACEHOLDER
    location: "Bengaluru, India", // PLACEHOLDER
    description:
      "Placeholder description of your work at Ola — key responsibilities and impact. Replace with the real story.",
  },
  {
    company: "InsuranceDekho",
    role: "Business / Growth (update title)",
    period: "20XX – 20XX", // PLACEHOLDER
    location: "Gurugram, India", // PLACEHOLDER
    description:
      "Placeholder description of your work at InsuranceDekho — what you owned and the results. Replace with the real story.",
  },
];

export type Project = {
  name: string;
  description: string;
  link?: string;
  tags: string[];
};

// PLACEHOLDER projects — seeded from what I know about you.
export const projects: Project[] = [
  {
    name: "MirrorBot",
    description:
      "A Lichess bot that mirrors an opponent's accuracy and steers games toward draws — an experiment in playing 'just as well as you do, no better.'",
    link: "", // add repo/live link when ready
    tags: ["Python", "Chess", "Lichess API"],
  },
  {
    name: "OctaWordle Agent Duel",
    description:
      "An 8-board Octordle race pitting Claude, GPT and Gemini against a human — a playground for comparing how different AI agents reason.",
    link: "https://github.com/shloki-loki/octawordle",
    tags: ["AI Agents", "TypeScript", "Game"],
  },
];

// Skills / tools you like to reach for. Purely for the little chip row.
export const skills: string[] = [
  "Product",
  "Growth",
  "Vibe Coding",
  "Next.js",
  "Python",
  "AI Agents",
];
