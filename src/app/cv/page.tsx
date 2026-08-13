import type { Metadata } from "next";
import { asset } from "@/lib/site";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: `Curriculum vitae of ${profile.name} (PDF).`,
};

export default function CV() {
  const pdf = asset(profile.links.cv);

  return (
    <main className="latex-body mx-auto w-full max-w-shell px-6 pb-6 pt-10 sm:px-8 lg:px-12">
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
        <div className="latex-title">
          <h1 className="!text-[1.8rem]">Curriculum Vitae</h1>
          <p className="mt-1 text-[0.92em] italic text-muted">{profile.name}</p>
        </div>

        <div className="flex flex-wrap gap-3 text-[0.84em] uppercase tracking-wider">
          <a
            href={pdf}
            download
            className="border border-rule px-3.5 py-1.5 !text-ink hover:!no-underline hover:border-ink"
          >
            Download PDF
          </a>
          <a
            href={pdf}
            target="_blank"
            rel="noopener"
            className="border border-rule px-3.5 py-1.5 !text-ink hover:!no-underline hover:border-ink"
          >
            Open in new tab ↗
          </a>
        </div>
      </div>

      <hr className="latex-rule mt-4" />

      {/* Inline viewer. Mobile browsers routinely refuse to render a PDF in an
          embedded frame, so the fallback below is the real path there. */}
      <object
        data={pdf}
        type="application/pdf"
        className="mt-6 hidden h-[calc(100vh-14rem)] min-h-[40rem] w-full border border-rule md:block"
        aria-label={`${profile.name} — curriculum vitae`}
      >
        <div className="p-10 text-center text-[0.95em]">
          <p>This browser cannot display the PDF inline.</p>
          <p className="mt-2">
            <a href={pdf} download>
              Download the CV
            </a>{" "}
            instead.
          </p>
        </div>
      </object>

      <div className="mt-8 border border-rule p-8 text-center md:hidden">
        <p className="text-[0.95em]">
          The CV is a one-page PDF. Inline viewers are unreliable on mobile, so it is best opened
          directly.
        </p>
        <a
          href={pdf}
          className="mt-4 inline-block border border-rule px-4 py-2 text-[0.86em] uppercase tracking-wider !text-ink hover:!no-underline hover:border-ink"
        >
          Open the CV ↗
        </a>
      </div>
    </main>
  );
}
