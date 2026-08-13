import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Section } from "@/components/section";
import { publications, profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Publications",
  description: `Publications and manuscripts in preparation by ${profile.name}.`,
};

const STATUS_LABEL: Record<string, string> = {
  "in-preparation": "In Preparation",
  "under-review": "Under Review",
  published: "Published",
};

export default function Publications() {
  const groups = ["published", "under-review", "in-preparation"] as const;

  return (
    <PageShell
      sidebar={
        <div className="latex-title">
          <h1 className="!text-[1.8rem]">Publications</h1>
          <p className="mt-2 text-[0.9em] italic text-muted">
            Nothing is listed before it exists; author lists appear as they will on the manuscript.
          </p>
        </div>
      }
    >
      {groups.map((status) => {
        const items = publications.filter((p) => p.status === status);
        if (items.length === 0) return null;

        return (
          <Section key={status} title={STATUS_LABEL[status]}>
            <ol className="space-y-6">
              {items.map((p, i) => (
                <li key={p.title} className="latex-bibitem text-[0.95em]">
                  <span className="bib-marker text-muted">[{i + 1}]</span>
                  <span>
                    {p.authors}. <span className="italic">{p.title}.</span>{" "}
                    <span className="text-muted">
                      {p.venue}. {p.year}.
                    </span>
                  </span>

                  <div className="mt-2 text-[0.95em]" style={{ textIndent: 0 }}>
                    <span className="uppercase tracking-wider text-muted">Contribution</span> —{" "}
                    {p.contribution}
                  </div>

                  <details className="mt-2.5" style={{ textIndent: 0 }}>
                    <summary className="cursor-pointer text-[0.86em] uppercase tracking-wider text-link">
                      BibTeX
                    </summary>
                    <pre className="latex-verbatim mt-2">{p.bibtex}</pre>
                  </details>
                </li>
              ))}
            </ol>
          </Section>
        );
      })}
    </PageShell>
  );
}
