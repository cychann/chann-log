import React from "react";
import CategoryList from "../filters/CategoryList";
import ArticleList from "../post/ArticleList";
import { Post } from "@/types/post";
import { filterArticles, getArticleCategoryCounts } from "@/lib/posts/article";

type ArticlesPageContainer = {
  category: string;
  postList: Post[];
  categoryList: string[];
};

export default function ArticlesPageContainer({
  category,
  postList,
  categoryList,
}: ArticlesPageContainer) {
  const categoryPostCounts = getArticleCategoryCounts(postList, categoryList);

  const filteredPosts = filterArticles(
    postList,
    category === "All" ? "" : category
  );
  return (
    <section className="mx-auto mt-12 w-full max-w-[960px] px-4">
      <CategoryList
        categories={categoryList}
        selectedCategory={category}
        categoryPostCounts={categoryPostCounts}
      />
      <ArticleList posts={filteredPosts} />
    </section>
  );
}
