import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Entry } from "@/components/entry";
import { projects, profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Projects",
  description: `Research and engineering projects by ${profile.name}.`,
};

export default function Projects() {
  return (
    <PageShell
      sidebar={
        <div className="latex-title">
          <h1 className="!text-[1.8rem]">Projects</h1>
          <p className="mt-2 text-[0.9em] italic text-muted">
            Selected research and engineering work.
          </p>
        </div>
      }
    >
      <div className="space-y-9">
        {projects.map((p) => (
          <article key={p.title}>
            <Entry
              title={p.title}
              right={p.period ?? undefined}
              subtitle={p.note ?? undefined}
            >
              {/* Summary leads, then the detail points. */}
              <p className="mt-1.5 text-[0.95em]">{p.summary}</p>

              <ul className="latex-itemize mt-2 text-[0.95em]">
                {p.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>

              <p className="mt-2.5 text-[0.86em] text-muted">
                <span className="uppercase tracking-wider">Built with</span> — {p.stack.join(", ")}.
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
    </PageShell>
  );
}
