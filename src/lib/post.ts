import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { sync } from "glob";
import { Post } from "@/types/post";
import readingTime from "reading-time";

const BASE_PATH = "/posts";
const ARTCIELS_PATH = "/articles";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH, ARTCIELS_PATH);

const parsePost = async (postPath: string): Promise<Post> => {
  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);

  const dateString = new Date(data.date).toLocaleDateString();
  const readingMinutes = Math.ceil(readingTime(content).minutes);
  const category = path.dirname(postPath).split(path.sep).slice(-1)[0];
  const postUrl = `/articles/${category}/${path.basename(postPath, ".mdx")}`;

  return {
    ...data,
    date: dateString,
    content,
    url: postUrl,
    readingMinutes: readingMinutes,
    category: category,
  } as Post;
};

export const getPostPaths = (category?: string) => {
  const folder = category || "**";
  const paths = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  return paths;
};

export const getPostList = async (category?: string): Promise<Post[]> => {
  const postPaths = getPostPaths(category);
  const postList = await Promise.all(
    postPaths.map((postPath) => parsePost(postPath))
  );

  return postList;
};

export const getCategoryList = () => {
  const categoryPath = path.join(POSTS_PATH);

  const categoryPaths = sync(`${categoryPath}/*`);
  console.log(categoryPath, categoryPaths);
  const categoryList = categoryPaths.map(
    (p) => p.split(path.sep).slice(-1)?.[0]
  );

  return ["All", ...categoryList];
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

export const getPostDetail = async (category: string, slug: string) => {
  const filePath = `${POSTS_PATH}/${category}/${slug}.mdx`;
  const postDetail = await parsePost(filePath);
  return postDetail;
};
