# biggree.com

Personal site of Joao Paulo — FastAPI backend developer, API integrations, data pipelines. UK-based, native Portuguese speaker.

## Stack

- [Astro 4.x](https://astro.build/) (static site generator, zero-JS by default)
- [Tailwind CSS 3.x](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/) (free tier)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Build

```bash
npm run build
# Output in dist/
npm run preview
```

## Deploy

Push to GitHub. Vercel auto-deploys on every push to `main`. First-time setup:

1. Import the repo in Vercel dashboard.
2. Framework preset: **Astro** (auto-detected).
3. Settings → Domains → add `biggree.com` and `www.biggree.com`.
4. Update DNS A record per the Vercel-provided IP (see `freelance/docs/02_execution_plan.md` — "Plano DNS zero-downtime" section).

## Performance target

Lighthouse ≥95 in all categories. Astro's default static output + Tailwind's purged CSS should hit this without any tuning.

## Content updates

All content lives in `src/pages/index.astro` and the components in `src/components/`. No CMS, no build complexity beyond Astro defaults — change a string, push, deployed in ~30 seconds.

## Contact

Email: `joaopaulo@biggree.com`
