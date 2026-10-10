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
        // Black & white base — the identity of the whole portfolio
        paper: "#FAFAF7",
        ink: "#141414",
        muted: "#5F5F5B",
        line: "#DADAD4",
        soft: "#F0F0EB",
        // Active world — set through CSS variables (see lib/worlds.ts)
        w: {
          deep: "var(--w-deep)",
          mid: "var(--w-mid)",
          light: "var(--w-light)",
          tint: "var(--w-tint)",
          text: "var(--w-text)",
          on: "var(--w-on)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        reading: "68ch",
        page: "1400px",
      },
      letterSpacing: {
        caps: "0.12em",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
