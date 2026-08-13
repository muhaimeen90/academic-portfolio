import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-measure px-5 pb-14 pt-12 sm:px-8">
      <hr className="latex-rule" />
      <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-[0.82em] text-muted">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="small-caps">Typeset in Latin Modern</span>
      </div>
    </footer>
  );
}
