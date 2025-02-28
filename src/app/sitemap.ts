import { BASE_URL } from "@/config/const";
import { getArticleList } from "@/lib/posts/article";
import { getLogList } from "@/lib/posts/log";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
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
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/articles/${article.category}/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const logs = await getLogList();
  const logPages: MetadataRoute.Sitemap = logs.map((log) => ({
    url: `${BASE_URL}/logs/${log.category}/${log.slug}`,
    lastModified: new Date(log.date),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages, ...logPages];
}
