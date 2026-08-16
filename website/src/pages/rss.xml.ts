import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getArticlePath, getArticles } from "../lib/articles";

export async function GET(context: APIContext) {
  const articles = await getArticles({ includeDrafts: false });

  return rss({
    title: "Boris Kayiranga’s writing",
    description: "Essays and notes about books, software, energy, urbanism, and everyday observations.",
    site: context.site ?? "https://silverhairs.dev",
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.publishedAt,
      link: getArticlePath(article),
    })),
    customData: "<language>en</language>",
  });
}
