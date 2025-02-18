import { LogPost, LogPreview } from "@/types/post";
import {
  getPostList,
  getPostDetail,
  getCategoryList,
  filterByCategory,
  getCategoryCounts,
} from "@/lib/posts/utils";
import { LOGS_PATH } from "./path";

export const getLogList = (category?: string): Promise<LogPreview[]> => {
  return getPostList(LOGS_PATH, "logs", category);
};

export const getLogDetail = (
  category: string,
  slug: string
): Promise<LogPost> => {
  return getPostDetail(LOGS_PATH, "logs", category, slug);
};

export const getLogCategoryList = () => {
  return getCategoryList(LOGS_PATH, true);
};

export const getLogCount = async (category?: string): Promise<number> => {
  const posts = await getLogList(category);
  return posts.length;
};

export const filterLogs = (posts: LogPreview[], category?: string) => {
  return filterByCategory(posts, category);
};

export const getLogCategoryCounts = (
  posts: LogPreview[],
  categories: string[]
) => {
  return getCategoryCounts(posts, categories);
};

export const getLatestLogs = async (limit: number): Promise<LogPreview[]> => {
  const posts = await getLogList();
  return posts.slice(0, limit);
};
