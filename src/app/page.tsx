import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { ProfileCard } from "@/components/profile-card";
import { Section } from "@/components/section";
import { Entry } from "@/components/entry";
import {
  profile,
  researchInterests,
  researchExperience,
  industryExperience,
  education,
  achievements,
  news,
} from "@/content/profile";

export default function Home() {
  return (
    <PageShell sidebar={<ProfileCard />}>
      <div className="latex-title">
        <h1>{profile.name}</h1>
        <p className="mt-1.5 text-[1.02em] italic text-muted">{profile.headline}</p>
      </div>

      <div className="mt-6 space-y-3.5">
        {profile.bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="mt-12">
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
              title={r.org ? `${r.group}, ${r.org}` : r.group}
              right={r.period}
              subtitle={r.advisors ? `${r.role} · ${r.advisors}` : r.role}
              points={r.points}
            />
          ))}
        </Section>

        <Section title="Experience">
          {industryExperience.map((e) => (
            <Entry
              key={e.org}
              title={e.org}
              right={e.period}
              subtitle={e.role}
              points={e.points}
            />
          ))}
        </Section>

        <Section title="Education">
          {education.map((e) => (
            <Entry
              key={e.degree}
              title={e.institution}
              right={e.period}
              subtitle={`${e.degree}, ${e.unit}`}
              meta={e.location}
              points={e.points}
            />
          ))}
        </Section>

        <Section title="Achievements">
          <ul className="latex-itemize text-[0.95em]">
            {achievements.map((a) => (
              <li key={a.title}>
                <span className="font-bold">{a.title}</span>
                {a.detail ? <> — {a.detail}</> : null}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="News">
          <ul className="space-y-1.5 text-[0.95em]">
            {news.map((n) => (
              <li key={n.date + n.text} className="flex flex-col gap-x-5 sm:flex-row">
                <span className="tnum shrink-0 text-muted sm:w-24">{n.date}</span>
                <span>{n.text}</span>
              </li>
            ))}
          </ul>
        </Section>

        <p className="mt-10 text-[0.92em] text-muted">
          Selected project write-ups are on the <Link href="/projects">projects</Link> page; the full
          record is in the <Link href="/cv">CV</Link>.
        </p>
      </div>
    </PageShell>
  );
}
