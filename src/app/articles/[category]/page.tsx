import React from "react";
import ArticlePageContainer from "@/components/pages/article/ArticlePageContainer";

interface Props {
  params: {
    category: string;
  };
}

export default async function page({ params }: Props) {
  const { category } = await params;

  return <ArticlePageContainer category={category} />;
}
