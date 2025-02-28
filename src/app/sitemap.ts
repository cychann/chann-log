import { BASE_URL } from "@/config/const";
import { getArticleList } from "@/lib/posts/article";
import { getLogList } from "@/lib/posts/log";

export default async function sitemap() {
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/articles`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/logs`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  const articles = await getArticleList();
  const articlePages = articles.map((article) => ({
    url: `${BASE_URL}/articles/${article.category}/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const logs = await getLogList();
  const logPages = logs.map((log) => ({
    url: `${BASE_URL}/logs/${log.category}/${log.slug}`,
    lastModified: new Date(log.date),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages, ...logPages];
}
