import { Post } from "@/types/post";
import React from "react";
import ArticleCard from "./ArticleCard";
type Props = {
  posts: Post[];
};

export default function ArticleList({ posts }: Props) {
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
