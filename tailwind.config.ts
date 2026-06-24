import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F0E3",
        ink: "#1C1208",
        rouge: "#C0392B",
        safran: "#E67E22",
        vert: "#1E6B3C",
        azur: "#1A5276",
        blanc: "#FFFDF8",
        muted: "#6B5D4F",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Custom type scale — see DESIGN SYSTEM in project brief
        display: ["clamp(2.8rem, 6vw, 5rem)", { lineHeight: "1.05", fontWeight: "700" }],
        title: ["clamp(1.8rem, 3.5vw, 2.8rem)", { lineHeight: "1.12", fontWeight: "600" }],
        heading: ["clamp(1.3rem, 2.5vw, 1.8rem)", { lineHeight: "1.25", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.7" }],
        small: ["0.875rem", { lineHeight: "1.6" }],
      },
      maxWidth: {
        "6xl": "72rem",
      },
      borderRadius: {
        // Cap at 16px (rounded-2xl) per design constraints
        "2xl": "1rem",
      },
      boxShadow: {
        card: "0 4px 12px -2px rgba(28, 18, 8, 0.08)",
        "card-hover": "0 10px 24px -4px rgba(28, 18, 8, 0.14)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
