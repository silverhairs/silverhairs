---
title: "An Example Note"
description: "A private formatting reference for essays, observations, and technical notes."
publishedAt: 2026-08-16
updatedAt: 2026-08-16
draft: true
---

This draft is a private formatting reference. It appears while developing locally and is left out of production builds, feeds, and indexes.

## Prose and links

Markdown keeps the writing workflow deliberately plain. You can add **emphasis**, _quiet asides_, and [useful references](https://docs.astro.build/en/guides/markdown-content/) without reaching for a component.

> This is how a quoted passage will sit apart from the surrounding text.

A typical list looks like this:

1. Begin with something you noticed.
2. Follow it until it connects to something else.
3. Write down what changed your mind.

## Tables

| Subject | Observation | Follow-up |
| --- | --- | --- |
| Energy | Infrastructure shapes daily life | Read further |
| Books | Marginal notes become their own index | Revisit later |
| Cities | Small design choices change how streets feel | Look again |

## Code

Technical notes can still use inline code such as `getCollection("articles")`. Fenced blocks receive syntax highlighting and scroll horizontally when a line is intentionally long.

```typescript
type Article = {
  title: string;
  description: string;
  publishedAt: Date;
  updatedAt?: Date;
  draft: boolean;
};

export const published = (articles: Article[]) =>
  articles.filter((article) => !article.draft).sort((a, b) => b.publishedAt.valueOf() - a.publishedAt.valueOf());
```

---

Images, horizontal rules, nested lists, and other standard Markdown elements inherit the same reading-focused rhythm.
