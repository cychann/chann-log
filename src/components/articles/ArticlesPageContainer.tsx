import { filterPosts, getCategoryPostCounts } from "@/lib/post";
import React from "react";
import CategoryList from "../filters/CategoryList";
import ArticleList from "../post/ArticleList";
import { Post } from "@/types/post";

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
  const categoryPostCounts = getCategoryPostCounts(postList, categoryList);

  const filteredPosts = filterPosts(postList, {
    category: category === "All" ? "" : category,
  });
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
