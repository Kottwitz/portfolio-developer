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
        obsidian: "#0B0F19",
        neonGreen: "#10B981",
        neonCyan: "#06B6D4",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
        sans: ["'Inter'", "'Plus Jakarta Sans'", "sans-serif"],
      },
      boxShadow: {
        'glow-green': '0 0 20px -3px rgba(16, 185, 129, 0.3)',
        'glow-cyan': '0 0 20px -3px rgba(6, 182, 212, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;