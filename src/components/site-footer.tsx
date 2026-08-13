import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-shell px-6 pb-12 pt-14 sm:px-8 lg:px-12">
      <hr className="latex-rule" />
      <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-[0.82em] text-muted">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Typeset in Latin Modern</span>
      </div>
    </footer>
  );
}
