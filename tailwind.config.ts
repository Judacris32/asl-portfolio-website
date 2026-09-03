import type { Config } from "tailwindcss";

// Dark mode is opt-in via a `.dark` class on <html>.
// Light mode is the default — no class needed. See src/components/ThemeProvider.tsx
// for the persistence logic that decides which class (if any) gets applied.
const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode base (default) — kept crisp/neutral so the logo's
        // near-black + circuit-green reads as a deliberate accent, not
        // the whole page.
        paper: "#FAFBFC",
        ink: "#12151B",
        muted: "#5B6472",
        hairline: "#E4E7EC",
        accent: {
          DEFAULT: "#16A34A", // circuit green, dialed back for AA contrast on white
          soft: "#DCFCE7",
        },
        // Dark mode surfaces — pulled directly from the logo: near-black
        // disc, glowing green ring/accent.
        midnight: "#0B0D10",
        "midnight-surface": "#15181D",
        "midnight-hairline": "#262B33",
        "accent-dark": "#22C55E",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        "glow-dark": "0 0 40px -10px rgba(34, 197, 94, 0.35)",
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)",
        "blueprint-grid-dark":
          "linear-gradient(to right, rgba(226,232,240,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(226,232,240,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
