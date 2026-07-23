import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mountain-green palette
        canvas: "#e9f3ec", // soft green-white page background
        card: "#f4faf6", // slightly lighter card surface
        ink: "#1c2b25", // primary text (deep pine-tinted charcoal)
        muted: "#5b6b62", // secondary text
        line: "#d4e4d9", // subtle borders / grid lines
        pine: "#2f6d49", // accent green
        moss: "#4c9a76", // lighter accent
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
