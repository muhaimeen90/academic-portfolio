import localFont from "next/font/local";

/**
 * Latin Modern Roman — the web cut of Knuth's Computer Modern, the default
 * typeface of every LaTeX document. Self-hosted so the build needs no network.
 */
export const lmroman = localFont({
  src: [
    { path: "../../public/fonts/LM-regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/LM-italic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/LM-bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/LM-bold-italic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-lmroman",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});
