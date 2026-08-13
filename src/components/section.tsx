import type { ReactNode } from "react";

/**
 * A \section. Numbering comes from a CSS counter on `.latex-doc`, so sections
 * number themselves in document order and restart on each page.
 */
export function Section({
  title,
  numbered = true,
  children,
}: {
  title: string;
  numbered?: boolean;
  children: ReactNode;
}) {
  return (
    <section className={numbered ? "latex-section mt-11" : "latex-section-unnumbered mt-11"}>
      <h2 className="mb-3">{title}</h2>
      {children}
    </section>
  );
}
