import React from "react";
import ListPageHeader from "../ListPageHeader";
import ArticleContent from "./ArticleContent";

type ArticlePageContainerProps = {
  category: string;
};

export default function ArticlePageContainer({
  category,
}: ArticlePageContainerProps) {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <ArticleContent category={category} />
    </>
  );
}
