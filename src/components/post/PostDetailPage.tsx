import React from "react";
import PostHeader from "./PostHeader";
import TOCSidebar from "./TOCSidebar";
import PostContent from "./PostContent";
import Giscus from "./Giscus";
import TOCTopbar from "./TOCTopbar";
import { HeadingItem } from "@/types/TOC";
import { ArticlePost, LogPost } from "@/types/post";

type PostDetailPageProps<T extends ArticlePost | LogPost> = {
  post: T;
  toc: HeadingItem[];
};
export default function PostDetailPage<T extends ArticlePost | LogPost>({
  post,
  toc,
}: PostDetailPageProps<T>) {
  return (
    <section className="mx-auto w-full max-w-[750px] my-5 px-4">
      <PostHeader
        title={post.title}
        date={post.date}
        category={post.category}
        readingMinutes={post.readingMinutes}
      />
      <article className="relative">
        <TOCTopbar toc={toc} />
        <PostContent content={post.content} />
        <TOCSidebar toc={toc} />
      </article>
      <Giscus />
    </section>
  );
}
