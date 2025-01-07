import React from "react";
import ArticlesPageContainer from "@/components/articles/ArticlesPageContainer";
import { getCategoryList, getPostList } from "@/lib/post";

interface Props {
  params: {
    category: string;
  };
}

export default async function page({ params }: Props) {
  const { category } = await params;
  const postList = await getPostList("articles");
  const categoryList = getCategoryList("articles");

  return (
    <ArticlesPageContainer
      category={category}
      postList={postList}
      categoryList={categoryList}
    />
  );
}
