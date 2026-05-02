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
        paper: "#FBF6EC",
        chalk: "#F3E9D5",
        sand: "#E8DBC0",
        ink: "#2A2218",
        sea: "#7FA3BE",
        deep: "#3F6884",
        clay: "#C2826F",
        olive: "#9AA784",
        blush: "#EBC0AE",
        saffron: "#DBA755",
        muted: "#7A6E5C",
        line: "#E1D4B9",
        soft: "#EFE4CD",
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
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
        caps: "0.1em",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
