import React from "react";
import { PostHeaderSkeleton } from "./PostHeaderSkeleton";
import { PostContentSkeleton } from "./PostContentSkeleton";
import { TOCSidebarSkeleton } from "./TOCSidebarSkeleton";

export default function PostDetailSkeleton() {
  return (
    <section className="mx-auto w-full max-w-[750px] my-5 min-h-screen">
      <PostHeaderSkeleton />
      <article className="relative">
        <PostContentSkeleton />
        <TOCSidebarSkeleton />
      </article>
    </section>
  );
}
