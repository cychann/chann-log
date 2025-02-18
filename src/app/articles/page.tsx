import React from "react";
import { Metadata } from "next";
import ArticleContent from "@/components/pages/article/ArticleContent";

export const metadata: Metadata = {
  title: "Articles | Yoochan's Dev Blog",
  description:
    "웹 개발과 프론트엔드 기술에 대한 심층적인 기술 아티클 모음입니다.",
};

export default function ArticlePage() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <ArticleContent category="All" />
    </>
  );
}
