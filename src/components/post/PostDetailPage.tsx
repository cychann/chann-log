import { parseToc } from "@/lib/markdonw";
import React from "react";
import PostHeader from "./PostHeader";
import TOCSidebar from "./TOCSidebar";
import PostContent from "./PostContent";
import Giscus from "./Giscus";
import { getArticleDetail } from "@/lib/posts/article";

type PostDetailPageProps = {
  category: string;
  slug: string;
};

export default async function PostDetailPage({
  category,
  slug,
}: PostDetailPageProps) {
  const post = await getArticleDetail(category, decodeURIComponent(slug));

  const toc = await parseToc(post.content);

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
      <Giscus />
    </section>
  );
}
