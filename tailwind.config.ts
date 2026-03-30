import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Light-mode neutral scale */
        n: {
          0:   "#ffffff",
          50:  "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b",
        },
        /* Keep g scale as neutral aliases for any remaining dark references */
        g: {
          1: "#fafafa", 2: "#f4f4f5", 3: "#e4e4e7", 4: "#d4d4d8",
          5: "#a1a1aa", 6: "#71717a", 7: "#52525b", 8: "#3f3f46",
          9: "#27272a", 10: "#18181b",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', '"Fira Code"', "ui-monospace", "monospace"],
        arabic: ['"IBM Plex Sans Arabic"', '"Cairo"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
      boxShadow: {
        "sm":  "0 1px 2px rgba(0,0,0,0.04)",
        "md":  "0 4px 12px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.04)",
        "lg":  "0 8px 24px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.04)",
        "xl":  "0 16px 40px rgba(0,0,0,0.10), 0 6px 12px rgba(0,0,0,0.05)",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in": {
          "0%":   { opacity: "0", transform: "translateX(-8px)" },
          "100%": { opacity: "1", transform: "translateX(0)"    },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.5" },
        },
      },
      animation: {
        "fade-up":    "fade-up 0.5s cubic-bezier(0,0,0.2,1) both",
        "fade-in":    "fade-in 0.3s ease both",
        "slide-in":   "slide-in 0.35s cubic-bezier(0,0,0.2,1) both",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
