import type { Metadata } from "next";
import { Entry } from "@/components/entry";
import { projects, profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Projects",
  description: `Research and engineering projects by ${profile.name}.`,
};

export default function Projects() {
  return (
    <main className="latex-doc latex-body mx-auto max-w-measure px-5 pb-4 pt-12 sm:px-8">
      <div className="latex-title">
        <h1 className="!text-[1.75rem]">Projects</h1>
      </div>

      <p className="mx-auto mt-6 max-w-[38rem] text-center text-[0.9em] italic text-muted">
        Selected engineering and specification work, in reverse chronological order.
      </p>

      <div className="latex-section-unnumbered mt-10 space-y-9">
        {projects.map((p) => (
          <article key={p.title}>
            <Entry title={p.title} right={p.period} subtitle={p.role}>
              <p className="mt-1.5 text-[0.95em]">{p.summary}</p>

              {p.points.length > 0 ? (
                <ul className="latex-itemize mt-2 text-[0.95em]">
                  {p.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              ) : null}

              <p className="mt-2.5 text-[0.86em] text-muted">
                <span className="small-caps">Built with</span> — {p.stack.join(", ")}.
                {p.links.map((l) => (
                  <span key={l.href}>
                    {" · "}
                    <a href={l.href}>{l.label}</a>
                  </span>
                ))}
              </p>
            </Entry>
          </article>
        ))}
      </div>
    </main>
  );
}
