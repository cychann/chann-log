import React from "react";
import ArticleContent from "@/components/pages/article/ArticleContent";

type ArticleCategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateMetadata({ params }: ArticleCategoryPageProps) {
  const { category } = await params;
  return {
    title: `${category} Articles | Yoochan's Dev Blog"`,
    description: `${category}에 관한 기술 아티클 모음입니다.`,
  };
}

export default async function articleCategoryPage({
  params,
}: ArticleCategoryPageProps) {
  const { category } = await params;

  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <ArticleContent category={category} />
    </>
  );
}
