import type { Metadata } from "next";
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
    <main className="latex-doc latex-body mx-auto max-w-measure px-5 pb-4 pt-12 sm:px-8">
      <div className="latex-title">
        <h1 className="!text-[1.75rem]">Publications</h1>
      </div>

      <p className="mx-auto mt-6 max-w-[38rem] text-center text-[0.9em] italic text-muted">
        Author names are listed as they will appear on the manuscript. Nothing below is listed
        before it exists.
      </p>

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
                    <span className="small-caps text-muted">Contribution</span> — {p.contribution}
                  </div>

                  <details className="mt-2.5" style={{ textIndent: 0 }}>
                    <summary className="cursor-pointer text-[0.88em] text-link small-caps">
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
    </main>
  );
}
