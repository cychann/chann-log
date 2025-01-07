import { Post } from "@/types/post";
import React from "react";
import ArticleCard from "./ArticleCard";
type Props = {
  posts: Post[];
};

export default function ArticleList({ posts }: Props) {
  return (
    <section>
      <div className="border-y py-2 my-4 bg-gray-100 rounded-md text-center">
        <strong>{posts.length}</strong>개의 게시글이 있습니다.
      </div>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        {posts.map((post) => (
          <ArticleCard key={post.title} post={post} />
        ))}
      </ul>
    </section>
  );
}
