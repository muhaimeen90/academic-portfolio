/** Must match `basePath` in next.config.ts. */
export const BASE_PATH = "/academic-portfolio";

export const SITE_URL = `https://muhaimeen90.github.io${BASE_PATH}`;

/**
 * Prefix a file in `public/` with the basePath. `next/link` and `next/image`
 * do this on their own; plain `href`/`src` attributes do not.
 */
export function asset(path: string): string {
  return `${BASE_PATH}/${path.replace(/^\//, "")}`;
}

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
  { href: "/cv", label: "CV" },
] as const;
