import React from "react";
import ArticlesPageContainer from "@/components/articles/ArticlesPageContainer";
import { getArticleCategoryList, getArticleList } from "@/lib/posts/article";

type ArticlePageProps = {
  searchParams: {
    search?: string;
  };
};

export default async function ArticlePage({ searchParams }: ArticlePageProps) {
  const postList = await getArticleList();
  const categoryList = getArticleCategoryList();
  return (
    <ArticlesPageContainer
      category="All"
      postList={postList}
      categoryList={categoryList}
    />
  );
}
