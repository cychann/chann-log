import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { sync } from "glob";
import { Post } from "@/types/post";
import readingTime from "reading-time";

const BASE_PATH = "/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

const parsePost = async (postPath: string): Promise<Post> => {
  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);

  const postUrl = `/articles/${path.basename(postPath, ".mdx")}`;
  const readingMinutes = Math.ceil(readingTime(content).minutes);

  return {
    ...data,
    content,
    url: postUrl,
    readingMinutes: readingMinutes,
  } as Post;
};

export const getPostPaths = (category?: string) => {
  const folder = category || "**";
  const paths = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  return paths;
};

export const getPostList = async (category?: string): Promise<Post[]> => {
  const postPaths = getPostPaths(category);
  console.log(postPaths);
  const postList = await Promise.all(
    postPaths.map((postPath) => parsePost(postPath))
  );

  return postList;
};

export const getCategoryList = (category: string) => {
  const categoryPath = path.join(POSTS_PATH, category);
  const categoryPaths = sync(`${categoryPath}/*`);
  const categoryList = categoryPaths.map(
    (p) => p.split(path.sep).slice(-1)?.[0]
  );

  return ["All", ...categoryList];
};

export const filterPosts = (
  posts: Post[],
  { category, search }: { category?: string; search?: string }
) => {
  return posts
    .filter((post) =>
      !category || category === "All" ? true : post.tags?.includes(category)
    )
    .filter((post) =>
      !search
        ? true
        : post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.content.toLowerCase().includes(search.toLowerCase())
    );
};
