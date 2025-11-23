import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#020617", // Slate-950 (Deep Navy)
        foreground: "#f8fafc", // Slate-50 (Off-white)
        primary: {
          DEFAULT: "#2dd4bf", // Teal-400 (Kinetic Accent)
          foreground: "#0f172a",
        },
        secondary: {
          DEFAULT: "#1e293b", // Slate-800
          foreground: "#f8fafc",
        },
        muted: {
          DEFAULT: "#334155", // Slate-700
          foreground: "#94a3b8", // Slate-400
        },
        accent: {
          DEFAULT: "#2dd4bf", // Teal-400
          foreground: "#0f172a",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
