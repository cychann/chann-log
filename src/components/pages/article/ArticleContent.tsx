import React from "react";
import CategoryList from "../../filters/CategoryList";
import ArticleList from "../../article/ArticleList";
import {
  filterArticles,
  getArticleCategoryCounts,
  getArticleCategoryList,
  getArticleList,
} from "@/lib/posts/article";

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
    <section className="w-full max-w-7xl mx-auto px-4 mt-20">
      <div className="flex gap-8">
        <div className="w-2/3 px-6">
          <span className="block mb-4 text-[20px] text-text-tertiary font-semibold">
            전체 게시글
          </span>
          <ArticleList posts={filteredPosts} />
        </div>
        <div className="w-1/3">
          <CategoryList
            categories={categoryList}
            selectedCategory={category}
            categoryPostCounts={categoryPostCounts}
          />
        </div>
      </div>
    </section>
  );
}
