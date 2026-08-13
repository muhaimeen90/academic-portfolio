import type { ReactNode } from "react";

/** A \section: bold uppercase heading with a rule beneath it. */
export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="latex-section mt-10 first:mt-0">
      <h2 className="mb-4">{title}</h2>
      {children}
    </section>
  );
}
