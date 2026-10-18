// Edit the single-page portfolio content here.
export const profile = {
  name: "Shlok Agrawal",
  tagline: "Building playful products at the intersection of code and business. IIT Guwahati grad. Open to work.",
  email: "111shlokagrawal@gmail.com",
  availability: "Open to work",
};

export const socials = {
  linkedin: "https://www.linkedin.com/in/shlokagrawal/", // PLACEHOLDER — confirm exact URL
  github: "https://github.com/shloki-loki",
  twitter: "https://x.com/bisleri_boi",
  peerlist: "https://peerlist.io/111shlokagrawal",
  email: "mailto:111shlokagrawal@gmail.com",
};

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

export const projects = [
  {
    name: "MirrorBot",
    description: "A chess bot that mirrors its opponent’s accuracy and steers games toward draws. An experiment in playing just as well as you do.",
    link: "https://github.com/shloki-loki/mirror-chess-bot",
  },
  {
    name: "OctaWordle Agent Duel",
    description: "Eight word puzzles. A human and three AI contenders. A playground for comparing how different agents reason, with an optional live-model mode.",
    link: "https://github.com/shloki-loki/octawordle",
  },
];
