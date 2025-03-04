import React from "react";
import {
  filterArticles,
  getArticleCategoryCounts,
  getArticleCategoryList,
  getArticleList,
} from "@/lib/posts/article";
import PostContentLayout from "@/components/layout/PostContentLayout";
import ArticleList from "@/components/article/ArticleList";

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

  const pageTitle = category === "All" ? "전체 게시글" : `${category} 게시글`;
  return (
    <PostContentLayout
      pageTitle={pageTitle}
      categoryList={categoryList}
      selectedCategory={category}
      categoryPostCounts={categoryPostCounts}
      basePath="articles"
    >
      <ArticleList posts={filteredPosts} />
    </PostContentLayout>
  );
}
