import React from "react";
import ArticleCard from "./ArticleCard";
import { ArticlePreview } from "@/types/post";

type ArticleListProps = {
  posts: ArticlePreview[];
};

export default function ArticleList({ posts }: ArticleListProps) {
  return (
    <section>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        {posts.map((post) => (
          <ArticleCard key={post.title} post={post} />
        ))}
      </ul>
    </section>
  );
}
