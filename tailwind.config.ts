import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0E0E0E",
          soft: "#1A1A1A",
          muted: "#5A5A5A",
        },
        cream: {
          DEFAULT: "#F7F4EE",
          deep: "#EDE7DB",
        },
        champagne: {
          DEFAULT: "#B8945F",
          light: "#D4B27E",
          dark: "#8E6B3F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      letterSpacing: {
        widest2: "0.22em",
      },
    },
  },
  plugins: [],
};

export default config;
