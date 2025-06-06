"use client";

import React, { Suspense } from "react";
import { ArticlePreview } from "@/types/post";
import ArticleCard from "./ArticleCard";
import PaginatedList from "@/components/layout/PaginatedList";

const ArticleItem = ({ item }: { item: ArticlePreview }) => {
  return <ArticleCard post={item} />;
};

type ArticleListProps = {
  posts: ArticlePreview[];
};

export default function ArticleList({ posts }: ArticleListProps) {
  return (
    <Suspense>
      <PaginatedList<ArticlePreview>
        items={posts}
        itemsPerPage={5}
        ItemComponent={ArticleItem}
      />
    </Suspense>
  );
}
