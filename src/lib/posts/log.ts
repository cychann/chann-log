import { Post } from "@/types/post";
import { PostService } from "./base";

class LogService extends PostService {
  constructor() {
    super("logs");
  }

  public async getLatestLogs(limit: number): Promise<Post[]> {
    const posts = await this.getList();
    return posts.slice(0, limit);
  }
}

export const logService = new LogService();

export const getLogList = (category?: string) => logService.getList(category);
export const getLatestLogs = (limit: number) => logService.getLatestLogs(limit);
export const getLogDetail = (category: string, slug: string) =>
  logService.getDetail(category, slug);
export const getLogCategoryList = () => logService.getCategoryList();
export const getLogCount = (category?: string) => logService.getCount(category);
export const filterLogs = (posts: Post[], category?: string) =>
  logService.filterByCategory(posts, category);
export const getLogCategoryCounts = (posts: Post[], categories: string[]) =>
  logService.getCategoryCounts(posts, categories);
