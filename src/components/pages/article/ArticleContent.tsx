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

  const pageTitle = category === "All" ? "전체 게시글" : `${category} 게시글`;
  return (
    <section className="w-full px-4 mt-20">
      <div className="flex gap-8">
        <div className="w-full md:[900px]:w-2/3 px-6">
          <span className="block mb-4 text-[20px] text-text-tertiary font-semibold">
            {pageTitle}
          </span>
          <ArticleList posts={filteredPosts} />
        </div>
        <div className="hidden md:[900px]:block w-1/3">
          <CategoryList
            categories={categoryList}
            selectedCategory={category}
            categoryPostCounts={categoryPostCounts}
            basePath="articles"
          />
        </div>
      </div>
    </section>
  );
}
