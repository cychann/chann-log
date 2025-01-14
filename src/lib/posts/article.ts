import { Post } from "@/types/post";
import { PostService } from "./base";

class ArticleService extends PostService {
  constructor() {
    super("articles");
  }

  public getCategoryList(): string[] {
    const categories = super.getCategoryList();
    return ["All", ...categories];
  }
}

export const articleService = new ArticleService();

// 편의를 위한 export 함수들
export const getArticleList = (category?: string) =>
  articleService.getList(category);
export const getArticleDetail = (category: string, slug: string) =>
  articleService.getDetail(category, slug);
export const getArticleCategoryList = () => articleService.getCategoryList();
export const getArticleCount = (category?: string) =>
  articleService.getCount(category);
export const filterArticles = (posts: Post[], category?: string) =>
  articleService.filterByCategory(posts, category);
export const getArticleCategoryCounts = (posts: Post[], categories: string[]) =>
  articleService.getCategoryCounts(posts, categories);
