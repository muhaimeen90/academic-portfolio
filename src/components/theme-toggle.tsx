"use client";

import { useEffect, useState } from "react";

/**
 * Paper / dark toggle. The no-flash script in layout.tsx sets the class before
 * paint; this only has to keep it in sync afterwards.
 */
export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* private mode — the choice just won't persist */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="text-[0.82em] uppercase tracking-wider text-muted hover:text-ink"
    >
      {/* Rendered only after mount so SSR output matches the pre-hydration DOM */}
      {mounted ? (dark ? "light" : "dark") : "    "}
    </button>
  );
}
