import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { sync } from "glob";
import { Post } from "@/types/post";
import readingTime from "reading-time";
import { cache } from "react";

const BASE_PATH = "/posts";
// const POSTS_PATH = path.join(process.cwd(), BASE_PATH, ARTCIELS_PATH);

const POSTS_PATH = (type: string) => path.join(process.cwd(), BASE_PATH, type); // 수정된 부분

const parsePost = async (postPath: string, type?: string): Promise<Post> => {
  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);

  const dateString = new Date(data.date).toLocaleDateString();
  const readingMinutes = Math.ceil(readingTime(content).minutes);
  const category = path.dirname(postPath).split(path.sep).slice(-1)[0];
  const postUrl = `/${type}/${category}/${path.basename(postPath, ".mdx")}`;

  return {
    ...data,
    date: dateString,
    content,
    url: postUrl,
    readingMinutes: readingMinutes,
    category: category,
  } as Post;
};

export const getPostPaths = (type: string, category?: string) => {
  const folder = category || "**";
  const paths = sync(`${POSTS_PATH(type)}/${folder}/**/*.mdx`);
  return paths;
};

export const getPostList = async (
  type: string,
  category?: string
): Promise<Post[]> => {
  const postPaths = getPostPaths(type, category);
  const postList = await Promise.all(
    postPaths.map((postPath) => parsePost(postPath, type))
  );

  return postList;
};

export const getPostCount = cache(async (type: string, category?: string) => {
  const posts = await getPostList(type, category);
  return posts.length;
});

export const getCategoryList = (type: string) => {
  const categoryPath = POSTS_PATH(type);

  const categoryPaths = sync(`${categoryPath}/*`);
  const categoryList = categoryPaths.map(
    (p) => p.split(path.sep).slice(-1)?.[0]
  );

  return type === "articles" ? ["All", ...categoryList] : categoryList;
};

export const filterPosts = (
  posts: Post[],
  { category }: { category?: string }
) => {
  return posts.filter((post) => {
    const matchesCategory =
      !category || category === "All" || post.category === category;

    return matchesCategory;
  });
};

export const getPostDetail = async (
  type: string,
  category: string,
  slug: string
) => {
  const filePath = `${POSTS_PATH(type)}/${category}/${slug}.mdx`;
  const postDetail = await parsePost(filePath, type);
  return postDetail;
};
