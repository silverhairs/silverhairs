# silverhairs.dev

A small, writing-first personal website built with Astro and deployed as static assets on Cloudflare Workers.

## Write an article

Create a lowercase, kebab-case Markdown file in `src/content/articles/`:

```md
---
title: "A clear article title"
description: "A concise summary used in article lists, RSS, and metadata."
publishedAt: 2026-08-16
updatedAt: 2026-08-20 # optional
draft: false # optional; defaults to false
---

Start writing here.
```

The filename becomes the URL. For example, `small-tools.md` is published at `/writing/small-tools/`. Drafts appear during local development and are excluded from production builds, RSS, and the sitemap.

## Work locally

Use Node 22 or newer, then run:

```sh
npm install
npm run dev
```

Available scripts:

- `npm run dev` starts the local development server.
- `npm run check` validates Astro, TypeScript, and article frontmatter.
- `npm run build` validates and creates the static site in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run deploy` builds and deploys with Wrangler.

## Connect Cloudflare Workers Builds

Connect this repository to a Worker named `silverhairs` using these settings:

- Root directory: `website`
- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Build watch path: `website/**`

After the first deployment, attach `silverhairs.dev` as the custom domain. If `www.silverhairs.dev` is configured, redirect it to the apex domain with a Cloudflare Redirect Rule.
