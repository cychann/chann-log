import { ArticlePost, ArticlePreview } from "@/types/post";
import {
  filterByCategory,
  getCategoryCounts,
  getCategoryList,
  getPostDetail,
  getPostList,
} from "@/lib/posts/utils";
import { ARTICLES_PATH } from "./path";

export const getArticleList = (
  category?: string
): Promise<ArticlePreview[]> => {
  return getPostList(ARTICLES_PATH, "articles", category);
};

export const getArticleDetail = (
  category: string,
  slug: string
): Promise<ArticlePost> => {
  return getPostDetail(ARTICLES_PATH, "articles", category, slug);
};

export const getArticleCategoryList = () => {
  return getCategoryList(ARTICLES_PATH, true);
};

export const getArticleCount = async (category?: string): Promise<number> => {
  const posts = await getArticleList(category);
  return posts.length;
};

export const filterArticles = (posts: ArticlePost[], category?: string) => {
  return filterByCategory(posts, category);
};

export const getArticleCategoryCounts = (
  posts: ArticlePost[],
  categories: string[]
) => {
  return getCategoryCounts(posts, categories);
};

export const getLatestArticles = async (
  limit: number
): Promise<ArticlePreview[]> => {
  const posts = await getArticleList();
  return posts.slice(0, limit);
};
