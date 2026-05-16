/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "InterVariable",
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      colors: {
        ink: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d4d8e0",
          300: "#aab1bf",
          400: "#7d8597",
          500: "#5b6273",
          600: "#454b5b",
          700: "#363b48",
          800: "#262a35",
          900: "#1a1d26",
          950: "#0f1116",
        },
        accent: {
          500: "#3b82f6",
          600: "#2563eb",
        },
      },
      maxWidth: {
        prose: "65ch",
      },
    },
  },
  plugins: [],
};
