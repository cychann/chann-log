import React from "react";
import { filterPosts, getCategoryList, getPostList } from "@/lib/post";
import PostList from "@/components/post/PostList";
import Filters from "@/components/filters/Filter";

type Props = {
  searchParams: {
    category?: string;
    search?: string;
  };
};

export default async function articlePage({ searchParams }: Props) {
  const { category, search } = searchParams;
  const postList = await getPostList();
  const categoryList = getCategoryList("articles");

  const filteredPosts = filterPosts(postList, {
    category,
  });

  return (
    <section className="mx-auto mt-12 w-full max-w-[960px] px-4">
      <Filters
        categories={categoryList}
        initialCategory={category}
        initialSearch={search}
      />
      <PostList posts={filteredPosts} />
    </section>
  );
}
