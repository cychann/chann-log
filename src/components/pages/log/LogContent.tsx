import React from "react";

import {
  filterLogs,
  getLogCategoryCounts,
  getLogCategoryList,
  getLogList,
} from "@/lib/posts/log";
import LogList from "@/components/log/LogList";
import CategoryList from "@/components/filters/CategoryList";

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
    <section className="w-full px-4 mt-20">
      <div className="flex gap-8">
        <div className="w-full md:[900px]:w-2/3 px-6">
          <span className="block mb-4 text-[20px] text-text-tertiary font-semibold">
            {pageTitle}
          </span>
          <LogList posts={filteredPosts} />
        </div>
        <div className="hidden md:[900px]:block w-1/3">
          <CategoryList
            categories={categoryList}
            selectedCategory={category}
            categoryPostCounts={categoryPostCounts}
            basePath="logs"
          />
        </div>
      </div>
    </section>
  );
}
