import { getCollection, type CollectionEntry } from "astro:content";

export type Article = CollectionEntry<"articles">;

export function getArticleSlug(article: Article): string {
  return article.id.replace(/\.md$/, "").replace(/\/index$/, "");
}

export function getArticlePath(article: Article): string {
  return `/writing/${getArticleSlug(article)}/`;
}

export async function getArticles(options: { includeDrafts?: boolean } = {}): Promise<Article[]> {
  const includeDrafts = options.includeDrafts ?? !import.meta.env.PROD;
  const articles = await getCollection("articles", ({ data }) => includeDrafts || !data.draft);

  return articles.sort(
    (left, right) => right.data.publishedAt.valueOf() - left.data.publishedAt.valueOf(),
  );
}
