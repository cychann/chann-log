import React from "react";
import LogCard from "./LogCard";
import { LogPreview } from "@/types/post";

type LogListProps = {
  postList: LogPreview[];
};

export default function LogList({ postList }: LogListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {postList.map((post) => (
        <LogCard key={post.title} post={post} />
      ))}
    </div>
  );
}
