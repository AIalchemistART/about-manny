# About Manny

A one-page site for Matthew (Manny) Walker, built as a fast, accessible static site with Astro and Tailwind CSS.

Live site: [about-manny.netlify.app](https://about-manny.netlify.app)

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
Node 22 build contract, accessibility and privacy requirements, and the rule that
the public page may use only facts and links from the approved copy.

### Delivery history

Tickets 2 through 5 (Hero, How I Work, Contact, and Shipped) were started in
parallel in separate worktrees. Hero and How I Work merged first. Contact and
Shipped were restarted after stale-worktree locks and merged next. There were no
merge conflicts. Ticket 6 was polish and accessibility. Ticket 7 is this Astro 7
and Node 22 upgrade.

The first five tickets are recorded in their pull requests:

- [ABOU-571281 — scaffold Astro, Tailwind, CI, and Netlify configuration (PR #1)](https://github.com/AIalchemistART/about-manny/pull/1)
- [ABOU-F15FEB — build the responsive hero section (PR #2)](https://github.com/AIalchemistART/about-manny/pull/2)
- [ABOU-EA4CA8 — build the How I Work section (PR #3)](https://github.com/AIalchemistART/about-manny/pull/3)
- [ABOU-27F313 — build the contact section and footer (PR #4)](https://github.com/AIalchemistART/about-manny/pull/4)
- [ABOU-AE3BA4 — build the shipped-project card grid (PR #5)](https://github.com/AIalchemistART/about-manny/pull/5)
