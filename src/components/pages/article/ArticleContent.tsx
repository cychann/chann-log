import React from "react";
import CategoryList from "../../filters/CategoryList";
import ArticleList from "../../article/ArticleList";
import { Post } from "@/types/post";
import { filterArticles, getArticleCategoryCounts } from "@/lib/posts/article";

type ArticleContentProps = {
  category: string;
  postList: Post[];
  categoryList: string[];
};

export default function ArticleContent({
  category,
  postList,
  categoryList,
}: ArticleContentProps) {
  const categoryPostCounts = getArticleCategoryCounts(postList, categoryList);

  const filteredPosts = filterArticles(
    postList,
    category === "All" ? "" : category
  );
  return (
    <>
      <CategoryList
        categories={categoryList}
        selectedCategory={category}
        categoryPostCounts={categoryPostCounts}
      />
      <ArticleList posts={filteredPosts} />
    </>
  );
}
