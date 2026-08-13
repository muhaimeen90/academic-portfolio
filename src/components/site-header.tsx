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
    <header className="mx-auto w-full max-w-shell px-6 pt-7 sm:px-8 lg:px-12">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2.5 pb-2.5">
        <Link href="/" className="text-[1.05em] font-bold !text-ink hover:!no-underline">
          {profile.name}
        </Link>

        <nav className="flex flex-wrap items-baseline gap-x-4 gap-y-1 sm:gap-x-6">
          {NAV.map((item) => {
            const active = current === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "text-[0.88em] uppercase tracking-wider !text-ink underline underline-offset-4 decoration-1"
                    : "text-[0.88em] uppercase tracking-wider !text-muted hover:!text-ink"
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
