/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-lmroman)", "Latin Modern Roman", "Georgia", "serif"],
        mono: ["Latin Modern Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        paper: "hsl(var(--paper))",
        ink: "hsl(var(--ink))",
        muted: "hsl(var(--muted))",
        rule: "hsl(var(--rule))",
        link: "hsl(var(--link))",
      },
      maxWidth: {
        measure: "46rem",
      },
      borderRadius: {
        none: "0",
      },
    },
  },
  plugins: [],
};
