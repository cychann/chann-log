import React from "react";
import ArticlesPageContainer from "@/components/pages/article/ArticleContent";
import { getArticleCategoryList, getArticleList } from "@/lib/posts/article";

interface Props {
  params: {
    category: string;
  };
}

export default async function page({ params }: Props) {
  const { category } = await params;
  const postList = await getArticleList();
  const categoryList = getArticleCategoryList();

  return (
    <ArticlesPageContainer
      category={category}
      postList={postList}
      categoryList={categoryList}
    />
  );
}
