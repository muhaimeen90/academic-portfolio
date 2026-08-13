import { profile } from "@/content/profile";
import { asset } from "@/lib/site";

/** Photo, affiliation, and contact details — the homepage sidebar. */
export function ProfileCard() {
  return (
    <aside>
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, no optimiser */}
      <img
        src={asset(profile.photo)}
        alt={profile.name}
        width={800}
        height={1000}
        className="w-44 border border-rule object-cover object-top sm:w-52 lg:w-full"
      />

      <div className="mt-4 text-[0.88em] leading-relaxed">
        <p>{profile.affiliation}</p>
        <p className="text-muted">{profile.location}</p>
      </div>

      <dl className="mt-4 space-y-1 text-[0.86em]">
        <div>
          <dt className="sr-only">Email</dt>
          <dd>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </dd>
        </div>
        <div>
          <dt className="sr-only">GitHub</dt>
          <dd>
            <span className="text-muted">GitHub / </span>
            <a href={profile.links.github}>{profile.links.githubLabel}</a>
          </dd>
        </div>
        <div>
          <dt className="sr-only">LinkedIn</dt>
          <dd>
            <span className="text-muted">LinkedIn / </span>
            <a href={profile.links.linkedin}>{profile.links.linkedinLabel}</a>
          </dd>
        </div>
      </dl>

      <a
        href={asset(profile.links.cv)}
        className="mt-5 inline-block border border-rule px-3.5 py-1.5 text-[0.84em] uppercase tracking-wider !text-ink hover:!no-underline hover:border-ink"
      >
        Curriculum Vitae ↓
      </a>

      <p className="mt-3 text-[0.8em] text-muted">
        Also: <a href={profile.links.devPortfolio}>software portfolio</a>
      </p>
    </aside>
  );
}
