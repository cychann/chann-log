import React from "react";
import ArticleContent from "@/components/pages/article/ArticleContent";
import { getArticleCategoryList, getArticleList } from "@/lib/posts/article";
import ListPageHeader from "@/components/pages/ListPageHeader";

type ArticlePageProps = {
  searchParams: {
    search?: string;
  };
};

export default async function ArticlePage({ searchParams }: ArticlePageProps) {
  const postList = await getArticleList();
  const categoryList = getArticleCategoryList();
  return (
    <ListPageHeader
      title="Article"
      description="깊이 있는 고민과 배움을 담아낸 개발 여정의 기록입니다. 🚀"
    >
      <ArticleContent
        category="All"
        postList={postList}
        categoryList={categoryList}
      />
    </ListPageHeader>
  );
}
