# About Manny

A one-page site for Matthew (Manny) Walker, built as a fast, accessible static site with Astro and Tailwind CSS.

## Run locally

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Create a production build in `dist/`:

```sh
npm run build
```

## How this was built

The repository started with `PROJECT_CONTEXT.md` as the implementation brief and
`CONTENT.md` as the approved-copy source of truth. The Project Context fixes the
architecture (a static, one-page Astro site with one component per section), the
Node 20 build contract, accessibility and privacy requirements, and the rule that
the public page may use only facts and links from the approved copy.

### Delivery history

The five merged build tickets are recorded in their pull requests:

- [ABOU-571281 — scaffold Astro, Tailwind, CI, and Netlify configuration (PR #1)](https://github.com/AIalchemistART/about-manny/pull/1)
- [ABOU-F15FEB — build the responsive hero section (PR #2)](https://github.com/AIalchemistART/about-manny/pull/2)
- [ABOU-EA4CA8 — build the How I Work section (PR #3)](https://github.com/AIalchemistART/about-manny/pull/3)
- [ABOU-27F313 — build the contact section and footer (PR #4)](https://github.com/AIalchemistART/about-manny/pull/4)
- [ABOU-AE3BA4 — build the shipped-project card grid (PR #5)](https://github.com/AIalchemistART/about-manny/pull/5)

The Git branch and merge history shows that tickets 2 and 3 ran in parallel from
the scaffold created by ticket 1. Tickets 4 and 5 formed a second parallel pair
after tickets 2 and 3. Git and the merged PR records contain no merge-conflict
resolution: each parallel ticket changed its own component and merged cleanly into
`main`.
