import React from "react";
import ArticlePageContainer from "@/components/pages/article/ArticlePageContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles | Yoochan's Dev Blog",
  description:
    "웹 개발과 프론트엔드 기술에 대한 심층적인 기술 아티클 모음입니다.",
};

export default function ArticlePage() {
  return <ArticlePageContainer category="All" />;
}
