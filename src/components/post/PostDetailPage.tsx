import { parseToc } from "@/lib/markdonw";
import React from "react";
import PostHeader from "./PostHeader";
import TOCSidebar from "./TOCSidebar";
import PostContent from "./PostContent";
import Giscus from "./Giscus";
import { getArticleDetail } from "@/lib/posts/article";
import { getLogDetail } from "@/lib/posts/log";
import TOCTopbar from "./TOCTopbar";

type PostDetailPageProps = {
  category: string;
  slug: string;
  type: "articles" | "logs";
};

const postDetailStrategies = {
  articles: getArticleDetail,
  logs: getLogDetail,
} as const;

export default async function PostDetailPage({
  category,
  slug,
  type,
}: PostDetailPageProps) {
  const getDetail = postDetailStrategies[type];
  const post = await getDetail(category, decodeURIComponent(slug));
  const toc = await parseToc(post.content);

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
