"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/site";
import { profile } from "@/content/profile";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();

  // trailingSlash: true means pathname arrives as "/cv/" — normalise before comparing.
  const current = pathname.replace(/\/+$/, "") || "/";

  return (
    <header className="mx-auto max-w-measure px-5 pt-8 sm:px-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pb-2">
        <Link href="/" className="small-caps text-[1.02em] font-bold !text-ink hover:!no-underline">
          {profile.name}
        </Link>

        <nav className="flex items-baseline gap-x-5">
          {NAV.map((item) => {
            const active = current === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "small-caps text-[0.86em] !text-ink underline underline-offset-4 decoration-1"
                    : "small-caps text-[0.86em] !text-muted hover:!text-ink"
                }
              >
                {item.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
      </div>
      <hr className="latex-rule" />
    </header>
  );
}
