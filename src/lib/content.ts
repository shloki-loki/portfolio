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
  // Roles that flicker/rotate under your name on the home page.
  roles: ["Vibe Coder", "Business Enthusiast", "AI Engineer"],
  headline: "Vibe Coder & Business Enthusiast", // used for the browser tab / SEO
  // Short one-liner shown under the name on the home page.
  tagline:
    "Building playful products at the intersection of code and business. IIT Guwahati grad. Currently open to work.",
  email: "111shlokagrawal@gmail.com",
  // The mini-me art in the corner. Two LEGO poses:
  //   avatar      = looking FORWARD (tracks the cursor)
  //   avatarBoard = looking at the BOARD (shown briefly every ~15s)
  // Drop the files in /public. If a file is missing, a placeholder face shows.
  avatar: "/mini-me-forward.png",
  avatarBoard: "/mini-me-board.png",
  location: "India", // PLACEHOLDER
  availability: "Open to work",
  // Drop your resume PDF into /public (e.g. /public/resume.pdf) and set this
  // to "/resume.pdf". Leave empty to show the "coming soon" placeholder.
  resumeUrl: "",
};

export const socials = {
  linkedin: "https://www.linkedin.com/in/shlokagrawal/", // PLACEHOLDER — confirm exact URL
  github: "https://github.com/shloki-loki",
  twitter: "https://x.com/bisleri_boi",
  peerlist: "https://peerlist.io/111shlokagrawal",
  email: "mailto:111shlokagrawal@gmail.com",
};

// "Last played" card on the home page (static for now).
export const nowPlaying = {
  song: "The Less I Know the Better",
  artist: "Tame Impala",
  url: "https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ",
};

// Winston Churchill quote, matching the reference site.
export const quote = {
  text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  author: "Winston Churchill",
};

/**
 * TECH STACK — icon grid on the home page.
 * Each entry's `key` maps to a brand icon in TechStack.tsx.
 * Available keys: python, typescript, javascript, react, nextjs, tailwind,
 * nodejs, git, github, vercel, openai, figma, postgres, mongodb, docker.
 * Add/remove freely; unknown keys just show the label in a plain tile.
 */
export const techStack: { key: string; label: string }[] = [
  { key: "python", label: "Python" },
  { key: "typescript", label: "TypeScript" },
  { key: "react", label: "React" },
  { key: "nextjs", label: "Next.js" },
  { key: "tailwind", label: "Tailwind" },
  { key: "nodejs", label: "Node.js" },
  { key: "git", label: "Git" },
  { key: "vercel", label: "Vercel" },
  { key: "openai", label: "AI / LLMs" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Ola",
    role: "Founder's Office",
    period: "Jun 2025 – Jul 2026",
    location: "Bengaluru, India",
    bullets: [
      "Owned ~$20M of inventory and end-to-end production planning as the core mandate.",
      "Partnered directly with the CEO and COO across backend and frontend operations — logistics planning, supply-chain management and inventory calibration.",
      "Drove new cross-functional initiatives with multiple stakeholder teams, including the launch of the Ola 4680 cell and Ola BESS (Shakti).",
    ],
  },
  {
    company: "InsuranceDekho",
    role: "Automation Intern", // confirm exact title
    period: "May 2024 – Jul 2024",
    location: "Gurugram, India", // PLACEHOLDER — confirm
    bullets: [
      "Automated recurring manual workflows by integrating RESTful APIs and building custom Google Chrome extensions.",
      "Cut roughly 30 minutes of manual effort per instance.",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  link?: string;
  image?: string; // drop the screenshot in /public and reference it here
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "MirrorBot",
    description:
      "A Lichess bot that mirrors an opponent's accuracy and steers games toward draws — an experiment in playing 'just as well as you do, no better.'",
    link: "https://lichess.org/@/MirroringPeep", // PLACEHOLDER — confirm/replace
    image: "/project-mirrorbot.png",
    tags: ["Python", "Chess", "Lichess API"],
  },
  {
    name: "OctaWordle Agent Duel",
    description:
      "An 8-board Octordle race pitting Claude, GPT and Gemini against a human — a playground for comparing how different AI agents reason.",
    link: "https://github.com/shloki-loki/octawordle",
    image: "/project-octawordle.png",
    tags: ["AI Agents", "TypeScript", "Game"],
  },
];
