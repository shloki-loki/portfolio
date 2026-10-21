// Edit the portfolio content here. Both tabs (Home and Resume) read from this file.
// Wrap a phrase in **double asterisks** to bold it (used for metrics).

export const profile = {
  name: "Shlok Agrawal",
  title: "Strategy & Operations · Founder’s Office",
  tagline:
    "I turn messy operations into systems — inventory, supply chain and go-to-market — and write the code when spreadsheets aren’t enough.",
  email: "111shlokagrawal@gmail.com",
  location: "Bengaluru, India",
  availability: "Open to work",
  resumePdf: "/resume.pdf",
  site: "https://shlokagrawal-portfolio.vercel.app",
};

export const socials = {
  linkedin: "https://www.linkedin.com/in/shlok-agrawal-iitg/",
  github: "https://github.com/shloki-loki",
  twitter: "https://x.com/bisleri_boi",
  peerlist: "https://peerlist.io/111shlokagrawal",
  email: "mailto:111shlokagrawal@gmail.com",
};

export const about = [
  "I’m an IIT Guwahati electrical engineer who ended up in the founder’s office. At **Ola Electric** I ran production planning and finished-goods inventory, working directly with the CEO and COO. Today I shape bid strategy and new revenue lines at **Beltech AI**, a smart-traffic and surveillance company.",
  "I’m most useful where business problems meet code: I built a lotting algorithm, set up SAP MRP from scratch, and ship side projects with AI agents on weekends.",
];

export const highlights = [
  { value: "₹200 Cr", label: "inventory buffer built and owned at Ola Electric" },
  { value: "14 days", label: "order-to-delivery, down from 32, via a lotting algorithm" },
  { value: "40%", label: "working capital released through S&OP planning" },
  { value: "Expert", label: "on Codeforces, global rank 188 in Round 984" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  // The first three bullets appear on Home; the Resume tab shows every bullet.
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Beltech Artificial Intelligence",
    role: "Founder’s Office – Business Strategy",
    period: "Aug 2026 – Present",
    location: "Bengaluru",
    summary: "Bid strategy and new revenue lines for a smart-traffic and surveillance company.",
    bullets: [
      "Own the evaluation of central and state smart-traffic and surveillance tenders worth **₹80–800 Cr**, building the qualification framework and credentials repository behind every bid/no-bid and consortium call.",
      "Launched **2 new revenue streams** beyond core government contracts: GPU colocation, and an insurance intelligence product that turns vehicle and violation data into automated leads. I own the business case and GTM for both.",
    ],
  },
  {
    company: "Ola Electric",
    role: "Strategy & Operations Planning",
    period: "Jun 2025 – Jul 2026",
    location: "Bengaluru",
    summary: "Production planning, inventory and fulfilment, working with the CEO and COO.",
    bullets: [
      "Designed and deployed the Minimum Stock Limit (MSL) program, moving from make-to-order to stock-and-sell with a **₹200 Cr** inventory buffer across variants and **70%** serviceability across India.",
      "Built a lotting algorithm on top of MSL inventory for truck dispatches: wait times down **5 days**, trucking efficiency up **33%**, revenue up **32%**, and order-to-delivery cut from **32 to 14 days**.",
      "Owned S&OP production planning for **₹200 Cr** of inventory, building 3-month rolling plans with cross-functional teams that reduced working capital by **40%** in 2.5 months.",
      "Implemented SAP MRP from scratch as Raw Material Manager, cutting stock-outs by **20%** and raw material inventory by **25%**.",
      "Owned finished-goods inventory end-to-end with the COO and CEO; designed first-mile milk-run routes that lifted truck utilisation **45%** and cut logistics spend **34%**.",
      "Led a pan-India rebalancing of non-moving stock based on daily run rate, unlocking **27%** working capital and cutting outstanding logistics cost **37%**.",
      "Drove production planning for Bharat Cell (4680) and Shakti (BESS) around supplier lead times, MOQs and yield; cell yield rose from **42% to 67%** in 2 months.",
    ],
  },
  {
    company: "InsuranceDekho",
    role: "Technical Product Intern",
    period: "May 2024 – Jul 2024",
    location: "Gurugram",
    summary: "Workflow automation for the operations team.",
    bullets: [
      "Automated a recurring data-entry workflow with a Flask REST API wired into a Chrome extension that autofills forms, making responses **40%** faster.",
      "Saved **30 minutes** of manual effort per instance through end-to-end process automation.",
    ],
  },
];

export type Project = {
  name: string;
  period?: string;
  description: string;
  link?: string;
  linkLabel?: string;
  bullets?: string[];
};

export const projects: Project[] = [
  {
    name: "Alcheringa Ticketing System",
    period: "Jan – Feb 2024",
    description:
      "An online card portal and an offline Executive App with one-to-one QR codes for IIT Guwahati’s cultural fest. It handled **20 entries a minute** at peak with zero downtime, and helped grow ticket sales **300%** year on year.",
    bullets: [
      "Conceptualised and designed the Alcheringa Card Portal for online sales and the Executive App for offline sales, using unique QR codes for buyer recognition and security and to reduce forgery.",
      "Optimised the Executive App to handle **20 entries/minute** at peak load, with zero downtime during the festival.",
      "Contributed to a **300%** YoY increase in ticket sales and a **400%** YoY increase in offline ticket sales.",
    ],
  },
  {
    name: "OctaWordle Agent Duel",
    description:
      "Eight word puzzles, one human and three AI contenders. A playground for comparing how different agents reason, with an optional live-model mode.",
    link: "https://github.com/shloki-loki/octawordle",
    linkLabel: "Source",
  },
  {
    name: "MirrorBot",
    description:
      "A chess bot that mirrors its opponent’s accuracy and steers games toward draws. An experiment in playing exactly as well as you do.",
    link: "https://github.com/shloki-loki/mirror-chess-bot",
    linkLabel: "Source",
  },
];

export const leadership = {
  role: "Sales & Curation Head",
  org: "Alcheringa, IIT Guwahati",
  period: "Apr 2023 – Mar 2024",
  bullets: [
    "Mentored a team of **280+** executives across two tiers, managing online and offline sales.",
    "Devised the Alcheringa Card Portal for online sales and an Executive App with a one-to-one QR system to cut forgery.",
    "Grew festival revenue **30%**, curating **80+** competitions for a footfall of **150,000+**.",
  ],
};

export const achievements = [
  { year: "2024", text: "Amex Strategy Track — reached Level 4, top **2%** of 7,000+ candidates" },
  { year: "2023", text: "Flipkart Grid — reached Level 2, top **0.05%** of 400,000+ candidates" },
  { year: "2021", text: "JEE Advanced AIR **2135** · JEE Mains AIR **2828** among 1,000,000+ candidates" },
  { year: "2021", text: "UGEE — All India Rank **81** among 10,000+ candidates" },
  { year: "Coding", text: "LeetCode Knight (top **5%**) · Codeforces Expert (global rank **188**, Round 984)" },
];

export const education = {
  school: "Indian Institute of Technology Guwahati",
  degree: "B.Tech, Electrical & Electronics Engineering",
  period: "Sep 2021 – May 2025",
};

export const skills = [
  { group: "Business", items: "SAP ERP (MM, PP), Ariba SSC, Excel, PowerPoint, SQL" },
  { group: "Programming", items: "C++, C, Java, Python, Flask, HTML, CSS, JavaScript" },
];
