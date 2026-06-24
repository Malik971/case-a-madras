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
        // The three madras colors
        rouge: "#C0392B",
        safran: "#D4860A",
        vert: "#2E7D32",
        // Supporting warm palette
        creme: "#FDF6E3",
        bois: "#3E2000",
        lin: "#EDE0CC",
        voile: "#FAF3E4",
      },
      fontFamily: {
        // Lora is the default body font
        sans: ["var(--font-lora)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        ui: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Custom type scale (see DESIGN SYSTEM in brief)
        display: ["clamp(2.6rem, 5.5vw, 4.5rem)", { lineHeight: "1.05", fontWeight: "700" }],
        title: ["clamp(1.8rem, 3vw, 2.8rem)", { lineHeight: "1.12", fontWeight: "700" }],
        heading: ["clamp(1.2rem, 2vw, 1.5rem)", { lineHeight: "1.3", fontWeight: "400" }],
        body: ["1rem", { lineHeight: "1.75" }],
        label: ["0.8rem", { letterSpacing: "0.15em", fontWeight: "600", lineHeight: "1.4" }],
        button: ["0.9rem", { letterSpacing: "0.08em", fontWeight: "600", lineHeight: "1" }],
      },
      maxWidth: {
        "7xl": "80rem",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.7)", opacity: "0" },
          "100%": { transform: "scale(1.7)", opacity: "0" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
