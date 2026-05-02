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
        paper: "#FFFFFF",
        chalk: "#F4F5F7",
        ink: "#0A0E13",
        marine: "#0A2E66",
        deep: "#06204A",
        electric: "#1B4DFF",
        lemon: "#E8FF5C",
        coral: "#FF5A3C",
        muted: "#5C6470",
        line: "#E1E4EB",
        soft: "#EEF0F4",
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
