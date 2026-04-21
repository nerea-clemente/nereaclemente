import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F4EFE6",
        shell: "#EAE3D4",
        sand: "#E2D8C3",
        paper: "#FBFAF6",
        ink: "#17201E",
        sea: "#1F3A33",
        deep: "#132722",
        tide: "#1E4F7A",
        wave: "#4A7FA8",
        sky: "#C9DCEC",
        clay: "#B9684A",
        rust: "#954D32",
        muted: "#6B6860",
        line: "#D8CFBD",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Editorial-first scale
        "display-xl": ["clamp(3.25rem, 7.5vw, 6.75rem)", { lineHeight: "0.98", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2.5rem, 5.5vw, 4.75rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 3.8vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.625rem, 2.6vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        reading: "68ch",
        page: "1400px",
      },
      letterSpacing: {
        caps: "0.14em",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
