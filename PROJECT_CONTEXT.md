# Project Context: about-manny

## What this is
A one-page "About Me" site for Matthew (Manny) Walker, built with Fredrin as his
application for Fredrin's Forward Deployed Engineer role. The site and its ticket/PR
history are the work sample. Keep it simple, fast, accessible and honest.

## Stack and layout
- Astro (latest) + Tailwind CSS, static output, no backend, no client-side framework
  unless a ticket asks for one. TypeScript for any script code.
- One page: src/pages/index.astro. Each section is its own component in
  src/components/ (Hero.astro, Shipped.astro, HowIWork.astro, Contact.astro).
  index.astro only imports and orders components; keep edits there minimal.
- Static files (OG image, favicon) in public/.
- Build: `npm run build` -> output in `dist/`. Hosted on Netlify (free subdomain),
  deploys on merge to main. netlify.toml holds the build settings.
- CI: GitHub Actions runs `npm ci && npm run build` on every PR.

## The facts rule (most important)
- FACTS ONLY. All page text comes from CONTENT.md, which uses approved wording
  from Manny's answer bank. Copy it as written. You may shorten or split a
  sentence for layout, but never add a claim, number, date, employer, client,
  metric, tool or outcome that is not in CONTENT.md.
- NEVER INVENT. No made-up stats, testimonials, logos, star counts, user numbers,
  sales, reviews or "trusted by" lines. No placeholder text left on the page.
- If something seems missing, leave it out and say so in the PR description.
  Do not fill the gap.
- Do not link to private repos. Use only the links listed in CONTENT.md.

## Contact and privacy
- The phone number stays OFF the page, and so does the street address. City and
  state only: "Eagle (Boise), Idaho".
- Contact links, exactly:
  - Email: manny@aialchemist.net (mailto: link)
  - Portfolio: https://aialchemist.net
  - GitHub: https://github.com/AIalchemistART
  - LinkedIn: https://www.linkedin.com/in/clarityintelligence (always with www)

## Name
"Matthew (Manny) Walker" in the hero and page title.

## Words to avoid
Never use: "7+ production applications", "live in production, serving real users",
"shipped more than 7 apps solo", "a decade of consultative selling", "TS clearance",
"Claude Code", or any ARIA-404 sales, wishlist or review numbers. TypeScript and
Python are "AI-directed" (Manny directs AI-written code and reviews it).

## Style
Plain, direct, first person. Dark-on-light, readable type, good contrast, mobile
first, semantic HTML, alt text on images, no autoplaying media, no tracking scripts.
Lighthouse accessibility 95+.

## Workflow
One ticket = one PR. Keep each PR to its ticket's files. Describe what changed and
anything left out in the PR description. Manny reviews and merges every PR.
