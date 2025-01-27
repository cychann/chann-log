import React from "react";
import CategoryList from "../filters/CategoryList";
import ArticleList from "./ArticleList";
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
      <h1 className="text-4xl font-extrabold mb-2">Article</h1>
      <p className="text-text-primary mb-6">
        깊이 있는 고민과 배움을 담아낸 <br />
        개발 여정의 기록입니다. 🚀
      </p>
      <CategoryList
        categories={categoryList}
        selectedCategory={category}
        categoryPostCounts={categoryPostCounts}
      />
      <ArticleList posts={filteredPosts} />
    </section>
  );
}
