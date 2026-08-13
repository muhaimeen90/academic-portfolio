import Link from "next/link";
import { Section } from "@/components/section";
import { Entry } from "@/components/entry";
import { asset } from "@/lib/site";
import {
  profile,
  researchInterests,
  researchExperience,
  education,
  news,
} from "@/content/profile";

/** Set once at build time, as \today is at compile time. */
const compiled = new Date().toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function Home() {
  const degree = education[0];

  return (
    <main className="latex-doc latex-body mx-auto max-w-measure px-5 pb-4 pt-12 sm:px-8">
      {/* \maketitle
          A profile photograph would sit here — drop public/profile.jpg in and
          uncomment the <img> if you want one. */}
      <div className="latex-title">
        {/* <img src={asset("profile.jpg")} alt="" className="mx-auto mb-5 h-32 w-32 object-cover grayscale" /> */}
        <h1>{profile.name}</h1>
        <p className="mt-2.5 text-[0.98em]">{profile.affiliation}</p>
        <p className="text-[0.95em] text-muted">{profile.location}</p>

        <p className="mt-3 text-[0.9em]">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span className="text-muted"> · </span>
          <a href={profile.links.github}>GitHub</a>
          <span className="text-muted"> · </span>
          <a href={profile.links.linkedin}>LinkedIn</a>
          <span className="text-muted"> · </span>
          <a href={asset(profile.links.cv)}>CV (PDF)</a>
        </p>

        <p className="mt-2 text-[0.85em] italic text-muted">{compiled}</p>
      </div>

      {/* \begin{abstract} */}
      <div className="latex-abstract mt-10">
        <div className="abstract-heading mb-2">Abstract</div>
        {profile.abstract.map((para, i) => (
          <p key={i} className={i > 0 ? "mt-2.5" : undefined}>
            {para}
          </p>
        ))}
      </div>

      <hr className="latex-rule mx-auto mt-10 max-w-[38rem]" />

      <Section title="Research Interests">
        <dl className="space-y-3.5">
          {researchInterests.map((r) => (
            <div key={r.area}>
              <dt className="font-bold text-[0.97em]">{r.area}</dt>
              <dd className="text-[0.95em]">{r.note}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Research Experience">
        {researchExperience.map((r) => (
          <Entry
            key={r.group}
            title={r.group}
            right={r.period}
            subtitle={r.role}
            meta={r.location}
            points={r.points}
          >
            <p className="mt-2 text-[0.88em] text-muted">
              <span className="small-caps">Methods</span> — {r.methods.join(", ")}.
            </p>
          </Entry>
        ))}
      </Section>

      <Section title="Education">
        <Entry
          title={degree.institution}
          right={degree.period}
          subtitle={`${degree.degree}, ${degree.unit}`}
          meta={
            <>
              {degree.detail}
              <a href="#fn-gpa" className="latex-footnote-mark" id="fn-gpa-ref">
                1
              </a>
            </>
          }
        />
        <p className="mt-4 text-[0.9em] text-muted">
          Full academic history, including secondary education, is on the{" "}
          <Link href="/cv">CV</Link>.
        </p>
      </Section>

      <Section title="News">
        <ul className="space-y-1.5 text-[0.95em]">
          {news.map((n) => (
            <li key={n.date + n.text} className="flex flex-col gap-x-4 sm:flex-row">
              <span className="tnum shrink-0 text-muted sm:w-24">{n.date}</span>
              <span>{n.text}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* \footnotetext */}
      <div className="mt-12">
        <hr className="latex-rule w-1/3" />
        <p className="mt-2 text-[0.8em] text-muted" id="fn-gpa">
          <a href="#fn-gpa-ref" className="latex-footnote-mark">
            1
          </a>{" "}
          The University of Dhaka grades on a 4.00 scale; secondary and higher-secondary
          certificates in Bangladesh are graded on a 5.00 scale.
        </p>
      </div>
    </main>
  );
}
