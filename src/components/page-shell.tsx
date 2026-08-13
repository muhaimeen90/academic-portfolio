import type { ReactNode } from "react";

/**
 * The site's two-column grid: a narrow sidebar (photo, contact, or a page
 * label) beside the content column. Collapses to a single column below `lg`,
 * which is where the mobile reading experience stays.
 */
export function PageShell({
  sidebar,
  children,
}: {
  sidebar: ReactNode;
  children: ReactNode;
}) {
  return (
    <main className="latex-body mx-auto w-full max-w-shell px-6 pb-6 pt-10 sm:px-8 lg:px-12">
      <div className="lg:grid lg:grid-cols-page lg:gap-x-14 xl:gap-x-20">
        <div className="lg:sticky lg:top-8 lg:self-start">{sidebar}</div>
        <div className="mt-10 lg:mt-0">{children}</div>
      </div>
    </main>
  );
}
