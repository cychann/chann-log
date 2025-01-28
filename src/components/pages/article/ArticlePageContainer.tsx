import React, { Suspense } from "react";
import ListPageHeader from "../ListPageHeader";
import ArticleContent from "./ArticleContent";
import { ArticleLoadingSkeleton } from "@/components/loading/article/ArticleLoadingSkeleton";

type ArticlePageContainerProps = {
  category: string;
};

export default function ArticlePageContainer({
  category,
}: ArticlePageContainerProps) {
  return (
    <ListPageHeader
      title="Article"
      description="깊이 있는 고민과 배움을 담아낸 개발 여정의 기록입니다. 🚀"
    >
      <Suspense fallback={<ArticleLoadingSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <ArticleContent category={category} />
      </Suspense>
    </ListPageHeader>
  );
}
