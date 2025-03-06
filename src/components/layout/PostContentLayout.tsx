import React, { ReactNode } from "react";
import CategoryList from "../filters/CategoryList";

type PostContentLayoutProps = {
  pageTitle: string;
  categoryList: string[];
  selectedCategory: string;
  categoryPostCounts: Record<string, number>;
  basePath: "articles" | "logs";
  children: ReactNode;
};

export default function PostContentLayout({
  pageTitle,
  categoryList,
  selectedCategory,
  categoryPostCounts,
  basePath,
  children,
}: PostContentLayoutProps) {
  return (
    <section className="w-full px-4 mt-20">
      <div className="flex flex-col-reverse md:[900px]:flex-row  gap-8">
        <div className="w-full md:[900px]:w-2/3 px-6">
          <span className="block mb-4 text-[20px] text-text-tertiary font-semibold">
            {pageTitle}
          </span>
          {children}
        </div>
        <div className="w-full md:[900px]:w-1/3">
          <CategoryList
            categories={categoryList}
            selectedCategory={selectedCategory}
            categoryPostCounts={categoryPostCounts}
            basePath={basePath}
          />
        </div>
      </div>
    </section>
  );
}
