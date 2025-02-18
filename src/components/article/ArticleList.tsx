import React from "react";
import { ArticlePreview } from "@/types/post";
import ArticleCard from "./ArticleCard";

type ArticleListProps = {
  posts: ArticlePreview[];
};

export default function ArticleList({ posts }: ArticleListProps) {
  return (
    <section className="w-full">
      <ul className="flex flex-col">
        {posts.map((post) => (
          <ArticleCard key={post.title} post={post} />
        ))}
      </ul>
    </section>
  );
}
