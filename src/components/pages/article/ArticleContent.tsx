import React from "react";
import CategoryList from "../../filters/CategoryList";
import ArticleList from "../../article/ArticleList";
import {
  filterArticles,
  getArticleCategoryCounts,
  getArticleCategoryList,
  getArticleList,
} from "@/lib/posts/article";
import { ArticleLoadingSkeleton } from "@/components/loading/ArticleCardSkeleton";

type ArticleContentProps = {
  category: string;
};

export default async function ArticleContent({
  category,
}: ArticleContentProps) {
  const [postList, categoryList] = await Promise.all([
    getArticleList(),
    getArticleCategoryList(),
  ]);

  const categoryPostCounts = getArticleCategoryCounts(postList, categoryList);

  const filteredPosts = filterArticles(
    postList,
    category === "All" ? "" : category
  );
  return (
    <>
      <ArticleLoadingSkeleton />
      {/* <CategoryList
        categories={categoryList}
        selectedCategory={category}
        categoryPostCounts={categoryPostCounts}
      />
      <ArticleList posts={filteredPosts} /> */}
    </>
  );
}
