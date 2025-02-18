import React from "react";
import LogCard from "./LogCard";
import { LogPreview } from "@/types/post";

type LogListProps = {
  posts: LogPreview[];
};

export default function LogList({ posts }: LogListProps) {
  return (
    <section className="w-full max-w-[700px]">
      <ul className="flex flex-col">
        {posts.map((post) => (
          <LogCard key={post.title} post={post} />
        ))}
      </ul>
    </section>
  );
}
