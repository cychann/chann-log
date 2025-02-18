import { getLatestArticles } from "@/lib/posts/article";
import React from "react";
import ArticleCard from "./ArticleCard";
import RecentPostSection from "../common/shared/RecentPostSection";

export default async function RecentArticle() {
  const latestPosts = await getLatestArticles(3);

  return (
    <RecentPostSection title="최신 아티클" link="/articles">
      <ul className="flex flex-col">
        {latestPosts.map((post) => (
          <li key={post.title}>
            <ArticleCard post={post} />
          </li>
        ))}
      </ul>
    </RecentPostSection>
  );
}
