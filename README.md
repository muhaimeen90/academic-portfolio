# academic-portfolio

Academic homepage of Abb Muhaimeen — typeset to read like a LaTeX article.

**Live:** https://muhaimeen90.github.io/academic-portfolio/

This is separate from the developer portfolio at
[muhaimeen90/My-Portfolio](https://github.com/muhaimeen90/My-Portfolio); that one stays as it is.

## Editing content

Everything on the site — bio, research interests, education, publications, projects, skills,
service, awards, news — lives in a single typed file:

```
src/content/profile.ts
```

The pages contain no prose of their own, so that file is the only one you need to touch for a
content change. Push to `main` and the site rebuilds itself.

Adding a publication once the HCI paper lands: append an entry to the `publications` array and set
its `status` to `"under-review"` or `"published"`. The page groups and numbers entries on its own.

To add a profile photograph, drop `public/profile.jpg` in and uncomment the `<img>` in
`src/app/page.tsx`.

## Design

- **Latin Modern Roman** — the web cut of Computer Modern, LaTeX's default face — self-hosted in
  `public/fonts/`, so the build needs no network and the page needs no CDN.
- Single measured column at `46rem` (~6.5 in), justified body copy with real hyphenation.
- Sections numbered by CSS counter, small-caps headings, hairline rules, `hyperref`-blue links,
  `\bibitem` hanging indents, zero border radius anywhere.
- Light (paper) and dark themes, applied before first paint so there is no flash.

## Local development

```bash
npm install
npm run dev     # http://localhost:3000/academic-portfolio
npm run build   # static export into out/
```

Note the `/academic-portfolio` path in dev — it comes from `basePath` in `next.config.ts`, which is
what makes the site work as a GitHub Pages project site.

## Deployment

`.github/workflows/deploy.yml` builds the static export on every push to `main` and force-pushes it
to the `gh-pages` branch, which is what Pages serves. Nothing else to configure — do not commit to
`gh-pages` by hand, as each deploy replaces it wholesale.

If you ever move this to a custom domain or to the `muhaimeen90.github.io` user site, update
`basePath` in `next.config.ts` and `BASE_PATH` / `SITE_URL` in `src/lib/site.ts` together.

## Stack

Next.js 15 (static export) · React 19 · TypeScript · Tailwind CSS 3. No UI or animation libraries.
