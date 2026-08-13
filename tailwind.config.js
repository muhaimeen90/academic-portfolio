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
        // Page shell. Wide on desktop; the grid inside keeps prose readable.
        shell: "78rem",
        measure: "46rem",
      },
      gridTemplateColumns: {
        // Sidebar (photo / contact / page label) beside the content column.
        page: "16rem minmax(0, 1fr)",
      },
      borderRadius: {
        none: "0",
      },
    },
  },
  plugins: [],
};
