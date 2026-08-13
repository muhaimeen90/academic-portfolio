import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Entry } from "@/components/entry";
import { asset } from "@/lib/site";
import {
  profile,
  education,
  researchExperience,
  projects,
  skills,
  service,
  awards,
} from "@/content/profile";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: `Curriculum vitae of ${profile.name} — education, research experience, projects, skills, service, and awards.`,
};

export default function CV() {
  return (
    <main className="latex-doc latex-body mx-auto max-w-measure px-5 pb-4 pt-12 sm:px-8">
      {/* \maketitle */}
      <div className="latex-title">
        <h1>{profile.name}</h1>
        <p className="mt-2 text-[0.9em]">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span className="text-muted"> · </span>
          <span className="tnum">{profile.phone}</span>
          <span className="text-muted"> · </span>
          {profile.location}
        </p>
        <p className="text-[0.9em]">
          <a href={profile.links.github}>github.com/muhaimeen90</a>
          <span className="text-muted"> · </span>
          <a href={profile.links.linkedin}>linkedin.com/in/muhaimeen-alam</a>
        </p>
        <p className="mt-3.5 text-[0.88em]">
          <a href={asset(profile.links.cv)}>Download this CV as a PDF</a>
        </p>
      </div>

      <hr className="latex-rule mt-8" />

      <Section title="Education">
        {education.map((e) => (
          <Entry
            key={e.degree + e.institution}
            title={e.institution}
            right={e.period}
            subtitle={e.unit ? `${e.degree}, ${e.unit}` : e.degree}
            meta={`${e.detail} · ${e.location}`}
          >
            {e.coursework.length > 0 ? (
              <p className="mt-1.5 text-[0.9em] text-muted">
                <span className="small-caps">Selected coursework</span> — {e.coursework.join(", ")}.
              </p>
            ) : null}
          </Entry>
        ))}
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
          />
        ))}
      </Section>

      <Section title="Projects">
        {projects.map((p) => (
          <Entry key={p.title} title={p.title} right={p.period} subtitle={p.role} points={p.points}>
            <p className="mt-1.5 text-[0.86em] text-muted">
              <span className="small-caps">Built with</span> — {p.stack.join(", ")}.
              {p.links.map((l) => (
                <span key={l.href}>
                  {" · "}
                  <a href={l.href}>{l.label}</a>
                </span>
              ))}
            </p>
          </Entry>
        ))}
      </Section>

      <Section title="Technical Skills">
        <dl className="space-y-2">
          {skills.map((s) => (
            <div key={s.group} className="flex flex-col gap-x-3 sm:flex-row">
              <dt className="shrink-0 font-bold text-[0.93em] sm:w-52">{s.group}</dt>
              <dd className="text-[0.95em]">{s.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Service and Activities">
        {service.map((s) => (
          <Entry
            key={s.organisation}
            title={s.organisation}
            right={s.period}
            subtitle={s.role}
            points={s.points}
          />
        ))}
      </Section>

      <Section title="Awards and Honours">
        {awards.map((a) => (
          <Entry
            key={a.title}
            title={a.title}
            right={a.period}
            subtitle={a.body}
            points={a.points}
          />
        ))}
      </Section>
    </main>
  );
}
