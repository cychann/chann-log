import { Post } from "@/types/post";
import React from "react";
import PostCard from "./PostCard";
type Props = {
  posts: Post[];
};

export default function PostList({ posts }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
      {posts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </ul>
  );
}
