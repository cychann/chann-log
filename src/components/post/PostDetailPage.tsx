import { parseToc } from "@/lib/markdonw";
import { Post } from "@/types/post";
import React from "react";
import PostHeader from "./PostHeader";
import TOCSidebar from "./TOCSidebar";
import PostContent from "./PostContent";

type PostDetailPageProps = {
  post: Post;
};

export default function PostDetailPage({ post }: PostDetailPageProps) {
  const toc = parseToc(post.content);

  return (
    <section className="mx-auto w-full max-w-[750px] my-5">
      <PostHeader
        title={post.title}
        date={post.date}
        category={post.category}
        readingMinutes={post.readingMinutes}
      />
      <article className="relative">
        <PostContent content={post.content} />
        <TOCSidebar toc={toc} />
      </article>
    </section>
  );
}
