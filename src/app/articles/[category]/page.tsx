import React from "react";
import ArticlePageContainer from "@/components/pages/article/ArticlePageContainer";

type ArticleCategoryPageProps = {
  params: {
    category: string;
  };
};

export async function generateMetadata({
  params: { category },
}: ArticleCategoryPageProps) {
  return {
    title: `${category} Articles | Yoochan's Dev Blog"`,
    description: `${category}에 관한 기술 아티클 모음입니다.`,
  };
}

export default async function articleCategoryPage({
  params: { category },
}: ArticleCategoryPageProps) {
  return <ArticlePageContainer category={category} />;
}
