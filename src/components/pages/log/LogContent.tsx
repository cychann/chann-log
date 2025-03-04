import React from "react";

import {
  filterLogs,
  getLogCategoryCounts,
  getLogCategoryList,
  getLogList,
} from "@/lib/posts/log";
import LogList from "@/components/log/LogList";
import PostContentLayout from "@/components/layout/PostContentLayout";

type LogContentProps = {
  category: string;
};

export default async function LogContent({ category }: LogContentProps) {
  const [postList, categoryList] = await Promise.all([
    getLogList(),
    getLogCategoryList(),
  ]);

  const categoryPostCounts = getLogCategoryCounts(postList, categoryList);

  const filteredPosts = filterLogs(
    postList,
    category === "All" ? "" : category
  );

  const pageTitle = category === "All" ? "전체 로그" : `${category} 로그`;

  return (
    <PostContentLayout
      pageTitle={pageTitle}
      categoryList={categoryList}
      selectedCategory={category}
      categoryPostCounts={categoryPostCounts}
      basePath="logs"
    >
      <LogList posts={filteredPosts} />
    </PostContentLayout>
  );
}
